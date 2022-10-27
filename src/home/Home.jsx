import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowHome from './ShowHome';

const Home = () => {
    const allcourse = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl text-center'>Total Course:{allcourse.length}</h1>
            <div className='px-3 py-8  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 lg:px-2 lg:py-2'>
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