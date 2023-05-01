import {
	PhotoContainerStyled,
	PhotoStyled,
	ContentContainerStyled,
	LogoContainerStyled,
	LogoStyled,
	AfterBlockStyled,
	NameContainerStyled,
	NameStyled,
	DescriptionContainerStyled,
	ButtonContainerStyled, ButtonStyled,
	ButtonDescriptionContainerStyled,
} from './HomeBlock.styled.ts';
import avatar from '../../assets/images/avatar.webp';
import logo from '../../assets/images/elmin_logo_black.webp';
import {HomeBlockPropsType} from '../../App.tsx';

export const HomeBlockDesktop = ({isShow}: HomeBlockPropsType) => {

	return (
		<>
			<PhotoContainerStyled>
				<PhotoStyled src={avatar}/>
			</PhotoContainerStyled>
			<ContentContainerStyled>
				<LogoContainerStyled>
					<LogoStyled src={logo}/>
					<AfterBlockStyled isShow={isShow}>
						{isShow && <span>CG ARTIST</span>}
					</AfterBlockStyled>
				</LogoContainerStyled>
				<NameContainerStyled>
					<NameStyled>Elmin Karaev</NameStyled>
					<DescriptionContainerStyled>
                        My name is Elmin, and I am a CG Artist from Minsk. I specialize in 3D graphics
					</DescriptionContainerStyled>
				</NameContainerStyled>
				<ButtonContainerStyled>
					<ButtonStyled>Enter</ButtonStyled>
					<ButtonDescriptionContainerStyled>
                        Press Enter to go to my site
					</ButtonDescriptionContainerStyled>
				</ButtonContainerStyled>
			</ContentContainerStyled>
		</>
	);
};