import { Link } from 'react-router-dom'

// Props: title, subtitle, image (path in /public/images)
export default function Hero({ title, subtitle, image }) {
  return (
    <section className="hero" style={{ '--hero-img': `url(${image})` }}>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-actions">
          <Link to="/attractions" className="btn btn-gold">Explore attractions</Link>
          <Link to="/enquiry" className="btn btn-ghost">Plan a visit</Link>
        </div>
      </div>
      <div className="blanket" aria-hidden="true" />
    </section>
  )
}
