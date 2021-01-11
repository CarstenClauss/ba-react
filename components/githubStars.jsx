import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Pie from 'react-chartjs-2';

const Wrapper = styled.div`
  background-color: white;
  padding: 1em;
  color: black;
`;

export default function GithubStars() {
  const [reactStars, setReactStars] = useState([]);
  const [vueStars, setVueStars] = useState([]);
  const [angularStars, setAngularStars] = useState([]);

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
  }, [reactStars, vueStars, angularStars]);

  return (
    <Wrapper>
      <Pie
        data={{
          labels: ['React', 'Vue', 'Angular'],
          color: 'white',
          datasets: [
            {
              label: '# of Votes',
              data: [reactStars, vueStars, angularStars],
              backgroundColor: [
                '#2296F3',
                '#F44335',
                '#FFCA28',
              ],
            },
          ],
        }}
        height="100%"
      />
    </Wrapper>
  );
}
