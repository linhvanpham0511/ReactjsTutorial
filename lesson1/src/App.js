import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {


  render() {
    var products = [
      {
        id: 1,
        name: 'Iphone',
        price: 100000,
        image: "https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-600x600.jpg",
        status: true
      },
      {
        id: 2,
        name: 'Samsung',
        price: 120000,
        image: "https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-black-600x600.jpg",
        status: true
      },
      {
        id: 3,
        name: 'Oppo',
        price: 150000,
        image: "https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-tim-600x600.jpg",
        status: true
      }
    ];

    let elements = products.map((product, index) => {
      if (product.status) {
        return (
          <Product
            key={product.id}
            price={product.price}
            image={product.image}
          >
            {product.name}
          </Product>
        )
      }
    });

    return (
      <div className="container">
        <Header />
        <div className="row my-5">
          {elements}
        </div>
      </div>
    )
  }
}
export default App;
