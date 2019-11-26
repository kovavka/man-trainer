import * as React from "react";
import {TileVisual} from "./TileVisual";
import {StateService} from '../services/StateService'

type State = {
    tiles: number[]
}

export class VariantsVisual extends React.Component<{}, State> {
    stateService: StateService = StateService.instance

    constructor(props) {
        super(props)

        this.state = {
            tiles: this.stateService.selectedTiles,
        }
    }

    componentDidMount(): void {
        this.stateService.onHandChanged.add(this.updateState, this)
    }

    componentWillUnmount(): void {
        this.stateService.onHandChanged.remove(this.updateState, this)
    }

    updateState() {
        this.setState({
            tiles: this.stateService.selectedTiles,
        })
    }

    getOptions() {
        let options: JSX.Element[] = []
        for (let i=1; i<10; i++) {
            options.push(this.getTile(i))
        }

        return options
    }

    getTile(tile: number): JSX.Element {
        return (
            <TileVisual key={tile}
                        tile={tile}
                        selectable={true}
                        selected={this.stateService.selectedTiles.indexOf(tile) !== -1}
            />
        )
    }

    render() {
        return (
            <div className="hand hand--options">
                {this.getOptions()}
            </div>
        )
    }
}