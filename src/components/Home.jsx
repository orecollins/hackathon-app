import React from "react";
import Logo from "./Logo";
import Button from "react-bootstrap/Button";
import "./Home.css";


const Home = () => {
    return (
        <body>
            <div className="centered-container">
                <h1 className="intro">We’re glad to have you here.</h1>    
                <div className="logo-container" >
                <Logo />
                </div>
                <p className="cchem">CareerChemistry</p>
                <div className="buttons">
                        <Button to="/createstudentaccount"> I'm a Student</Button>
                        <Button to="/createrecruiteraccount">I'm a Recruiter</Button>
                </div>
                <p className="login">Have an account? <Button variant="link" className="login-btn">Login Here</Button></p>   
            </div>
            <footer className="footer"> <p><Button variant="link">Learn more</Button> about CareerChemistry</p></footer>
        </body>
);
};
export default Home;