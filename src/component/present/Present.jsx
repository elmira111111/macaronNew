import React, { useEffect, useState } from 'react'
import "./Present.scss"
import axios from 'axios';
import { present } from '../../data'

function Present() {


    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://ec2-51-21-3-88.eu-north-1.compute.amazonaws.com/api/news')
            .then(response => {
                setNews(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: Ошибка сети</div>;
    }
    return (
        <div className='present'>
            {
                news.map((item) => (
                    <div className={`present-project ${item.id === 9 ? "hide-mobile" : ""}`} key={item.id}>
                         <img src={`http://ec2-51-21-3-88.eu-north-1.compute.amazonaws.com${item.images}`} alt={item.name} />
                        <div className='content-text'>
                            <h6>{item.price}</h6>
                            <h5>{item.name}</h5>
                            <h4>{item.created_at}</h4>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default Present