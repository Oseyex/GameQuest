import './HomeStyles.css'
import  GlassCard from '../../components/GlassBackground/GlassCard.jsx'
import logo from '../../assets/logo.svg'
import NavBar from "../../components/NavBar/NavBar.jsx";

function HomePage() {

  return (
      <>
          <NavBar/>
          <div className="home-page">
              <GlassCard>
                  <h1 className="header">Discover Your Next</h1>
                  <h2 className="header-2"> Game Adventure.</h2>
                  <p className="content">Curate, explore and track your favorite games</p>
                  <img className="logo" src={logo} alt={"logo"}/>
                  <h3 className="heder-3">GAMEQUEST</h3>
              </GlassCard>
          </div>
      </>

  )
}

export default HomePage;

