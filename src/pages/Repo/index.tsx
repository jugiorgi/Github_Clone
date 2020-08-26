import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        
        <Link className={'username'} to={'/jugiorgi'}>
          jugiorgi
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/jugiorgi/juflix'}>
          juflix
        </Link>
      </Breadcrumb>

      <p>Aplicação React inspirado no Netflix</p>

      <Stats>
        <li>
          <StarIcon />
          <b>14</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>5</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/jugiorgi/JuFlix'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  )
}

export default Repo;