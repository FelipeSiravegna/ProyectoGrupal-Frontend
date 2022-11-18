import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Acordeon.css'

function Acordeon() {
  return (
    <div className='total'>
      <Accordion bg='warning'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>DOES THE CORNER MOVIES PREMIUM HAVE A FREE TRIAL?</Accordion.Header>
          <Accordion.Body>
            THE CORNER MOVIES, along with most THE CORNER MOVIES providers, no longer offers a free trial to new subscribers. If a subscription
            or promotional offer includes a free trial, you'll see a mention of the free trial when you sign up.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>HOW MUCH DOES THE CORNER MOVIES COST MONTHLY?</Accordion.Header>
          <Accordion.Body>
            YOU CAN ACCESS THE CORNER MOVIES PREMIUM MONTHLY FOR ONLY $499 IN THE "PREMIUM" TAB
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="2">
          <Accordion.Header>WHERE CAN I SEE THE MOVIES THAT WILL SOON BE ON THE CORNER MOVIES?</Accordion.Header>
          <Accordion.Body>
            the movies that will soon be on THE CORNER MOVIES can be found in the "COMING SOON" tab
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>WHAT IS THE CORNER MOVIES?</Accordion.Header>
          <Accordion.Body>
            THE CORNER MOVIES is a platform for movie fans where you can create reviews, compare movies, make playlists and much more.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>

  );
}

export default Acordeon;