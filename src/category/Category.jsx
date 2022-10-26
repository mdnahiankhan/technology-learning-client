import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCourse from './ShowCourse';

const Category = () => {
    const courseCategory = useLoaderData();
    return (
        <div>
            <h1 className='font-semibold mt-2'>This category has course:{courseCategory.length}</h1>
            <div className='mt-4 justify-items-center'>
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