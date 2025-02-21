import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductPreviews = ({ product }) => {
  const [index, setIndex] = useState(0);

  const styles = {
    card: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      padding: '1rem 1.5rem',
    },
    gallery: {
      display: 'flex',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    galleryItem: {
      width: '100px',
      height: '100px',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      marginRight: '10px',
      padding: '8px',
      cursor: 'pointer',
      overflow: 'hidden', // Ensure the image is contained within the div
    },
    galleryImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      backgroundColor: "white"
      // mixBlendMode: 'multiply' // Ensure image covers the div without distortion
    },
    mainImage: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      backgroundColor: "white"
      // mixBlendMode: 'multiply' // Ensure the main image fits the container
    }
  };

  return (
    <div style={styles.card}>
      {product && product.length > 0 ? (
        <>
          <div className="text-center mb-3 p-md-4">
            <img
              src={product[index]}
              alt=""
              style={styles.mainImage}
              className="img-fluid"
            />
          </div>

          <Nav style={styles.gallery}>
            {product.map((preview, i) => (
              <li key={i} onClick={() => setIndex(i)} style={styles.galleryItem}>
                <img src={preview} alt="" style={styles.galleryImage} className="img-fluid" />
              </li>
            ))}
          </Nav>
        </>
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

ProductPreviews.propTypes = {
  product: PropTypes.array.isRequired,
};

const Productimage = ({ product }) => {
  const sectionStyles = {
    backgroundColor: '#fff',
    color: '#23262f',
    overflow: 'hidden',
    padding: '60px 0',
    position: 'relative',
  };

  return (
    <section style={sectionStyles} id="ezy__epoverview4_0jZbEMHV">
      <Container>
        <Row>
          <Col lg={6}>
            <ProductPreviews product={product.product_images} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Productimage.propTypes = {
  product: PropTypes.shape({
    product_images: PropTypes.array.isRequired,
  }).isRequired,
};

export default Productimage;