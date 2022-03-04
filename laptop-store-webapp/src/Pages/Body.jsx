import React from 'react'
import axios from 'axios'
import '../CSS/Body.css'
import { useEffect,useState } from 'react'
import KeyboardPanel from './BodyPages/KeyboardPanel'
import LaptopPanel from './BodyPages/LaptopPanel'
import PCPanel from './BodyPages/PCPanel'
import ScreenPanel from './BodyPages/ScreenPanel'
import MainPanel from './BodyPages/MainPanel'
import MousePanel from './BodyPages/MousePanel'
import Keyboard from './BodyPages/Keyboard.jsx'
import facebook from '../Images/facebook_48px.png'
import messenger from '../Images/facebook_messenger_48px.png'
import youtube from '../Images/YouTube_48px.png'
import phone from '../Images/phone_64px.png'
import envelope from '../Images/envelope_48px.png'
import up from '../Images/upwards_button_48px.png'
import facebookicon from '../Images/facebook-icon.png'
import emailicon from '../Images/email-icon.png'
import phoneicon from '../Images/phone-icon.png'
import addressicon from '../Images/address.png'
import URL from '../DATA/URL'
import HeadphonePanel from './BodyPages/HeadphonePanel'
function Body({idUser,addProductToCart,changeAdminMode,products,images}) {
    useEffect(() => {
        window.addEventListener('scroll',changeStatusRightItem);
        changeAdminMode('off');
    }, [])

    const [display, setDisplay] = useState(false);
    const changeStatusRightItem = () => {
        if(window.scrollY >= 400) setDisplay(true);
        else setDisplay(false);
    }
    const addCart = async (idProduct,priceProduct,his) =>{
        await addProductToCart(idUser,idProduct,priceProduct,his);
    }
    const selectProductByType = (type) => {
        var pros = [];
        products.forEach(element => {
            if(element.idloai === type) pros.push(element);
        });
        return pros;
    }
    return(
        <div className="body">

                <div className={display === true ? "right-scroll-panel" : "right-scroll-panel-hide"}>
                    <img className="right-scroll-panel-item" src={facebookicon} />
                    <img className="right-scroll-panel-item" src={phoneicon} />
                    <img className="right-scroll-panel-item" src={emailicon} />
                    <img className="right-scroll-panel-item" src={addressicon} />
                    <img  className="right-scroll-panel-item" src={up} onClick={()=>window.scrollTo(0, 0)} />
                </div>
                {/* <img className="event-scroll-left" src={`${URL}/Images/Panels/black-friday.png`} />
                <img className="event-scroll-right" src={`${URL}/Images/Panels/black-friday.png`} /> */}
                {/* <img  className={display === true ? "scroll-to-top" : "scroll-to-top-hide"} src={up} onClick={()=>window.scrollTo(0, 0)} /> */}
                <MainPanel images={images} />
                <LaptopPanel addCart={addCart} products={selectProductByType('laptop')}/>
                <div className="event-laptop">
                    <div className="event-laptop-item"><img className="event-laptop-item-img" src={`${URL}/Images/Panels/event-laptop1.png`}/></div>
                    <div className="event-laptop-item"><img className="event-laptop-item-img" src={`${URL}/Images/Panels/event-laptop2.png`}/></div>
                </div>
                <ScreenPanel addCart={addCart} products={selectProductByType('screen')}/>
                <div className="event"><img className="event-img" src={`${URL}/Images/Panels/event-22-12-2021.png`}/></div>
                <PCPanel addCart={addCart} products={selectProductByType('pc')}/>
                <div className="event-2">
                    <div className="event-2-item">
                        <div className="event-2-item-image">
                            <img className="event-2-item-image-img" src={`${URL}/Images/Panels/event-item1.png`} />
                        </div>
                    </div>
                    <div className="event-2-item">
                        <div className="event-2-item-image">
                             <img className="event-2-item-image-img" src={`${URL}/Images/Panels/event-item2.png`} />
                        </div>
                    </div>
                    <div className="event-2-item">
                        <div className="event-2-item-image">
                             <img className="event-2-item-image-img" src={`${URL}/Images/Panels/event-item3.png`} />
                        </div>
                    </div>
                </div>
                <Keyboard addCart={addCart} products={selectProductByType('keyboard')}  />
                {/* <KeyboardPanel addCart={addCart} products={selectProductByType('keyboard')}/> */}
                {/* <MousePanel addCart={addCart} products={selectProductByType('mouse')}/> */}
                <HeadphonePanel addCart={addCart} products={selectProductByType('headphone')}/> 
        </div>
    )
}
// export default React.memo(Body);
export default Body;
