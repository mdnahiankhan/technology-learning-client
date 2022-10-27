import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Leftside from '../leftside/Leftside';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-3 md:cols-auto'>
                <div className='px-4 py-16 sm:hidden lg:contents sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 col-span-1'>
                    <Leftside></Leftside>
                </div>
                <div className='col-span-2'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;