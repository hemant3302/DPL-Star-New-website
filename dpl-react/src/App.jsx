import { NavigationProvider, useNavigation } from './NavigationContext.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function Pages() {
  const { page } = useNavigation()

  return (
    <main>
      <HomePage active={page === 'home'} />
      <AboutPage active={page === 'about'} />
      <ProductsPage active={page === 'products'} />
      <ContactPage active={page === 'contact'} />
    </main>
  )
}

export default function App() {
  return (
    <NavigationProvider>
      <Nav />
      <Pages />
      <Footer />
    </NavigationProvider>
  )
}
