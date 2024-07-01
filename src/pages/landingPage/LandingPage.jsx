import './LandingPage.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import CardsList from '../../components/cardsList/CardsList';
import ComponentOne from '../../components/componentOne/ComponentOne';
import ComponentTwo from '../../components/componentTwo/ComponentTwo';
import ComponentThree from '../../components/componentThree/ComponentThree';

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
            <div className='my-5'>
                <ComponentTwo />
            </div>
            <div className='my-5'>
                <ComponentThree />
            </div>
        </>
    )
}
export default LandingPage