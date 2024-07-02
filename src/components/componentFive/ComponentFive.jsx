import './ComponentFive.css'
import ControlledCarousel from '../cFiveCarousal/CFiveCarousal'

function ComponentFive() {
    return (
        <>
            <div className='componentFive px-3'>
                <div>
                    <div className='d-flex justify-content-center RatedHeadingContent'>
                        <p className='RatedHeading'>Rated Highly By Growing Sales Teams With Varying Use-Cases</p>
                    </div>
                    <div className=''>
                        <div className=''>
                            <ControlledCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComponentFive