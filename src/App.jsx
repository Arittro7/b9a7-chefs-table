
import { useState } from 'react'
import './App.css'
import Cooking from './Component/Cooking/Cooking'
import Hero from './Component/HeroSection/Hero'
import Navbar from './Component/Navbar/Navbar'
import Recipes from './Component/Recipes/Recipes'

function App() {

  const [cook, setCook] =useState([]);

  const handleAddToCook = recipe =>{
    // console.log('recipe will added');
    // console.log(recipe);
    const newCook =[...cook, recipe]
    setCook(newCook)
  }

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <div className='flex'>
      <Recipes handleAddToCook={handleAddToCook}></Recipes>
      <Cooking cook={cook}></Cooking>
     </div>
    </>
  )
}

export default App
