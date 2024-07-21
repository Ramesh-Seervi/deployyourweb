import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default function App() {
  return (
    <div style={{ height:'1rem', background: 'red' }}  >
      <div style={{ background: 'red' }} >
        <Header />
      </div>
      <div style={{ background: 'green' }} >
        <Body />
      </div>
      <div style={{ background: 'blue' }} >
        <Footer />
      </div>
    </div>
  )
}
