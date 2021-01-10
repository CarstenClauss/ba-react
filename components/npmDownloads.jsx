import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
`;

export default function NpmDownloads() {
  const [reactDownloads, setReactDownloads] = useState([]);
  const [vueDownloads, setVueDownloads] = useState([]);
  const [angularDownloads, setAngularDownloads] = useState([]);

  useEffect(() => {
    axios.get('https://api.npmjs.org/downloads/range/last-week/react')
      .then((response) => {
        setReactDownloads(response.data.downloads[6].downloads);
        // console.log('react: ', response.data.downloads);
      })
      .catch((error) => setReactDownloads(error));
    axios.get('https://api.npmjs.org/downloads/range/last-week/vue')
      .then((response) => {
        setVueDownloads(response.data.downloads[6].downloads);
        // console.log('vue: ', response.data.downloads);
      })
      .catch((error) => setVueDownloads(error));
    axios.get('https://api.npmjs.org/downloads/range/last-week/angular')
      .then((response) => {
        setAngularDownloads(response.data.downloads[6].downloads);
        // console.log('angular: ', response.data.downloads);
      })
      .catch((error) => setAngularDownloads(error));
  });

  return (
    <Wrapper>
      <div>
        React:
        {' '}
        {reactDownloads}
      </div>
      <div>
        Vue:
        {' '}
        {vueDownloads}
      </div>
      <div>
        Angular:
        {' '}
        {angularDownloads}
      </div>
    </Wrapper>
  );
}
