import React from 'react'
import { Badge, Button, Card, CardGroup, Col, Container, Navbar, NavbarBrand, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  function navigateToHome(){
    navigate('/')
  }
  return (
    <div>
      <Navbar bg="light">
        <Container>
              <img
              alt=""
              src="https://th.bing.com/th/id/OIP.Zm_wWlK5a5-284unhYzU8wHaHa?pid=ImgDet&rs=1"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
           {/* <Badge bg="waring" className="justify-content-start">Natwest Group</Badge> */}
            <div className='d-flex'>
          <Button variant="outline-success" onClick={navigateToHome}>Logout</Button>
          </div>
        </Container>
      </Navbar>
       <Card className="bg-dark text-white">
      <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlylFaQAZpTBlniznU_bg3B8t1DtTZ6xdWkg&usqp=CAU" alt="Card image" />
      <Card.ImgOverlay>
      <h1>
       <Badge bg="secondary">Welcome to our Wallet Payment Services</Badge>
      </h1>
        <Card.Title> Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more....</Card.Title>
               
      </Card.ImgOverlay>
    </Card>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1656568118664.png" />
        <Card.Body>
          <Card.Title bg='primary'>Pay anyone directly from your bank account.</Card.Title>
          
          <Card.Text>
          Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone.
          </Card.Text>
        </Card.Body>
        <Card.Footer>          
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png" />
        <Card.Body>
          <Card.Title>Want it?
      No more waiting for it.</Card.Title>
          <Card.Text>
          Your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month..{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card border="dark" style={{ width: '25rem' }}>
        <Card.Img variant="top" src="https://assetscdn1.paytm.com/images/catalog/view_item/788790/1653913927257.png" />
        <Card.Body>
          <Card.Title>The Fastest Way to Pay In-store & Online.</Card.Title>
          <Card.Text>
          Load up your Paytm Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
    </CardGroup>
  
    
    </div>
  )
}

export default Dashboard