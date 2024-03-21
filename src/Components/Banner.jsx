import React, { useState, useEffect } from 'react';
import Banners from '../Banners.json';

const Banner = ({ name }) => {
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        const foundBanner = Banners.find(banner => banner.name === (name));
        setBanner(foundBanner);
    }, [name]);

    if (!banner) {
        return <div>Banner not found</div>;
    }

    return (
        <div className="banner">
            <h1>{banner.title}</h1>
            <img src={banner.imageUrl} alt={"alt"} className='banner-image' />
        </div>
    );
};

export default Banner;
