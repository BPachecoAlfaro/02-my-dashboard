'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {

	const favoritePokemons = useAppSelector(state => state.pokemons.favorites);
	const favoritesPokemons = Object.values(favoritePokemons);
	// const [pokemons, setPokemons] = useState(favoritesPokemons)

	// useEffect(() => {
	// 	setPokemons(favoritesPokemons)

	// }, [favoritesPokemons])


	return (
		<>
			{
				favoritesPokemons.length === 0
					? <NoFavorites />
					: <PokemonGrid pokemons={favoritesPokemons} />
			}
		</>
		// <PokemonGrid pokemons={favoritePokemons} />
	)
}


export const NoFavorites = () => {
	return (
		<div className="flex flex-col h-[50hv] items-center justify-center">
			<IoHeartOutline size={100} className="text-red-500" />
			<span>No hay favoritos</span>
		</div>
	)
}