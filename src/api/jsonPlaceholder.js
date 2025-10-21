const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch posts from JSONPlaceholder API
 * @param {number} page - Page number for pagination
 * @param {number} limit - Number of posts per page
 * @returns {Promise<Array>} - Array of posts
 */
export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

/**
 * Fetch users from JSONPlaceholder API
 * @returns {Promise<Array>} - Array of users
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

/**
 * Fetch comments from JSONPlaceholder API
 * @param {number} postId - Post ID to fetch comments for
 * @returns {Promise<Array>} - Array of comments
 */
export const fetchComments = async (postId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

/**
 * Search posts by title or body
 * @param {string} query - Search query
 * @param {number} page - Page number for pagination
 * @param {number} limit - Number of posts per page
 * @returns {Promise<Array>} - Array of filtered posts
 */
export const searchPosts = async (query, page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Filter posts based on search query
    const filteredPosts = data.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
    );
    
    return filteredPosts;
  } catch (error) {
    console.error('Error searching posts:', error);
    throw error;
  }
};


