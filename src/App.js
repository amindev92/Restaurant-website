import React from 'react'
import { Footer, Navbar } from './components'
import { Aboutus, Chef, Findus, Gallery, Header, Intro, Laures, Menu } from './containers'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutus />
      <Menu />
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