import React from 'react';
import Image from "next/image";
import styles from './Sidebar.module.css'
import {buttonImgArr} from "@/constants";
import {home_white} from "@/assets";

function Sidebar() {


    return (
        <div className={styles.side_bar_block}>
            {buttonImgArr.map((el, index) => {
                return (
                    <div className={index !== 1? styles.button_block : styles.button_block_active} key={index}>
                        <div className={index !== 1? styles.image_block : styles.image_block_active} >
                            {index !== 1?
                                <Image width={30} height={30} src={el} alt="#" priority={true} />:
                                <Image width={30} height={30} src={home_white} alt="#" priority={true} />
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Sidebar;