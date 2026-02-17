import React from 'react'
import Card from './Components/Card.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Anish' img='https://plus.unsplash.com/premium_photo-1736151101051-5c76558b2a88?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Anant' img='https://images.unsplash.com/photo-1769863467291-23cf7902f686?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Shivam' img='https://images.unsplash.com/photo-1685296871075-756145898c73?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default App
