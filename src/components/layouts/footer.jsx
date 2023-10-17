import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/* <section className="quick-links">

                <a href="#" className="logo"> se<i className="fas fa-search-dollar"></i> </a>

                <div className="links">
                    <a href="#home">home</a>
                    <a href="#services">services</a>
                    <a href="#work">work</a>
                    <a href="#pricing">pricing</a>
                    <a href="#reviews">reviews</a>
                    <a href="#contact">contact</a>
                </div>

            </section> */}

            <section className="credit">

                <p>created by <span>Coding™</span> | all rights reserved!</p>

                <div className="share">
                    <a href="facebook.com" className="fab fa-facebook-f"></a>
                    <a href="twitter.com" className="fab fa-twitter"></a>
                    <a href="instagram.com" className="fab fa-instagram"></a>
                    <a href="github.com" className="fab fa-github"></a>
                </div>

            </section>
        </>
    );
}
 
export default Footer;