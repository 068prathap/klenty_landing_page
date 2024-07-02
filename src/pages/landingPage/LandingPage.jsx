import './LandingPage.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import CardsList from '../../components/cardsList/CardsList';
import ComponentOne from '../../components/componentOne/ComponentOne';
import ComponentTwo from '../../components/componentTwo/ComponentTwo';
import ComponentThree from '../../components/componentThree/ComponentThree';
import ComponentFour from '../../components/componentFour/ComponentFour';
import ComponentFive from '../../components/componentFive/ComponentFive';
import ComponentSix from '../../components/componentSix/ComponentSix';

function LandingPage() {
    return (
        <>
            <Header />
            <div className='banner'>
                <Banner />
                <CardsList />
            </div>
            <div className=''>
                <ComponentOne />
            </div>
            <div className=''>
                <ComponentTwo />
            </div>
            <div className=''>
                <ComponentThree />
            </div>
            <div className=''>
                <ComponentFour />
            </div>
            <div className=''>
                <ComponentFive />
            </div>
            <div className=''>
                <ComponentSix />
            </div>
        </>
    )
}
export default LandingPage