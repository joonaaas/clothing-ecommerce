import styled from 'styled-components'

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;

	div {
		display: flex;
		justify-content: space-between;
	}
`

export const TitleContainer = styled.h1`
	display: flex;
	font-size: 28px;
	margin-bottom: 25px;
	cursor: pointer;
	color: #333;
	width: 5%;

	&:hover {
		color: gray;
	}
`
