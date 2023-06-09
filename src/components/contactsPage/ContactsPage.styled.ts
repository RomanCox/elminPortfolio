import styled from 'styled-components';

export const ContactsPageContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 85px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
`;

export const TitleContainerStyled = styled.div`
  width: 100%;
  padding: 30px 30px 50px 45px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  font-family: Libre Franklin, sans-serif;
  font-size: 56px;
  line-height: 67px;
  font-weight: 700;
  text-align: start;
  user-select: none;
`;

export const AllContactsContainerStyled = styled.div`
  width: 600px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 50px;
`;

export const PhotoAndSocialsContainerStyled = styled.div`
  width: 450px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 50px;
`;

export const PhotoContainerStyled = styled.div`
  width: 200px;
  height: 250px;
  padding: 40px;
  background: #000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const PhotoStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SocialsContainerStyled = styled.div`
  min-width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  box-sizing: border-box;
`;

export const SocialStyled = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const SocialIconStyled = styled.img`
  width: 30px;
  height: 30px;
`;

export const LabelStyled = styled.div`
  height: 20px;
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 550;
  text-align: start;
  user-select: none;
`;

export const ContactsWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
  box-sizing: border-box;
`;

export const ContactsTitleContainerStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  font-family: Libre Franklin, sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  text-align: start;
  user-select: none;
`;

export const ContactsContainerStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 50px;
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  text-align: start;
  user-select: none;
`;

export const ContactContainerStyled = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 5px;
`;

export const ContactLabelStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  font-family: Libre Franklin, sans-serif;
  color: #a9a9a9;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  text-align: start;
  user-select: none;
  white-space: nowrap;
`;

export const ContactStyled = styled.div`
  padding-left: 29px;
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  text-align: start;
  user-select: none;
`;