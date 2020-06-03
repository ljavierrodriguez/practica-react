import React, { useState } from 'react';
import './App.css';
import Header from './components/shared/header';
import Banner from './components/banner';
import AfterBanner from './components/after-banner';
import Events from './components/events';
import Blog from './components/blog';
import Subscribe from './components/subscribe';
import Team from './components/team';
import Footer from './components/shared/footer';

function App() {
    const [mostrar, setMostrar] = useState(true);

    return (
        <>
            <div className="wrapper">
                <button onClick={() => setMostrar(!mostrar)}>
                    {
                        mostrar ? 
                        "Ocultar AfterBanner"
                        :
                        "Mostrar AfterBanner"
                    }
                </button>
                <Header />
                <Banner />
                {
                    mostrar &&
                    (
                        <AfterBanner />
                    )
                }
                <Events />
                <Blog />
                <Subscribe />
                <Team />
                <Footer />
            </div>
        </>
    );
}

export default App;
