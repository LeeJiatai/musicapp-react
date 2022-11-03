import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        return (
            <div className='tab'>
               {
                tabs.map(tab => {
                    return (
                        <Link
                            className='tab-item'
                            to={tab.path}
                            key={tab.path}
                        >
                            <span className="tab-link">{tab.name}</span>    
                        </Link>
                    )
                })
               }
            </div>
        )
    }
}

export default Tab
