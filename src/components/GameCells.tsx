import { Component } from 'react';

type GameCellsState = {
  player?: string
  clickHandler: (e: React.MouseEvent<HTMLElement>, player: string) => void
};

const cells: Array<Array<string>> = [
  ['1-1', '1-2', '1-3', '1-4', '1-5'],
  ['2-1', '2-2', '2-3', '2-4', '2-5'],
  ['3-1', '3-2', '3-3', '3-4', '3-5'],
  ['4-1', '4-2', '4-3', '4-4', '4-5'],
  ['5-1', '5-2', '5-3', '5-4', '5-5'],
]

class GameCells extends Component<GameCellsState> {
  render() {
    const { player } = this.props;
    return (
      <div className={`player-${player}`}>
        {cells.map((cells, index) => (
          <div className="row" key={index}>
            {cells.map(cell => (
              <div className='square' key={cell} data-id={cell} onClick={(e) => this.props.clickHandler(e, player || '')} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default GameCells;