import {
    GET_PRODUCTS, DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE,
    ADD_PRODUCT, ADD_INPUT_CHANGE, EDIT_PRODUCT, EDIT_INPUT_CHANGES, EDIT_SUCCESS_PRODUCT, PAGINATE, MODAL_TOGGLE, PRODUCTS_LIST_SUCCESS, PRODUCTS_LIST_FAILURE
} from "../actionTypes/products";
export function getProducts() {
    return {
        type: GET_PRODUCTS
    };
}
export function productsListSuccess(products) {
    return {
        type: PRODUCTS_LIST_SUCCESS,
        products
    };
}
export function productsListFailure(error) {
    return {
        type: PRODUCTS_LIST_FAILURE,
        error
    };
}
export function addProduct(productAdd) {
    return {
        type: ADD_PRODUCT,
        productAdd
    };
}

export function deleteProduct(prod) {
    return {
        type: DELETE_PRODUCT,
        prod
    };
}
export function deleteProductSuccess(products) {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        products
    };
}
export function deleteProductFailure(error) {
    return {
        type: DELETE_PRODUCT_FAILURE,
        error
    };
}
export function editProduct(prod) {
    return {
        type: EDIT_PRODUCT,
        prod

    };
}

export function editSuccessProduct(editProducts) {
    return {
        type: EDIT_SUCCESS_PRODUCT,
        editProducts
    };
}
export function paginate(currentPage) {
    return {
        type: PAGINATE,
        currentPage
    }
}
export function modalToggle() {
    return {
        type: MODAL_TOGGLE
    }
}
