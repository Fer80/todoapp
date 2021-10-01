import React from 'react';

import '../assets/styles/layout.css';

import Header from './Header';
import Footer from './Footer';

const Layout = props => (
    <div className="layout">
        <Header />
        <main className="principal">
            {props.children}
        </main>
        <Footer />
    </div>
);

export default Layout;
