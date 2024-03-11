import { useEffect, useState } from 'react'
import Sidebar from '../components/SideBar'
import PokemonList from '../components/PokemonList'
import glass from '../assets/magnifyingglass.png'
import './HomePage.css'

// Type for Task 1
// You don't need it, its just if you want typescript to stop screaming at you
interface pokemonData {
    name: string;
    url: string;
}

function HomePage() {
    // Task 1: Please write the useEffect hook to generate the list of pokemon
    // Please store the list of pokemon inside pokemonData
    // HINT: the url is 'https://pokeapi.co/api/v2/pokemon?limit=100'

    // Delete this for task 1
    const temporaryVariable:  pokemonData[] = []
    
    // Task 2: Add functionality to the search bar so that it is able
    // filter the display of pokemonData

    // Extension Task: Add functionality to the side bar so that the list of
    // items displayed changes completely depending on the button pressed
    // HINT: the url for each button is 

    return (
        <div className="flex"> 
            <Sidebar/>
            <div className="main-content">
                <div className="title">Devsoc Pokedex</div>
                <div className="searchcontainer">
                    <img src={glass} className="magnifying"/>
                    <input className="searchbar"
                        type="text"
                        placeholder="Search for a pokemon"
                    />
                </div>
                <PokemonList pokemonData={temporaryVariable}/>
            </div>
        </div>
    )
}

export default HomePage