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
        <div className='mx-20'>
            <h1>All catagories: {categories?.length}</h1>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Leftside;