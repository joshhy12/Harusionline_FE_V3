import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaTrash, FaUpload } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Picha.css';

const Picha = () => {
  const [husbandPhotos, setHusbandPhotos] = useState([]);
  const [wifePhotos, setWifePhotos] = useState([]);
  const [togetherPhotos, setTogetherPhotos] = useState([]);

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

  return (
    <div className="pichaContainer">
      <h2 className="pichaTitle">Picha</h2>
      <p className="pichaDescription">This section showcases various images and photos related to our events. Upload your photos below!</p>

      <div className="pichaUploadSection row">
        <div className="col-md-4">
          <h4 className="pichaSectionTitle">Husband Photos</h4>
          <input
            type="file"
            className="pichaFileInput form-control"
            multiple
            accept="image/*"
            onChange={(e) => handleUpload(e, 'husband')}
            id="husbandPhotos"
          />
          <label className="pichaUploadLabel" htmlFor="husbandPhotos">
            <FaUpload /> Upload Husband Photos
          </label>

          <div className="row row-cols-1 g-4 mt-4">
            {husbandPhotos.map((photo, index) => (
              <div className="col" key={index}>
                <Card className="pichaCard">
                  <Card.Img
                    variant="top"
                    src={photo.url || URL.createObjectURL(photo.originFileObj)}
                    className="pichaImage"
                    alt={`Husband Photo ${index + 1}`}
                  />
                  <Card.Body>
                    <Button
                      variant="danger"
                      className="pichaDeleteButton"
                      onClick={() => handleDelete(index, 'husband')}
                    >
                      <FaTrash /> 
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <h4 className="pichaSectionTitle">Wife Photos</h4>
          <input
            type="file"
            className="pichaFileInput form-control"
            multiple
            accept="image/*"
            onChange={(e) => handleUpload(e, 'wife')}
            id="wifePhotos"
          />
          <label className="pichaUploadLabel" htmlFor="wifePhotos">
            <FaUpload /> Upload Wife Photos
          </label>

          <div className="row row-cols-1 g-4 mt-4">
            {wifePhotos.map((photo, index) => (
              <div className="col" key={index}>
                <Card className="pichaCard">
                  <Card.Img
                    variant="top"
                    src={photo.url || URL.createObjectURL(photo.originFileObj)}
                    className="pichaImage"
                    alt={`Wife Photo ${index + 1}`}
                  />
                  <Card.Body>
                    <Button
                      variant="danger"
                      className="pichaDeleteButton"
                      onClick={() => handleDelete(index, 'wife')}
                    >
                      <FaTrash /> 
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <h4 className="pichaSectionTitle">Together Photos</h4>
          <input
            type="file"
            className="pichaFileInput form-control"
            multiple
            accept="image/*"
            onChange={(e) => handleUpload(e, 'together')}
            id="togetherPhotos"
          />
          <label className="pichaUploadLabel" htmlFor="togetherPhotos">
            <FaUpload /> Upload Together Photos
          </label>

          <div className="row row-cols-1 g-4 mt-4">
            {togetherPhotos.map((photo, index) => (
              <div className="col" key={index}>
                <Card className="pichaCard">
                  <Card.Img
                    variant="top"
                    src={photo.url || URL.createObjectURL(photo.originFileObj)}
                    className="pichaImage"
                    alt={`Together Photo ${index + 1}`}
                  />
                  <Card.Body>
                    <Button
                      variant="danger"
                      className="pichaDeleteButton"
                      onClick={() => handleDelete(index, 'together')}
                    >
                      <FaTrash />
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Picha;