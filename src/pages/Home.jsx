import { Link, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import AttractionCard from '../components/AttractionCard'
import { attractions } from '../data/attractions'

const facts = [
  { value: '1,400 m', label: 'Lowest point, the highest of any country in the world' },
  { value: '10', label: 'Districts to explore' },
  { value: 'Sesotho', label: 'Say "Khotso" for hello and peace' },
]

const activities = [
  { title: 'Pony trekking', text: 'Cross high valleys on a Basotho pony, the way villagers have for generations.' },
  { title: 'Skiing in Africa', text: 'Ski and snowboard at Afriski between June and August.' },
  { title: 'Culture and craft', text: 'Buy woven mokorotlo hats and Basotho blankets from the people who make them.' },
  { title: 'Hiking', text: 'Walk from waterfalls to rock arches on trails with almost no crowds.' },
]

export default function Home() {
  const navigate = useNavigate()
  const featured = attractions.slice(0, 3)

  return (
    <>
      <Hero
        title="Lesotho, the Kingdom in the Sky"
        subtitle="Every point sits above 1,400 m. Come for the waterfalls, the pony trails and the warmth of the Basotho."
        image="/images/hero.jpg"
      />

      <section className="section container about">
        <div>
          <h2>A mountain kingdom inside South Africa</h2>
          <p>
            Lesotho is a small, fully landlocked country wrapped by South Africa. The Maloti
            mountains cover most of it, so villages are reached on foot, on horseback or by
            4x4. Visitors find waterfalls, ski slopes, dinosaur footprints and a living culture
            led by the Basotho blanket and the conical mokorotlo hat.
          </p>
        </div>
        <ul className="facts">
          {facts.map((f) => (
            <li key={f.value}><strong>{f.value}</strong><span>{f.label}</span></li>
          ))}
        </ul>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Featured destinations</h2>
            <Link to="/attractions" className="link">See all attractions</Link>
          </div>
          <div className="grid">
            {featured.map((a) => (
              <AttractionCard key={a.id} attraction={a} onSelect={() => navigate('/attractions')} />
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Popular activities</h2>
        <div className="grid grid-4">
          {activities.map((a) => (
            <div className="activity" key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to plan your trip?</h2>
          <p>Tell us where you want to go and when. We will help with the details.</p>
          <Link to="/enquiry" className="btn btn-gold">Send an enquiry</Link>
        </div>
      </section>
    </>
  )
}
