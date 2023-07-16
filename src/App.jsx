import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../components/header';
import PostBox from '../components/PostBox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 0 20px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 40px;
`;

const PostContainer = styled.div`
  width: 180px;
  margin: 20px;
  padding: 20px;
  background-color: blue;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 16px;
`;

const posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'This is the first post.',
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is the second post.',
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'This is the third post.',
  },
  // 추가 포스트들...
];

const App = () => {
  return (
    <Container>
	  <Header/>
      {/* <MainContainer>
        {posts.map((post) => (
          <PostContainer key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
          </PostContainer>
        ))}
      </MainContainer> */}
	  <PostBox/>
    </Container>
  );
};

export default App;
