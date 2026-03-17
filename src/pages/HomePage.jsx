import { useState } from "react";
import { blogPosts } from "../data/blogPosts";
import PostCard from "../components/PostCard";
import "./HomePage.css";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="home-page">
      <div className="hero">
        <h2>Welcome to My Blog</h2>
        <p>Exploring the world of web development and technology</p>
      </div>

      <div className="filters">
        <h3>Filter by Category:</h3>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="posts-container">
        <h3>Latest Posts ({filteredPosts.length})</h3>
        <div className="posts-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="no-posts">No posts found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
