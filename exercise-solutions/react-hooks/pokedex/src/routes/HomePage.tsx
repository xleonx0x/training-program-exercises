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
    // This useState has been provided to you for Task 1
    const [pokemonData, setPokemonData] = useState<pokemonData[]>([]);

    // Task 1: Please write the useEffect hook to generate the list of pokemon
    // Please store the list of pokemon inside pokemonData
    // HINT: the url is 'https://pokeapi.co/api/v2/pokemon?limit=100'
    
    useEffect(() => {
        async function fetchPokemon() {
          let url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
          let fetchedPokemon: pokemonData[] = [];
    
          try {
            while (url) {
              const response = await fetch(url);
              const data = await response.json();
              fetchedPokemon = fetchedPokemon.concat(data.results);
              url = data.next; // URL for the next page
            }
            setPokemonData(fetchedPokemon);
          } catch (error) {
            console.error('Error fetching Pokémon:', error);
          }
        }
    
        fetchPokemon();
    }, []);
    
    // Task 2: Add functionality to the search bar so that it is able
    // filter the display of pokemonData

    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch =(event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    }

    const filteredPokemon = pokemonData.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm)
    );

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
                        onChange={e => handleSearch(e)}
                    />
                </div>
                <PokemonList pokemonData={filteredPokemon}/>
            </div>
        </div>
    )
}

export default HomePage