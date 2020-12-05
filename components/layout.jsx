/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

import NavBar from './molecule/navbar';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222129;
  color: white;
`;

const Content = styled.div`
  background-color: #222129;
  margin-top: 1em;
  padding: 1em;
  width: 100vw;
`;

const NavWrapper = styled.div`
  width: 100vw;
  background-color: #222129;
  color: white;
`;

const Layout = (props) => (
  <Wrapper>
    <NavWrapper>
      <NavBar />
    </NavWrapper>
    <Content>{props.children}</Content>
  </Wrapper>
);

export default Layout;
