/* eslint-disable max-len */
import React, {useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const MainPage = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}






    
  


}




import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as React from 'react';
import MainPage from '../components/MainPage';

function App() {
  return (
   <><div className='App' /><BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter></>
  )
}

export default App;
