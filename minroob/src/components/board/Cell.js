import React from 'react';
import {CELL_SIZE, CELL_MARGIN} from "../../constants";
import "./Cell.css";

export class Cell extends React.PureComponent {
    render() {
        const {cell} = this.props;
        return <div className="cell"
                    style={{width: CELL_SIZE - CELL_MARGIN, height: CELL_SIZE - CELL_MARGIN, margin: CELL_MARGIN / 2}}>
            {cell.number}
        </div>;
    }
}
