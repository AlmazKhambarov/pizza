import React, {useState} from 'react';
import Image from "next/image";
import styles from './Sidebar.module.css'
import {buttonImgArr} from "@/constants";

function Sidebar({sidebarEvents} : any) {

    const [currentTab, setCurrentTab] = useState(1)

    function tabClick (name: string, index: number) {
        sidebarEvents(name)
        setCurrentTab(index)
    }

    return (
        <div className={styles.side_bar_block}>
            {buttonImgArr.map((el, index) => {
                return (
                    <div className={index !== currentTab? styles.button_block : styles.button_block_active} key={index}>
                        <div className={index !== currentTab? styles.image_block : styles.image_block_active} >
                            {index !== currentTab?
                                <Image width={30} height={30} onClick={tabClick.bind('null', el.name, index)}  src={el.img} alt="#" priority={true} />:
                                <Image width={30} height={30} onClick={tabClick.bind('null', el.name, index)} src={el.whiteImg || el.img} alt="#" priority={true} />
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Sidebar;