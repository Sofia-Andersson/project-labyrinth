import React from 'react';
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux';
import { navigateGame, game } from '../reducers/game'

export const NavigateButtons = () => {
  // const data = useSelector((store) => store.game.location);
  // const actions = useSelector((store) => store.game.step);
  const userName = useSelector((store) => store.game.userName)
  const dispatch = useDispatch();

  // const directionAlternatives = useSelector(
  //   (store) => store.game.data.actions.map((item) => item.direction)
  // )

  const onClick = (direction) => {
    dispatch(game.actions.setStep(direction))
    dispatch(navigateGame(userName, direction))
    console.log(direction)
  }

  return (
    <ButtonContainer>
      <BtnN
        id="North"
        type="button"
        value="North"
        onClick={(e) => onClick(e.target.value)}>
        {/* disabled={!data.actions.includes('North')} */}
  ↑ N
      </BtnN>

      <BtnW
        id="West"
        type="button"
        value="West"
        onClick={(e) => onClick(e.target.value)}>
        {/* disabled={!directionAlternatives.includes('West')}> */}
  W ←
      </BtnW>

      <BtnE
        id="East"
        type="button"
        value="East"
        onClick={(e) => onClick(e.target.value)}>
        {/* disabled={!directionAlternatives.includes('East')}> */}
  E →
      </BtnE>

      <BtnS
        id="South"
        type="button"
        value="South"
        onClick={(e) => onClick(e.target.value)}>
        {/* disabled={!directionAlternatives.includes('South')}> */}
  S ↓
      </BtnS>
      <Middle />
    </ButtonContainer>
  )
}
export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  position: absolute;
  top: 100px;
  left: 38px;
`;

export const BtnN = styled.button`
  background: rgb(55, 55, 55);
  color: rgb(53, 215, 180);
  grid-area: 1/2;
  width: 10px;
  height: 10px;
  padding: 17px;
  margin: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #000;
  border-radius: 5px;
  cursor: pointer;
`;
export const BtnW = styled.button`
  background: rgb(55, 55, 55);
  color: rgb(53, 215, 180);
  grid-area: 2/1;
  width: 10px;
  height: 10px;
  padding: 17px;
  margin: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #000;
  border-radius: 5px;
  cursor: pointer;
`;
export const BtnE = styled.button`
  background: rgb(55, 55, 55);
  color: rgb(53, 215, 180);
  grid-area: 2/3;
  width: 10px;
  height: 10px;
  padding: 17px;
  margin: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #000;
  border-radius: 5px;
  cursor: pointer;
`;
export const BtnS = styled.button`
  background: rgb(55, 55, 55);
  color: rgb(53, 215, 180);
  grid-area: 3/2;
  width: 10px;
  height: 10px;
  padding: 17px;
  margin: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #000;
  border-radius: 5px;
  cursor: pointer;
`;

const Middle = styled.div`
grid-area: 2/2;
background-color: rgb(53, 215, 180);
width: 30px;
height: 30px;
`