import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {Link} from "react-router-dom";
import imageOfReact from "../images/imageOfReact.png";

const Post = styled.div`
    width: 100%;
    border: 1px solid red;
    padding: 5px;
`

const Image = styled.div`
    width: 100%;
`


function Posts() {
    return (
        <Post>
            {/* 현재 window.open으로 image클릭시 링크를 새 탭으로 만들며 페이지 이동 */}
            <Image><img src={imageOfReact} onClick={() => window.open("https://velog.io/@rgfdds98/React%EC%97%90%EC%84%9C-%ED%81%B4%EB%A6%AD%EC%8B%9C-%EC%99%B8%EB%B6%80%EB%A7%81%ED%81%AC%EB%A1%9C-%EC%97%B4%EA%B8%B0")}></img></Image>
        </Post>
    )
}

export default Posts;