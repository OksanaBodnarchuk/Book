import React from 'react';
import s from "./order.module.css"

const OrderBtn = () => {
    return (
    <div className={s.btn_container}>
        <button className={s.btn_text}>Order Today</button>
    </div>
    );
};

export default OrderBtn;