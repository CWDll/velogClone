import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 40px;
  border-top: 1px solid white;
`;

const ProfileImage = styled.img`
    width: 20px;
    border-radius: 50%;
`;

// const posts = [
//     {
//       id: 1,
//       userName: 'writer',
//       profileImageUrl: '../images/profile/child1.jpg',
//       likes: '144',
//     },
//     {
//       id: 2,
//       userName: 'changjoon',
//       profileImageUrl: '../images/profile/child2.jpg',
//       likes: '25',
//     },
//     {
//       id: 3,
//       userName: 'dongguk',
//       profileImageUrl: '../images/profile/child3.jpg',
//       likes: '79',
//     },
//   ];

function PostFooter() {
    return (
        <MainContainer>
            {posts.map((post) => (
                <ProfileImage src={post.profileImageUrl} alt="Post" />
            ))}
        </MainContainer>
    )
}

export default PostFooter;