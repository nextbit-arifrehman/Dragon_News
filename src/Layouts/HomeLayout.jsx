import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Componnet/Header';
import LatestNews from '../Componnet/LatestNews';
import Navbar from '../Componnet/Navbar';
import Leftaside from '../Componnet/HomeLayout/Leftaside';
import Rightaside from '../Componnet/HomeLayout/Rightaside';
const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto  my-3  grid grid-cols-12 '>
              <aside className='col-span-3 '>
                <Leftaside></Leftaside>
              </aside>

                 <section className='main col-span-6 '>
                   <Outlet></Outlet>
                 </section>

                 <aside className='col-span-3'>
                 <Rightaside></Rightaside>
              </aside>
            </main>

        </div>
    );
};

export default HomeLayout;