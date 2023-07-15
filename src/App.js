import React from 'react'
import FizzBuzz from './Fizzbuzz'

const App = () => {
  const createNumbers = () => {
    const numbers = []
    for (let number = 1; number <= 100; number++) {
      numbers.push(number)
    }
    return numbers
  }

  const numbers = createNumbers()

  return (
    <div>
      <FizzBuzz numbers={numbers} />
    </div>
  )
}

export default App
