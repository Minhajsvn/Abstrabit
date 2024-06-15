import './App.css'
import "./font/apercu_bold_pro.otf"
import "./font/apercu_medium_pro.otf"
import "./font/apercu_regular_pro.otf"
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'

function App() {

  return (
    <>
     <div>
      <Navbar />
      <h1>Welcome, Johan Paul</h1>
      <Portfolio />
     </div>
    </>
  )
}

export default App
