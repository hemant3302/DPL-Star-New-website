import PageHero from '../components/PageHero.jsx'
import ProductCard from '../components/ProductCard.jsx'
import PipeTable from '../components/PipeTable.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { PRODS } from '../data/siteData.js'

export default function ProductsPage({ active }) {
  return (
    <div className={`page${active ? ' active' : ''}`} data-page="products">
      <PageHero
        tag="Product range"
        heading="Storage tanks, pipes and well fittings."
        body="Four tank constructions for liquid storage, plus the pipe and tube-well hardware that goes around them."
      />

      <section className="sec">
        <div className="shell">
          <div className="sec-head">
            <div>
              <div className="sec-tag">Storage tanks</div>
              <h2>Match the coating to the liquid</h2>
            </div>
          </div>
          <div className="prod-grid">
            {PRODS.map((p) => (
              <ProductCard key={p.id} product={p} full ctaLabel="Request a quote" goTarget="contact" />
            ))}
          </div>
        </div>
      </section>

      <PipeTable />

      <CtaBand heading="Not sure which tank fits your site?" buttonLabel="Ask engineering" target="contact" />
    </div>
  )
}
