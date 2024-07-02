import './ImageCard.css'
import UpArrow from '../../assets/images/Vector 1010.svg'
import RightArrow from '../../assets/images/Line 4.svg'

function ImageCard({ heading, imgCardIcon1, imgCardIcon2, iconText1, iconText2, persentage1, persentage2, img }) {
    return (
        <>
            <div className='imageCard d-md-flex'>
                <div className='imgCardLeftContent'>
                    <p className='imgCardHeading'>{heading}</p>
                    <div className='imgCardLine'></div>
                    <div className='d-flex text-white'>
                        <div className={`${imgCardIcon2 ? "w-50" : "w-100"}`}>
                            <div className={`${imgCardIcon2 ? "" : "d-flex align-items-center gap-1"}`}>
                                <img src={imgCardIcon1} alt="" />
                                <p className='iconText m-0'>{iconText1}</p>
                            </div>
                            <p className='persentage'>{persentage1} <img src={UpArrow} alt="" /></p>
                        </div>
                        {
                            imgCardIcon2 &&
                            <div className='w-50'>
                                <img src={imgCardIcon2} alt="" />
                                <p className='iconText'>{iconText2}</p>
                                <p className='persentage'>{persentage2} <img src={UpArrow} alt="" /></p>
                            </div>
                        }
                    </div>
                    <p className='readCase'>READ CASE STUDY <img src={RightArrow} alt="" /></p>
                </div>
                <div className='imgCardRightContent'>
                    <img src={img} width={'100%'} alt="" />
                </div>
            </div>
        </>
    )
}

export default ImageCard