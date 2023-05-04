import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { brown } from '@mui/material/colors'
import shadows from '@mui/material/styles/shadows'
import React, { useEffect, useState } from 'react'
import './Home.css';
import axios from 'axios';

const Home = () => {
  <link rel="stylesheet" href="Home.css" />

    var [value,setValue]= useState([])
    useEffect(()=> {
      axios.get('https://dummyjson.com/users').then((response)=>{
        console.log(response.data.users);
        setValue(response.data.users)
      })
    },[] )
    
  return (
    <div>
      <Table>
        <TableHead>
            <TableRow >
                <TableCell className='T' >First Name</TableCell>
                <TableCell className='T2'>Last Name</TableCell>
                <TableCell className='T3'>Age</TableCell>

            </TableRow>
        </TableHead>
        <TableBody>
            {
                value.map((data,index)=>{
                    return <TableRow>
                        <TableCell >{data.firstName}</TableCell>
                        <TableCell>{data.lastName}</TableCell>
                        <TableCell>{data.age}</TableCell>
                    </TableRow>
                })
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default Home
