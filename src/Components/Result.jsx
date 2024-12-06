import React ,{ useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Result() {
    const location = useLocation();
    const { state } = location || {};
    const { score, correctAnswers, wrongAnswers, totalQuestions } = state || {};

    useEffect(() => {
        document.body.style.backgroundImage = "url('src/assets/Images/istockphoto-1410336718-612x612.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";

        return () => {
            document.body.style.backgroundImage = '';
        };
    }, []);


    const containerStyle = {
        width: '400px',
        color: 'white',
      
        
    };
    const headingStyle = {
        fontFamily: "'Playfair Display', serif",
        fontWeight: '700',
    };
    
    const textStyle = {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: '400',
    };

    const boxStyle = {
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <div style={boxStyle}>
            <h1 style={headingStyle}>Quiz Results</h1>
                <hr />
                <div>
                <p style={textStyle}><strong>Total Questions:</strong> {totalQuestions}</p>
                <p style={textStyle}><strong>Correct Answers:</strong> {correctAnswers}</p>
                    <p style={textStyle}><strong>Wrong Answers:</strong> {wrongAnswers}</p>
                    <p style={textStyle}><strong>Score:</strong> {score}</p>
                </div>
                <hr />
                <Link className="btn btn-primary" to="/">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Result;
