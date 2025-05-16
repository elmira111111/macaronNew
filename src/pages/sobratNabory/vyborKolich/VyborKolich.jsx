import "./vyborKolich.css";
import vybor1 from "../../../assets/vyborImg1.svg"
import vybor2 from "../../../assets/vyborImg2.svg"
import vybor3 from "../../../assets/vyborImg3.svg"
import vybor4 from "../../../assets/vyborImg4.svg"
import vybor5 from "../../../assets/vyborImg5.svg"

const VyborKolich = () => {
    const sets = [
        {
            id: 1,
            title: "Набор из 6 макарон",
            price: "350 руб.",
            img: vybor1,
        },
        {
            id: 2,
            title: "Набор из 12 макарон",
            price: "700 руб.",
            img: vybor2,
        },
        {
            id: 3,
            title: "Набор из 24 макарон",
            price: "1400 руб.",
            img: vybor3,
        },
        {
            id: 4,
            title: "Набор из 48 макарон",
            price: "2800 руб.",
            img: vybor4,
        },
        {
            id: 5,
            title: "Набор из 40 макарон в круглой коробке",
            price: "3000 руб.",
            img: vybor5,
        },
        {
            id: 6,
            title: "Набор из 70 макарон в круглой коробке",
            price: "5000 руб.",
            img: vybor5,
        },
    ];

    return (
        <div className="vybor-page container-app">
            <nav className="breadcrumbs">
                Главная &gt; Собрать набор &gt; <span>Выбрать количество</span>
            </nav>
            <h1 className={"page-title"}>Выберите количество</h1>
            <div className="cards-grid">
                {sets.map((set) => (
                    <div className="set-card" key={set.id}>
                        <img src={set.img} alt={set.title} />
                        <p className="set-title">{set.title}</p>
                        <p className="set-price">{set.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VyborKolich;
