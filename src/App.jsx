import Index from "./Index"
import Footer from "./components/Footer"
import Contact from "./pages/bagian-tampilan/Contact"
import Services from "./pages/bagian-tampilan/Services"
// import Produk from "./pages/bagian-tampilan/Produk"
import Tentang from "./pages/bagian-tampilan/Tentang"
import VisiMisi from "./pages/bagian-tampilan/VIsiMisi"

function App() {

  return (
    <>
      <Index />
      <Tentang/>
      {/* <Produk/> */}
      <Services/>
      <VisiMisi/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
