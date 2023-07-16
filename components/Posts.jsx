import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {Link} from "react-router-dom";
import imageOfReact from "../images/imageOfReact.png";

const Post = styled.div`
    width: 305px;
    border: 1px solid red;
    padding: 5px;
`

const Image = styled.div`
    width: 100%;
`

const Title = styled.p`
    font-size: 12px;
    font-weight: bold;
`

const Description = styled.span`
  font-size: 9px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em;
  line-height: 1.5em;
`;

function Posts() {
    const longText =
    'styled-component를 익숙해지는 시간이었다. css 변수도 사용할 수 있고, props도 공통으로 사용할 수 있어서 flex속성이나, 반응형 사이즈 같은 것을 저장해서 편하게 갖다썼다. 그리고 box-sizing 속성을 처음으로 사용했다. padding을 주면 그 사이즈만큼 전체 크기가 커져서 안맞는 경우가 있었는데, box-sizing:border-size 속성으로 해결했다.';

    const truncatedText = longText.length > 30 ? `${longText.slice(0, 125)}...` : longText;

    return (
        <Post>
            {/* 현재 window.open으로 image클릭시 링크를 새 탭으로 만들며 페이지 이동 */}
            <Image>
                <img src={imageOfReact} onClick={() => window.open("https://velog.io/@rgfdds98/React%EC%97%90%EC%84%9C-%ED%81%B4%EB%A6%AD%EC%8B%9C-%EC%99%B8%EB%B6%80%EB%A7%81%ED%81%AC%EB%A1%9C-%EC%97%B4%EA%B8%B0")}/>
            </Image>
            <Title>제목입니다.</Title>
            <Description>{truncatedText}</Description>
            <div>날짜 들어갈 곳</div>
        </Post>
    )
}

export default Posts;