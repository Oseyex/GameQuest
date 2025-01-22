import './LoginStyles.css'
import  GlassBackground from '../../components/GlassBackground/GlassBackground.jsx'
import logo from '../../assets/logo.svg'
import NavBar from "../../components/NavBar/NavBar.jsx";

function LoginPage() {
    return (
        <>
            <NavBar/>
            <GlassBackground>
                <h1>Your Journey</h1>
                <h2>Begins Here</h2>
                <h3>gamequest</h3>
                <img src={logo} alt={"logo"}/>
            </GlassBackground>

        </>


    );
}

export default LoginPage;