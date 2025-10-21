# 🚀 PLP Task Manager

A modern, responsive task management application built with React, Tailwind CSS, and modern web technologies. This project demonstrates component architecture, state management, hooks usage, and API integration.

## ✨ Features

### 🎯 Task Management
- ✅ Create, edit, and delete tasks
- 🔄 Mark tasks as completed
- 🔍 Filter tasks (All, Active, Completed)
- 📊 Task statistics and progress tracking
- 💾 Local storage persistence
- 🎨 Beautiful animations and transitions

### 🌙 Theme Support
- 🌞 Light and dark mode toggle
- 💾 Theme preference persistence
- 🎨 Smooth theme transitions
- 📱 System preference detection

### 🔌 API Integration
- 📡 JSONPlaceholder API integration
- 🔍 Search functionality
- 📄 Pagination support
- ⚡ Loading and error states
- 📱 Responsive data display

### 🎨 Modern UI/UX
- 📱 Fully responsive design
- 🎭 Beautiful animations
- ♿ Accessibility features
- 🎯 Intuitive user interface

## 🛠️ Technology Stack

- **React 18** - Component-based UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Context API** - State management
- **Custom Hooks** - Reusable logic
- **JSONPlaceholder API** - External data source

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-js-jsx-and-css-mastering-front-end-development-WalterOluoch
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button component with variants
│   ├── Card.jsx        # Card component for content display
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx       # Footer component
│   ├── Layout.jsx      # Layout wrapper component
│   ├── TaskManager.jsx # Task management component
│   └── ApiData.jsx     # API data display component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Tasks.jsx       # Tasks page
│   └── ApiData.jsx     # API data page
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js # Local storage hook
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme management context
├── api/                # API integration
│   └── jsonPlaceholder.js # JSONPlaceholder API functions
├── utils/              # Utility functions
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Key Components

### Button Component
- Multiple variants (primary, secondary, danger, success, warning)
- Different sizes (sm, md, lg)
- Disabled state support
- Customizable styling

### Card Component
- Flexible content display
- Hover effects
- Shadow options
- Responsive padding

### TaskManager Component
- Full CRUD operations for tasks
- Filtering and search
- Progress tracking
- Local storage persistence
- Beautiful animations

### API Data Component
- External API integration
- Search functionality
- Pagination
- Loading and error states
- Responsive design

## 🎨 Styling and Design

### Tailwind CSS Features
- Utility-first approach
- Responsive design
- Dark mode support
- Custom animations
- Component-based styling

### Custom Animations
- Fade in effects
- Slide up transitions
- Gentle bounce animations
- Smooth hover effects

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimization
- Flexible grid layouts
- Adaptive navigation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🌙 Dark Mode

The application includes a comprehensive dark mode implementation:
- System preference detection
- Manual toggle
- Persistent storage
- Smooth transitions
- Consistent theming

## 🔌 API Integration

### JSONPlaceholder Integration
- Posts fetching with pagination
- Search functionality
- Error handling
- Loading states
- Responsive data display

### Features
- Real-time search
- Pagination controls
- Error recovery
- Loading indicators
- Empty states

## 🎯 Custom Hooks

### useLocalStorage
- Persistent state management
- JSON serialization
- Error handling
- Type safety

### useTasks
- Task management logic
- CRUD operations
- Filtering
- Statistics

## 🚀 Deployment

### Netlify (Recommended)

The application is optimized for Netlify deployment with the following features:

- ✅ **Automatic builds** from Git repository
- ✅ **SPA routing** with proper redirects
- ✅ **Environment configuration** for production
- ✅ **Performance optimizations** built-in

#### Quick Deploy to Netlify:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=dist
   ```

3. **Or drag and drop** the `dist` folder to [Netlify](https://netlify.com)

#### Configuration Files Included:
- `netlify.toml` - Build and redirect configuration
- `public/_redirects` - SPA routing support
- Optimized build settings for production

### Other Platforms

#### Vercel
```bash
npm run build
# Deploy to Vercel
```

#### GitHub Pages
```bash
npm run build
# Deploy to GitHub Pages
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📊 Performance Features

- ⚡ Fast loading with Vite
- 🎯 Code splitting
- 📦 Optimized bundles
- 🖼️ Lazy loading
- 💾 Efficient state management

## ♿ Accessibility

- 🎯 Keyboard navigation
- 📱 Screen reader support
- 🎨 High contrast support
- 📏 Focus indicators
- 🏷️ Semantic HTML

## 🧪 Testing

The application includes:
- Component testing setup
- Hook testing utilities
- API integration testing
- Responsive design testing

## 📚 Learning Outcomes

This project demonstrates:
- ✅ React component architecture
- ✅ State management with hooks
- ✅ Context API usage
- ✅ Custom hook creation
- ✅ API integration
- ✅ Responsive design
- ✅ Modern CSS with Tailwind
- ✅ Routing with React Router
- ✅ Local storage persistence
- ✅ Theme management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the PLP (Power Learn Project) curriculum and is for educational purposes.

## 👨‍💻 Author

**Walter Oluoch**
- GitHub: [@WalterOluoch](https://github.com/WalterOluoch)
- LinkedIn: [Walter Oluoch](https://linkedin.com/in/walter-oluoch)

## 🙏 Acknowledgments

- PLP (Power Learn Project) for the curriculum
- React team for the amazing framework
- Tailwind CSS team for the utility-first approach
- JSONPlaceholder for the free API
- The open-source community

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies.**