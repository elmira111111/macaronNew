import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VyborKolich from "./pages/sobratNabory/vyborKolich/VyborKolich.jsx";
import CardsSlider from "./pages/cardTovara/cardsSlider/CardsSlider.jsx";
import CardTovara from "./pages/cardTovara/tovarCards/CardTovara.jsx";
import HomePage from "./homePage/HomePage.jsx";
import InfoSection from "./pages/cardTovara/infoSection/InfoSection.jsx";
import NaborCards from "./pages/podarkaNabory/naborCards/NaborCards.jsx";
import WeddingCards from "./pages/forWeddings/weddingCards/WeddingCards.jsx";
import Section1 from "./pages/forWeddings/section1/Section1.jsx";
import Korzina from "./pages/korzina/Korzina.jsx";
import VyborVkusov from "./pages/vyborVkusov/VyborVkusov.jsx";
import Dopolnenie from "./pages/dopolnenie/Dopolnenie.jsx";
import KorzinaSection from "./pages/korzina/korzinaSection/KorzinaSection.jsx";
import SliderTovara from "./pages/cardTovara/cardsSlider/SliderTovara.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/vybor" element={<VyborKolich />} />
                <Route path="/nabor" element={<NaborCards />} />
                <Route path="/korzina" element={
                    <>
                        <Korzina />
                        <KorzinaSection />
                    </>
                } />
                <Route path="/vkusy" element={<VyborVkusov />} />
                <Route path="/dopolnenie" element={<Dopolnenie />} />
                <Route path="/weddings" element={
                    <>
                        <Section1/>
                        <WeddingCards />
                    </>
                } />
                <Route
                    path="/card-tovara"
                    element={
                        <>
                            <CardTovara />
                            <InfoSection />
                            <SliderTovara />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
