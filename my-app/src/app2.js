import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nayoks, setNayoks] = useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  })
  // const nayoks= [{name:'Manna', age: 45}, {name:'Joshim', age:48}, {name:'Rubel', age:56}, {name:'Salman Sah', age:78}];
  // const age=['45', '70', '65', '55']
  const subjects= [{booksName: 'math', mark: 'B'},{booksName: 'Bangla', mark: 'A'}, {booksName: 'biology', mark: 'A+'}, {booksName:'Chemistry', mark: 'A+'}]
  return (
    <div className="App">
      {
        subjects.map(subject => <Nayok booksName= {subject.booksName} mark= {subject.mark} ></Nayok>)
      }
      {
        nayoks.map(nk => <Nayok name= {nk.name} age={nk.age} id= {nk.id}></Nayok> )
      }
      <MovieCounter></MovieCounter>
      {/* <Nayok name= {nayoks[0]} age={age[0]}></Nayok>
      <Nayok name= {nayoks[1]} age= {age[1]}></Nayok>
      <Nayok name= {nayoks[2]} age= {age[2]}></Nayok>
      <Nayok name= {nayoks[3]} age= {age[3]}></Nayok> */}
      

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
      </header>
    </div>
  );
}

function MovieCounter(){
  const counterStyle = {
    border: '2px solid darkgray',
    margin: '50px',
    padding: '30px',
    boxShadow: '2px 2px 20px',
    height: '300px',
    backgroundColor: 'lightsalmon',
    borderRadius:'8px'
  }
  const [count, setCount] = useState(5);

  const handleClick = () => setCount(count +1);
  return  (
    <div style= {counterStyle}>
        <h3>Number of movies: {count}</h3>
        <MovieDisplay movies= {count+1}></MovieDisplay>
        <MovieDisplay movies= {count -1 }></MovieDisplay>
        <MovieDisplay movies= {count *2 }></MovieDisplay>
        <button onClick={handleClick}>Add Movies</button>
    </div>
  )
}
function MovieDisplay(props){
  return <h4>Movies i have acted: {props.movies} </h4>
}
function Nayok(props){
  const nayokStyle = {
    border: '2px solid darkgray',
    margin: '50px',
    padding: '30px',
    boxShadow: '2px 2px 20px',
    height: '300px',
    backgroundColor: 'lightsalmon',
    borderRadius:'8px'
  }
  return(
    <div style={nayokStyle}>
      <h1>Ami Nayok : {props.name}</h1>
      <h4>I have done 5 movies in {props.age} Years </h4>
      <h5>id : {props.id}</h5>
      <p><b>Edited By NAYEAM</b></p>
      <h3> BookName: {props.booksName}</h3>
      <h2>Mark I get: {props.mark}</h2>

    </div>

  )
}

export default App;
