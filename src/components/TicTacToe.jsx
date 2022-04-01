import React, { useState } from 'react'

import { Heading } from './Heading'
import '../Styles/TicTacToe.css'

const TicTacToe = () => {

    const [value, setValue] = useState('X')

    const [cell, setCells] = useState(Array(9).fill(''))



    const handleClicked = (num) => {

        if(value == 'X'){
            cell[num] = 'X'
            setValue('O')
        }
        else{
            cell[num] = 'O'
            setValue('X')
        }
        // alert (value)

        console.log(cell)
        
    }


    const Cell = ( {num}) => {
        return (
          <td 
            onClick={()=> {
                handleClicked(num)
            }}
          >--</td>
        )
      }

  return (

    <>
        <Heading/>
        <div  id='mainBox'>

            Value = {value}

            <table>
                <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
                </tbody>
            </table>

            </div>
    </>
    
  )
}

export default TicTacToe