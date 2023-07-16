import styled from "styled-components";
import Header from "../components/header";

const Title = styled.div`
  font-size: 32px;
`;

function Home(){
    return(
        <>
            <Header />
            <Title>Home 페이지🦁</Title>
        </>
    )
}

export default Home;