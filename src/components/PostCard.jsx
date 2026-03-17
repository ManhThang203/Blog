import { Link } from "react-router-dom";
import "./PostCard.css";

function PostCard({ post }) {
  return (
    <article className="post-card">
      <div className="post-header">
        <h3 className="post-title">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        <span className="post-category">{post.category}</span>
      </div>

      <div className="post-meta">
        <span className="author">By {post.author}</span>
        <span className="date">{new Date(post.date).toLocaleDateString()}</span>
      </div>

      <p className="post-excerpt">{post.excerpt}</p>

      <Link to={`/post/${post.id}`} className="read-more">
        Read More →
      </Link>
    </article>
  );
}

export default PostCard;
