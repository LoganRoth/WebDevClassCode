import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import { getRobots, setSearchField } from '../actions'

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.getRobotsReducer.robots,
        isPending: state.getRobotsReducer.isPending,
        error: state.getRobotsReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onGetRobots: () => dispatch(getRobots())
    }
}

function App(props) {
    const { robots, isPending, searchField, onSearchChange } = props

    useEffect(() => {
        props.onGetRobots()
    }, []) // giving [] is same as componentDidMount

    const filterRobo = robots.filter(robot => {
        return (robot.name.toLowerCase().includes(searchField.toLowerCase()))
            || (robot.username.toLowerCase().includes(searchField.toLowerCase()))
            || (robot.email.toLowerCase().includes(searchField.toLowerCase()))
    })
    return isPending
        ? <h1 className="tc">Loading</h1>
        : (
            <div className="tc">
                <h1 className="f1">RobotFriends</h1>
                <SearchBox searchFn={onSearchChange} />
                <Scroll>
                    <CardList robots={filterRobo} />
                </Scroll>

            </div>
        )

}

export default connect(mapStateToProps, mapDispatchToProps)(App)