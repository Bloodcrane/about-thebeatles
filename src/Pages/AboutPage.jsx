import HeaderLayout from "../Layouts/Header"
import Banner from "../Components/Banner"
import Detail from "../Components/Detail"
import React from 'react';

const AboutPage = () => {

    return (
    <div>
        <main>
            <header>
                <HeaderLayout showMain={true} showBooks={true} showMovies={true} showArticles={true} />
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