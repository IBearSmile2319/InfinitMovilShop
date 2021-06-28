import { productConstants } from "../actions/constants";
const initialState = {
    products: [],
    priceRange: {},
    productsByPrice: {
        under5: [],
        under10: [],
        under20: [],
        under50: [],
        under1s: [],
        under2s: [],
        under3s: [],
        under1k: [],
        under2k: [],
        under3k: [],
    },
    pageRequest: false,
    page: {},
    error: null,
    productDetails: {},
    loading: false,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break
        case productConstants.GET_PRODUCTS_BY_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                priceRange: action.payload.priceRange,
                productsByPrice: {
                    ...action.payload.productsByPrice,
                },
            };
            break;
        case productConstants.GET_PRODUCT_PAGE_REQUEST:
            state = {
                ...state,
                pageRequest: true,
            };
            break;
        case productConstants.GET_PRODUCT_PAGE_SUCCESS:
            state = {
                ...state,
                page: action.payload.page,
                pageRequest: false,
            };
            break;
        case productConstants.GET_PRODUCT_PAGE_FAILURE:
            state = {
                ...state,
                pageRequest: false,
                error: action.payload.error,
            };
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                productDetails: action.payload.productDetails,
            };
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            };
            break;
        default:
            break;
    }
    return state
}