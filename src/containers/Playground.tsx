import { Component } from "react";

import GameCells from '../components/GameCells';

type PlaygroundProps = {
  player: string;
  selectedFields?: Array<string>
  startMove?: boolean
  currentPlayer?: string
  confirmData: (userFields: Array<string>) => void;
};

class Playground extends Component<PlaygroundProps> {
  state = {
    selectedFields: []
  }

  clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.dataset.id || '';
    
    let data: string[] = [...this.state.selectedFields];
    if (data.includes(id)) {
      data.splice(data.indexOf(id), 1);
      e.currentTarget.classList.remove('active');
    } else {
      if (data.length > 7) {
        alert('You can only select 8 ships');
        return;
      }
      data.push(id);
      e.currentTarget.classList.add('active');
    }
    this.setState({ selectedFields: data })
  }

  confirmHandler = () => {
    if (this.state.selectedFields.length === 8) {
      this.props.confirmData(this.state.selectedFields);
    } else {
      alert('You have to select 8 ships');
    }
  }

  render() {

    return (
      <div>
        <GameCells clickHandler={this.clickHandler} />
        <br />
        <button className="btn btn-success" onClick={this.confirmHandler}>confirm</button>
      </div>
    );
  }
}

export default Playground;
