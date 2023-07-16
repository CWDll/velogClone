import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  font-size: 32px;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: flex;
`;

const LoginButton = styled.div`
    width: 50px;
    height: 25px;   
    border-radius: 10px;
    background-color: #FFFFFF;
    color:black;
`;
function Header() {
    return (
        <Head>
            <Title>
                Velog
            </Title>
            <Buttons>
                <FontAwesomeIcon icon={faMoon}/>
                <FontAwesomeIcon icon={faSearch} />
                <LoginButton>로그인</LoginButton>
            </Buttons>
        </Head>
    )
}

export default Header;