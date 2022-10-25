import React from 'react';
import { Link } from 'react-router-dom';

const ShowHome = ({ course }) => {
    const { id, img, name, duration, title } = course;
    return (
        <div className="max-w-xs mx-auto p-6 rounded-sm shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400"></span>
                <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
            </div>
            {title.length > 50 ? <p className="dark:text-gray-100">{title.slice(0, 50) + "..."}<Link to={`/course/${id}`}>Read More</Link>  </p> : <p className="dark:text-gray-100">{title}</p>}
            <p className='mt-5'>Course Duration:{duration} Month</p>
        </div>
    );
};

export default ShowHome;