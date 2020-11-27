import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
