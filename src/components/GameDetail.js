import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { smallImage } from '../util';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import ReactStars from 'react-stars';

const GameDetail = ({ pathId }) => {
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  const history = useHistory();

  console.log(game);

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case 'Playstation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const ignoreNoWebsites = (e) => {
    if (e.target.matches('.click')) return;
    e.preventDefault();
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className='shadow' onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <div className='rating'>
                <h3>
                  <a
                    className='click'
                    target='_blank'
                    href={game.website ? game.website : ignoreNoWebsites}
                  >
                    {game.name}
                  </a>
                </h3>
                <p>Rating: {game.rating}</p>
                <ReactStars
                  count={5}
                  onChange={ratingChanged()}
                  size={40}
                  color2={'#ffd700'}
                />
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((platform) => (
                    <img
                      key={platform.platform.id}
                      src={getPlatform(platform.platform.name)}
                      alt='platform'
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt='image'
              />
              {game.clip && (
                <video controls loop>
                  <source src={game.clip.clips.full}></source>
                </video>
              )}
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className='gallery'>
              {screen.results.map((screen) => (
                <img
                  key={screen.id}
                  src={smallImage(screen.image, 1280)}
                  alt='game'
                  layoutId={`image ${pathId}`}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
  video {
    width: 100%;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.6);
    margin-top: 3rem;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
