import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

class Tab extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tabs: [
                {
                  name: '推荐',
                  path: '/recommend'
                },
                {
                  name: '歌手',
                  path: '/singer'
                },
                {
                  name: '排行',
                  path: '/top-list'
                },
                {
                  name: '搜索',
                  path: '/search'
                }
            ]
        }
    }

    render() {
        const { tabs } = this.state
        const isActive = ({isActive}) => isActive ? 'tab-item active': 'tab-item'
        return (
            <div className='tab'>
               {
                tabs.map(tab => {
                    return (
                        <NavLink
                            className={isActive}
                            to={tab.path}
                            key={tab.path}
                        >
                            <span className="tab-link">{ tab.name }</span>    
                        </NavLink>
                    )
                })
               }
            </div>
        )
    }
}

export default Tab
