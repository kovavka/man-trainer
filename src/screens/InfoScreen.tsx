import * as React from 'react'
import {StateService} from '../services/StateService'
import {InfoVisual} from '../components/info/InfoVisual'

type State = {
}

export class InfoScreen extends React.Component<{}, State> {
    stateService: StateService = StateService.instance

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount(): void {
        this.stateService.onChange.add(this.updateState, this)
    }

    componentWillUnmount(): void {
        this.stateService.onChange.remove(this.updateState, this)
    }

    updateState() {
        this.setState({
        })
    }

    render() {
     return (
         <div className="screen">
             <div className="page-content flex-container flex-container--column">
                <InfoVisual />
             </div>
         </div>
     )
    }
}