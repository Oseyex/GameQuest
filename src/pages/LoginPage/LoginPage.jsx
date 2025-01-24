import './LoginStyles.css'
import  GlassCard from '../../components/GlassBackground/GlassCard.jsx'
import logo from '../../assets/logo.svg'
import NavBar from "../../components/NavBar/NavBar.jsx";

function LoginPage() {
    return (
        <>
            <NavBar/>
            <div className="login-container">
                <GlassCard>
                    <h1>Your Journey</h1>
                    <h2>Begins Here</h2>
                    <h3>gamequest</h3>
                    <img src={logo} alt={"logo"}/>
                </GlassCard>
            </div>


        </>


    );
}

export default LoginPage;