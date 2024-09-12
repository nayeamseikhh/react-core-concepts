// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   const job = ['clark', 'carpnter', 'tailor', 'swiper', 'businessman']
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <Person name= "Manna" nayka= "Sabnur" job={job[0]}></Person>
// //         <Person name= "Rubel" nayka= "Popi" job={job[1]}></Person>
// //         <Person name= "tanim" nayka= "lavly" job= {job[2]}></Person>
// //         <Person name= "Salman" nayka= "sabana" job={job[3]} ></Person>
//             // {/* All above Different in data */}
//             // <Person>Similler in Look</Person>
// //       </header>
// //     </div>
// //   );
// // }

// // function Person(props){
// //   const ParsonStyle = {
// //     border:"2px solid red",
// //     margin: "20px",
// //     padding: "50px"

// //   };
// //   return (
// //  <div style={ParsonStyle}>
// //   <h1>Nayok: {props.name}</h1>
// //   <h2>Nayka: {props.nayka}</h2>
// //   <h3>Job: {props.job}</h3>
// //  </div>
// //  )
// // }
  

// // export default App;






// ********************
// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   const products= [
//     {name:'Photoshop', price: '90.99'},
//     {name: 'Illustrator', price: '60.99'},
//     {name: 'Premeire pro', price: '45.99'}
//   ]
//   return (
//     <div className="App">
//       <header className="App-header">
       
//        {/* <Product name= "Photoshop" price= '90.99'></Product>
//        <Product name="Illustrator" price= '60.99'></Product> */}
//        <Product product={products[2]}></Product>
//        <Product product = {products[1]}></Product>
//        <Product product = {products[0]}></Product>

//       </header>
//     </div>
//   );
// }
// function Product(props){
//   const productStyle={
//     backgroundColor: 'white',
//     color: 'black',
//     border:'1px solid red',
//     margin: '20px',
//     padding: '10px',
//     height: '400px',
//     width: '300px',
//     float: 'left'
//   }
//   const {name, price} = props.product;
//   console.log(name, price);
//   return (
//     <div style={productStyle}>
//       <h4>{name}</h4>
//       <h2>US ${price}/mo</h2>
//       <p>Create beautiful graphics, photos, and art on desktop, web, and iPad.</p>
//       <button>Select</button>
//     </div>
//   )
// }
  

// export default App;
// ********************************************

// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   const friends = ['Hasan','Rabbi','Zakir','Ziaur','Monir']
//   const products= [
//     {name:'Photoshop', price: '90.99'},
//     {name: 'Illustrator', price: '60.99'},
//     {name: 'Premeire pro', price: '45.99'},
//     {name: 'Audition', price: '40.45'}
//   ]
//   const medicine= [
//     {name: 'Napa', price: '15tk'},
//     {name: 'Nurgel', price: '100tk'},
//     {name: 'Dirozel', price: '20tk'},
//   ]
//   return (
//     <div className="App">
//       <header className="App-header">
//       <ul>
//       {
//         medicine.map(medicin=> <li>{medicin.name}</li>)
//         }
//         </ul>
//         <ul>
//         {
//           friends.map(friend => <li>{friend}</li>)
//         }
//        </ul>
//        <ul>
//         {
//           products.map(product => <li>{product.name}</li>)
//         }
//         </ul>
//         {
//           products.map(product=> <Product product = {product}></Product>)
//         }
//        {/* <Product name= "Photoshop" price= '90.99'></Product>
//        <Product name="Illustrator" price= '60.99'></Product> */}
//        {/* <Product product={products[2]}></Product>
//        <Product product = {products[1]}></Product>
//        <Product product = {products[0]}></Product> */}
//        {/* <product></product> */}
   
//       </header>
//     </div>
//   );
// }
// function Product(props){
//   const productStyle={
//     backgroundColor: 'white',
//     color: 'black',
//     border:'1px solid red',
//     margin: '20px',
//     padding: '10px',
//     height: '400px',
//     width: '300px',
//     float: 'left'
//   }
//   const {name, price} = props.product;
//   console.log(name, price);
//   return (
//     <div style={productStyle}>
//       <h4>{name}</h4>
//       <h2>US ${price}/mo</h2>
//       <p>Create beautiful graphics, photos, and art on desktop, web, and iPad.</p>
//       <button>Select</button>
//     </div>
//   )
// }
  

// export default App;
