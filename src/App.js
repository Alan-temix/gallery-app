import React, { useEffect, useState } from 'react';
import './App.css';
import './CustomStyle.css';
import ImageSection from './components/ImageSection';
import Header from './components/Header';

function App() {
  //State
  const API_KEY = "23254352-f919077eb35445abe0d221b1c";
  const [imageType, setImageType] = useState("all");
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(true);

  const handlerClickForData =(e) => {
    setImageType(e.target.value);
    setStatus(true);
  }

  useEffect(() => {
    if(status) {
      fetch(`https://pixabay.com/api/?key=${API_KEY}&q=art&image_type=${imageType}`)
      .then(response => {
          return response.json();
      })
      .then(data => {
          setImages(data.hits);
      })
      setStatus(false);
      console.log(images);
    }
  }, [images, status]);

  return (
    <div className="App">
        <Header event={handlerClickForData} />
        <hr />
        <div className="container-image-section">
          {images && images.map(item => (<ImageSection key={item.id} webformatURL={item.webformatURL} />)) }
        </div>
    </div>
  );
}

export default App;
