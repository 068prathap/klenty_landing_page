import './LandingPage.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import CardsList from '../../components/cardsList/CardsList';
import ComponentOne from '../../components/componentOne/ComponentOne';
import ComponentTwo from '../../components/componentTwo/ComponentTwo';

function LandingPage() {
    return (
        <>
            <Header />
            <div className='banner'>
                <Banner />
                <CardsList />
            </div>
            <div className='mb-5'>
                <ComponentOne />
            </div>
            <div className='mt-5'>
                <ComponentTwo />
            </div>
        </>
    )
}
export default LandingPage