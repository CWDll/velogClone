import styled from "styled-components";
import Post from "./Posts";
import PostFooter from "./PostFooter";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 40px;
`;

function PostBox() {
    return (
      <MainContainer>
        <Post/>
        {/* <PostFooter/> */}
      </MainContainer>
    )
}

export default PostBox;