import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
class EditProduct extends Component {
  constructor(props){
    super(props);
    this.productInfo = {
      id: '',
      productName: '',
      price: '',
      quantity: '',
      rol: '',
    }
  }
  onChange = () => {
    const name = e.target.name;
    const value = e.target.value;
    this.productInfo[name] = value;
  }

  render() {
    return (
      <div className="editProductMargin">
        <h1 className="textAlignCenter">EDIT PRODUCT</h1>
        <div className="textAlignCenter editMargin"><label>Product Name:</label>
          <input type="text" name="productName" onChange={(e) => { this.onChange(e) }}
            defaultValue={this.props.editProducts.productName} className="editTextbox1" /></div>
        <div className="textAlignCenter editMargin"><label>Price:</label>
          <input type="text" name="price" onChange={(e) => { this.onChange(e) }}
            defaultValue={this.props.editProducts.price} className="editTextbox2" /></div>
        <div className="textAlignCenter editMargin"><label>Quantity</label>
          <input type="text" name="quantity" onChange={(e) => { this.onChange(e) }}
            defaultValue={this.props.editProducts.quantity} className="editTextbox3" /></div>
        <div className="textAlignCenter editMargin"><label>R.O.L</label>
          <input type="text" name="rol" onChange={(e) => { this.onChange(e) }}
            defaultValue={this.props.editProducts.rol} className="editTextbox4" /></div>
        <div>
          <button onClick={(e) => { this.props.onClickEdit(this.productInfo) }} className="btn btn-primary">SAVE</button>
          <Link to="/"><button className="btn btn-primary">BACK</button></Link>
        </div>
      </div>
    );
  }
}

export default EditProduct;
