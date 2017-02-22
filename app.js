

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.groceryListItem}</li>
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
