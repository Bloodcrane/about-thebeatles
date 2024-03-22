import React from 'react';
import DetailsData from '../Details.json';

const Detail = ({ id }) => {
    const detailKey = Object.keys(DetailsData).find(key => DetailsData[key]['id-title'] === id);

    if (!detailKey) {
        return <div>Detail not found</div>;
    }

    const { title, description } = DetailsData[detailKey];

    return (
        <div className='detail-container'>
            <h1 className='detail-title'>{title}</h1>
            <p className='detail-description'>{description}</p>
        </div>
    );
};

export default Detail;