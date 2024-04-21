import Link from 'next/link'
import React from 'react'

const DrinksList = ({drinks}) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((item)=>{
        return (
            <li key={item.idDrink}>
                <Link href={`/drinks/${item.idDrink}`} 
                className="text-xl font-medium">{item.strDrink}</Link>
            </li>
        )
      })}
    </ul>
  )
}

export default DrinksList
