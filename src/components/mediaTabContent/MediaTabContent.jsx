import './MediaTabContent.css';
import Arrow from '../../assets/images/Vector 401.svg'
import { useEffect, useState } from 'react';

function MediaTabContent({ heading, content, image, setActiveTab }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
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
        }, 100)

        return () => clearInterval(interval)
    }, [progress])

    return (
        <>
            <div className='d-flex'>
                <div className='mediaTabLeftContent'>
                    <p className='mediaTabHeading'>{heading}</p>
                    <p className='mediaTabContent'>{content}</p>
                    <p className='mediaTabLink'>LEARN MORE <img className='arrowLink' src={Arrow} width={'14px'} alt="" /></p>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
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