import { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { Search } from './components/search/search.component';
class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () => console.log(e.target.value))
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

   render() { 
    const { data, searchField } = this.state;
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Monsters Inc.</h1>
        <Search placeholder='Searching...' handleChange={this.handleChange}/>
        <CardList data={filteredData}/>
      </div>
    )
  }
}

export default App;
