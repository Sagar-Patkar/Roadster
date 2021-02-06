import React from "react";
import products from "../products.js";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.jsx";

const HomeScreen = () => {
  return (
    <>
      <h1>Products</h1>
      <Row>
        {products.map((product, index) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
