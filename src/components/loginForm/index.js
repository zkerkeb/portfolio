import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const LoginForm = ({onSubmit, setFormValue, formValue }) => {
    return (
        <Form  onSubmit={onSubmit}>
            <LabelContainer >
                    <Label>Nom d'utilisateur</Label>
            </LabelContainer>
            <StyledInput value={formValue?.username} onChange={e => setFormValue({...formValue, username: e.target.value})}  name="username" type="text" ></StyledInput>
            <LabelContainer>
                    <Label>Mot de passe</Label>
            </LabelContainer>
            <StyledInput value={formValue?.password} onChange={e => setFormValue({...formValue, password: e.target.value})} name="password" type="password" ></StyledInput>
            <StyledInput type="submit" ></StyledInput>
        </Form>
    );
};

const Label = styled.span`
    color: white;
    font-size: 12px;
`

const LabelContainer = styled.div`
    padding:6px 6px 6px 0px;
`

const StyledInput = styled.input`
    width:300px;
    padding:12px;
    border: none;
    border-radius:8px;
`

const Form = styled.form`
    display:flex;
    flex-direction:column;
    padding:24px;
    border: 1px solid white;
    border-radius:24px;
`

LoginForm.propTypes = {
    
};

export default LoginForm;