export const detailReducer = (
  state = {
    game: { platforms: [] },
    screen: { results: [] },
    isLoading: true,
  },
  action
) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return { ...state, ...action.payload, isLoading: false };
    case 'LOADING_DETAIL':
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};
