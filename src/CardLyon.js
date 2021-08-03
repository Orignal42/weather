import  {Image} from 'react';
import { Card } from 'react-bootstrap';
import logo from './logo192.png'




function CardLyon(props) {
console.log(props)
       return (
     
            < div className="d-flex justify-content-center" >
            <Image src={logo} />
                <Card className=" UserCard bg-dark text-white" style={{ width: '18rem' }}>
                  
                    <Card.Body>
                        <Card.Title className="text-center"> Ville:{props.name}</Card.Title>
                        <Card.Text className="text-center"> Vent:{props.wind}km/h </Card.Text>
                        <Card.Text className="text-center"> Température:{props.temp }°C</Card.Text>
                        <Card.Text className="text-center"> meteo:{props.weather }</Card.Text>
                    </Card.Body>
                </Card >
            </div >
        )
 
}

export default CardLyon;