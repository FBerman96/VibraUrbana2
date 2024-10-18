import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import product1 from '../assets/product1.jpg'; 
import product2 from '../assets/product2.jpg'; 
import product3 from '../assets/product3.jpg'; 

const Home = () => {
    const featuredProducts = [
        { id: 1, name: 'BLAZER TRAJE', image: product1, price: '$279.999' },
        { id: 2, name: 'CAMISETA BÁSICA', image: product2, price: '$42.990' },
        { id: 3, name: 'JEANS CARGO', image: product3, price: '$139.990,00' },
    ];

    return (
        <div className="container" style={{ paddingTop: '20px', paddingBottom: '50px' }}>
            {/* Carrusel de imágenes */}
            <Carousel style={{ marginBottom: '50px' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={product1}
                        alt="BLAZER TRAJE ESTRUCTURA"
                        style={{ maxHeight: '800px', objectFit: 'contain' }}
                    />
                    <Carousel.Caption>
                        <h3>BLAZER TRAJE ESTRUCTURA</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={product2}
                        alt=" CAMISETA BÁSICA HEAVY WEIGHT"
                        style={{ maxHeight: '800px', objectFit: 'contain' }}
                    />
                    <Carousel.Caption>
                        <h3>CAMISETA BÁSICA HEAVY WEIGHT</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={product3}
                        alt="JEANS CARGO SALPICADURAS"
                        style={{ maxHeight: '800px', objectFit: 'contain' }}
                    />
                    <Carousel.Caption>
                        <h3>JEANS CARGO SALPICADURAS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Productos destacados */}
            <h2 className="mt-4" style={{ marginTop: '50px', marginBottom: '30px' }}>Productos Destacados</h2>
            <Row className="featured-products">
                {featuredProducts.map(product => (
                    <Col md={4} key={product.id} className="mb-4" style={{ padding: '20px' }}>
                        <Card>
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                                <Link to="/products">
                                    <Button variant="primary">Ver Más</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;
