import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const friends = ['Hasan','Rabbi','Zakir','Ziaur','Monir']
  const products= [
    {name:'Photoshop', price: '90.99'},
    {name: 'Illustrator', price: '60.99'},
    {name: 'Premeire pro', price: '45.99'},
    {name: 'Audition', price: '40.45'}
  ]
  const medicine= [
    {name: 'Napa', price: '15tk'},
    {name: 'Nurgel', price: '100tk'},
    {name: 'Dirozel', price: '20tk'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Todos></Todos>
        <Users></Users>
        <Counter></Counter>
      <ul>
      {
        medicine.map(medicin=> <li>{medicin.name}</li>)
        }
        </ul>
        <ul>
        {
          friends.map(friend => <li>{friend}</li>)
        }
       </ul>
       <ul>
        {
          products.map(product => <li>{product.name}</li>)
        }
        </ul>
        {
          products.map(product=> <Product product = {product}></Product>)
        }
       {/* <Product name= "Photoshop" price= '90.99'></Product>
       <Product name="Illustrator" price= '60.99'></Product> */}
       {/* <Product product={products[2]}></Product>
       <Product product = {products[1]}></Product>
       <Product product = {products[0]}></Product> */}
       {/* <product></product> */}
   
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount]= useState(10);
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onMouseOver= {() => setCount(count + 1)}> Increase</button>
      <button onMouseOut= {() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove= {()=> setCount(count + 1)}>Smoothly Increasing</button>
    </div>
  )
}
function Product(props){
  const productStyle={
    backgroundColor: 'white',
    color: 'black',
    border:'1px solid red',
    margin: '20px',
    padding: '10px',
    height: '400px',
    width: '300px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h4>{name}</h4>
      <h2>US ${price}/mo</h2>
      <p>Create beautiful graphics, photos, and art on desktop, web, and iPad.</p>
      <button>Select</button>
    </div>
  )
}
function Users(){
  const [users, setUsers]= useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3> Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} <br />
          Email: {user.email} <br />
          Phone: {user.phone} <br />
          Adderss: {user.address.street} <br /> <br /> </li>)
        }
      </ul>
    </div>
  )
}
function Todos(){
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(deta => setTodos(deta))
  },[])
  return(
    <div>
      <h3>Todos: {todos.length}</h3>
      <ul>
      {
        todos.map(todo => <li>ID: {todo.id} <br />
        userID:{todo.userId} <br />
        Title: {todo.title} <br />
        Completed:{todo.completed}
        </li>)
      }
      </ul>
    </div>
  )
}  

export default App;
