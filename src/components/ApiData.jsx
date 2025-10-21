import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import { fetchPosts, searchPosts } from '../api/jsonPlaceholder';

/**
 * ApiData component for displaying API data with search and pagination
 */
const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const postsPerPage = 10;

  // Fetch posts from API
  const loadPosts = async (page = 1, search = '') => {
    setLoading(true);
    setError(null);
    
    try {
      let data;
      if (search.trim()) {
        data = await searchPosts(search, page, postsPerPage);
        setIsSearching(true);
      } else {
        data = await fetchPosts(page, postsPerPage);
        setIsSearching(false);
      }
      
      setPosts(data);
      setCurrentPage(page);
      
      // Calculate total pages (approximate for search results)
      if (search.trim()) {
        setTotalPages(Math.ceil(data.length / postsPerPage));
      } else {
        setTotalPages(10); // JSONPlaceholder has 100 posts, 10 per page
      }
    } catch (err) {
      setError(err.message);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  // Load posts on component mount
  useEffect(() => {
    loadPosts(1);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      loadPosts(1, searchQuery);
    } else {
      loadPosts(1);
    }
  };

  // Handle pagination
  const handlePageChange = (page) => {
    if (searchQuery.trim()) {
      loadPosts(page, searchQuery);
    } else {
      loadPosts(page);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
    loadPosts(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">API Data Explorer</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Browse posts from JSONPlaceholder API with search and pagination
            </p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {isSearching ? (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Results
              </span>
            ) : (
              <span>All Posts</span>
            )}
          </div>
        </div>
      </Card>

      {/* Search Form */}
      <Card>
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts by title or content..."
              className="input-field w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </Button>
            {isSearching && (
              <Button type="button" variant="secondary" onClick={clearSearch}>
                Clear
              </Button>
            )}
          </div>
        </form>
      </Card>

      {/* Loading State */}
      {loading && (
        <Card>
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600 dark:text-gray-400">Loading posts...</span>
          </div>
        </Card>
      )}

      {/* Error State */}
      {error && (
        <Card>
          <div className="text-center py-8">
            <div className="text-red-500 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Error Loading Data</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
            <Button variant="primary" onClick={() => loadPosts(currentPage, searchQuery)}>
              Try Again
            </Button>
          </div>
        </Card>
      )}

      {/* Posts List */}
      {!loading && !error && posts.length > 0 && (
        <div className="space-y-4">
          {posts.map((post, index) => (
            <Card key={post.id} hover className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {post.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-4 flex-shrink-0">
                  Post #{post.id}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {post.body}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  User ID: {post.userId}
                </span>
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && posts.length === 0 && (
        <Card>
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {isSearching ? 'No posts found' : 'No posts available'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {isSearching 
                ? 'Try adjusting your search terms or clear the search to see all posts.'
                : 'There are no posts to display at the moment.'
              }
            </p>
            {isSearching && (
              <Button variant="primary" onClick={clearSearch}>
                Clear Search
              </Button>
            )}
          </div>
        </Card>
      )}

      {/* Pagination */}
      {!loading && !error && posts.length > 0 && totalPages > 1 && (
        <Card>
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                );
              })}
            </div>
            
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
          
          <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
        </Card>
      )}
    </div>
  );
};

export default ApiData;


