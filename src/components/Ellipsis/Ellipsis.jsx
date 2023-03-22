import React from "react";

import s from "./ellipsis.module.css";

const Ellipsis = () => {
  
  return (
    <div className={s.item}>{    
   
          <div className={s.explore_link}>
            <i className="las la-ellipsis-h"></i>
        
            </div>
          }
    </div>
  );
};

export default Ellipsis;
