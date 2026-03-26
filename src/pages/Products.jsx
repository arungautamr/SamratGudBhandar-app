import React from 'react';
import { Products as ProductsComponent } from '../components/Products';
import '../styles/page.css';

export const ProductsPage = () => {
  return (
    <main className="page products-page">
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Discover our range of premium jaggery products</p>
      </div>
      <ProductsComponent />
    </main>
  );
};
