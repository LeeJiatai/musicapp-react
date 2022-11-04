import React, { Component } from 'react'
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(ObserveDOM)

class Scroll extends Component {
    render() {
        const { scrollContent } = this.props
        return (
            <div
                ref={((rootRef) => this.rootRef = rootRef)}
            >
                { scrollContent }
            </div>
        )
    }

    componentDidMount() {
        const { click, probeType } = this.props
        const options = {
            click, probeType
        }
        const rootRef = this.rootRef

        const scrollVal = new BScroll(rootRef, {
            observeDOM: true,
            ...options
        })

        if (options.probeType > 0) {
            scrollVal.on('scroll', (pos) => {
                console.log(pos)
            })
        }
    }
}

export default Scroll
