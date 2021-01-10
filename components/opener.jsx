import React from 'react';
import styled from 'styled-components';

import Hero from './hero';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function Opener(props) {
  const { children } = props;

  return (
    <Wrapper>
      <Hero>
        {children}
      </Hero>
    </Wrapper>
  );
}
