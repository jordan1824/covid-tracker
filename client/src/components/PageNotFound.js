import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound(props) {
  return (
    <section>
      <h1>404 Error</h1>
      <p>The page that you are searching for could not be found.</p>
      <p>
        Click <Link to="/">here</Link> to return to the homepage.
      </p>
    </section>
  )
}

export default PageNotFound
