
import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function WeddingPhotos() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const querySnapshot = await getDocs(collection(db, 'weddingPhotos'));
    const photoList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setPhotos(photoList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (image) {
      const imageRef = ref(storage, `wedding/${image.name}`);
      await uploadBytes(imageRef, image);
      const url = await getDownloadURL(imageRef);

      await addDoc(collection(db, 'weddingPhotos'), {
        title,
        description,
        imageUrl: url,
        timestamp: new Date()
      });

      setTitle('');
      setDescription('');
      setImage(null);
      fetchPhotos();
    }
  };

  const handleDelete = async (id, imageUrl) => {
    await deleteDoc(doc(db, 'weddingPhotos', id));
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
    fetchPhotos();
  };

  return (
    <Container className="mt-4">
      <h2>Wedding Photo Gallery Management</h2>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Upload Photo
        </Button>
      </Form>

      <Row>
        {photos.map((photo) => (
          <Col md={4} key={photo.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={photo.imageUrl} />
              <Card.Body>
                <Card.Title>{photo.title}</Card.Title>
                <Card.Text>{photo.description}</Card.Text>
                <Button 
                  variant="danger" 
                  onClick={() => handleDelete(photo.id, photo.imageUrl)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WeddingPhotos;
