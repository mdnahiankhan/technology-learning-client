import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Category = () => {
    const courseCategory = useLoaderData();
    return (
        <div>
            <h1>This is category has course:{courseCategory.length}</h1>
            {
                courseCategory.map(courses => <Course
                    key={courses.id}
                    courses={courses}
                ></Course>)
            }
        </div>
    );
};

export default Category;