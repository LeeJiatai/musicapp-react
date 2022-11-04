import React, { Component } from 'react'
import Slider from '../../components/base/slider/slider'
import './index.scss'
import { getRecommend } from '../../service/recommend'

class Recommend extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sliders: [],
            albums: []
        }
    }

    render() {
        return (
            <div className='recommend'>
                <div
                    className='recommend-content'
                >
                    { this.getRecommendContent() }
                </div>
            </div>
        )
    }

    getRecommendContent() {
        const { sliders, albums } = this.state

        return (
            <div>
                <div className='slider-wrapper'>
                    <div className='slider-content'>
                        {
                            sliders.length ? <Slider sliders={sliders}></Slider> : null
                        }
                        
                    </div>
                </div>

                <div className='recommend-list'>
                    <h1 className='list-title'>热门歌单推荐</h1>

                    <ul>
                        {
                            albums.map(item => {
                                return (
                                    <li
                                        className='item'
                                        key={item.id}
                                    >
                                        <div className='icon'>
                                            <img src={item.pic} alt="" />
                                        </div>

                                        <div className="text">
                                            <h2 className="name">{ item.username }</h2>
                                            <p className="title">{ item.title }</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    async componentDidMount() {
        const result = await getRecommend()

		this.setState(() => ({
            sliders: result.sliders,
            albums: result.albums
        }))
    }
}

export default Recommend
