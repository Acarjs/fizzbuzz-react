import React, { useState, useEffect } from 'react'

const FizzBuzz = ({ numbers }) => {
  const [fizzBuzz, setFizzBuzz] = useState([])

  useEffect(() => {
    const showFizzBuzz = () => {
      const fizzBuzzArray = numbers.map((number) => {
        if (number % 3 === 0 && number % 5 === 0) {
          return 'Fizz Buzz'
        } else if (number % 3 === 0) {
          return 'Fizz'
        } else if (number % 5 === 0) {
          return 'Buzz'
        } else {
          return number
        }
      })

      setFizzBuzz(fizzBuzzArray)
    }

    showFizzBuzz()
  }, [numbers])

  if (!numbers.length) {
    return null
  }

  return (
    <div>
      <ul>
        {fizzBuzz.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  )
}

export default FizzBuzz
