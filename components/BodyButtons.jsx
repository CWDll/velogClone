import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

// const TopicButton = styled.button`
//     width: 13%;
//     height: 50%;
//     color: white;
//     background-color:blue;
//     text-align: center;
//     displat: flex;
// `;

const Icon = styled(FontAwesomeIcon)`
  font-size: 15px;
  font-weight: 100;
`;

const Text = styled.span`
  font-size: 15px;
  text-align: center;
`;

const TopicButton = styled.button`
    width: 100px;
    height: 100%;
    color: white;
    /* background-color: ${props => props.active ? 'black' : 'red'}; */
    text-align: center;
    display: flex;
    /* border-bottom: ${props => props.active ? '2px solid white' : 'none'}; */
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    border-color: ${({ theme }) => theme.borderColor};
`;

const WeekBox = styled.button`
    width: 100px;
    height: 100%;
    color: white;
    font-weight: bold;
    /* background-color: ${props => props.active ? 'black' : 'red'}; */
    text-align: center;
    display: flex;
    justify-content: space-between;
    /* border-bottom: ${props => props.active ? '2px solid white' : 'none'}; */
    background-color: grey;
    color: ${({ theme }) => theme.color};
    border-color: ${({ theme }) => theme.borderColor};
`;

const LeftButton = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const BodyButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;  
`;

function BodyButtons() {
    const [isActive, setIsActive] = React.useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <BodyButton>
            <LeftButton>
                <TopicButton active={isActive ? "true" : "false"} onClick={handleClick}>
                    <div>
                        <Icon icon={faChartLine} />
                        <Text>트렌딩</Text>
                    </div>
                </TopicButton>

                <TopicButton>
                    <Icon icon={faClock} />
                    <Text>최신</Text>
                </TopicButton>

                <WeekBox>
                    <Text>이번 주</Text>
                    <Icon icon={faCaretDown} />
                </WeekBox>
            </LeftButton>
            <div>
                <Icon icon={faEllipsisV} />
            </div>
        </BodyButton>
    );
}

export default BodyButtons;