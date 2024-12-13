import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';

interface PokemonsState {
	favorites: {[key: string]: SimplePokemon}
}

// const getInitialState = (): PokemonsState => {
// 	// if ( typeof localStorage === "undefined" ) return {}
// 	const favorites = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}" );
// 	return favorites
// }

const initialState: PokemonsState = {
	favorites: {},
	// ...getInitialState(),
	// '1': { id: '1', name: "bulbasaur" },
}

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		setFavoritesPokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
			state.favorites = action.payload;
		},

		toggleFavorite( state, action: PayloadAction<SimplePokemon>) {
			const pokemon = action.payload;
			const { id } = pokemon;

			if ( !!state.favorites[id] ) {
				delete state.favorites[id];
				return;
			} else {
				
				state.favorites[id] = pokemon;
			}

			localStorage.setItem("favorite-pokemons", JSON.stringify(state.favorites));

		}
	}
});

export const { toggleFavorite, setFavoritesPokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer