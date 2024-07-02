import './MediaTabContent.css';
import Arrow from '../../assets/images/Vector 401.svg'
import { useEffect, useState } from 'react';

function MediaTabContent({ heading, content, image, setActiveTab }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        var width = (window.innerWidth > 768) ? true : false;

        const interval = setInterval(() => {
            if (width) {
                if (progress <= 110) {
                    setProgress(progress + 3)
                } else {
                    setActiveTab(pre => {
                        if (pre === 4) {
                            return 1
                        }
                        else {
                            return pre + 1
                        }
                    })
                    clearInterval(interval)
                }
            }
            else {
                setActiveTab(5)
            }
        }, 100)

        return () => clearInterval(interval)
    }, [progress])

    return (
        <>
            <div className='d-md-flex mediaTabContainer'>
                <div className='mediaTabLeftContent'>
                    <p className='mediaTabHeading mb-1'>{heading}</p>
                    <p className='mediaTabContent mb-3'>{content}</p>
                    <p className='mediaTabLink'>LEARN MORE <img className='arrowLink' src={Arrow} width={'14px'} alt="" /></p>
                    <div className="progress mediaTabProgress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div style={{ width: `${progress}%` }} className={`progress-bar mediaLoader`}></div>
                    </div>
                </div>
                <div className='mediaTabRighContent d-flex justify-content-center'>
                    <img src={image} width={'85%'} alt="" />
                </div>
            </div>
        </>
    )
}
export default MediaTabContent