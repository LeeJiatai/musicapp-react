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
        const { sliders } = this.state
        return (
            <div className='recommend'>
                <div className='recommend-content'>
                    <div className='slider-wrapper'>
                        <div className='slider-content'>
                            {
                                sliders.length ? <Slider sliders={sliders}></Slider> : null
                            }
                            
                        </div>
                    </div>
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
