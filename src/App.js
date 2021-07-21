import React from 'react'
import logo from './logo.svg';
import { useAuth0 } from '@auth0/auth0-react'
import { Container, Card, Button, Spinner } from 'react-bootstrap'

const { Img, Body, Title, Text, Header} = Card

export const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0()

  if(isLoading){
    return(
    <Container style={{ height: '100vh', backgroundColor: '#282c34', display: 'flex', justifyContent: 'center', minWidth: '100%'}}>
      <Spinner animation='border'/>
    </Container>)
  }
  
  console.log(isAuthenticated)
  return (
    <Container style={{ height: '100vh', backgroundColor: '#282c34', display: 'flex', justifyContent: 'center', minWidth: '100%'}}>
      <Card border='success' style={{ width: '50%', alignSelf: 'center', height: 'fit-content'}}>
        <Header>
          <Img variant='top' src={logo} />
        </Header>
        <Body >
          <Title>TYTLOG.IN</Title>
          <Text>
            tytlog.in is an open-source, privacy-focused application that allows you to log in into your Youtube account from your Tesla vehicle. 
            Login above to be redirected to your car Youtube app!
          </Text>
          <Text>
            1. use the following link and then login on the redirected page <a href='https://www.youtube.com/redirect?q=https%3A%2F%2Ftytlog.in%2F'>Maybe works link</a>
          </Text>
          {isAuthenticated ? (
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
              <a href='https://youtube.com'><Button>Go To Youtube!! </Button></a>
              <Button variant='primary' onClick={() => logout({returnTo: window.location.origin})}>
              Log Out
              </Button>
            </div>
          ) : (
            <Button variant='primary' onClick={() => loginWithRedirect()}>
              Log In to your Google account
            </Button>
          )
          }
        </Body>
        
      </Card>
    </Container>
  );
}

export default App;
