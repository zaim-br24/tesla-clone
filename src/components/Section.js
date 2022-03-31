import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundIamge}> 
      <ItemText>
      <Fade bottom>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </Fade>
      </ItemText>
      <Buttons>
      <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {props.leftBtnText}
            </LeftButton>
            {props.rightBtnText && 
              <RightButton>
               {props.rightBtnText}
            </RightButton>
            }
          </ButtonGroup>
      </Fade>
          <DownArrow src="/images/down-arrow.svg" />
      </Buttons>    
    </Wrap>
  )
}

export default Section


// css styled components
const Wrap = styled.div`
    height:100vh;
    width:100vw;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display:flex;
    flex-direction: column;
    align-items: center;
   justify-content: space-between;
`

const ItemText = styled.div`
    padding-top: 14vh;
    text-aling: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom:30px;
    @media (max-width: 765px) {
      flex-direction: column;
    }

`
const LeftButton = styled.div`
    height:40px;
    width:250px;
    background-color:rgb(23, 26, 32, 0.8);
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:100px;
    opacity:0.85;
    font-size:12px;
    text-transform:uppercase;
    cursor: pointer;
    margin: 5px;

    @media (max-width:765px){
      width:300px;
    }
`
const RightButton = styled(LeftButton)`
    color:black;
    background-color:white;
    opacity: .65;
`
const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    overflow-x:hidden;
    animation: animateDown infinite 1.5s;

`
const Buttons = styled.div`
`
