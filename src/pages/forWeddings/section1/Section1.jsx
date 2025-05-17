import './section1.css'
import vaza from "../../../assets/weddingVaza.png";
import list from "../../../assets/weddingList.svg";
import mac1 from "../../../assets/weddingMac1.svg";
import mac2 from "../../../assets/weddingMac2.svg";
import yellowShadow from "../../../assets/weddingYellowShadow.svg";
import yellowShadow2 from "../../../assets/weddingYellowShadow2.svg";
import pinkShadow from "../../../assets/weddingPinkShadow.svg";


const Section1 = () => {
    return (
        <div className={'container'}>
            <nav className="breadcrumbs">
                Главная&gt; <span> Предложение для свадеб</span>
            </nav>
            <div className="section1 container-app">
                <div className="image-wrapper">
                    <img src={list} alt="" className="bg-img-list"/>
                    <img src={mac1} alt="" className="bg-img-mac1"/>
                    <img src={mac2} alt="" className="bg-img-mac2"/>
                    <img src={yellowShadow} alt="" className="bg-img-yellowShadow"/>
                    <img src={yellowShadow2} alt="" className="bg-img-yellowShadow2"/>
                    <img src={pinkShadow} alt="" className="bg-img-pinkShadow"/>
                    <img src={pinkShadow} alt="" className="bg-img-pinkShadow2"/>
                    <img src={vaza} alt="" className="front-img-vaza"/>
                </div>

                <div className={'section1-info-text'}>
                    <img src={yellowShadow2} alt="" className="bg-info-yellowShadow1"/>
                    <h1>Свадебное предложение</h1>
                    <p>Нежные пирожные макаронс с разными вкусами для <br/> украшения вашего свадебного торжества</p>
                    <div className={'info-text'}>
                        <img src={yellowShadow2} alt="" className="bg-info-yellowShadow2"/>
                        <p style={{marginBottom: '20px'}}>Рыба-текст предложения </p>
                        <p>Приятно, граждане, наблюдать, как действия представителей оппозиции, превозмогая сложившуюся
                            непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной
                            неузнаваемости, из-за чего возрастает их статус бесполезности. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;