import styled from 'styled-components';

export const Button = styled.button`
	&[disabled] {
		opacity: .3;
	}
	background: #8D00FF;
	border-radius: 3px;
	color: #FFF;
	height: 32px;
	display: block;
	margin: 0 auto;
	width: 50%;
	text-align: center;
`;