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
                        <div className='d-flex'>
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
                        <div>
                            <div className='mx-3 position-relative'>
                                <p className='m-0 headerTabs'>Product Demo</p>
                                <div className='headerTabsLine position-absolute'></div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex headerRightContent align-items-center justify-content-between w-25'>
                        <div>
                            <p className='m-0 headerLoginTab'>Log In</p>
                        </div>
                        <div className='d-flex gap-3 w-100'>
                            <button className='ButtonOutLine w-100'>Schedule Demo</button>
                            <button className='ButtonContain w-100'>sign up for free</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header