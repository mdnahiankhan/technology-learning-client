import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Leftside from '../leftside/Leftside';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-3'>
                <div className=' col-span-1'>
                    <Leftside></Leftside>
                </div>
                <div className='col-span-2'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;