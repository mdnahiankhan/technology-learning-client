import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowHome from './ShowHome';

const Home = () => {
    const allcourse = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl'>This is Home:{allcourse.length}</h1>
            {
                allcourse.map(course => <ShowHome key={course.id} course={course}></ShowHome>)
            }
        </div>
    );
};

export default Home;