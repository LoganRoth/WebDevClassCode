import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            })
            .then(users => {
                this.setState({
                    robots: users
                })
            })
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filterRobo = this.state.robots.filter(robot => {
            return (robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())) || (robot.username.toLowerCase().includes(this.state.searchField.toLowerCase())) || (robot.email.toLowerCase().includes(this.state.searchField.toLowerCase()))
        })
        if (this.state.robots.length === 0) {
            return <h1 className="tc">Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RobotFriends</h1>
                    <SearchBox searchFn={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobo} />
                    </Scroll>

                </div>
            )
        }
    }
}

export default App