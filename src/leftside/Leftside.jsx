import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Leftside = () => {
    const [categories, setCatagories] = useState([]);


    useEffect(() => {
        fetch('https://learning-website-server-mdnahiankhan.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])


    return (
        <div className='mx-5 w-full sticky top-0'>
            <div>
                {
                    categories.map(category => <p className='text-white  bg-violet-600 mt-4  lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md text-xl' key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Leftside;