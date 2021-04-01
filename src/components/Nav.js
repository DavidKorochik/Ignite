import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../actions/gamesAction';
import { fadeIn } from '../animations';
import { loadGames } from '../actions/gamesAction';
import gaming from '../img/gaming.jpg';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const clearSearch = () => {
    dispatch({
      type: 'CLEAR_SEARCH',
    });
  };

  const filterHandler = (pageSize) => {
    dispatch(loadGames(pageSize));
  };

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <img className='gaming' src={gaming} alt='gaming' />
      <Logo>
        <img onClick={clearSearch} src={logo} alt='logo' />
      </Logo>
      <input value={textInput} onChange={handleChange} type='text' />
      <button onClick={handleSubmit} type='submit'>
        Search
      </button>
      <ListButtons>
        <button onClick={() => filterHandler(5)}>5</button>
        <button onClick={() => filterHandler(10)}>10</button>
        <button onClick={() => filterHandler(15)}>15</button>
        <button onClick={() => clearSearch()}>Clear Search</button>
      </ListButtons>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    padding: 0.5rem 2rem;
    background: #ff7676;
    color: white;
    outline: none;
  }
  img {
    top: 0;
    left: 0;
    position: absolute;
    height: 50%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
`;

const ListButtons = styled(motion.div)`
  margin-top: 2rem;
  button {
    margin-right: 1rem;
    border-radius: 50px;
    &:hover {
      transition: all 0.5s ease;
      background-color: transparent;
      color: white;
    }
  }
`;

export default Nav;
