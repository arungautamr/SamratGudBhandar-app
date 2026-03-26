import React from 'react';
import { useRecoilValue } from 'recoil';
import { productsAtom } from '../recoil/atoms';
import { useCart } from '../hooks/useCart';
import { config } from '../config/env';
import '../styles/products.css';

export const Products = () => {
  const products = useRecoilValue(productsAtom);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    const message = `Hi! I'm interested in ${product.name} (${product.weight}) priced at ${product.price}`;
    window.open(
      `https://wa.me/${config.STORE_WHATSAPP}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Products</h2>
          <p>Premium quality jaggery for your family's health and wellness</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-weight">{product.weight}</p>
                <p className="product-description">{product.description}</p>
                {/* <div className="product-footer"> */}
                  {/* <span className="product-price">{product.price}</span> */}
                  {/* <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button> */}
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="products-footer">
          <button
            className="btn btn-outline"
            onClick={() => {
              const message = 'Hi! I would like to see all your products. Please share the catalog.';
              window.open(
                `https://wa.me/${config.STORE_WHATSAPP}?text=${encodeURIComponent(message)}`,
                '_blank'
              );
            }}
          >
            View All Products
          </button>
        </div> */}
      </div>
    </section>
  );
};
