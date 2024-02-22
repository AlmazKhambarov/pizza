import React from 'react';
import {search} from "@/assets";
import styles from './Navbar.module.css'
import Image from "next/image";
import {ConfigProvider, Segmented} from "antd";

function NavBar() {

    const categoriesArr = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert']


    return (
        <div className={styles.navbar_main_block}>
            <div className={styles.navbar__top_block}>
                <div className={styles.top_block__text}>
                    <h1>Jaegar Resto</h1>
                    <p>Tuesday, 2 Feb 2021</p>
                </div>
                <form className={styles.top_block__form} action="#">
                    <Image width={30} height={30} src={search} alt=""/>
                    <input type="text" placeholder='Search for food, coffe, etc..'/>
                </form>
            </div>
            <div className={styles.navbar__bottom_block}>
                <ul className={styles.bottom_block__ul}>

                    <ConfigProvider theme={{
                        components: {
                            Segmented: {
                                itemActiveBg: 'none',
                                itemHoverBg: 'none',
                                itemSelectedBg: 'none',
                                itemSelectedColor: 'rgba(234, 124, 105, 1)',
                                trackBg: 'none',
                                itemColor: 'white',
                                itemHoverColor: 'none',

                            },
                        },
                    }}>
                        <Segmented options={categoriesArr}/>
                    </ConfigProvider>

                    {/*{categoriesArr.map((el, index) => {*/}
                    {/*    return (*/}
                    {/*        <li key={index} className={ !index ? styles.active_category : ''}>{el}</li>*/}
                    {/*    )*/}
                    {/*})}*/}
                </ul>
            </div>

        </div>
    );
}

export default NavBar;