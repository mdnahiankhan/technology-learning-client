import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowHome from './ShowHome';

const Home = () => {
    const allcourse = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl'>This is Home:{allcourse.length}</h1>
            <div className=''>
                <div className='grid  grid-cols-1 gap-4  lg:grid-cols-3 lg:row-gap-8'>
                    {
                        allcourse.map(course => <ShowHome key={course.id} course={course}></ShowHome>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;