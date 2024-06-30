import './Card.css';
import Arrow from '../../assets/images/Vector 401.svg'

function Card({ cardImg, imgHeading, content, cardLink }) {
    return (
        <>
            <div className='cardContainer'>
                <div className='cardImageContainer'>
                    <p className='cardImgHeading'>{imgHeading}</p>
                    <div className='d-flex justify-content-center'>
                        <img className='cardImg' src={cardImg} alt="" />
                    </div>
                </div>
                <p className='cardContent'>{content}</p>
                <p className='cardLink'>{cardLink} <img className='arrowLink' src={Arrow} width={'14px'} alt="" /></p>
            </div>
        </>
    )
}
export default Card