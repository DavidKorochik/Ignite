export const gamesReducer = (
  state = { popular: [], newGames: [], upcoming: [], searched: [] },
  action
) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return { ...state };
    default:
      return { ...state };
  }
};

// Action Creator
const fetchGames = (userData) => {
  return {
    type: 'FETCH_GAMES',
    payload: userData,
  };
};
