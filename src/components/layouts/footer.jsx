const Footer = () => {
    return (
        <>
            {/* */}
             <section className="quick-links">

                {/* <a href="#" rel="noreferrer" className="logo"> se<i className="fas fa-search-dollar"></i> </a> */}

                <div className="links">
                    <a href="#home">home</a>
                    <a href="#services">services</a>
                    <a href="#work">work</a>
                    <a href="#pricing">pricing</a>
                    <a href="#reviews">reviews</a>
                    <a href="#contact">contact</a>
                </div>

            </section>

            <section className="credit">

                <p>created by <span>Desire</span> | @</p>

                <div className="share">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" >
                        <i className="fab fa-github"></i>
                    </a>
                </div>

            </section>
        </>
    );
}

export default Footer;