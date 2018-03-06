import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, EDIT_SUCCESS_PRODUCT } from "../actionTypes/products";
import { productsListSuccess, productsListFailure } from "../actionCreators/products";
function* getProducts() {
    let url = "http://localhost:3000/products";
    try {
        let products = yield fetch(url).then(r =>
            r.json()
        );
        yield put(productsListSuccess(products));
    } catch (error) {
        yield put(productsListFailure(error));
    }
}
function* addProduct(action) {
    try {
        let product = yield fetch("http://localhost:3000/products", {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.productAdd)
        }).then(result => result.json());

        yield put(productsListSuccess(product));
    }
    catch (error) {
        yield put(productsListFailure(error));
    }
}
function* deleteProduct(action) {
    try {
        let product = yield fetch(`http://localhost:3000/products/${action.prod.id}`, {
            method: 'DELETE'
        }).then(result => result.json());
        yield put(productsListSuccess(product));
    }
    catch (error) {
        yield put(productsListFailure(error));
    }
}
function* editSuccessProduct(action) {
    try {
        let product = yield fetch(`http://localhost:3000/products/${action.editProducts.id}`, {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.editProducts)
        }).then(result => result.json());
        yield put(productsListSuccess(product));
    }
    catch (error) {
        yield put(productsListFailure(error));
    }
}
export function* getProductsWatcher() {
    yield [takeLatest(GET_PRODUCTS, getProducts),
    takeLatest(DELETE_PRODUCT, deleteProduct),
    takeLatest(ADD_PRODUCT, addProduct),
    takeLatest(EDIT_SUCCESS_PRODUCT, editSuccessProduct)];
}
