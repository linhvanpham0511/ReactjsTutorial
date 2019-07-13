import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="row mt-5">
                <div className="col-xs-6 col-sm-6 col-md-4">
                    <div className="card">
                        <img className="card-img-top" src="https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-400x460.png" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Iphone XS Max</h5>
                            <p className="card-text"> 12.000.000 VND</p>
                            <a href="#" className="btn btn-primary">Đặt Mua</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;
