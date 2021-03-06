import React, { useState } from 'react'
import {String1, StringLink } from './myinfodetail.element'
import {CssBaseline, Box, Container, createTheme, ThemeProvider } from "@material-ui/core";
import Myevaluation from './myinfodetail/myevaluation';
import Testinformation from './myinfodetail/testinformation'
const theme = createTheme();


const Myinfodetail = () => {
  let [evaluation, setEvaluation] = useState(true)

    return(
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" style={{backgroundColor: "white"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
          }}>
            <String1>내가 쓴 글</String1>
          <Box noValidate sx={{ 
            mt: 1 ,
            border: '2px solid rgb(158,158,158)',
            border: '2px solid rgba(158,158,158,.5)',
            padding: '20px',
            borderRadius: '10px'
              }}>
            <StringLink onClick={()=>{setEvaluation(true)}}>강의평가</StringLink>
            <StringLink onClick={()=>{setEvaluation(false)}}>시험정보</StringLink>
            {
              evaluation===true ? <Myevaluation/> : <Testinformation/>
            }
            </Box>
            </Box>
        </Container>
        </ThemeProvider>

    )
}
export default Myinfodetail