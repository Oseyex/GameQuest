import NavBar from "../../components/NavBar/NavBar.jsx";
import "./InfoPage.css"
function InfoPage() {
    return (
        <>
            <header><NavBar/></header>
            <div className="Info-Bg">
                <body className="Info-Container">
                <h1>Onze Missie</h1>
                <p>Onze missie is om gamers van alle niveaus te helpen hun perfecte game-avontuur te ontdekken. Of je nu
                    een beginner bent of een doorgewinterde gamer, wij maken het makkelijk en leuk om nieuwe werelden te verkennen.</p>

                <h2>Waarom Gamequest?</h2>
                    <ul>
                        <li>Gebruiksvriendelijke tools: zoals een Moodboard en Zoekfunctie</li>
                        <li>Grote Database: Met meer dan 350.000 games</li>
                        <li>Community: Betrek gebruikers met reviews en ervaringen</li>
                        <li>Overzicht: Houd overzicht over je uitgespeelde games met de gamevault</li>
                    </ul>

                <h3>Hoe Werkt Het?</h3>
                <ul>
                    <li>Creer je profiel: Vul je moodboard in en geef voorkeuren aan.</li>
                    <li>Ontvang gepersonaliseerde aanbevelingen: Vind games die echt bij jou passen.</li>
                    <li>Maak je gamevault en deel je ontdekkingen met anderen.</li>
                </ul>
                </body>
            </div>
            <footer>
                <p>"Meer dan 10.000 gebruikers hebben al hun perfecte game gevonden."
                    "Over 350.000 games in onze database</p>
            </footer>
        </>


    );
}

export default InfoPage;