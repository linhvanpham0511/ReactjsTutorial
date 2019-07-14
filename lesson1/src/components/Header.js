import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Trang chủ <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Sản phẩm</a>
                    <a className="nav-item nav-link" href="#">Giới thiệu</a>
                    <a className="nav-item nav-link" href="#">Giỏ hàng</a>
                </div>
            </nav>
        )
    }
}
export default Header;
