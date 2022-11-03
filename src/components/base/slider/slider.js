import React, { Component } from 'react'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import './index.scss'

BScroll.use(Slide)

class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPageIndex: 0
        }
    }

    render() {
        const { currentPageIndex } = this.state
        const { sliders } = this.props
        return (
            <div
                className='slider'
                ref={((rootRef) => this.rootRef = rootRef)}    
            >
                <div className='slider-group'>
                    {
                        sliders.map(slider => {
                            return (
                                <div key={slider.id} className='slider-page'>
                                    <a href={slider.link}>
                                        <img src={slider.pic} alt='' />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="dots-wrapper">
                    {
                        sliders.map((slider, index) => {
                            return (
                                <span
                                    className={currentPageIndex === index ? 'dot active' : 'dot' }
                                    key={slider.id}
                                ></span>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        const { sliders } = this.props

        if (!sliders.length) {
            return
        }
        
        const rootRef = this.rootRef
        const sliderValue = new BScroll(rootRef, {
            click: true,
            scrollX: true,
            scrollY: false,
            momentum: false,
            bounce: false,
            probeType: 2,
            slide: true
        })

        sliderValue.on('slideWillChange', (page) => {
            this.setState(() => ({
                currentPageIndex: page.pageX
            }))
        })
    }
}

export default Slider
