import './ComponentTwo.css'
import DialerInActive from '../../assets/images/dialerInActiveIcon.svg'
import DialerActive from '../../assets/images/dialerActiveIcon.svg'
import LinkedinInActive from '../../assets/images/linkedinInActiveIcon.svg'
import LinkedinActive from '../../assets/images/linkedinActiveIcon.svg'
import EmailInActive from '../../assets/images/emailInActiveIcon.svg'
import EmailActive from '../../assets/images/emailActiveIcon.svg'
import SMSInActive from '../../assets/images/smsInActiveIcon.svg'
import SMSActive from '../../assets/images/smsActiveIcon.svg'
import { useState } from 'react'

function ComponentTwo(){
    const [activeTab, setActiveTab]=useState(1)

    return(
        <>
            <div>
                <div>
                    <p className='multiHeading'>MULTI-CHANNEL OUTREACH</p>
                    <p className='reactHeading'>Reach Prospects Wherever They’re Active</p>
                    <p className='uniteContent'>Unite your sales workflows across 5+ channels into one platform. With 1-click automation , blitz through activities across channels, saving hours.</p>
                    <div className='d-flex'>
                        <div className={`d-flex align-items-center ${activeTab===1 ? 'activeTab' : ''}`}>
                            <img src={DialerInActive} alt="" />
                            <img src={DialerActive} alt="" />
                            <p>Powerful Sales Dialer</p>
                        </div>
                        <div className={`d-flex align-items-center ${activeTab===2 ? 'activeTab' : ''}`}>
                            <img src={LinkedinInActive} alt="" />
                            <img src={LinkedinActive} alt="" />
                            <p>LinkedIn</p>
                        </div>
                        <div className={`d-flex align-items-center ${activeTab===3 ? 'activeTab' : ''}`}>
                            <img src={EmailInActive} alt="" />
                            <img src={EmailActive} alt="" />
                            <p>Email</p>
                        </div>
                        <div className={`d-flex align-items-center ${activeTab===4 ? 'activeTab' : ''}`}>
                            <img src={SMSInActive} alt="" />
                            <img src={SMSActive} alt="" />
                            <p>SMS And WhatsApp</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComponentTwo