import { COUNTRY_LIST_REQUEST, COUNTRY_LIST_SUCCESS, COUNTRY_LIST_FAIL } from '../constants/countryConstants'

const initialState = {
  countryData: [],
  loading: true,
  error: false
}

export const countryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_LIST_REQUEST:
      return { ...state, loading: true, error: false }
    case COUNTRY_LIST_SUCCESS:
      return { ...state, loading: false, countryData: action.payload }
    case COUNTRY_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
