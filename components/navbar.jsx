import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

const Wrapper = styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  padding: 1em 1em 0.5em;
  width: 100%;
`;

const NavigationWrapper = styled.div`
  width: calc(100% - 30%);
  padding: 1rem 15%;
  border: 1px solid white;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  `;

const NavigationButton = styled.a`
  padding: 0 1em;
  cursor: pointer;
  line-height: 2em;
  letter-spacing: 0.25em;

  :hover {
    color: #61DBFB;
    font-weight: bold;
  }
`;

export default function Navbar() {
  return (
    <Wrapper>
      <NavigationWrapper>
        <Navigation>
          <NextLink href="/">
            <NavigationButton>
              Home
            </NavigationButton>
          </NextLink>
          <NextLink href="/support">
            <NavigationButton>
              Support
            </NavigationButton>
          </NextLink>
          <NextLink href="/performance">
            <NavigationButton>
              Performance
            </NavigationButton>
          </NextLink>
        </Navigation>
      </NavigationWrapper>
    </Wrapper>
  );
}
