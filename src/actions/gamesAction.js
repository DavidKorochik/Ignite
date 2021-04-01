import axios from 'axios';
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from '../api';

// Action Creator
export const loadGames = (pageSize) => async (dispatch) => {
  // Fetch Axios
  const popularData = await axios.get(popularGamesURL(pageSize));
  const newGamesData = await axios.get(newGamesURL(pageSize));
  const upcomingGamesData = await axios.get(upcomingGamesURL(pageSize));

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: 'FETCH_SEARCH',
    payload: {
      searched: searchGames.data.results,
    },
  });
};
