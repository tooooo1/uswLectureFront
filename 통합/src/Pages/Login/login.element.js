import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider } from "@material-ui/core";
import styled from "styled-components";
import swal from 'sweetalert';


export const Logo = styled.div`
    color: #4B89DC;
    font-size: 46px;
    font-family: HanSans;
    font-weight: bold

`;

export const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LoginButton = styled(Button)`
    &&{
        font-size: 14px;
        font-weight: bold;
        color: rgb(255, 255, 255);
        text-align: center;
        line-height: 2em;
        background-color: rgb(52, 152, 219);
        padding: 5px 100px 5px 100px
    }

`;

export const IdPwSearchLink = styled.div`
      padding: 10px;
      font-size: 16px;
      color:rgb(158,158,158);
      font-weight: bold
`





export const IdInput = ({propsFunction}) => {
    return(
        <TextField
            margin="normal"
            required
            fullWidth
            id="email" 
            label="아이디 입력"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={propsFunction}
        />
    );
}

export const PwInput = ({propsFunction}) => {
    return(
        <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호 입력"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={propsFunction}
            />
    )
}