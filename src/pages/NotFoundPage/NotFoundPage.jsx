import React from 'react';
import s from "./style.module.css";

const NotFoundPage = () => {
    return (
        <div className={s.error}>
        <p className={s.error_title}>ERROR</p>
        <p className={s.error_descr}>404</p>
    </div>
    );
};

export default NotFoundPage;