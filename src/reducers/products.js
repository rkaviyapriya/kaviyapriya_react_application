import { GET_PRODUCTS, DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, ADD_INPUT_CHANGE, EDIT_PRODUCT, EDIT_INPUT_CHANGES, PAGINATE, MODAL_TOGGLE, PRODUCTS_LIST_SUCCESS, PRODUCTS_LIST_FAILURE } from "../actionTypes/products";
export default (prevState = {
    products: [],
    addProduct: {},
    editProduct: {},
    currentPage: 1,
    contentPerPage: 10,
    modalOpened: false
},
    action
) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...prevState
            };
        case PRODUCTS_LIST_SUCCESS:
            return {
                ...prevState,
                products: action.products
            };
        case PRODUCTS_LIST_FAILURE:
            return {
                ...prevState,
                products: action.products
            };
        case DELETE_PRODUCT:
            return {
                ...prevState
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...prevState,
                products: action.products
            }

        case ADD_PRODUCT:
            return {
                ...prevState,
                addProduct: { ...prevState.addProduct, ...action.addItem }
            }
        case EDIT_PRODUCT:
            return {
                ...prevState,
                editProduct: { ...action.prod }
            }
        case EDIT_INPUT_CHANGES:
            return {
                ...prevState,
                editProduct: { ...prevState.editProduct, ...action.editItem }
            }
        case PAGINATE:
            return {
                ...prevState,
                currentPage: action.currentPage
            }
        case MODAL_TOGGLE:
            return {
                ...prevState,
                modalOpened: !prevState.modalOpened
            }
        default:
            return {
                ...prevState
            }
    }
}