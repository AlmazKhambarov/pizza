import React, {useState} from 'react';
import {getServerSideProps} from "@/pages";
import {InferGetServerSidePropsType} from "next";
import styles from './Header.module.css'
import Image from "next/image";
import {imgs, selectOptions} from "@/constants";
import {ConfigProvider, Select} from "antd";
import * as module from "module";
import {BottomArrow} from "@/assets";

function Header({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [sort, setSort] = useState('Default')

    function changeSort(e: string) {
        setSort(e)
    }

    return (
        <div className={styles.header_main_block}>
            <div className={styles.choose_block}>
                <h2>Choose Dishes</h2>
                <div className={styles.select_block}>

                    <ConfigProvider
                        theme={{
                            components: {
                                Select: {
                                    optionSelectedColor: 'white',
                                    optionSelectedFontWeight: 500,
                                    optionSelectedBg: 'none',
                                }
                            },
                            token: {
                                colorBgContainer: 'rgba(31, 29, 43, 1)',
                                colorBgElevated: 'rgba(31, 29, 43, 1)',
                                colorBgContainerDisabled: 'rgba(31, 29, 43, 1)',
                                colorBorder: 'white',
                                fontSize: 18,
                                colorText: 'white',
                                borderRadius: 16,
                                controlOutline: 'none',
                                colorWarning: 'none',
                                colorIconHover: 'white',
                            },
                        }}
                    >
                        <Select value={sort || 'Default'}
                                suffixIcon={<Image src={BottomArrow} width={18} height={18} alt="icon"/> }
                                options={selectOptions.map((el) => ({value: el, label: <span>{el}</span>,}))}
                                onChange={(e) => setSort(e)}
                                style={{width: '180px', height: '53px'}}
                                className={styles.ant_select_arrow}
                        />
                    </ConfigProvider>


                    {/*<select>*/}
                    {/*    <option value='price'>Price</option>*/}
                    {/*    <option value='default'>Default</option>*/}
                    {/*</select>*/}
                </div>
            </div>
            <div className={styles.items_block}>
                {data.map((el, index) => {
                    return (
                        <div key={index} className={styles.item}>
                            <div className={styles.rounded_image_container}>
                                <Image width={220} className={styles.item_image} height={220} src={imgs[index]}
                                       alt="#"/>
                            </div>
                            <div className={styles.item__info_block}>
                                <div className={styles.info_block__info}>
                                    <div className={styles.title_block}>
                                        <p className={styles.title}>{el.title}</p>
                                    </div>
                                    <p className={styles.info__price}>$ {el.price}</p>
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


