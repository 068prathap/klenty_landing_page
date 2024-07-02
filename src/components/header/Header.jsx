import './Header.css';
import BigLogo from '../../assets/images/Big Logo.png'

function Header() {
    return (
        <>
            <div className='bg-white z-2 justify-content-center d-flex position-fixed top-0 w-100'>
                <div className='d-flex innerHeader justify-content-between py-3 align-items-center'>
                    <div className='d-flex align-items-center w-75'>
                        <div className='me-3'>
                            <img className='bigLogoImg' src={BigLogo} alt="" />
                        </div>
                        <div className='headerTabsVisibility'>
                            <div className='mx-3 position-relative'>
                                <p className='m-0 headerTabs'>Features</p>
                                <div className='headerTabsLine position-absolute'></div>
                            </div>
                            <div className='mx-3 position-relative'>
                                <p className='m-0 headerTabs'>Integration</p>
                                <div className='headerTabsLine position-absolute'></div>
                            </div>
                            <div className='mx-3 position-relative'>
                                <p className='m-0 headerTabs'>Customer Stories </p>
                                <div className='headerTabsLine position-absolute'></div>
                            </div>
                            <div className='mx-3 position-relative'>
                                <p className='m-0 headerTabs'>Pricing</p>
                                <div className='headerTabsLine position-absolute'></div>
                            </div>
                            <div className='mx-3 position-relative'>
                                <p className='m-0 headerTabs'>Resources</p>
                                <div className='headerTabsLine position-absolute'></div>
                            </div>
                        </div>
                        <div className='headerTabsVisibility'>
                            <div className='mx-3 position-relative'>
                                <p className='m-0 headerTabs'>Product Demo</p>
                                <div className='headerTabsLine position-absolute'></div>
                            </div>
                        </div>
                    </div>
                    <div className='headerRightContent align-items-center justify-content-between w-25 headerTabsVisibility'>
                        <div>
                            <p className='m-0 headerLoginTab'>Log In</p>
                        </div>
                        <div className='d-flex gap-3 w-100'>
                            <button className='ButtonOutLine w-100'>Schedule Demo</button>
                            <button className='ButtonContain w-100'>sign up for free</button>
                        </div>
                    </div>
                    <div className='menuBarVisibility'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M6 7.99988H22.0003M6 14H22.0003M6 20.0001H22.0003" stroke="#5856CE" stroke-width="1.71432" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header