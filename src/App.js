import React from 'react'
import logo from './Popcorn.svg';
import { useAuth0 } from '@auth0/auth0-react'
import { Container, Card, Button, Spinner } from 'react-bootstrap'

const { Img, Body, Text } = Card
const ALLOWED_REFERRER = "https://www.youtube.com/"
export const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0()
  
  if(isLoading){
    return(
    <Container style={{ height: '100vh', backgroundColor: '#282c34', display: 'flex', justifyContent: 'center', minWidth: '100%'}}>
      <Spinner animation='border'/>
    </Container>)
  }
  const isYTReferrer = document.referrer.includes(ALLOWED_REFERRER)

  return (
    <Container style={{ height: '100vh', backgroundColor: '#282c34', display: 'flex', justifyContent: 'center', minWidth: '100%'}}>
      <Card style={{ width: '65%', alignSelf: 'center', height: 'fit-content', backgroundColor: '#282c34', color: '#FFFFFF', border: '0px'}}>
        <Img variant='top' src={logo} style={{maxWidth: '30%', alignSelf: 'center'}}/>
        <Body >
          <Text>
                tytlog.in is an <a href='https://github.com/0xtf/tytlog.in' target='_blank' rel='noreferrer'>open-source</a>, privacy-focused application that allows you to log in into your Youtube account from your Tesla vehicle.
          </Text>
          {isAuthenticated? (
            <>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
              <a href='https://youtube.com'><Button>All done! Open YouTube! 🍿 </Button></a>
              <Button variant='primary' onClick={() => logout({returnTo: window.location.origin})}>
              Log Out
              </Button>
            </div>
            </>
          ):(
            <>
            { isYTReferrer ? (
              <Button variant='primary' onClick={() => loginWithRedirect()}>Second step: Log in to your Google Account</Button>
            ):(
            <Text>
              <a href='https://www.youtube.com/redirect?q=https%3A%2F%2Ftytlog.in%2F'><Button style={{ marginRight:'5px' }}>First step: Open YouTube and click on "Go to site"</Button></a>
            </Text>
            )}
            </>
          )}
        </Body>
      </Card>
    </Container>
  );
}

export default App;
