import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Pie from 'react-chartjs-2';

const Wrapper = styled.div`
  background-color: white;
  padding: 1em;
  color: black;
`;

export default function NpmDownloads() {
  const [reactDownloads, setReactDownloads] = useState([]);
  const [vueDownloads, setVueDownloads] = useState([]);
  const [angularDownloads, setAngularDownloads] = useState([]);

  useEffect(() => {
    axios.get('https://api.npmjs.org/downloads/point/last-month/react')
      .then((response) => { setReactDownloads(response.data.downloads); })
      .catch((error) => setReactDownloads(error));
    axios.get('https://api.npmjs.org/downloads/point/last-month/vue')
      .then((response) => { setVueDownloads(response.data.downloads); })
      .catch((error) => setVueDownloads(error));
    axios.get('https://api.npmjs.org/downloads/point/last-month/angular')
      .then((response) => { setAngularDownloads(response.data.downloads); })
      .catch((error) => setAngularDownloads(error));
  });

  return (
    <Wrapper>
      <Pie
        data={{
          labels: ['React', 'Vue', 'Angular'],
          datasets: [
            {
              label: '# of Votes',
              data: [reactDownloads, vueDownloads, angularDownloads],
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
