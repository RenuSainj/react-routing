// import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Unmounting from './Unmounting';
import Updating from './Updating';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import './Mount.css'
function App() {
  return (
   
    <div className="App">
       <BrowserRouter>
     
      <Menu />
     <Switch> 
      {/* <Route exact path="/Mounting"  component={Mounting} /> */}
      
     <Route exact path ="/" exact component= {Mounting} />
      <Route exact path ="/Updating" component= {Updating} />
      <Route exact path ="/Unmounting" component= {Unmounting} /> 
      </Switch>
      </BrowserRouter>
    </div>
    
  );
}


const Mounting = () =>{

  return(

    <div className="UnmountStyle">
     <h1>Welcome to Mounting</h1><br></br>
     <div className="container2">
     <p>Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:</p>

<ol>
constructor()
getDerivedStateFromProps()
render()componentDidMount()
</ol>


<h1>constructor</h1>
<p>

The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).</p>


<h1>getDerivedStateFromProps</h1>
<p>
The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.

This is the natural place to set the state object based on the initial props.

It takes state as an argument, and returns an object with changes tThe getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.

This is the natural place to set the state object based on the initial props.

It takes state as an argument, and returns an object with changes to the state.

The example below starts with the favorite color being "red", but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:o the state.

The example below starts with the favorite color being "red", but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:
</p>


  <h1>render </h1>
  <p>The render() method is required, and is the method that actually outputs the HTML to the DOM.</p>


<h1>componentDidMount</h1>
<p>The componentDidMount() method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in the DOM.</p>
</div>
    </div>
  )
}



export default App;
