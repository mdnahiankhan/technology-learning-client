import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import ShowCourse from './ShowCourse';

const Category = () => {
    const courseCategory = useLoaderData();
    return (
        <div>
            <h1 className='font-semibold mt-2'>This is category has course:{courseCategory.length}</h1>
            <div className='mt-8'>
                {
                    courseCategory.map(courses => <ShowCourse
                        key={courses.id}
                        courses={courses}
                    ></ShowCourse>)
                }
            </div>
        </div>
    );
};

export default Category;