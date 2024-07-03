import React from 'react'
import { Box, styled } from '@mui/material'
import {DataContext} from '../context/DataProvider'
import { useContext, useState , useEffect } from 'react'


const Container =styled(Box)`
    height : 41vh;
    width :  50vh
`

function Result() {
       
    const[src, setSrc] =useState('')
   
    const {html , css, js} =useContext(DataContext)
     
    

   const srcCode =  `
     <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
     </html   
   `
   useEffect(()=>{
     
   const timeout = setTimeout(()=>{
        setSrc(srcCode)
    }, 1000)
     return()=> clearTimeout( timeout);

   },[html,css,js])
  
    return (
    <Container>
      <iframe 
      srcDoc={src} 
      title='output'
      sandbox='allow-scripts'
      frameBorder="10"
      width="200%"
      height="280%"
      
      />
    </Container>
  )
}

export default Result
