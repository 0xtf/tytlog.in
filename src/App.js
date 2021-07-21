import React from 'react'
import logo from './logo.svg';
import { useAuth0 } from '@auth0/auth0-react'
import { Container, Card, Button, Spinner } from 'react-bootstrap'

const { Img, Body, Text } = Card

export const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0()
  
  if(isLoading){
    return(
    <Container style={{ height: '100vh', backgroundColor: '#282c34', display: 'flex', justifyContent: 'center', minWidth: '100%'}}>
      <Spinner animation='border'/>
    </Container>)
  }
  
  console.log(document.referrer)

  return (
    <Container style={{ height: '100vh', backgroundColor: '#282c34', display: 'flex', justifyContent: 'center', minWidth: '100%'}}>
      <Card style={{ width: '50%', alignSelf: 'center', height: 'fit-content', backgroundColor: '#282c34', color: '#FFFFFF', border: '0px'}}>
        <Img variant='top' src={logo} />
        <Body >
          <Text>
            tytlog.in is an open-source, privacy-focused application that allows you to log in into your Youtube account from your Tesla vehicle. 
            Login above to be redirected to your car Youtube app!
          </Text>
          <Text>
            How to log in:
          </Text> 
          <Text>
            1. Open the youtube app using the following and click on "Go to website"<a href='https://www.youtube.com/redirect?q=https%3A%2F%2Ftytlog.in%2F'>link</a>
           {/* 1. Open the youtube app using the following <a href='https://www.youtube.com/redirect?q=http%3A%2F%2Flocalhost%3A3000'>link</a> and click on "Go to website"*/} 
          </Text>
          <Text>
            2. After the redirect Log In on your Google Account
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
