import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CFiveCarousal.css'
import CardImg from '../../assets/images/Group 48095515.png'
import CardImg1 from '../../assets/images/Group 48095516.png'
import CardCornerImg from '../../assets/images/Group 212709.png'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className='d-flex justify-content-center w-100'>
                    <div className='ratingCard d-flex'>
                        <div className='ratingCardLeftContent'>
                            <img src={CardCornerImg} alt="" />
                            <div className='p-4'>
                                <p className='ratingText mb-4'>Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of <span>93%.</span></p>
                                <p className='clientName mb-1'>Adam Weinger</p>
                                <p className='clientRole'>President, Double The Donation  </p>
                            </div>
                        </div>
                        <div className='ratingCardRightContent'>
                            <img src={CardImg} width={'100%'} height={'100%'} alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex justify-content-center w-100'>
                    <div className='ratingCard d-flex'>
                        <div className='ratingCardLeftContent'>
                            <img src={CardCornerImg} alt="" />
                            <div className='p-4'>
                                <p className='ratingText mb-4'>Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of <span>93%.</span></p>
                                <p className='clientName mb-1'>Adam Weinger</p>
                                <p className='clientRole'>President, Double The Donation  </p>
                            </div>
                        </div>
                        <div className='ratingCardRightContent'>
                            <img src={CardImg1} width={'100%'} height={'100%'} alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex justify-content-center w-100'>
                    <div className='ratingCard d-flex'>
                        <div className='ratingCardLeftContent'>
                            <img src={CardCornerImg} alt="" />
                            <div className='p-4'>
                                <p className='ratingText mb-4'>Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of <span>93%.</span></p>
                                <p className='clientName mb-1'>Adam Weinger</p>
                                <p className='clientRole'>President, Double The Donation  </p>
                            </div>
                        </div>
                        <div className='ratingCardRightContent'>
                            <img src={CardImg} width={'100%'} height={'100%'} alt="" />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;