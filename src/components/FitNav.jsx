import React, { useContext, useState ,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { TokenAuthContext } from '../Context Api/AuthContext'
import { useNavigate } from 'react-router-dom';


function FitNav() {

  const [token,setToken]=useState("")

  useEffect(()=>{
    setToken(sessionStorage.getItem('token'))
   
 },[])


  const { authStatus, setAuthStatus } = useContext(TokenAuthContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    navigate('/')
    setAuthStatus(false)

  }
  return (
    <>
{


  token?
  <Navbar expand="lg" className="navbar-dark" style={{ background: 'black' }}>
  <Container>
    <Navbar.Brand className="d-flex" href="#home">
      <img
        className="img-fluid logo"
        src="https://static.vecteezy.com/system/resources/thumbnails/013/146/831/small_2x/body-builder-lifting-a-dumbbell-png.png"
        alt="Body Builder Lifting a Dumbbell"
      />
      <h2 className="mt-4 fw-bold color-red" style={{ color: 'var(--dark-red)' }}>
        FITPRO
      </h2>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav >
        <Link to={'/'} className="me-4 fitlinks p-4 mt-2" href="#home">
          Home
        </Link>

        <Nav.Link className="me-4 fitlinks p-4 mt-2" href="#programme">
          Programme
        </Nav.Link>
        <Nav.Link  className="me-4 fitlinks  mt-2" href="#membership">
          <Link to={'/profile'}>
          <img className='img-fluid' style={{width:'50px'}} src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-rouge.png" alt="" />
          </Link>
         
  </Nav.Link>

        
          {/* <Nav.Link className=" fitlinks p-4 " href="#signup"  >
            <Link to={'/auth'} >
              <button className="btn btn-danger p-2  " onClick={handleLogout}>Logout</button>
            </Link>

          </Nav.Link> */}
     

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

:

<Navbar expand="lg" className="navbar-dark" style={{ background: 'black' }}>
<Container>
  <Navbar.Brand className="d-flex" href="#home">
    <img
      className="img-fluid logo"
      src="https://static.vecteezy.com/system/resources/thumbnails/013/146/831/small_2x/body-builder-lifting-a-dumbbell-png.png"
      alt="Body Builder Lifting a Dumbbell"
    />
    <h2 className="mt-4 fw-bold color-red" style={{ color: 'var(--dark-red)' }}>
      FITPRO
    </h2>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav >
      <Link to={'/'} className="me-4 fitlinks p-4 mt-2" href="#home">
        Home
      </Link>

      <Nav.Link className="me-4 fitlinks p-4 mt-2" href="#about">
        About Us
      </Nav.Link>
      <Nav.Link className="me-4 fitlinks p-4 mt-2" href="#programme">
        Programme
      </Nav.Link>
      {/* <Nav.Link className="me-4 fitlinks p-4 mt-2" href="#membership">
  Membership
</Nav.Link> */}

      
        <Nav.Link className=" fitlinks p-4 " href="#signup"  >
          <Link to={'/auth'} >
            <button className="btn btn-danger p-2  " >Sign in</button>
          </Link>

        </Nav.Link>
   

    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>

}
   
    </>
  )
}

export default FitNav