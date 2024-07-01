import './ComponentThree.css';
import ImageCard from '../imageCard/ImageCard';
import ImgCard1Icon1 from '../../assets/images/Group 212965.svg'
import ImgCard1Icon2 from '../../assets/images/Group 212966.svg'
import ImgCardImg1 from '../../assets/images/Group 212941.png'
import ImgCardImg2 from '../../assets/images/Group 212967.png'
import ImgCard2Icon1 from '../../assets/images/Group 212964.svg'
import ImgCard2Icon2 from '../../assets/images/Group 212963.svg'
import ImgCardImg3 from '../../assets/images/Group 212944.png'
import ImgCard3Icon1 from '../../assets/images/Group 212959.svg'
import ImgCard3Icon2 from '../../assets/images/Group 212960.svg'
import ImgCardImg4 from '../../assets/images/Group 212946.png'
import ImgCard4Icon1 from '../../assets/images/Group 212961.svg'
import ImgCardImg5 from '../../assets/images/Group 212948.png'
import ImgCard5Icon1 from '../../assets/images/Group 212962.svg'

function ComponentThree() {
    return (
        <>
            <div>
                <div>
                    <div className='d-flex justify-content-center'>
                        <p className='howHeading'>See How World-Class Sales Teams Dominate Their Market</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p className='hearContent'>Hear our customers explaining the sales strategies, tactics and approaches that helped them create and close more pipeline.</p>
                    </div>
                    <div>
                        <div>
                            <div>
                                <ImageCard img={ImgCardImg1} persentage2={'97%'} persentage1={'100%'} iconText2={'Increase in Open Rates'} iconText1={'Meetings Booked'} imgCardIcon2={ImgCard1Icon2} imgCardIcon1={ImgCard1Icon1} heading={<>BlueInk increases meetings booked by <span>100%</span> in a single quarter with Sales Engagement Automation</>} />
                                <ImageCard img={ImgCardImg2} persentage2={'40%'} persentage1={'30%'} iconText2={'LinkedIn Activities Completed'} iconText1={'Increase in Calls Made'} imgCardIcon2={ImgCard2Icon2} imgCardIcon1={ImgCard2Icon1} heading={<>How Plauti Was Able to Increase LinkedIn Execution by 40%</>} />
                                <ImageCard img={ImgCardImg3} persentage2={'40%'} persentage1={'30%'} iconText2={'Increase in Productivity'} iconText1={'Increase in Deals Booked'} imgCardIcon2={ImgCard3Icon2} imgCardIcon1={ImgCard3Icon1} heading={<>How Double the Donation Increased Their Outbound Revenue by 93%</>} />
                                <ImageCard img={ImgCardImg4} persentage1={'233%'} iconText1={'Booked Meetings'} imgCardIcon1={ImgCard4Icon1} heading={<>How Group GTI Increased Their Meetings Booked by 200%</>} />
                                <ImageCard img={ImgCardImg5} persentage1={'200%'} iconText1={'Booked Meetings'} imgCardIcon1={ImgCard5Icon1} heading={<>How First Due SDRs Booked 233% More Meetings</>} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComponentThree