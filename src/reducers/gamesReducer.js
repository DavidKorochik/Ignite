export const gamesReducer = (
  state = { popular: [], newGames: [], upcoming: [], searched: [] },
  action
) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
