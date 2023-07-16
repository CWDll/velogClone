import styled from "styled-components";

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
  background-color: black;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 10px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 100px;
`;

const posts = [
  {
    id: 1,
    title: 'React를 공부해보자',
    content: 'styled-component를 익숙해지는 시간이었다. css 변수도 사용할 수 있고, props도 공통으로 사용할 수 있어서 flex속성이나, 반응형 사이즈 같은 것을 저장해서 편하게 갖다썼다. 그리고 box-sizing 속성을 처음으로 사용했다. padding을 주면 그 사이즈만큼 전체 크기가 커져서 안맞는 경우가 있었는데, box-sizing:border-size 속성으로 해결했다.',
    imageUrl: '../images/imageOfReact.png',
  },
  {
    id: 2,
    title: 'Tea time을 가지자',
    content: '불교학과를 다니면 매일매일 차를 내려마실 수 있다는 것을 아시나요? 저희는 전공 수업에 다도가 들어있을 만큼 차를 아주 중요하게 생각합니다. 저도 학생시절부터 차를 마셨는데, 생각보다 나쁘지 않습니다.',
    imageUrl: '../images/teaTime.jpg',
  },
  {
    id: 3,
    title: '강아지가 벌에 쏘였다.',
    content: '이 사진은 시골에 사는 강아지가 벌에 쏘인 채 퉁퉁 부은 얼굴을 가지고 앉아있는 사진이다. 구글에 이미지를 검색해보면 이 사진 말고도 몇 가지 귀여운 강아지들이 나오곤 한다.',
    imageUrl: '../images/dog.jpg',
  },
  // 추가 포스트들...
];

function PostBox() {
    return (
    <MainContainer>
        {posts.map((post) => (
          <PostContainer key={post.id}>
            <PostImage src={post.imageUrl} alt="Post" />
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
          </PostContainer>
        ))}
    </MainContainer>
    )
}

export default PostBox;