import './LandingPage.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import CardsList from '../../components/cardsList/CardsList';

function LandingPage() {
    return (
        <>
            <Header />
            <div className='banner'>
                <Banner />
                <CardsList />
            </div>
        </>
    )
}
export default LandingPage