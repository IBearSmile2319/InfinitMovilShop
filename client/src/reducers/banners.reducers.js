import { bannerConstants } from "../actions/constants";

const initialState = {
    banners: [],
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case bannerConstants.GET_BANNER_SUCCESS:
            state = {
                ...state,
                banners: action.payload.banners
            }
            break;
        default:
            break;
    }
    return state

}