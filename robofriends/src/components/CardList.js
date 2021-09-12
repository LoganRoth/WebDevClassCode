import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
    render() {
        const robots = this.props.robots
        const cardComponentArray = robots.map(
            (user, i) => {
                return (
                    <Card
                        key={robots[i].id}
                        robot={robots[i]}
                    />
                )
            }
        )
        return (
            <div>
                {cardComponentArray}
            </div>
        )
    }
}

export default CardList