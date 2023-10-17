const Review = ({reviews}) => {
    return ( 
        <section class="reviews" id="reviews">

            <h1 class="heading"> clients <span>reviews</span> </h1>

            <div class="box-container">

                {
                    reviews ?
                    reviews.map(({name, img, message}, id) => (
                        <div class="box" key={id}>
                            <div class="user">
                                <img src={img} alt="" />
                                <div class="info">
                                    <h3>{name}</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text">{message}</p>
                        </div>
                    ))
                     : <h3 style={{ textAlign: 'center' }}>Loading...</h3>
                }

            </div>

        </section>
    );
}
 
export default Review;