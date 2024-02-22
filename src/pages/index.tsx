import React, {useEffect, useState} from 'react';
import type { InferGetServerSidePropsType } from 'next'
import {getServerSideProps} from "@/pages/api/hello";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import styles from '../styles/Home.module.css'
import Cart from "@/components/Cart";
import 'react-toastify/dist/ReactToastify.css';




function Index({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {


    const [cartIsOpen, setCartIsOpen ] = useState(false)
    const [firstOpen, setFirstOpen ] = useState(true)

    const sidebarEvents = (name: string, current: Object) => {
        if (name === 'cart') {
            setFirstOpen(false)
            setCartIsOpen(true)
            return
        }
    }

    return (
        <main className={styles.main_block}>
            <Sidebar sidebarEvents={sidebarEvents} />
            <div className={styles.main_interface}>
                <Navbar />
                <Header data={data} />
            </div>
            <Cart cartIsOpen={cartIsOpen} firstOpen={firstOpen} setCartIsOpen={setCartIsOpen}/>
        </main>
    );
}


export {getServerSideProps}
export default Index;