import { Component } from "react";

interface Props {
  player: string
  started: boolean
  start: () => void;
  reset: () => void;
}

class NavigationTop extends Component<Props> {
  render() {
    const { player, started } = this.props;
    return (
      <>
        <div className="btns-wrapper">
          <button className="btn btn-success" onClick={this.props.start}>Start</button>
          <button className="btn btn-danger" onClick={this.props.reset}>Reset</button>
        </div>
        {started && <h4 className="player">Player {player} is playing</h4>}
      </>
    );
  }
}

export default NavigationTop;
