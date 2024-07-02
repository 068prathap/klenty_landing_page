import './ComponentThree.css';
import ControlledCarousel from '../cThreeCarousal/CThreeCarousal';

function ComponentThree() {
    return (
        <>
            <div className='componentThree'>
                <div>
                    <div className='d-flex justify-content-center'>
                        <p className='howHeading mb-1'>See How World-Class Sales Teams Dominate Their Market</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p className='hearContent'>Hear our customers explaining the sales strategies, tactics and approaches that helped them create and close more pipeline.</p>
                    </div>
                    <div>
                        <div>
                            <ControlledCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComponentThree