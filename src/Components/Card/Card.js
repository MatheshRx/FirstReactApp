import '../bootstrap/morph/bootstrap.min.css';

const Card = (props) =>{
    return (
        <div className="col  text-center">
            <div className=" col-10 mx-auto card">
                <img alt="Robots" src={`https://robohash.org/${props.id}`} />
                <div className="p-1">
                    <h4>{props.name}</h4>
                    <p>{props.email}</p>
                </div>            

            </div>
        </div>
    )
}

export default Card;