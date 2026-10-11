import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Props: attraction (object), onClose (function)
export default function AttractionDetails({ attraction, onClose }) {
  const navigate = useNavigate()

  // Close on Escape and stop the page behind from scrolling
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const { name, image, location, category, details, activities, cost } = attraction

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={name} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close details">Close</button>
        <div className="modal-img">
          <img src={image} alt={name} onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
        <div className="modal-body">
          <h2>{name}</h2>
          <p className="muted">{location} – {category}</p>
          <p>{details}</p>
          <h4>Things to do</h4>
          <ul className="tags">
            {activities.map((a) => <li key={a}>{a}</li>)}
          </ul>
          <p><strong>Estimated cost:</strong> {cost}</p>
          <button
            className="btn btn-gold"
            onClick={() => navigate(`/enquiry?dest=${encodeURIComponent(name)}`)}
          >
            Enquire about this place
          </button>
        </div>
      </div>
    </div>
  )
}
