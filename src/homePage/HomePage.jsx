import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div style={{display: 'flex', gap: '20px'}}>
            <Link to={"/vybor"}>vyborKolich</Link>
            <Link to={"/card-tovara"}>cards</Link>
            <Link to={"/nabor"}>naborCards</Link>
            <Link to={"/weddings"}>weddingCards</Link>
            <Link to={"/korzina"}>korzina</Link>
            <Link to={"/vkusy"}>Vybor vkusov</Link>
            <Link to={"/dopolnenie"}>dopolnenie</Link>
        </div>
    );
};

export default HomePage;