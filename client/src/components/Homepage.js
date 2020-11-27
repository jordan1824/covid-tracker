import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountryData } from '../redux/actions/countryActions'

// Components
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import CountryArticle from './CountryArticle'

function Homepage(props) {
  const dispatch = useDispatch()
  const countryList = useSelector(state => state.countryList)
  const { countryData, loading, error } = countryList

  useEffect(() => {
    dispatch(fetchCountryData())
  }, [])

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <ErrorMessage message={error} />
  }
  return (
    <>
      <h1>Homepage</h1>
      {countryData.length > 0 && countryData.map(country => <CountryArticle key={country.Slug} country={country} />)}
    </>
  )
}

export default Homepage
