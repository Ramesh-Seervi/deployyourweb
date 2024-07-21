import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default function App() {
  return (
    <div style={{ height:'100%'}}  >
      <div style={{ background: 'red' }} >
        <Header />
      </div>
      <div style={{  height:800 }} >
        <Body />
      </div>
      <div style={{ background: 'blue' }} >
        <Footer />
      </div>
    </div>
  )
}
