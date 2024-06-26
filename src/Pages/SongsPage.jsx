import HeaderLayout from "../Layouts/Header.jsx"
import Banner from "../Components/Banner.jsx"
import React from 'react';
import Song from "../Components/Song.jsx";

const AlbumsPage = () => {

    return (
    <div>
        <main>
            <header>
            <HeaderLayout showMain={true} showAbout={true} showFacts={true} showAlbums={true} />
            </header>

            <Banner name={"songs"} />
            <Song/>
        </main>
    </div>
    )
}

export default AlbumsPage