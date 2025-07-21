import React from 'react'
import { Card, Button } from 'react-bootstrap';
import Playerliste from './Playerliste';
const Player = (props ) => {
  return (
    <div> <Card className= "player-card" style={{ width: '18rem' }}>
      <Card.Img src={props.ImageUrl} />
      <Card.Body>
        <Card.Title>{props.Name}</Card.Title>

        <Card.Text>
         {props.Nationality}
         <hr />
         {props.Age} 
           
         


        </Card.Text>
        <Button variant="primary">{props.Team}</Button>
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Player