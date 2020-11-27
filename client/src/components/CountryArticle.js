import React from 'react'

function CountryArticle({ country }) {
  return (
    <article className="country">
      <h1>{country.Country}</h1>
    </article>
  )
}

export default CountryArticle
