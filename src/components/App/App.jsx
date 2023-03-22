import React from 'react';
import Header from '../Header/Header';
import { Routes, Route } from "react-router-dom";
import ArticlesPage from '../../pages/ArticlesPage/ArticlesPage';
import AuthorPage from '../../pages/AuthorPage/AuthorPage';
import CompaniesPage from '../../pages/CompaniesPage/CompaniesPage';
import HomePage from '../../pages/HomePage/HomePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import "./app.css"
import Footer from '../Footer/Footer';

const App = () => {
    return (
        <div>
           <Header/>
           <Routes >
                <Route path="/" element={ <HomePage/>} />      
                <Route path="/author" element={<AuthorPage />} />
                <Route path = "/companies" element = {<CompaniesPage/>} />
                <Route path = "/articles" element = {<ArticlesPage/>} />
                <Route path = "/*" element = {<NotFoundPage/>} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;