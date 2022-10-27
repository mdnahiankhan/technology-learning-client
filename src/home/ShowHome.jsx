import React from 'react';
import { Link } from 'react-router-dom';

const ShowHome = ({ course }) => {
    const { id, img, name, duration, title } = course;
    return (
        <div className="max-w-xs mx-auto p-6 rounded-xl shadow-md dark:bg-violet-800 dark:text-gray-50">
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400"></span>
                <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
            </div>
            {title.length > 50 ? <p className="dark:text-gray-100">{title.slice(0, 50) + "..."}<Link to={`/course/${id}`}>Read More</Link>  </p> : <p className="dark:text-gray-100">{title}</p>}
            <p className='mt-5'>Course Duration:{duration} Month</p>
            <Link to={`/course/${id}`}><button type="button" className="px-6 py-2 font-semibold border rounded-xl dark:border-gray-100 dark:text-gray-100 dark:bg-violet-600">Get premium access</button></Link>
        </div>
    );
};

export default ShowHome;