import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowHome from './ShowHome';

const Home = () => {
    const allcourse = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl text-center'>Total Course:{allcourse.length}</h1>
            <div className='px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
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