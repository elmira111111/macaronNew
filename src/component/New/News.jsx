import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.scss';

function News() {
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
    <div className='news'>
      {news.map((item) => (
        <div className='content' key={item.id}>
          <img src={`http://ec2-51-21-3-88.eu-north-1.compute.amazonaws.com${item.images}`} alt={item.name} />
          <div className='content-text'>
            <h6>{item.price}</h6>
            <h5>{item.name}</h5>
            <h4>{item.created_at}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
