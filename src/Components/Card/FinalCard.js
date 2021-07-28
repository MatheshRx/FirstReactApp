import '../bootstrap/morph/bootstrap.min.css';

import Card from './Card';
import Row from '../Ui/Row';

const FinalCard = (props) =>{
    return(
        <Row className="row-cols-md-4 row-cols-2 gy-3 d-flex justify-content-around">
          {props.botArray.map(robot => {
            return (
              <Card key={Math.random().toString()} id={robot.id} name={robot.name} email={robot.email}/>
            )
          })}
      </Row>
    );
}

export default FinalCard;