import './ComponentFour.css'
import BoxImg1 from '../../assets/images/Group 212840.svg'
import BoxImg2 from '../../assets/images/Group 212850.svg'
import BoxImg3 from '../../assets/images/Group 212851.svg'
import securityBoxImg1 from '../../assets/images/Group 212841.svg'
import securityBoxImg2 from '../../assets/images/Group 212842.svg'
import securityBoxImg3 from '../../assets/images/Group 212838.svg'
import securityBoxImg4 from '../../assets/images/Group 210630.svg'
import securityBoxImg5 from '../../assets/images/Group 210623.png'
import securityBoxImg6 from '../../assets/images/Mask group (1).png'
import securityShield from '../../assets/images/Vector (2).png'
import securityShieldIcon from '../../assets/images/Group 212708.svg'

function ComponentFour() {
    return (
        <>
            <div className='componentFour'>
                <div className='supportComponent px-3'>
                    <p className='supportHeading'>SUPPORT AND ONBOARDING</p>
                    <div className='d-flex justify-content-center'>
                        <p className='notHeading mb-4'>Not Just a Software. A True Partner In Your Sales Success.</p>
                    </div>
                    <div className='d-flex justify-content-center supportBoxListContainer'>
                        <div className='d-flex supportBoxList'>
                            <div className='d-flex align-items-center supportBox'>
                                <div className='supportBoxIcon'>
                                    <img src={BoxImg1} width={'29px'} height={'36px'} alt="" />
                                </div>
                                <p className='supportBoxText m-0'>Free, 24/7 support across email, chat and phone</p>
                            </div>
                            <div className='d-flex align-items-center supportBox'>
                                <div className='supportBoxIcon'>
                                    <img src={BoxImg2} width={'29px'} height={'36px'} alt="" />
                                </div>
                                <p className='supportBoxText m-0'>Hand-held onboarding and product workshops</p>
                            </div>
                            <div className='d-flex align-items-center supportBox'>
                                <div className='supportBoxIcon'>
                                    <img src={BoxImg3} width={'29px'} height={'36px'} alt="" />
                                </div>
                                <p className='supportBoxText m-0'>Free white-gove migration</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='securityComponent position-relative'>
                    <div className='position-absolute securityShield'>
                        <div className='position-relative d-flex justify-content-center align-items-center'>
                            <img src={securityShield} alt="" />
                            <img className='position-absolute' src={securityShieldIcon} alt="" />
                        </div>
                    </div>
                    <p className='securityHeading mb-3'>SECURITY AND PRIVACY</p>
                    <div className='d-flex justify-content-center mb-2'>
                        <p className='enterpriceHeading mb-0'>Enterprise-Grade Security And Reliable Platform Uptime</p>
                    </div>
                    <p className='securityContent'>So you face zero lags, zero downtime and zero data concerns. Keep selling like clockwork.</p>
                    <div className='d-flex justify-content-center'>
                        <div className='securityList d-flex'>
                            <div className='securityBox'>
                                <img className='mb-3' src={securityBoxImg1} alt="" />
                                <p className='securityTime mb-1'>2.5 min</p>
                                <p className='securityBoxContent'>Support Response Time</p>
                            </div>
                            <div className='securityBox'>
                                <img className='mb-3' src={securityBoxImg2} alt="" />
                                <p className='securityTime mb-1'>2.5 min</p>
                                <p className='securityBoxContent'>Support Response Time</p>
                            </div>
                            <div className='securityBox'>
                                <img className='mb-3' src={securityBoxImg3} alt="" />
                                <p className='securityTime mb-1'>2.5 min</p>
                                <p className='securityBoxContent'>Support Response Time</p>
                            </div>
                            <div className='securityBox'>
                                <img className='mb-3' src={securityBoxImg4} alt="" />
                                <p className='securityTime mb-1'>2.5 min</p>
                                <p className='securityBoxContent'>Support Response Time</p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img width={'100%'} src={securityBoxImg5} alt="" />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img width={'100%'} src={securityBoxImg6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComponentFour