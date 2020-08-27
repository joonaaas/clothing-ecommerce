import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	&:hover {
		button {
			opacity: 0.85;
			display: flex;
		}
	}
`
export const AddToCart = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;
`

export const Image = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	filter: brightness(100%);
	transition: filter 0.3s ease;
	position: relative;
	transform: scale(1.03);
	background-image: ${({ image }) => `url(${image})`};

	&:hover {
		filter: brightness(130%);
	}
`

export const BorderImage = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid black;
	overflow: hidden;
`

export const CollectionFooter = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	margin-top: 10px;
`

export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`

export const Price = styled.span`
	width: 10%;
`
