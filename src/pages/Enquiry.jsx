import { useSearchParams } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'

export default function Enquiry() {
  const [params] = useSearchParams()
  const dest = params.get('dest') || ''

  return (
    <section className="section container narrow">
      <h1 className="page-title">Plan your visit</h1>
      <p className="lead">Send us your plans and we will reply with ideas, costs and local contacts.</p>
      <EnquiryForm key={dest} defaultDestination={dest} />
    </section>
  )
}
