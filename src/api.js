// Base URL
const base_url = 'https://api.rawg.io/api';

// Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Getting current day, year and month
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&oredering=-added`;
const new_games = `games?dates=${lastYear},${currentDate}&oredering=-released`;

// Exporting all the games URL
export const popularGamesURL = (pageSize) =>
  `${base_url}/${popular_games}&page_size=${pageSize}`;
export const upcomingGamesURL = (pageSize) =>
  `${base_url}/${upcoming_games}&page_size=${pageSize}`;
export const newGamesURL = (pageSize) =>
  `${base_url}/${new_games}&page_size=${pageSize}`;

// Game Details https://api.rawg.io/api/games/{id}
export const gameDetailsURL = (id) => `${base_url}/games/${id}`;

// Game Screenshots
export const gameScreenshotURL = (id) => `${base_url}/games/${id}/screenshots`;

export const searchGameURL = (game_name) =>
  `${base_url}/games?search=${game_name}&page_size=9`;

export const videoGameURL = (id) => `${base_url}/games/${id}/movies`;
