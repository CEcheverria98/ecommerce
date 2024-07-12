// src/components/Home.js

import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Carousel } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/items/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-center">
            <h1>My Awesome Company</h1>
          </Card.Title>
        </Card.Body>
      </Card>
      
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://th.bing.com/th/id/R.fcefca1e7358ff31b53209538141bdfe?rik=rrKhYtcIN618vw&pid=ImgRaw&r=0"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://preview.redd.it/i0sy4fjx0io41.jpg?auto=webp&s=b4a40a44f0b77acf53797e8a22f52f5325c5bd36"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://i.ytimg.com/vi/IUg5Azt3mzY/maxresdefault.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 className="mb-4 text-center">Our Products</h2>
      <Row xs={1} md={3} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.img || 'https://via.placeholder.com/150'} /> {/* Usa el campo img */}
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
