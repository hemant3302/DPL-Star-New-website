import PipeTable from '../components/PipeTable.jsx'
import { useNavigation } from '../NavigationContext.jsx'
import { PRODS } from '../data/siteData.js'
import './ProductsPage.css'

export default function ProductsPage({ active }) {
  const { goTo } = useNavigation()

  return (
    <div className={`page${active ? ' active' : ''}`} data-page="products">
      <section className="products-showcase">
        <div className="shell">
          <div className="products-showcase__heading">
            <div className="sec-tag">Product range</div>
            <h1>Our Storage Tanks</h1>
            <p>High-quality storage solutions for various industrial and commercial applications.</p>
          </div>
          <div className="products-showcase__grid">
            {PRODS.map((product) => (
              <article className="products-showcase__card" key={product.id}>
                <div className="products-showcase__image"><img src={product.img} alt={product.imgAlt} /></div>
                <div className="products-showcase__card-body">
                  <h2>{product.name}</h2>
                  {product.id === 'za' ? (
                    <button className="btn btn-dark" onClick={() => goTo('zincalume')}>Explore</button>
                  ) : (
                    <span className="products-showcase__coming">Explore</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PipeTable />
    </div>
  )
}
