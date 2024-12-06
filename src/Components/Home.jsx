import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    useEffect(() => {
        // Apply the background style to the body
        document.body.style.backgroundImage = "url('src/assets/Images/istockphoto-1410336718-612x612.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";

        return () => {
            // Cleanup: Remove background when component unmounts
            document.body.style.backgroundImage = '';
        };
    }, []);

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>QuizApp - Home</title>
                </Helmet>
            </HelmetProvider>

            <section id="home">
                <h1>QuizApp</h1>
                <button className="btn btn-success col-12">
                    <Link className="text-white text-center" to="/Instructions">Play</Link>
                </button>
                <div className='d-flex gap-4'>

                    <button className="btn btn-primary">
                        <Link className="text-white text-center" to="/">Login</Link>
                    </button>
                    <button className="btn btn-primary">
                        <Link className="text-white text-center" to="/">Register</Link>
                    </button>
                </div>
            </section>

        </>
    );
}

export default Home;
