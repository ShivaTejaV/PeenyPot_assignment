import RSlick from './components/RSlick'
import TopMenu from './components/TopMenu'
import LatestInsights from './components/LatestInsights/index'
import Footer from './components/Footer'
import './App.css'

const App = () => (
  <div className="main-container">
    <TopMenu />
    <RSlick />
    {true && <LatestInsights />}
    {true && <Footer />}
  </div>
)

export default App
