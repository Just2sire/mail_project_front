import Home from './home/home';
import Services from './home/services';
import Work from './home/work';
import Pricing from './home/pricing';
import Review from './home/review';
import Contact from './home/contact';
import Newsletter from './home/newsletter';

const HomePage = ({data}) => {
    return (  
        <>
            <Home />
            <Services services={data.services} />
            <Work images={data.works} />
            <Pricing pricing={data.pricing} />
            <Review reviews={data.reviews} />
            <Contact horaire={data.horaire} />
            <Newsletter />
        </>
    );
}
 
export default HomePage;