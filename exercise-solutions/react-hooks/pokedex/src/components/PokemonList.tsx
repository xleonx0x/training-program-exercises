// DO NOT MODIFY

import './PokemonList.css'
import PokemonCard from './PokemonCard'

function PokemonList({ pokemonData }) {
    return (
        <div className="list">
            {pokemonData.map(pokemon => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
    )
}  

export default PokemonList