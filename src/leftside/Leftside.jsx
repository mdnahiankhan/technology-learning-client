import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Leftside = () => {
    const [categories, setCatagories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])


    return (
        <div className='mx-5 w-full'>
            <h1>All catagories: {categories?.length}</h1>
            <div>
                {
                    categories.map(category => <p className='text-white table-fixed bg-violet-600 mt-4 lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md text-3xl' key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Leftside;