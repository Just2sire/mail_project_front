const Work = ({images}) => {
    return (  
        <section className="work" id="work">

            <h1 className="heading"> Notre <span>travail</span> </h1>

            <div className="box-container">
                {
                    images ? 
                    images.map(({src}, id) => (
                        <img key={id} src={src} alt="" />
                    )) : <h3 style={{textAlign: "center"}}>Loading...</h3>
                }
            </div>

        </section>
    );
}
 
export default Work;