# React Blog

A modern, responsive blog application built with React and Vite. Features a clean design with category filtering, individual post pages, and related articles.

## Features

- 📝 **Blog Post Management**: Display multiple blog posts with titles, authors, dates, and categories
- 🏷️ **Category Filtering**: Filter posts by category with an intuitive button interface
- 📄 **Full Post View**: Read complete articles with rich formatting
- 🔗 **Related Articles**: See related posts based on category
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for rapid development and production builds
- 🎨 **Modern UI**: Beautiful gradient headers, smooth animations, and intuitive navigation

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with site title
│   ├── Header.css
│   ├── Footer.jsx          # Footer with social links
│   ├── Footer.css
│   ├── PostCard.jsx        # Blog post preview card
│   └── PostCard.css
├── pages/
│   ├── HomePage.jsx        # Main blog listing page
│   ├── HomePage.css
│   ├── PostPage.jsx        # Individual article view
│   └── PostPage.css
├── data/
│   └── blogPosts.js        # Sample blog post data
├── App.jsx                 # Main app component with routing
├── App.css
├── main.jsx                # React entry point
├── index.css               # Global styles
├── index.html              # HTML template
└── vite.config.js          # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd blog
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Technologies Used

- **React 18**: UI library for building components
- **Vite**: Modern frontend build tool
- **React Router DOM**: Client-side routing
- **CSS3**: Styling with responsive design
- **JavaScript ES6+**: Modern JavaScript syntax

## Customization

### Adding New Blog Posts

Edit `src/data/blogPosts.js` and add new post objects:

```javascript
{
  id: 6,
  title: 'Your Post Title',
  author: 'Author Name',
  date: '2026-03-01',
  excerpt: 'Short summary of the post',
  content: 'Full article content here...',
  category: 'Your Category'
}
```

### Styling

- Global styles: `src/index.css`
- Component styles: Individual `.css` files in their component folders
- Color scheme uses a purple gradient (#667eea to #764ba2)

### Adding New Routes

Update `src/App.jsx` to add new pages:

```javascript
<Route path="/new-page" element={<NewPage />} />
```

## License

MIT License - feel free to use this project for your own blog!

## Author

Created with ❤️ for React developers

---

For questions or suggestions, feel free to reach out!
# Blog
