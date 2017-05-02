
class InputText extends React.Component{
  render () {
  let x;
  return (<p>{this.props.change} {x}</p>);
  }
}

let input = document.getElementById('input');

function InputChanged(event){
  ReactDOM.render(
    <InputText change = {input.value} />,
    document.getElementById('output')
  )
}
input.addEventListener('keyup', InputChanged);

class Sum extends React.Component{
  render () {
    let x = Number(number.value) + Number(number2.value);
    return <div>{x}</div>
  }
}

let number = document.getElementById('number');
let number2 = document.getElementById('number2');

function Add (event){
  ReactDOM.render(
  <Sum item = {number + number2} />,
    document.getElementById('sum')
  )
}

number.addEventListener('keyup', Add);
number2.addEventListener('keyup', Add);

class Mybuttons extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentlyActive:'Not active'
    }
  }
  Active(event){
    let clicked = event.target.id;
    document.getElementById('Första_knappen').style.color = 'black';
    document.getElementById('Andra_knappen').style.color = 'black';

    document.getElementById(clicked).style.color = 'red';
    this.setState({
      currentlyActive:clicked
    })
  }
  
  
  render() {
    return(
      <div>
       <h1>{this.state.currentlyActive}</h1>
        <button id="Första_knappen" onClick={this.Active.bind(this)}>React</button>
        <button id="Andra_knappen" onClick={this.Active.bind(this)}>React2</button>
      </div>
    );
  }
}


ReactDOM.render(<Mybuttons/>, document.getElementById("part3"))




