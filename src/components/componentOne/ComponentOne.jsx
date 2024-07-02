import './ComponentOne.css'
import Img from '../../assets/images/Group 212665.png'

function ComponentOne() {
    return (
        <>
            <div className='componentOne'>
                <div className='text-center'>
                    <p className='uniqueHeading'>Unique <span>Klenty Capabilities</span> That Drive Pipeline</p>
                </div>
                <p className='b2bHeading'>B2B PROSPECTING DATA</p>
                <p className='conquerHeading'>Conquer Your Market With Verified, Accurate Contact Data</p>
                <div className='d-flex justify-content-center'>
                    <p className='klentyContent'>Klenty swiftly searches through 10+ data providers in a Waterfall Enrichment Model and gives you the most precise emails, direct dial numbers and account insights.</p>
                </div>
                <div className='text-center'>
                    <button className='ButtonContain'>EXPLORE PROSPECTING DATA</button>
                </div>
                <div className='text-center'>
                    <img className='componentOneImg' src={Img} alt="" />
                </div>
            </div>
        </>
    )
}
export default ComponentOne