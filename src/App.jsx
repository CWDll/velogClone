import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../components/header';
import PostBox from '../components/PostBox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 0 20px;
  width: 95vw;
  overflow-x: hidden;
  height: 100%;
`;

const App = () => {
  return (
    <Container>
	    <Header/>
	    <PostBox/>
    </Container>
  );
};

export default App;
