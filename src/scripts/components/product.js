import React from "react"
import PropTypes from "prop-types"
import { Col } from 'react-bootstrap'

const Product = ({ onClick, title, description, price, imageUrl }) => (
  <div
    className="product"
    onClick={onClick}
  >
  <Col md={3} style={{backgroundImage: 'url('+imageUrl+')'}} className="product-thumbnail">
  </Col>
  <Col md={9}>
    <h2 className="product-title">{title}</h2>
    <div className="product-description">{description}</div>
    <div className="product-price">{price} €</div>
  </Col>
  </div>
);

Product.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Product
