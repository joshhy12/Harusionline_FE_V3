import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaTrash, FaUpload } from 'react-icons/fa';
import PhotoUploadModal from '../../models/PhotoUploadModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Picha.css';

const Picha = () => {
  const [husbandPhotos, setHusbandPhotos] = useState([]);
  const [wifePhotos, setWifePhotos] = useState([]);
  const [togetherPhotos, setTogetherPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleUpload = (event, category) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.map(file => ({
      originFileObj: file,
      url: URL.createObjectURL(file)
    }));

    switch (category) {
      case 'husband':
        setHusbandPhotos([...husbandPhotos, ...newPhotos]);
        break;
      case 'wife':
        setWifePhotos([...wifePhotos, ...newPhotos]);
        break;
      case 'together':
        setTogetherPhotos([...togetherPhotos, ...newPhotos]);
        break;
      default:
        break;
    }
    setShowModal(false);
  };

  const handleDelete = (index, category) => {
    switch (category) {
      case 'husband':
        const newHusbandPhotos = [...husbandPhotos];
        newHusbandPhotos.splice(index, 1);
        setHusbandPhotos(newHusbandPhotos);
        break;
      case 'wife':
        const newWifePhotos = [...wifePhotos];
        newWifePhotos.splice(index, 1);
        setWifePhotos(newWifePhotos);
        break;
      case 'together':
        const newTogetherPhotos = [...togetherPhotos];
        newTogetherPhotos.splice(index, 1);
        setTogetherPhotos(newTogetherPhotos);
        break;
      default:
        break;
    }
    alert('Photo deleted successfully');
  };

  const openModal = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  return (
    <div className="pichaContainer">
      <h2 className="pichaTitle">Picha</h2>
      <p className="pichaDescription">This section showcases various images and photos related to our events. Upload your photos below!</p>

      <div className="pichaUploadSection row">
        {['husband', 'wife', 'together'].map((category) => (
          <div className="col-md-4" key={category}>
            <h4 className="pichaSectionTitle">{category.charAt(0).toUpperCase() + category.slice(1)} Photos</h4>
            <Button 
              className="w-100 mb-3" 
              onClick={() => openModal(category)}
            >
              <FaUpload /> Upload {category.charAt(0).toUpperCase() + category.slice(1)} Photos
            </Button>

            <div className="row row-cols-1 g-4">
              {(category === 'husband' ? husbandPhotos : 
                category === 'wife' ? wifePhotos : 
                togetherPhotos).map((photo, index) => (
                <div className="col" key={index}>
                  <Card className="pichaCard">
                    <Card.Img
                      variant="top"
                      src={photo.url || URL.createObjectURL(photo.originFileObj)}
                      className="pichaImage"
                      alt={`${category} Photo ${index + 1}`}
                    />
                    <Card.Body>
                      <Button
                        variant="danger"
                        className="pichaDeleteButton"
                        onClick={() => handleDelete(index, category)}
                      >
                        <FaTrash />
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <PhotoUploadModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleUpload={handleUpload}
        category={selectedCategory}
      />
    </div>
  );
};

export default Picha;
