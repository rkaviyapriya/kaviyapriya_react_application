import React, { Component } from 'react';
import './style.css'
class Modal extends Component {
    modalToggle = () => {
        this.props.modalClickEvent();
    }
    render() {
        const { delProd, product } = this.props;
        const coverClass = this.props.modalView ? 'modal-cover modal-cover-active' : 'modal-cover'
        const containerClass = this.props.modalView ? 'modal-container modal-container-active' : 'modal-container'
        return (
            <div class="displayStyle">
                <button className='btn btn-primary' onClick={this.modalToggle}>&#x2716;</button>
                <div className={containerClass}>
                    <div className='modalHeader'>Confirmation</div>
                    <div className='modalBody'>Are you sure to delete?</div>
                    <div className="modalFooter">
                        <button onClick={() => { delProd(product) }} className="btn btn-primary">Delete</button>
                        <button onClick={this.modalToggle} className="btn btn-primary">Cancel</button>
                    </div>
                </div>
                <div className={coverClass} onClick={this.modalToggle}></div>
            </div>

        )
    }
}
export default Modal;