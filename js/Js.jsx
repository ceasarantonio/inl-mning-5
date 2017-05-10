
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
   }

  handleChange(props) {
    this.setState({value: props.target.value});
  }

  

  render() {
    return (
      <div>
         <input placeholder="Write something" type="text" value={this.state.value} onChange={this.handleChange} />
            <p>{this.state.value}</p>
      </div>
    );
  }
}



class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      res: 0
    };
    this.numberInput1Change = this.numberInput1Change.bind(this);
    this.numberInput2Change = this.numberInput2Change.bind(this);
  }
  
  numberInput1Change(event) {
    const first = Number(event.target.value);
    this.setState({
      number1: first,
      res: first + this.state.number2
    })
  }
  numberInput2Change(event) {
    const second = Number(event.target.value);
    this.setState({
      number2: second,
      res: second + this.state.number1
    })
  }
  
  render() {
    return (
      <div>
        <NumberInput handleNumberInput1Change={this.numberInput1Change} handleNumberInput2Change={this.numberInput2Change} />
        <Sum res={this.state.res} />
      </div>
    )
  }
}

class NumberInput extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="write a number" onChange={this.props.handleNumberInput1Change} />
        <input type="text" placeholder="write a number" onChange={this.props.handleNumberInput2Change} />
      </div>
    )
  }
}

class Sum extends React.Component {
  render() {
    return (
      <p className="total sum">{this.props.res}</p>
    )
  }
}

class App3 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentlyActive:'Not active'
    }
  }
  Active(event){
    let clicked = event.target.id;
    document.getElementById('Första knappen').style.color = 'black';
    document.getElementById('Andra knappen').style.color = 'black';

    document.getElementById(clicked).style.color = 'red';
    this.setState({
      currentlyActive:clicked
    })
  }
  
  
  render() {
    return(
      <div>
       <h1>{this.state.currentlyActive}</h1>
        <button id="Första knappen" onClick={this.Active.bind(this)}>React</button>
        <button id="Andra knappen" onClick={this.Active.bind(this)}>React2</button>
      </div>
    );
  }
}


ReactDOM.render(
  (<div>
     <App />
      <App2 />
        <App3 />
  </div>),
  document.getElementById('app')
);

