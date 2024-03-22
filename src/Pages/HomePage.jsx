import HeaderLayout from "../Layouts/Header.jsx"
import Banner from "../Components/Banner.jsx"
import React from 'react';

const HomePage = () => {

    return (
    <div>
        <main>
            <header>
                <HeaderLayout showMain={true} showBooks={true} showMovies={true} showArticles={true} />
            </header>

            <div className="vinyl-container"></div>

            <Banner name={"home"} />

        </main>
    </div>
    )
}

export default HomePage