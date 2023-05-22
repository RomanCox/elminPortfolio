import styled from 'styled-components';
import {LogoShowType, VariantType} from './logo.component.tsx';

export const LogoContainerStyled = styled.div<{ color: VariantType }>`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  border: ${({ color }) => `3px solid ${color}`};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
  font-size: 100%;

  @media screen and (max-width: 439px) {
    border-width: 2px;
  }
`;

export const LogoStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const AfterBlockStyled = styled.div<LogoShowType>`
  width: 0;
  height: ${({max = false}) => max ? '16px' : '16%'};
  background: #fff;
  color: #000;
  position: absolute;
  left: 50%;
  bottom: ${({max, homePage}) => max || homePage ? '-10%' : '-12%'};
  transform: translateX(-50%);
  font-family: Libre Franklin, sans-serif;
  font-size: 100%;
  line-height: 100%;
  font-weight: 600;
  letter-spacing: normal;
  box-sizing: border-box;
  text-align: center;
  animation: expanding 0.5s ease 1.5s forwards;

  span {
    opacity: ${({ isShow }) => isShow ? '1' : 0};
    transition: opacity 0.5s ease 0s;
  }

  &:after, &:before {
    content: '';
    width: 1px;
    height: 0;
    background: ${({ color }) => color};
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: grow 1.5s ease 1s forwards;
  }

  &:after {
    left: 0;
  }

  &:before {
    right: 0;
  }

  @keyframes expanding {
    0% {
      width: 0;
    }
    100% {
      width: 25%;
    }
  }

  @keyframes grow {
    0% {
      height: 0;
    }
    33% {
       height: 100%;
    }
    66% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }

  @media screen and (max-width: 439px) {
    height: calc(15px + (20 - 15) * (100vw - 320px) / (439 - 320));
    bottom: calc(-7.5px + (-11 + 7.5) * (100vw - 320px) / (439 - 320));
    font-size: calc(12px + (16 - 12) * (100vw - 320px) / (439 - 320));
    line-height: calc(15px + (20 - 15) * (100vw - 320px) / (439 - 320));

    @keyframes expanding {
      0% {
        width: 0;
      }
      100% {
        width: calc(75px + (100 - 75) * (100vw - 320px) / (439 - 320));
      }
    }
  }
`;