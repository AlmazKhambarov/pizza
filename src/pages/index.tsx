import React, {useEffect} from 'react';
import type { InferGetServerSidePropsType } from 'next'
import {getServerSideProps} from "@/pages/api/hello";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import styles from '../styles/Home.module.css'
// import 'antd/dist/antd.css';




function Index({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <main className={styles.main_block}>
            <Sidebar />
            <div className={styles.main_interface}>
                <Navbar />
                <Header data={data} />
            </div>
        </main>
    );
}


export {getServerSideProps}
export default Index;