import React from "react";
import s from "./aboutbook.module.css";

const AboutBoot = () => {
    const descr = [
        { id: 1, title: "Pages:", data: "250 pages" },
        { id: 2, title: "Length:", data: "10 Hours" },
        { id: 3, title: "Rating:", data: "4.5/5 (305 ratings)" },
      ];
    return (
        <div className={s.about_book}>
        {descr.map(({id, title, data}) => (
          <div key={id}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              >
              <path
                  d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
                  fill="#FFCA42"
              />
              </svg>
              <span className={s.book_caracter}>{title}</span>
              <p className={s.book_descr}>{data}</p>
          </div>
        ))}
      </div>
    );
};

export default AboutBoot;

