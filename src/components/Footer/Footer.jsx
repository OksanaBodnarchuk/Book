import React from "react";
import FooterInfoBox from "../FooterInfoBox"
import IconsFooter from "../Icons/IconsFooter";
import Logo from "../Logo/Logo";
import s from "./footer.module.css";

const Footer = () => {
  const explore = [
    { id: 1, label: "Home", to: "/" },
    { id: 2, label: "About", to: "/companies" },
    { id: 3, label: "Articles", to: "/articles" },
    { id: 4, label: "Our Store", to: "/123" },
    { id: 5, label: "Contact Us", to: "/124" },
  ];

  const utility_pages = [
    { id: 1, label: "Style Guide", to: "/125" },
    { id: 2, label: "Password Protected", to: "/126" },
    { id: 3, label: "404 Not Found", to: "/*" },
    { id: 4, label: "Licenses", to: "/127" },
    { id: 5, label: "Changelog", to: "/128" },
  ];

  
  return (
    <footer className={s.footer}>
      <div className={s.icons}>
        <Logo />
        <div className={s.icons_container}>
        <IconsFooter />
        </div>
      </div>
      <div className={s.explore}>
        <p className={s.title}>Explore</p>
        <FooterInfoBox list={explore}/>
      </div>
      <div className={s.explore}>
        <p className={s.title}>Utility Pages</p>        
            <FooterInfoBox list={utility_pages}/>        
      </div>
      <div className={s.address}>
        <p className={s.title}>Keep in Touch</p>
        <div className={s.line}>
          <div className={s.name}>
            <p className={s.title_min}>Address:</p>
          </div>
          <div>
            <p className={s.description}>
              24A Kingston St, Los Vegas <br /> NC 28202, USA.
            </p>
          </div>
        </div>
        <div className={s.line}>
          <div className={s.name}>
            <p className={s.title_min}>Mail:</p>
          </div>
          <div>
            <p className={s.description}>support@pages.com</p>
          </div>
        </div>
        <div className={s.line}>
          <div className={s.name}>
            <p className={s.title_min}>Phone:</p>
          </div>
          <div>
            <p className={s.description}>(+22) 123 - 4567 - 900</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
