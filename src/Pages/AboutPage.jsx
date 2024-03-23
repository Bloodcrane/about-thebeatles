import HeaderLayout from "../Layouts/Header.jsx"
import Banner from "../Components/Banner.jsx"
import Detail from "../Components/Detail.jsx"
import React from 'react';

const AboutPage = () => {

    return (
    <div>
        <main>
            <header>
                <HeaderLayout showMain={true} showAbout={true} showFacts={true} showAlbums={true} />
            </header>
            <Banner name={"about"} />
            <Detail id="Introduction" />
            <Detail id="EarlyYears" />
            <Detail id="Beatlemania" />
            <Detail id="MusicalEvolution" />
            <Detail id="AbbeyRoadLetItBe" />
            <Detail id="LegacyImpact" />
            <Detail id="Breakup" />
            <Detail id="Conclusion" />
        </main>
    </div>
    )
}

export default AboutPage