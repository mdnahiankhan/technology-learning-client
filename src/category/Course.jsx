import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const getCourse = useLoaderData();
    const { img, name, category_id, title, price, points } = getCourse;
    return (
        <div className="max-w-lg p-6 shadow-md dark:bg-gray-900 dark:text-gray-100 mt-10">
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                </div>
                <div className="space-y-2">
                    <h1>Course price:{price}$</h1>
                    <h3 className="text-xl font-semibold dark:text-violet-400">{name}</h3>
                    <p className="leading-snug dark:text-gray-400">{title}</p>
                </div>
                <h1 className='text-xl'>The advantega of learning{name} are given below:</h1>
                <p># {points}</p>
                <Link to={`/category/${category_id}`}><button type="button" className="px-6 py-2 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 dark:bg-violet-400">Go to All Courses</button></Link>
            </div>
        </div>
    );
};

export default Course;