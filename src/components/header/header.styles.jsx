import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`

// * <Link className='logo-container' to='/'>
// *  <Logo className='logo' />
// * </Link>  -We are wrapping the Link 👇
export const LogoContainer = styled(Link)`
	height: 100%;
	width: 80px;
	padding: 25px;
	display: flex;
	align-items: center;
`

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

export const OptionLink = styled(Link)`
	margin: 10px 15px;
	cursor: pointer;
`
