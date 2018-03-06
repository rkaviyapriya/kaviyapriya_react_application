import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Modal from './modalBox';

class ProductList extends Component {
    renderTableRow = (product) => {
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.rol}</td>
                <td><Link to="/edit-product"><button
                    onClick={() => { this.props.onEdit(product) }} className="btn btn-primary">
                    &#x270E;</button></Link>
                    <Modal delProd={this.handleModalDelete} product={product} modalView={this.props.modalShow} modalClickEvent={this.props.modalClick} />
                </td>
            </tr>
        )
    }
    renderTable = (currentTodos) => {
        return (<table border="1" className="tableBorder">
            <thead>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>R.O.L</th>
                <th>Action</th>
            </thead>
            {currentTodos.map(product => {
                return this.renderTableRow(product);
            })}
        </table>);
    }
    tableDisplay = (products, currentPageNum, contentNumber) => {
        const indexOfLastTodo = currentPageNum * contentNumber;
        const indexOfFirstTodo = indexOfLastTodo - contentNumber;
        const currentTodos = products.slice(indexOfFirstTodo,
            indexOfLastTodo);
        return (
            this.renderTable(currentTodos)
        )
    }
    handleClick = (e) => {
        const { handlePaginateClick } = this.props;
        const pageNo = Number(e.target.id);
        handlePaginateClick(pageNo);
    }
    handleModalDelete = (product) => {
        const { onDelete } = this.props;
        onDelete(product);
    }
    paginate = (products, contentNumber) => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / contentNumber); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });
        return (
            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
        )
    }
    render() {
        return (
            <div>
                <h1 className="alignCenter">PRODUCT LIST</h1>
                <Link to="/add-product"><button className="addBtn">Add New Product</button></Link>
                {this.tableDisplay(this.props.products, this.props.currentPageNum, this.props.contentNumber)}
                {this.paginate(this.props.products, this.props.contentNumber)}
            </div>
        )
    }
}
export default ProductList;


