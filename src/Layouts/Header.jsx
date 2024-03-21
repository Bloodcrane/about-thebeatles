import { Link, Outlet } from "react-router-dom";
import React from "react";

// const colors = ['#383431', '#523553', '#34405f', '#375239', '#6e5d39'];

const HeaderLayout = ({ showMain = true, showAbout = true, showFacts = true }) => {
    // const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // const Style = {
    //     backgroundColor: randomColor,
    // };

    return (
        <div className='layoutDiv'>
            {showMain && <Link className="layoutButton" to={'/'}>Home</Link>}
            {showAbout && <Link className="layoutButton" to={'/about'}>About</Link>}
            {showFacts && <Link className="layoutButton" to={'/facts'}>Facts</Link>}

            <Outlet />
        </div>
    );
};

export default HeaderLayout;
