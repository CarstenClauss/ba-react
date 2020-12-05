/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import googleTrends from 'google-trends-api';
import Layout from '../components/layout';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #222129;
`;

export default function Support() {
  googleTrends.interestByRegion({
    keyword: 'React',
    startTime: new Date('2017-02-01'),
    geo: '',
  })
    .then((res) => {
      console.log('This is res', res);
    })
    .catch((err) => {
      console.log('This is not', err);
    });

  return (
    <Layout>
      <Wrapper>
        Support Page
        <div id="container" />
      </Wrapper>
    </Layout>
  );
}
