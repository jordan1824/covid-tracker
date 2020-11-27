import React from 'react'

function CountryArticle({ country }) {
  return (
    <article className="main__country">
      <h1>{country.Country}</h1>
    </article>
  )
}

export default CountryArticle
