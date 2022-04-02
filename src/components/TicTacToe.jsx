import React, { useState } from 'react'

import { Heading } from './Heading'
import '../Styles/TicTacToe.css'

const TicTacToe = () => {

    const [value, setValue] = useState('X')

    const [cell, setCell] = useState(Array(9).fill(''))

    const [winner, setWinner] = useState()

    // const [ans, setAns] = useState(true)



    const checkForWinner = (cell) => {

        let combos = {
            cross : [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            updown : [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagonals : [
                [0,4,8],
                [2,4,6]
            ]
        }


        for(let x in combos){
            combos[x].forEach((pattern) => {
                    if(cell[pattern[0]] == '' ||
                    cell[pattern[1]] == '' ||
                    cell[pattern[2]] == ''
                    ){
                        // do nothing
                    }
                    else if(
                        cell[pattern[0]] == cell[pattern[1]] &&
                        cell[pattern[1]] == cell[pattern[2]]
                    ){
                        setWinner(cell[pattern[0]])
                        // setAns(true)
                    }
                    else if (
                        cell[pattern[0]] != cell[pattern[1]] &&
                        cell[pattern[1]] != cell[pattern[2]]
                    ){
                        // setAns(false)
                    }
            });
        }

    }




    const handleClicked = (num) => {

        if(cell[num] != ''){
            alert('already Clicked')
            return
        }

        if(value == 'X'){
            cell[num] = 'X'
            setValue('O')
        }
        else{
            cell[num] = 'O'
            setValue('X')
        }
        // alert (value)
        
        checkForWinner(cell)
        // console.log(cell)
        
    }

    const handleRestart = () => {
        setWinner(null)
        setCell(Array(9).fill(''))

    }


    const Cell = ( {num}) => {
        return (
          <td 
            onClick={()=> {
                handleClicked(num)
            }}
          >{cell[num]}</td>
        )
      }

  return (

    <>
        <Heading/>
        <div  id='mainBox'>

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

            {winner && (
                <>
                    <h1>
                        {winner} is the Winner!
                    </h1>
                    
                </>
            )}

            <button className='button-16' onClick={()=> {
                handleRestart()
            }}>Play Again</button>
          


    </>
    
  )
}

export default TicTacToe