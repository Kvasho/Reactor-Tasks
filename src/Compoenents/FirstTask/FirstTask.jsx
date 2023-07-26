import './FirstTask.css';
import image from './images/image-equilibrium.jpg';
import icon1 from './images/icon-ethereum.svg';
import icon2 from './images/icon-clock.svg';
import authorIcon from './images/image-avatar.png';
import hoverImage from './images/icon-view.svg'

function FirstTask() {
    return ( 
        <section className='first-task'>
            <div className='card'>
                <div className='card-image'>
                    <img src={image} alt="CardImage" className='card-main-image'/>
                    <div className='card-image-hover'></div>
                        <img src={hoverImage} alt="hover" className='hover-image'/>
                    
                </div>
                <h2 className='card-header'>Equilibrium #3429</h2>
                <p>Our Equilibrium collection promotes balance and calm.</p>
                <div className='card-info'>
                    <div className='card-info-left'>
                        <img src={icon1} alt="icon1" className='card-info-left-icon' />
                        <p>0.041 ETH</p>
                    </div>
                    <div className='card-info-right'>
                        <img src={icon2} alt="icon2" className='card-info-right-icon'/>
                        <p>3 days left</p>
                    </div>
                </div>
                <div className='card-author'>
                    <img src={authorIcon} alt="author" className='card-author-img'/>
                    <p className='card-author-info'>Creation of <span>Jules Wyvern</span></p>
                </div>
            </div>
        </section>
     );
}

export default FirstTask;