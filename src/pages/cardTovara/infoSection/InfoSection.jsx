import { useState } from "react";
import "./infoSection.css";

const InfoSection = () => {
    const [activeTab, setActiveTab] = useState("Описание");

    const renderContent = () => {
        switch (activeTab) {
            case "Описание":
                return (
                    <>
                        <p>Текстовая информация и таблички.<br />Для примера рыба-текст</p>
                        <p>
                            Банальные, но неопровержимые выводы, а также представители современных социальных резервов
                            смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их
                            статус бесполезности. Сложно сказать, почему активно развивающиеся страны третьего мира
                            неоднозначны и будут указаны как претенденты на роль ключевых факторов. Являясь всего лишь частью
                            общей картины, диаграммы связей призывают нас к новым свершениям, которые, в свою очередь,
                            должны быть своевременно верифицированы.
                        </p>
                    </>
                );
            case "Состав и пищевая ценность":
                return <p>Здесь будет информация о составе и пищевой ценности.</p>;
            case "Условия и срок хранения":
                return <p>Здесь будет информация об условиях и сроке хранения.</p>;
            default:
                return null;
        }
    };

    return (
        <div className="tabs-container container-app">
            <div className="tabs-header">
                {["Описание", "Состав и пищевая ценность", "Условия и срок хранения"].map((tab) => (
                    <button
                        key={tab}
                        className={`tab ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="tab-content">{renderContent()}</div>
        </div>
    );
};

export default InfoSection;
