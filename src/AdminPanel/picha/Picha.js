import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaTrash, FaUpload } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Picha = () => {
  const [photos, setPhotos] = useState([]);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.map(file => ({
      originFileObj: file,
      url: URL.createObjectURL(file)
    }));
    setPhotos([...photos, ...newPhotos]);
  };

  const handleDelete = (index) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
    alert('Photo deleted successfully');
  };

  return (
    <div className="container p-4">
        <h2 className="text-center" style={{ color: '#24366b' }}>Picha</h2>
      <p>This section showcases various images and photos related to our events. Upload your photos below!</p>
      
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          multiple
          accept="image/*"
          onChange={handleUpload}
          id="photoUpload"
        />
        <label className="btn btn-primary mt-2" htmlFor="photoUpload">
          <FaUpload /> Upload Photos
        </label>
      </div>

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-4">
        {photos.map((photo, index) => (
          <div className="col" key={index}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={photo.url || URL.createObjectURL(photo.originFileObj)}
                style={{ height: '200px', objectFit: 'cover' }}
                alt={`Photo ${index + 1}`}
              />
              <Card.Body>
                <Button 
                  variant="danger" 
                  className="w-100"
                  onClick={() => handleDelete(index)}
                >
                  <FaTrash /> Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Picha;