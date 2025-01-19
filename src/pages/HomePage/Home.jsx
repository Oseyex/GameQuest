import './HomeStyles.css'
import  GlassBackground from '../../components/GlassBackground.jsx'
import logo from '../../assets/logo.svg'
import NavBar from "../../components/NavBar.jsx";

function Home() {

  return (
      <>

          <div className="home-page">
              <GlassBackground>
                  <h1>Discover Your Next</h1>
                  <h2> Game Adventure.</h2>
                  <p>Curate, explore and track your favorite games</p>
                  <img src={logo} alt={"logo"}/>
                  <h3>GAMEQUEST</h3>

              </GlassBackground>
          </div>
      </>

  )
}

export default Home;

