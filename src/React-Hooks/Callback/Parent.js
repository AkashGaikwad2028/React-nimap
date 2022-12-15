import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Titel from './Titel'

export default function Parent(props) {
    const [salary,setSalary]=useState(50000)
    const [age,setAge]=useState(25)

const IncrementAge=useCallback(()=>{
setAge(age+1)
},[age])

const IncrementSalry=useCallback(()=>{
  setSalary(salary+1)
},[salary])

  return (
    <div>
          <Titel/>
          <Count text="Age" count={age}/>
          <Button Handelclick={IncrementAge}>Increment Age</Button>
          <Count text="salry" count={salary}/>
          <Button Handelclick={IncrementSalry}>Increment Salry</Button>
    </div>
  )
}
