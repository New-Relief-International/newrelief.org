import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1 pt-14 sm:pt-16 lg:pt-20">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayout; 
