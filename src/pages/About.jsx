import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your actual Blogger blog URL (without https://)
  // Example: 'msichanafoundation.blogspot.com'
  const BLOG_NAME = 'www.blogger.com/blog/post/edit/6337447345735620491/7978322962708271384';

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
          `https://${BLOG_NAME}/feeds/posts/default?alt=json&max-results=3`
        )}`;
        const response = await fetch(proxyUrl);
        const data = await response.json();

        if (data.feed && data.feed.entry) {
          const fetchedPosts = data.feed.entry.map((entry) => {
            // Get the first image from the post content (if any)
            let imageUrl = null;
            const content = entry.content.$t;
            const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch && imgMatch[1]) {
              imageUrl = imgMatch[1];
            }

            // Strip HTML tags for excerpt
            const plainText = content.replace(/<[^>]*>/g, '');
            const excerpt = plainText.substring(0, 180) + (plainText.length > 180 ? '...' : '');

            return {
              title: entry.title.$t,
              link: entry.link.find((link) => link.rel === 'alternate').href,
              publishedDate: new Date(entry.published.$t).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
              excerpt: excerpt,
              image: imageUrl,
            };
          });
          setPosts(fetchedPosts);
        } else {
          setPosts([]);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Unable to load blog posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>Who We Are</h1>
        <p>Creating opportunities for girls to grow, lead, and succeed across Africa.</p>
      </div>

      <div className="container">
        {/* Who We Are content */}
        <div className="about-intro">
          <p className="intro-text">
            Msichana Foundation Africa is a youth‑driven organization creating opportunities for girls to grow, lead,
            and succeed through sport, education, and leadership development across Africa.
          </p>
          <p>
            Founded in Tanzania, we work directly with local communities to break down barriers. Our programs use sports
            as an entry point to build confidence and discipline, while also providing academic support, mentorship,
            and practical skills for financial independence.
          </p>
          <p className="highlight">
            Our name, <strong>"Msichana"</strong> (meaning "girl" in Swahili), reflects our commitment to every girl's
            right to dream, learn, and lead.
          </p>
        </div>

        {/* Vision & Mission – stacked vertically */}
        <div className="vision-mission">
          <div className="vm-card">
            <h3>🌍 Our Vision</h3>
            <p>An Africa where every girl has the opportunity to thrive and lead.</p>
          </div>
          <div className="vm-card">
            <h3>🎯 Our Mission</h3>
            <p>To empower girls through sports, mentorship, and life‑skills programs.</p>
          </div>
        </div>

        {/* Partner CTA */}
        <div className="partner-cta-about">
          <h2>Partner With Us</h2>
          <p>Join us in creating lasting change for girls across Africa.</p>
          <Link to="/contact" className="btn-primary">Become a Partner →</Link>
        </div>

        {/* Blog Section – from Blogger */}
        <section className="blog-section">
          <h2 className="section-title">Latest from Our Blog</h2>
          {loading && (
            <div className="blog-loading">
              <p>Loading stories...</p>
            </div>
          )}
          {error && (
            <div className="blog-error">
              <p>{error}</p>
            </div>
          )}
          {!loading && !error && posts.length === 0 && (
            <div className="blog-empty">
              <p>No blog posts found. Check back soon!</p>
            </div>
          )}
          {!loading && !error && posts.length > 0 && (
            <div className="blog-grid">
              {posts.map((post, idx) => (
                <div key={idx} className="blog-card">
                  {post.image && (
                    <div className="blog-card-image">
                      <img src={post.image} alt={post.title} loading="lazy" />
                    </div>
                  )}
                  <div className="blog-card-content">
                    <span className="blog-date">{post.publishedDate}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="read-more"
                    >
                      Read Full Post →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!loading && !error && posts.length > 0 && (
            <div className="blog-footer-link">
              <a
                href={`https://${BLOG_NAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Visit Our Full Blog →
              </a>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default About;