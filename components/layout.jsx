/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

import NavBar from './navbar';
import Footer from './footer';

const Wrapper = styled.div`
  width: 100%;
  background-color: #222129;
  color: white;
  min-height: 100%;
`;

const Content = styled.div`
  background-color: #222129;
  margin-top: 1em;
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
    <Footer />
  </Wrapper>
);

export default Layout;
