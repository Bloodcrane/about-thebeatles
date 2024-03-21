import React from 'react';
import HeaderLayout from "../Layouts/Header.jsx";
import FactList from '../Layouts/FactList.jsx';
import Banner from '../Components/Banner.jsx'

const FactsPage = () => {

    return (
        <div>
            <header>
                <HeaderLayout showMain={true} showBooks={true} showMovies={true} showArticles={false} />
            </header>
            <Banner name={"facts"} />
            <FactList />
        </div>
    );
};

export default FactsPage;
