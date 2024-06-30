import './Banner.css'
import Group20698 from '../../assets/images/Group 20698.png'

function Banner() {
    return (
        <>
            <div>
                <div className='borderBanner'>
                    <div className='borderBanner'>
                        <div className='borderBanner'>
                            <div className='borderBanner'>
                                <div className='innerBanner m-auto'>
                                    <div className='d-flex align-items-center'>
                                        <div className='w-50'>
                                            <p className='bannerText1'>SALES ENGAGEMENT AND INTELLIGENCE PLATFORM</p>
                                            <p className='bannerText2'>Find, Engage and Convert Prospects Into Pipeline</p>
                                            <p className='bannerText3'>Klenty combines a B2B prospecting database, multi-channel sequences and AI across the sales cycle to help sales teams predictably hit their number.</p>
                                            <button className='ButtonContain BannerButton'>SCHEDULE A DEMO</button>
                                        </div>
                                        <div className='w-50 bannerImg'>
                                            <img className='w-100' src={Group20698} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='text-center my-4'>
                        <p className='clientsHeading'>Helping Over <span>5000+</span> Fast-Growing Sales Teams Crush Targets</p>
                    </div>
                    <div className="slider mb-5">
                        <div className="slide-track">
                            <div className="slide">
                                <img src="/a-5e14c848/assets/images/index/2024May/company-logo/oracle-logo.svg" height="18" width="147" alt="Oracle official Logo" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner