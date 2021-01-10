import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  color: white;
`;

const Circle = styled.div`
  padding: 1em;
  margin: 2em;
  display: inline-block;
  background-color: red;
  border-radius: 50%;
  left: 0;
  top: 0;
`;

const ReactCircle = styled(Circle)`
width: ${({ wid }) => (`${wid / 1000}px`)};
height: ${({ wid }) => (`${wid / 1000}px`)};
`;

const VueCircle = styled(Circle)`
width: ${({ wid }) => (`${wid / 1000}px`)};
height: ${({ wid }) => (`${wid / 1000}px`)};
`;

const AngularCircle = styled(Circle)`
width: ${({ wid }) => (`${wid / 1000}px`)};
height: ${({ wid }) => (`${wid / 1000}px`)};
`;

export default function GithubStars() {
  const [reactStars, setReactStars] = useState([]);
  const [vueStars, setVueStars] = useState([]);
  const [angularStars, setAngularStars] = useState([]);
  const [allStars, setAllStars] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/repos/facebook/react')
      .then((response) => setReactStars(response.data.stargazers_count))
      .catch((error) => setReactStars(error));
    axios.get('https://api.github.com/repos/vuejs/vue')
      .then((response) => setVueStars(response.data.stargazers_count))
      .catch((error) => setVueStars(error));
    axios.get('https://api.github.com/repos/angular/angular')
      .then((response) => setAngularStars(response.data.stargazers_count))
      .catch((error) => setAngularStars(error));
    setAllStars(reactStars + vueStars + angularStars);
  });

  console.log(allStars);

  return (
    <Wrapper>
      <ReactCircle wid={reactStars}>
        React:
        {' '}
        {reactStars}
      </ReactCircle>
      <VueCircle wid={vueStars}>
        Vue:
        {' '}
        {vueStars}
      </VueCircle>
      <AngularCircle wid={angularStars}>
        Angular:
        {' '}
        {angularStars}
      </AngularCircle>
    </Wrapper>
  );
}
