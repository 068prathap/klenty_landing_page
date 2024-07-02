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
import MediaTabContent from '../mediaTabContent/MediaTabContent'
import Img1 from '../../assets/images/Group 212875.png'
import Img2 from '../../assets/images/Group 212910.png'
import Img3 from '../../assets/images/Group 212888.png'
import Img4 from '../../assets/images/Group 212910.png'

function ComponentTwo() {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <>
            <div className='justify-content-center d-flex componentTwo'>
                <div className='innerMediaTabs'>
                    <p className='multiHeading mb-3'>MULTI-CHANNEL OUTREACH</p>
                    <p className='reactHeading mb-2'>Reach Prospects Wherever They’re Active</p>
                    <div className='d-flex justify-content-center'>
                        <p className='uniteContent'>Unite your sales workflows across 5+ channels into one platform. With 1-click automation , blitz through activities across channels, saving hours.</p>
                    </div>
                    <div className='gap-5 justify-content-center mb-3 mediaTabList'>
                        <div className={`d-flex align-items-center mediaTab ${activeTab === 1 ? 'activeTab' : ''}`} onClick={() => { setActiveTab(1) }}>
                            <img className={`${activeTab === 1 ? 'd-none' : 'd-block'}`} src={DialerInActive} alt="" />
                            <img className={`${activeTab !== 1 ? 'd-none' : 'd-block'}`} src={DialerActive} alt="" />
                            <p className='m-0'>Powerful Sales Dialer</p>
                        </div>
                        <div className={`d-flex align-items-center mediaTab ${activeTab === 2 ? 'activeTab' : ''}`} onClick={() => { setActiveTab(2) }}>
                            <img className={`${activeTab === 2 ? 'd-none' : 'd-block'}`} src={LinkedinInActive} alt="" />
                            <img className={`${activeTab !== 2 ? 'd-none' : 'd-block'}`} src={LinkedinActive} alt="" />
                            <p className='m-0'>LinkedIn</p>
                        </div>
                        <div className={`d-flex align-items-center mediaTab ${activeTab === 3 ? 'activeTab' : ''}`} onClick={() => { setActiveTab(3) }}>
                            <img className={`${activeTab === 3 ? 'd-none' : 'd-block'}`} src={EmailActive} alt="" />
                            <img className={`${activeTab !== 3 ? 'd-none' : 'd-block'}`} src={EmailInActive} alt="" />
                            <p className='m-0'>Email</p>
                        </div>
                        <div className={`d-flex align-items-center mediaTab ${activeTab === 4 ? 'activeTab' : ''}`} onClick={() => { setActiveTab(4) }}>
                            <img className={`${activeTab === 4 ? 'd-none' : 'd-block'}`} src={SMSInActive} alt="" />
                            <img className={`${activeTab !== 4 ? 'd-none' : 'd-block'}`} src={SMSActive} alt="" />
                            <p className='m-0'>SMS And WhatsApp</p>
                        </div>
                    </div>
                    <div className='mediashrLine'></div>
                    <div className='d-flex flex-column gap-5'>
                        {(activeTab === 1 || activeTab === 5) &&
                            <MediaTabContent setActiveTab={setActiveTab} heading={'Powerful Sales Dialer'} image={Img1} content={'Place call after call without dialing.Use voicemails to increase call connect rates.Sync all notes to CRM.'} />
                        }
                        {(activeTab === 2 || activeTab === 5) &&
                            <MediaTabContent setActiveTab={setActiveTab} heading={'LinkedIn'} image={Img2} content={'Klenty types and personalizes LinkedIn connect requests, InMails, and Messages for you. Just hit send.'} />
                        }
                        {(activeTab === 3 || activeTab === 5) &&
                            <MediaTabContent setActiveTab={setActiveTab} heading={'Email'} image={Img3} content={'Built for personalization-first sales teams. Insert prospect information, contextual snippets, videos, and well-researched openers into sales emails.'} />
                        }
                        {(activeTab === 4 || activeTab === 5) &&
                            <MediaTabContent setActiveTab={setActiveTab} heading={'SMS And Whatsapp'} image={Img4} content={'Add quick SMS and WhatsApp follow-ups for mobile-savvy prospects (that’s everyone, btw).Gently nudge prospects towards a conversation.'} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComponentTwo