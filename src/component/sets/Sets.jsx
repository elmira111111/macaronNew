import React, { useEffect, useState } from 'react';
import './Sets.scss';
import axios from 'axios';
import svg15 from "../"

function Sets() {
    const [sets, setSets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://ec2-51-21-3-88.eu-north-1.compute.amazonaws.com/api/sets')
            .then(response => {
                console.log('API response:', response.data);
                setSets(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Axios error:', err);
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
        <div className='sets'>
            {sets.map((item) => (
                <div className='container-content' key={item.id}>
                    {item.images.map((img, index) => (
  <img
    key={index}
    src={`http://ec2-51-21-3-88.eu-north-1.compute.amazonaws.com${img}`}
  />
))}


                    <div className='content2'>
                        <h3>{item.name}</h3>
                        <h6>{item.description}</h6>
                    </div>

                    <div className='div6-3'>
                        <div className='line-top'></div>
                        <div className='price-img'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <p>{item.price}</p>
                            </div>
                            <div className='line-vertical'></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img src={svg15} alt="cart icon" />
                                <h6 style={{
                                    color: 'rgba(0, 0, 0, 0.88)',
                                    fontFamily: 'Montserrat',
                                    fontSize: '14px',
                                    fontWeight: '800',
                                    lineHeight: '17px',
                                    paddingTop: '5px'
                                }}>
                                    В корзину
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sets;
