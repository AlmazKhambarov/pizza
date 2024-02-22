import {Bounce, toast, ToastContainer} from "react-toastify";
import React from "react";
import styles from './Cart.module.css'
import Image from "next/image";
import {NoOrders} from "@/assets";

export default function Cart({cartIsOpen, firstOpen, setCartIsOpen}: any) {

    function buy(  name: string, current: Object) {
        if (name === 'To Order') {
            setCartIsOpen(false)
        } else if (name === 'Buy') {
            toast.success('buy products!')
        }
    }


    return (
        <>
            {firstOpen ? null :
                <div className={cartIsOpen ? styles.shutter_blur_active : styles.shutter_blur}>
                    <div className={styles.shutter_block}>
                        <div className={cartIsOpen ? styles.shutter_wrapper_active : styles.shutter_wrapper}>
                            <div className={styles.main_block}>
                                <div className={styles.cart_height_block}>
                                    <h1>Orders</h1>
                                </div>
                                <div className={styles.cart_middle_block}>
                                    <Image width={365} height={368} src={NoOrders}  alt=""/>
                                    <h3>No Order</h3>
                                    <p>Go find the products you like</p>
                                </div>
                                <button onClick={buy.bind( '','To Order') }>To Order</button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            }
        </>
    );
}
