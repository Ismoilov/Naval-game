import { Component, ReactNode } from 'react';

type GameProps = {
  player: string;
  firstPlayerData: Array<string>
  secondPlayerData: Array<string>
  playerChangeHandler: (player: string) => void
};

type GameState = {
  selectedField: string
  firstPlayerPoint: number
  secondPlayerPoint: number
  ended: boolean
};

class Game extends Component<GameProps, GameState> {
  state = {
    selectedField: '',
    firstPlayerPoint: 0,
    secondPlayerPoint: 0,
    ended: false
  }

  clickHandler = (e: React.MouseEvent<HTMLElement>, id: string, player: string) => {
    if (this.state.firstPlayerPoint === 8 || this.state.secondPlayerPoint === 8) {
      alert(`Game is ended! Winner is Player ${this.props.player}`);
      this.setState({ ended: true })
      return;
    }
    if (player === this.props.player) {
      alert('You cannot attack your own field');
      return;
    }
    if (this.state.selectedField !== '' && this.state.selectedField !== id) {
      alert('You can attack to one cell only!');
      return
    }
    if (id === this.state.selectedField) {
      e.currentTarget.classList.remove('active');
      this.setState({ selectedField: '' });
    } else {
      e.currentTarget.classList.add('active');
      this.setState({ selectedField: id });
    }
  }

  attackHandler = (e: React.MouseEvent<HTMLElement>) => {
    const elements = document.querySelectorAll<HTMLElement>('.square.active');
    elements.forEach(element => {
      element.style.pointerEvents = 'none';
      element.style.backgroundColor = 'red';
    });

    if (this.props.player === '1') {
      this.setState({ selectedField: '' });
      if (this.props.secondPlayerData.includes(this.state.selectedField)) {
        alert('Killed');
        this.setState((state) => ({ firstPlayerPoint: state.firstPlayerPoint + 1 }))
        if (this.state.firstPlayerPoint === 7) {
          alert(`Game is ended! Winner is Player ${this.props.player}`);
          this.setState({ ended: true })
          return;
        }
      } else {
        alert('missed');
        this.props.playerChangeHandler('2');
      }
    } else {
      this.setState({ selectedField: '' });
      if (this.props.firstPlayerData.includes(this.state.selectedField)) {
        alert('Killed');
        this.setState((state) => ({ secondPlayerPoint: state.secondPlayerPoint + 1 }))
        if (this.state.secondPlayerPoint === 7) {
          alert(`Game is ended! Winner is Player ${this.props.player}`);
          this.setState({ ended: true })
          return;
        }
      } else {
        alert('missed');
        this.props.playerChangeHandler('1');
      }
    }
  }

  endHandler = () => { alert(`Game is ended! Winner is Player ${this.props.player}`);}

  render(): ReactNode {
    const { selectedField, ended, firstPlayerPoint, secondPlayerPoint } = this.state;
    return (
      <>
        <div className="playground-wrapper">
          <div>
            <h5>Point: {firstPlayerPoint}</h5>
            <div className="row">
              <div className={`square`} onClick={(e) => this.clickHandler(e, '1-1', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '1-2', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '1-3', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '1-4', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '1-5', '1')} />
            </div>
            <div className="row">
              <div className={`square`} onClick={(e) => this.clickHandler(e, '2-1', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '2-2', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '2-3', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '2-4', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '2-5', '1')} />
            </div>
            <div className="row">
              <div className={`square`} onClick={(e) => this.clickHandler(e, '3-1', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '3-2', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '3-3', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '3-4', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '3-5', '1')} />
            </div>
            <div className="row">
              <div className={`square`} onClick={(e) => this.clickHandler(e, '4-1', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '4-2', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '4-3', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '4-4', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '4-5', '1')} />
            </div>
            <div className="row">
              <div className={`square`} onClick={(e) => this.clickHandler(e, '5-1', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '5-2', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '5-3', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '5-4', '1')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '5-5', '1')} />
            </div>
          </div>
          <div>
            <h5>Point: {secondPlayerPoint}</h5>
            <div className="row">
              <div className={`square`} onClick={(e) => this.clickHandler(e, '1-1', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '1-2', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '1-3', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '1-4', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '1-5', '2')} />
            </div>
            <div className="row">
              <div className={`square`} onClick={(e) => this.clickHandler(e, '2-1', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '2-2', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '2-3', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '2-4', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '2-5', '2')} />
            </div>
            <div className="row">
              <div className={`square`} onClick={(e) => this.clickHandler(e, '3-1', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '3-2', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '3-3', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '3-4', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '3-5', '2')} />
            </div>
            <div className="row">
              <div className={`square`} onClick={(e) => this.clickHandler(e, '4-1', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '4-2', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '4-3', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '4-4', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '4-5', '2')} />
            </div>
            <div className="row">
              <div className={`square`} onClick={(e) => this.clickHandler(e, '5-1', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '5-2', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '5-3', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '5-4', '2')} />
              <div className={`square`} onClick={(e) => this.clickHandler(e, '5-5', '2')} />
            </div>
          </div>
        </div>
        {selectedField !== '' && <button className='btn btn-warning mt-20' onClick={this.attackHandler}>Attack</button>}
        {ended && <button className='btn btn-success mt-20' onClick={this.endHandler}>End turn</button>}
      </>
    )
  }
}

export default Game;