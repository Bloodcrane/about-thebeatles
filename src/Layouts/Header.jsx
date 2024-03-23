import { Link, Outlet } from "react-router-dom";
import React from "react";

const HeaderLayout = ({ showMain = true, showAbout = true, showFacts = true, showAlbums = true }) => {
    return (
        <div className='layoutDiv'>
            {showMain && <Link className="layoutButton" to={'/'}>Home</Link>}
            {showAbout && <Link className="layoutButton" to={'/about'}>About</Link>}
            {showFacts && <Link className="layoutButton" to={'/facts'}>Facts</Link>}
            {showAlbums && <Link className="layoutButton" to={'/songs'}>Songs</Link>}

            <Outlet />
        </div>
    );
};

export default HeaderLayout;
