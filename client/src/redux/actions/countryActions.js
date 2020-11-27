import axios from 'axios'
import { COUNTRY_LIST_REQUEST, COUNTRY_LIST_SUCCESS, COUNTRY_LIST_FAIL } from '../constants/countryConstants'

export const fetchCountryData = () => async dispatch => {
  dispatch({ type: COUNTRY_LIST_REQUEST })
  try {
    const headers = { 'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864' }
    const response = await axios.get('https://api.covid19api.com/summary', { headers })
    const topCountries = getTopCountries(response.data.Countries)
    dispatch({ type: COUNTRY_LIST_SUCCESS, payload: topCountries })
  } catch (err) {
    dispatch({ type: COUNTRY_LIST_FAIL, payload: 'Sorry, an error has occured. Please try again later.' })
  }
}

function getTopCountries(countries) {
  countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
  return countries.slice(0, 10)
}
