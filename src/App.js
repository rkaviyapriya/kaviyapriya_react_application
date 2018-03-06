import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as productActions from "./actionCreators/products";
import ProductList from "./components/productList";
import AddProduct from './components/addProduct';
import EditProduct from './components/editProduct';

class App extends Component {
  componentDidMount() {
    const { productActions } = this.props;
    productActions.getProducts();
  }

  onDelete = (product) => {
    const { productActions } = this.props;
    productActions.deleteProduct(product);
    window.location.href = "/";
  }

  addProduct = (productAdd) => {
    const { productActions } = this.props;
    productActions.addProduct(productAdd);
    window.location.href = "/";
  }

  onEdit = (product) => {
    const { productActions } = this.props;
    productActions.editProduct(product);
  }

  onEditClick = (editProducts) => {
    const { productActions } = this.props;
    productActions.editSuccessProduct(editProducts);
    window.location.href = "/";
  }

  onPaginate = (pageNo) => {
    const { productActions } = this.props;
    productActions.paginate(pageNo);
  }

  handleModal = () => {
    this.props.actions.modalToggle();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              <ProductList
                {...props}
                products={this.props.productsList}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
                handlePaginateClick={this.onPaginate}
                currentPageNum={this.props.currentPageNumber}
                contentNumber={this.props.pageContentNumber}
                modalShow={this.props.modalStatus}
                modalClick={this.handleModal}
              />
            }
          />
          <Route
            path="/add-product"
            render={props =>
              <AddProduct
                {...props}
                onClickAdd={this.addProduct}
              />
            }
          />
          <Route
            path="/edit-product"
            render={props =>
              <EditProduct
                {...props}
                editProducts={this.props.editProd}
                onClickEdit={this.onEditClick}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    productsList: state.products,
    productAdd: state.addProduct,
    editProd: state.editProduct,
    currentPageNumber: state.currentPage,
    pageContentNumber: state.contentPerPage,
    modalStatus: state.modalOpened
  };
}
function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
