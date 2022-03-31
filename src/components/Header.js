import React ,{useState} from 'react'
import styled from 'styled-components'
import { Menu as MenuIcon } from "@material-ui/icons";
import {Close as CloseIcon} from "@material-ui/icons";
import {selectCars} from '../features/car/carSlice'
import { useSelector } from 'react-redux';


function Header() {
  let [closed , setClose]= useState(false)
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a>
        <img src='/images/logo.svg'></img>
      </a>
      <Menu>
        {cars && cars.map((car , index)=><a key={index} href='#'>{car}</a>)}
      </Menu>
      <RigthMenu>
        <a href='#'>shop</a>
        <a href='#'>account</a>
      </RigthMenu>
      <CustomMenu onClick={()=> setClose(true)} />
        <BurgerMenu show={closed}>
          <CloseWrapper>
              <CustomClose onClick={()=> setClose(false)} />
          </CloseWrapper>
          {cars && cars.map((car , index)=><li><a key={index} href='#'>{car}</a></li>)}
        
      
        </BurgerMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`

const Menu = styled.div`
  display:flex;
  aling-items:center;
  justify-content:center;
  flex:1;

  a{
    font-weight:600;
    text-transform: capitalize;
    padding:0 10px;
    font-size:15px;
    letter-spacing: 1px;
  }
  @media (max-width:765px){
    display: none;
  }
`

const RigthMenu = styled.div`
  display:flex;
  aling-items:center;
  a{
    font-weight:600;
    text-transform: capitalize;
    padding:0 10px;
    font-size:15px;
  }

  @media (max-width:765px){
    display: none;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  ${'' /* display:flex;
  aling-items:center; */}
  
`;
const CloseWrapper = styled.div`
  width:100%;
  display:flex;
  justify-content: flex-end;

`
const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`;

const BurgerMenu = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  width:300px;
  background:white;
  z-index:100;
  padding:20px;
  list-style:none;
  display :flex;
  flex-direction:column;
  align-items:flex-start;
  transform: ${props => props.show? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform 0.3s;
  li{
    padding:15px 0;
    border-bottom: 1px solid rgb(0,0,0,.2);
    a{
      font-weight:600;
    }
  }
`