import './ComponentFive.css'
import CardImg from '../../assets/images/Group 48095515.png'
import CardCornerImg from '../../assets/images/Group 212709.png'

function ComponentFive() {
    return (
        <>
            <div>
                <div>
                    <div className='d-flex justify-content-center'>
                        <p className='RatedHeading'>Rated Highly By Growing Sales Teams With Varying Use-Cases</p>
                    </div>
                    <div className=''>
                        <div className='ratingCardList d-flex justify-content-center'>
                            <div className='ratingCard d-flex'>
                                <div className='ratingCardLeftContent'>
                                    <img src={CardCornerImg} alt="" />
                                    <p className='ratingText'>Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of <span>93%.</span></p>
                                <p className='clientName'>Adam Weinger</p>
                                <p className='clientRole'>President, Double The Donation  </p>
                                </div>
                                <div className='ratingCardRightContent'>
                                    <img src={CardImg} width={'100%'} height={'100%'} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComponentFive