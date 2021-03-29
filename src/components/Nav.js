import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../actions/gamesAction';
import { fadeIn } from '../animations';

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

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo>
        <img onClick={clearSearch} src={logo} alt='logo' />
      </Logo>
      <div>
        <input value={textInput} onChange={handleChange} type='text' />
        <button onClick={handleSubmit} type='submit'>
          Search
        </button>
      </div>
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
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
