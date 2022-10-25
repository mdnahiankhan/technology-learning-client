import React from 'react';

const ShowCourse = ({ courses }) => {
    const { img, name, title } = courses;
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold dark:text-violet-400">{name}</h3>
                    <p className="leading-snug dark:text-gray-400">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowCourse;