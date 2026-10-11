import { useState } from 'react'

// Props: attraction (object), onSelect (function)
export default function AttractionCard({ attraction, onSelect }) {
  const [imgFailed, setImgFailed] = useState(false)
  const { name, image, location, category, description, cost } = attraction

  return (
    <article className={`card cat-${category.toLowerCase()}`}>
      <div className="card-img">
        {!imgFailed && (
          <img src={image} alt={name} loading="lazy" onError={() => setImgFailed(true)} />
        )}
        <span className="badge">{category}</span>
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <p className="muted">{location}</p>
        <p>{description}</p>
        <div className="card-foot">
          <span className="cost">{cost}</span>
          <button className="btn btn-dark" onClick={() => onSelect(attraction)}>
            View details
          </button>
        </div>
      </div>
    </article>
  )
}
