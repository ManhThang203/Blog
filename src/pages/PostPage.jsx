import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import "./PostPage.css";

function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Post not found</h2>
        <p>Sorry, the post you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">
          Back to Home
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <article className="post-page">
      <Link to="/" className="back-link">
        ← Back to Posts
      </Link>

      <div className="post-content">
        <header className="post-page-header">
          <h1>{post.title}</h1>
          <div className="post-page-meta">
            <span className="author">By {post.author}</span>
            <span className="date">
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="category">{post.category}</span>
          </div>
        </header>

        <div className="post-body">
          <p>{post.content}</p>
        </div>

        <footer className="post-footer">
          <div className="tags">
            <strong>Tags:</strong> {post.category}
          </div>
        </footer>
      </div>

      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <h2>Related Articles</h2>
          <div className="related-grid">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="related-post-item">
                <Link to={`/post/${relatedPost.id}`}>
                  <h3>{relatedPost.title}</h3>
                  <p>{relatedPost.excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

export default PostPage;
