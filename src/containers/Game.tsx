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

  clickHandler = (e: React.MouseEvent<HTMLElement>, player: string) => {
    const id = e.currentTarget.dataset.id || '';
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

    if (this.props.player === '1') {
      this.setState({ selectedField: '' });
      if (this.props.secondPlayerData.includes(this.state.selectedField)) {
        elements.forEach(element => {
          element.style.pointerEvents = 'none';
          if (element.dataset.id === this.state.selectedField) {
            element.classList.add('killed');
          }
        });
        this.setState((state) => ({ firstPlayerPoint: state.firstPlayerPoint + 1 }))
        alert('Killed');
        if (this.state.firstPlayerPoint === 7) {
          alert(`Game is ended! Winner is Player ${this.props.player}`);
          this.setState({ ended: true })
          return;
        }
      } else {
        elements.forEach(element => {
          element.style.pointerEvents = 'none';
          if (element.dataset.id === this.state.selectedField) {
            element.classList.add('missed');
          }
        });
        alert('missed');
        this.props.playerChangeHandler('2');
      }
    } else {
      this.setState({ selectedField: '' });
      if (this.props.firstPlayerData.includes(this.state.selectedField)) {
        elements.forEach(element => {
          element.style.pointerEvents = 'none';
          if (element.dataset.id === this.state.selectedField) {
            element.classList.add('killed');
          }
        });
        alert('Killed');
        this.setState((state) => ({ secondPlayerPoint: state.secondPlayerPoint + 1 }))
        if (this.state.secondPlayerPoint === 7) {
          alert(`Game is ended! Winner is Player ${this.props.player}`);
          this.setState({ ended: true })
          return;
        }
      } else {
        elements.forEach(element => {
          element.style.pointerEvents = 'none';
          if (element.dataset.id === this.state.selectedField) {
            element.classList.add('missed');
          }
        });
        alert('missed');
        this.props.playerChangeHandler('1');
      }
    }
  }

  endHandler = () => { alert(`Game is ended! Winner is Player ${this.props.player}`); }

  render(): ReactNode {
    const { selectedField, ended, firstPlayerPoint, secondPlayerPoint } = this.state;
    return (
      <>
        <div className="playground-wrapper">
          <div>
            <h5>Point: {firstPlayerPoint}</h5>
            <div className="row">
              <div className={`square`} data-id='1-1' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='1-2' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='1-3' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='1-4' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='1-5' onClick={(e) => this.clickHandler(e, '1')} />
            </div>
            <div className="row">
              <div className={`square`} data-id='2-1' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='2-2' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='2-3' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='2-4' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='2-5' onClick={(e) => this.clickHandler(e, '1')} />
            </div>
            <div className="row">
              <div className={`square`} data-id='3-1' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='3-2' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='3-3' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='3-4' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='3-5' onClick={(e) => this.clickHandler(e, '1')} />
            </div>
            <div className="row">
              <div className={`square`} data-id='4-1' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='4-2' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='4-3' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='4-4' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='4-5' onClick={(e) => this.clickHandler(e, '1')} />
            </div>
            <div className="row">
              <div className={`square`} data-id='5-1' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='5-2' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='5-3' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='5-4' onClick={(e) => this.clickHandler(e, '1')} />
              <div className={`square`} data-id='5-5' onClick={(e) => this.clickHandler(e, '1')} />
            </div>
          </div>
          <div>
            <h5>Point: {secondPlayerPoint}</h5>
            <div className="row">
              <div className={`square`} data-id='1-1' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='1-2' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='1-3' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='1-4' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='1-5' onClick={(e) => this.clickHandler(e, '2')} />
            </div>
            <div className="row">
              <div className={`square`} data-id='2-1' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='2-2' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='2-3' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='2-4' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='2-5' onClick={(e) => this.clickHandler(e, '2')} />
            </div>
            <div className="row">
              <div className={`square`} data-id='3-1' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='3-2' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='3-3' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='3-4' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='3-5' onClick={(e) => this.clickHandler(e, '2')} />
            </div>
            <div className="row">
              <div className={`square`} data-id='4-1' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='4-2' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='4-3' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='4-4' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='4-5' onClick={(e) => this.clickHandler(e, '2')} />
            </div>
            <div className="row">
              <div className={`square`} data-id='5-1' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='5-2' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='5-3' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='5-4' onClick={(e) => this.clickHandler(e, '2')} />
              <div className={`square`} data-id='5-5' onClick={(e) => this.clickHandler(e, '2')} />
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