import styled from 'styled-components';

export const Form = styled.form`
	padding: 16px 0;
`;

export const Input = styled.input`
	&[disabled] {
		opacity: .3;
	}
	border: 1px solid #CCC;
	border-radius: 3px;
	padding: 8px 4px;
	display: block;
	width: 80%;
	margin: 0 auto 8px auto;
`;

export const Title = styled.h2`
	font-size: 16px;
	font-weight: 500;
	padding: 8px 0;
	text-align: center;
`;

export const ErrorSpan = styled.span`
	color: #FFF;
	background: #F00;
	padding: 8px 4px;
	margin: 5px auto;
	text-align: center;
	display: block;
`;