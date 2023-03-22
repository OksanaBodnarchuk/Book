import React from 'react';
import s from './style.module.css'


const FooterListItem = ({label }) => {
    
    return (
        <div className={s.item}>
            <i className="las la-ellipsis-h"></i>            
           <p>{label}</p>
        </div>
    );
};

export default FooterListItem;