
const Services = ({services}) => {
    // console.log(services);

    return ( 
        <section className="services" id="services">

            <h1 className="heading"> Nos <span>Services</span> </h1>

            <div className="box-container">

                { services ?
                    services.map((service, id) => (
                        <div key={id} className="box">
                            <img src={service.img} alt="" />
                            <h3>{service.type}</h3>
                            <p>{service.description}</p>
                        </div>
                    )) : <h3 style={{textAlign: "center"}}>Loading...</h3>
                }

            </div>

        </section>
    );
}
 
export default Services;