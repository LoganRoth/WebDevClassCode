import React, { useState, useEffect } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'

function App() {
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users)
            })

    }, []) // giving [] is same as componentDidMount

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filterRobo = robots.filter(robot => {
        return (robot.name.toLowerCase().includes(searchField.toLowerCase()))
            || (robot.username.toLowerCase().includes(searchField.toLowerCase()))
            || (robot.email.toLowerCase().includes(searchField.toLowerCase()))
    })
    if (robots.length === 0) {
        return <h1 className="tc">Loading</h1>
    } else {
        return (
            <div className="tc">
                <h1 className="f1">RobotFriends</h1>
                <SearchBox searchFn={onSearchChange} />
                <Scroll>
                    <CardList robots={filterRobo} />
                </Scroll>

            </div>
        )
    }

}

export default App