
import './App.css'
import Cooking from './Component/Cooking/Cooking'
import Hero from './Component/HeroSection/Hero'
import Navbar from './Component/Navbar/Navbar'
import Recipes from './Component/Recipes/Recipes'

function App() {

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <div className='flex'>
      <Recipes></Recipes>
      <Cooking></Cooking>
     </div>
    </>
  )
}

export default App
