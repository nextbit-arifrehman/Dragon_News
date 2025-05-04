
import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json').then((res) =>
    res.json());


const Catagories = () => {

    const categories = use(categoriesPromise);


    return (
        <div>
            <h2 className='font-bold'>All Categories ({categories.length})</h2>

            <div className='grid grid-cols-1 mt-4 gap-2'>
                {
                    categories.map(category =>
                        <NavLink to={`/catagory/${category.id}`} className=
                            {'font-semibold text-accent btn bg-base-100 border-0 hover:bg-base-200'} key={category.id}>
                            {category.name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Catagories;