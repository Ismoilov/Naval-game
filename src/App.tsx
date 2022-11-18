import { Component } from "react";

import NavigationTop from "./components/NavigationTop";
import Playground from "./containers/Playground";
import Game from './containers/Game';

export default class App extends Component {
  state = {
    started: false,
    confirmed: false,
    startMove: false,
    player: "1",
    firstPlayerData: [],
    secondPlayerData: []
  };

  startHandler = () => {
    this.setState({ started: true });
  };

  resetHandler = () => {
    this.setState({
      started: false,
      confirmed: false,
      startMove: false,
      player: "1",
      firstPlayerData: [],
      secondPlayerData: []
    })
  }

  confirmData = (userFields: Array<string>) => {
    if (this.state.player === '1') {
      this.setState({ firstPlayerData: userFields, player: '2' })
    } else {
      this.setState({ secondPlayerData: userFields, player: '1', confirmed: true });
    }
  };

  render() {
    const { started, player, confirmed, startMove, firstPlayerData, secondPlayerData } = this.state;

    return (
      <div className="App">
        <h2>Naval Game</h2>
        <NavigationTop start={this.startHandler} reset={this.resetHandler} player={player} started={started} />
        {started && (
          <div className="playground-wrapper">
            {(!confirmed && player === "1") && <Playground player="1" confirmData={this.confirmData} />}
            {(!confirmed && player === "2") && <Playground player="2" confirmData={this.confirmData} />}
          </div>
        )}
        {(!startMove && confirmed) && <button className="btn btn-success" onClick={() => this.setState({ startMove: true })}>start move</button>}
        {startMove && <Game player={player} firstPlayerData={firstPlayerData} secondPlayerData={secondPlayerData} playerChangeHandler={(player: string) => this.setState({ player })} />}
      </div>
    );
  }
}
