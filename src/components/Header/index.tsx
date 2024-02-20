import React from 'react';
import {getServerSideProps} from "@/pages";
import {InferGetServerSidePropsType} from "next";
import styles from './Header.module.css'
import Image from "next/image";

function Header ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {


    return (
        <div className={styles.header_main_block}>
            <div className={styles.choose_block}>
                <h2>Choose Dishes</h2>
                <div className={styles.select_block}>
                    <select >
                        <option value='price'>Price</option>
                        <option value='default'>Default</option>
                    </select>
                </div>
            </div>
            <div className={styles.items_block} >
                {data.map((el, index) => {
                    return (
                        <div key={index} className={styles.item_block}>
                            <div  className={styles.item}>
                                <div className={styles.rounded_image_container}>
                                    <Image priority width={200} style={{borderRadius: '50%'}} height={200} src={el.img} alt="#"/>
                                </div>
                                <div className={styles.item__info_block}>
                                    <p className={styles.info_block__title}>{el.title}</p>
                                    <p className={styles.info_block__price}>$ {el.price}</p>
                                    <span>{el.available} Bowls available</span>
                                </div>
                                <div className={styles.item__button_block}>
                                    <button>Add</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}


export default Header;


