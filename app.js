class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onMouseEnter() {
    this.setState({
      hover: true
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false
    })
  }

  render() {
    
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'none'
    };

    return (
      <li style = {style} 
          onMouseEnter={this.onMouseEnter.bind(this)} 
          onMouseLeave={this.onMouseLeave.bind(this)} >
          {this.props.groceryListItem}
      </li>
    );
  }
}

var GroceryList = () => {
  
  var groceries = ['Kiwis', 'Honeydew'];

  return (
    <ul>
      {groceries.map(grocery =>
        <GroceryListItem groceryListItem={grocery} />
      )}
    </ul>
  )
};

ReactDOM.render(<GroceryList />, document.getElementById('app'));

///----
// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       done: false
//     };
//   }
//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }

//   render() {
//     // Making the style conditional on our `state` lets us 
//     // update it based on user interactions.
//     var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none'
//     };

//     // You can pass inline styles using React's `style` attribute to any component
//     // snake-cased css properties become camelCased this this object
//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );
//   }
// }



