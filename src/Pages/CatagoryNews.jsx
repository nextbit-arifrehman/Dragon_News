import React from 'react';
import { useParams } from 'react-router';

const CatagoryNews = () => {
    const {id}=useParams();

    return (
        <div>
            Catagory News -{id}
        </div>
    );
};

export default CatagoryNews;