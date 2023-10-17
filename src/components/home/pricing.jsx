const Pricing = ({pricing}) => {
    return (  
        <section className="pricing" id="pricing">

            <h1 className="heading"> 
                Choisissez une <span>offre</span> 
            </h1>

            <div className="box-container">

                {
                    pricing ?
                    pricing.map((prices) => (
                        <div className="box">
                            <h3>{prices.type}</h3>
                            <div className="price"> 
                                <span>$</span>{prices.price}<span>/mo</span> 
                            </div>
                            <ul>
                                {   
                                    prices.advantages &&
                                    (prices.advantages).map((value) => (
                                        <li> 
                                            <i className={value.icon}></i> 
                                            {value.content} 
                                        </li>
                                    ))
                                }
                            </ul>
                            <a href="#" className="btn">choose plan</a>
                        </div>
                    )) : <h3 style={{ textAlign: 'center' }}>Loading...</h3>
                }
                

            </div>

        </section>
    );
}
 
export default Pricing;