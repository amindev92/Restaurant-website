import React from 'react'
import { Footer, Navbar } from './components'
import { Aboutus, Chef, Findus, Gallery, Header, Intro, Laures, Specialmenu } from './containers'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutus />
      <Specialmenu />
      <Chef />
      <Intro />
      <Laures />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  )
}

export default App