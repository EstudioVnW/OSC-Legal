// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import VisibilityOn from '../../../assets/visibility-on.svg';
import VisibilityOff from '../../../assets/visibility-off.svg';

// Redux
const mapStateToProps = state => ({
	email: state.signup.users.email,
	password: state.signup.users.password,
});

const ContainerForm = styled.div`
  height: 100vh;
  background-color: #FFCFCD;
  display: flex;
  align-items: center;
	justify-content: center;
  margin: 0;

  @media (max-width: 648px) {
		background-color: #fff;
	}

	@media (max-width: 550px) {
		padding: 1rem;
	}
`;

const Form = styled.form`
  width: 32%;
  background-color: #fff;
	border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;

	@media (max-width: 1200px) {
		min-width: 40%;
	}

	@media (max-width: 982px) {
		width: 53%;
	} 

  @media (max-width: 648px) {
		width: 100%;
	}
`;

const InputBox = styled.span`
	width: 70%;
	display: flex;
	flex-direction: column;
	position: relative;

	@media (max-width: 648px) {
		width: 80%;
	}

	@media (max-width: 490px) {
		width: 95%;
	}
`;

const ImagePassword = styled.img`
  position: absolute;
  bottom: ${props => (props.off ? '1.2rem' : '0.875rem')};
  right: 0.7rem;
	cursor: pointer;

	@media (max-width: 648px) {
		bottom: 1.2rem;
	}
`;

const Label = styled.label`
  margin-top: 0.6rem;
  margin-bottom: 0.3rem;
	padding-left: 0.8rem;
  color: #85144b;
	text-transform: uppercase;
  font-size: 0.75rem;
  font-family: Overpass;
	font-weight: bold;

	@media (max-width: 648px) {
		margin-top: 1rem;
		margin-bottom: 0.6rem;
	}
`;

const Span = styled.span` 
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0 3rem;

	@media (max-width: 648px) {
		width: 80%;
		margin: 1.8rem;
	}

	@media (max-width: 490px) {
		width: 95%;
	}
`;

const ButtonText = styled(Link)`
  color: #85144B;
  font-size: 0.9rem; 
  text-decoration: none;
	text-transform: uppercase;
`;

const Error = styled.h4`
  width: 63%;
  color: #D63434; 
	display: flex;
  justify-content: flex-end;
  font-size: 0.6rem;
  font-family: Eurostile, Medium;

  @media (max-width: 499px) {
		width: 85%;
	}	

  @media (max-width: 465px) {
		width: 83%;
	}	
`;


class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			email: this.props.email || '',
			password: '',
			passwordError: '',
			error: undefined,
			type: 'password',
		};
	}

	handleSubmit = (ev) => {
		ev.preventDefault();

		if (!this.handleError()) {
			this.setState({ redirect: '/dashboard' });
		}
	}

	handleError = () => {
		const { email, password } = this.state;
		const registeredEmail = this.props.email;
		const registeredPassword = this.props.password;
		let error = false;

		if (email !== registeredEmail || password.length < 6 || password !== registeredPassword) {
			error = true;
		}

		this.setState({
			error,
		});

		return error;
	}

	handleChangeEmail = (ev) => {
		this.setState({
			email: ev.target.value,
			error: false,
		});
	};

	handleChangePassword = (ev) => {
		this.setState({
			password: ev.target.value,
			error: false,
		});
	}

	handleChangeType = () => {
		this.setState({
			type: this.state.type === 'password' ? 'text' : 'password',
		});
	}

	render() {
		const {
			email, type, error, password, redirect,
		} = this.state;
		return (
			<ContainerForm>
				<Form onSubmit={this.handleSubmit}>
					<ImageLogo margin='3rem 0 6rem' />
					<InputBox>
						<Label>e-mail</Label>
						<Input
							login
							type="email"
							value={email}
							onChange={this.handleChangeEmail}
							placeholder="name@email.com"
							required
						/>
					</InputBox>
					<InputBox>
						<Label>senha</Label>
						<Input
							login
							type={type}
							value={password}
							onChange={this.handleChangePassword}
							placeholder="Inserir senha"
							isError={error}
							required
						/>
						<span>
							<ImagePassword
								src={type === 'password' ? VisibilityOn : VisibilityOff}
								onClick={this.handleChangeType}
								off={type === 'password'}
							/>
						</span>
					</InputBox>
					{error && <Error>E-mail e/ ou senha incorreta</Error>}
					<Button
						width='70%'
						widthMobile='80%'
						widthMobileSmall='95%'
						padding='1rem'
						margin='2.5rem 0 1rem'
						marginMobile='3.7rem 0 1.5rem'
						text="entrar"
						type="submit"
					/>
					<Span>
						<ButtonText to={'/createuser'}>criar conta</ButtonText>
						<ButtonText to={'/resetpassword'}>resetar conta</ButtonText>
					</Span>
				</Form>
				{redirect && <Redirect to={'/dashboard'} />}
			</ContainerForm>
		);
	}
}

export default connect(mapStateToProps)(LoginScreen);
