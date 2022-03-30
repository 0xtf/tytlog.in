import React from 'react'
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
        <Img variant='top' src={'./mascot.png'} style={{maxWidth: '60%', alignSelf: 'center'}}/>
        <Body >
          {(!isYTReferrer && !isAuthenticated) && <Text>
                tytlog.in is an <a href='https://github.com/0xtf/tytlog.in' target='_blank' rel='noreferrer'>open-source</a>, privacy-focused application that allows you to log in into your Youtube account on your Tesla vehicle. Visit us using the browser in your car and click below to get started!
          </Text>}
          {isAuthenticated? (
            <>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
              <a href='https://youtube.com'><Button>All done! Click here to open YouTube!</Button></a>
              <Button variant='primary' onClick={() => logout({returnTo: window.location.origin})}>
              Log Out
              </Button>
            </div>
            </>
          ):(
            <>
            { isYTReferrer ? (
              <Button variant='primary' onClick={() => loginWithRedirect()}>Second step: Almost there! Click here to login to your Google Account</Button>
            ):(
            <Text>
              <a href='https://www.youtube.com/redirect?q=https%3A%2F%2Ftytlog.in%2F'><Button style={{ marginRight:'5px' }}>First step: Click here and choose "GO TO SITE" when prompted</Button></a>
            </Text>
            )}
            </>
          )}
        </Body>
      </Card>
      {(!isYTReferrer && !isAuthenticated) && <Text style={{color: '#FFFFFF', position: 'absolute', bottom: '0', margin: '5px', textAlign: 'center', width: '98%', fontSize: '14px'}}>
        <i><a href='https://www.reddit.com/r/TeslaLounge/comments/ooy4tw/tytlogin_simple_and_secure_youtube_login_for_your/?sort=new' target='_blank' rel='noreferrer'>Announcement thread</a> on r/TeslaLounge  | ✉️ tiago@xroot.org</i>
      </Text>}
    </Container>
  );
}

export default App;
