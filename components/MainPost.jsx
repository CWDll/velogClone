import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 50%;
  display:flex;
  justify-content:center;
  /* border: 1px solid white;   */
  flex-direction: column;
`;

const Title = styled.h1`
    margin-top: 10px;
    margin-bottom: 0px;
`;

const Info = styled.h6`
  margin: 10px 0 20px 0;  
`;

const UserName = styled.span`
    font-weight: bold;
    font-size: 15px;
`;

const Data = styled.span`
  color: gray;  
`;

const Content = styled.span`
    margin-top: 20px;  
`;

const FixedButtonContainer = styled.div`
  position: fixed;
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const FixedButton = styled.button`
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;
  width: 3em;
  height: 8em;
  background-color: black;
  color: gray;
  border: none;
  border-radius: 100px;
  cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
  &:hover {
    color: #888;
  }
  font-size: 25px;
  text-align:center;
  /* margin-top: 10px;
  margin-botton: 10px; */
`;

const Likes = styled.span`
  margin-top: 10px;  
  margin-bottom: 10px;  
`;

export const information = 
    {
      id: 1,
      title: 'React를 공부해보자',
      content: 'styled-component를 익숙해지는 시간이었다. css 변수도 사용할 수 있고, props도 공통으로 사용할 수 있어서 flex속성이나, 반응형 사이즈 같은 것을 저장해서 편하게 갖다썼다. 그리고 box-sizing 속성을 처음으로 사용했다. padding을 주면 그 사이즈만큼 전체 크기가 커져서 안맞는 경우가 있었는데, box-sizing:border-size 속성으로 해결했다.',
      imageUrl: '../images/posts/imageOfReact.png',
      date: '2023.07.17',
      comment: '1개의 댓글',
      userName: 'writer',
      profileImageUrl: '../images/profile/child1.jpg',
      likes: '144',
    }

    function MainPost() {
        const [scrollPercentage, setScrollPercentage] = useState(0);
      
        const handleScroll = () => {
          const scrollTop = document.documentElement.scrollTop;
          const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const percentage = (scrollTop / scrollHeight) * 100;
          setScrollPercentage(percentage);
        };
      
        useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);
      
        return (
          <Container>
            <FixedButtonContainer>
                <FixedButton>
                    <Icon icon={faHeart} />
                    <Likes>{information.likes}</Likes>
                    <Icon icon={faShareAlt} />
                </FixedButton>
            </FixedButtonContainer>
            <Title>{information.title}</Title>
            <Info>
              <UserName>{information.userName}</UserName> ·{" "}
              <Data>{information.date}</Data>
            </Info>
            <img src={information.imageUrl} alt="Post" />
            <Content>{information.content}</Content>
          </Container>
        );
      }
      
      export default MainPost;