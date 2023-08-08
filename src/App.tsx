import Nav from "./components/Nav/Nav"
import Header from "./components/Header/Header"
import Reviews from "./components/Reviews/Reviews"
import AboutAndForm from "./components/AboutAndForm/AboutAndForm"
import CommercialResidential from "./components/CommercialResidential/CommercialResidential"
import Services from "./components/Services/Services"
import Gallery from "./components/Gallery/Gallery"
import Footer from "./components/Footer/Footer"

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <Reviews />
      <AboutAndForm />
      <CommercialResidential />
      <Services />
      <Gallery />
      <Footer />
    </>
  )
}
