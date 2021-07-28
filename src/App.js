import React ,{ useState, useEffect }from 'react';
import Container from './Components/Ui/Container';
import Row from './Components/Ui/Row';
import FinalCard from './Components/Card/FinalCard';
import Input from './Components/Input/Input';


// class App extends React.Component {
//   constructor (){
//     super();
//     this.state = {
//       robots: [],
//     };
//   }

//   componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then( (response) => response.json())
    //   .then( users => this.setState({robots: users}));
      
//   }
  
  //  onValueChange = (changedValue) =>{
  //   changedValue !== " " && this.setState( {robots:this.state.robots.filter(robot =>{
  //     return robot.name.toLowerCase().includes(changedValue.toLowerCase())
  //   })}) 
    
  // }

//   render() {
//     return (
//       <Container>
//         <Row className="mb-3">
//           <Input inApp ={this.onValueChange}/>
//         </Row>
//         <FinalCard botArray={this.state.robots}/>
//       </Container>
//     );
//   }
// }

const App = () =>{
  const [user, setUser] = useState([]);
  const [input, setInput] = useState('');

  useEffect( () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then( (response) => response.json())
      .then( users => setUser(users));
  },[])
  
  const onValueChange = (event) =>{
    setInput(event.target.value);
  }

  return (
    <Container>
      <Row className="mb-3">
        <Input inApp ={onValueChange}/>
      </Row>
      <FinalCard botArray={user.filter(robot =>{
        return robot.name.toLowerCase().includes(input.toLowerCase())
      })}/>
    </Container>
  )
}

export default App;
