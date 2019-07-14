import React, { Component } from 'react';

class Product extends Component {
    addToCart = () => {
        alert('Đặt mua thành công ' + this.props.children);
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-4">
                <div className="card">
                    <img className="card-img-top py-3" src={this.props.image} alt={this.props.children} />
                    <div className="card-body">
                        <h5 className="card-title"> {this.props.children} </h5>
                        <p className="card-text"> {this.props.price} VND</p>
                        <a href="#" className="btn btn-primary" onClick={this.addToCart} >Đặt Mua</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;
