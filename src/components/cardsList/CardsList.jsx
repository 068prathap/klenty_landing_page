import './CardsList.css';
import Card from '../card/Card';
import CardImg1 from '../../assets/images/Group 212550.png'
import CardImg2 from '../../assets/images/Group 212547.png'
import CardImg3 from '../../assets/images/Group 212551.png'
import CardImg4 from '../../assets/images/Group 212552.png'

function CardsList() {
    return (
        <>
            <div className='mt-5'>
                <div className='my-3 text-center'>
                    <p className='cardsHeading m-0'>Everything You Need to Run Your Sales Process.</p>
                    <p className='cardsHeading m-0'>In One Platform.</p>
                </div>
                <div className='d-flex justify-content-center cradsList mt-5'>
                    <Card cardImg={CardImg1} imgHeading={'Find'} cardLink={'EXPLORE SALES INTELLIGENCE'} content={'Get accurate emails and direct-dial mobile numbers for your ideal prospects, verified using the Waterfall Enrichment Model.'} />
                    <Card cardImg={CardImg2} imgHeading={'Engage'} cardLink={'EXPLORE MULTI-CHANNEL OUTREACH'} content={'Reach out to prospects across email, phone, LinkedIn, WhatsApp and SMS. Follow-up consistently and systematically.'} />
                    <Card cardImg={CardImg3} imgHeading={'Route'} cardLink={'EXPLORE LEAD ROUTING'} content={'GTurn every interested website visitor into a booked meeting. Assign the right lead to the right rep based on availability, '} />
                    <Card cardImg={CardImg4} imgHeading={'Coach'} cardLink={'EXPLORE CONVERSATION INTELLIGENCE'} content={'Automatically record, transcribe and analyze every sales conversation. Coach reps to adopt the strategies.'} />
                </div>
            </div>
        </>
    )
}
export default CardsList