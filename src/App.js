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
  const isYTReferrer = document.referrer === "https://www.youtube.com/"
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
          {isAuthenticated? (
            <>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
              <a href='https://youtube.com'><Button>Go To Youtube!! </Button></a>
              <Button variant='primary' onClick={() => logout({returnTo: window.location.origin})}>
              Log Out
              </Button>
            </div>
            </>
          ):(
            <>
            <Text>
              How to log in:
            </Text> 
            {isYTReferrer?(
            <Text>
              Second Step:<Button variant='primary' onClick={() => loginWithRedirect()} style={{ margin:'0px 10px' }}>Authenticate in your Google account</Button>
            </Text>):
            (<Text>
              First Step:<a href='https://www.youtube.com/redirect?q=https%3A%2F%2Ftytlog.in%2F'><Button style={{ margin:'0px 10px' }}>Open the Youtube App</Button></a> (Click "Go to site" when prompted by the Youtube App)
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
