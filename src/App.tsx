import { Component } from "react";

import NavigationTop from "./components/NavigationTop";
import Playground from "./containers/Playground";
import Game from './containers/Game';

const initialState = {
  started: false,
  confirmed: false,
  startMove: false,
  player: "1",
  firstPlayerData: [],
  secondPlayerData: []
}

export default class App extends Component {
  state = {
    ...initialState
  };

  componentDidMount() {
    const navalCombat = sessionStorage.getItem('navalCombat') || '{}';

    if (navalCombat !== '{}') {
      this.setState(JSON.parse(navalCombat));
    } else {
      this.setState(initialState)
      sessionStorage.setItem('navalCombat', JSON.stringify(initialState));
    }
  }

  startHandler = () => {
    const navalCombat = {
      ...JSON.parse(sessionStorage.getItem('navalCombat') || '{}'),
      started: true
    }
    this.setState(navalCombat);
    sessionStorage.setItem('navalCombat', JSON.stringify(navalCombat))
  };

  resetHandler = () => {
    const navalCombat = {
      started: false,
      confirmed: false,
      startMove: false,
      player: "1",
      firstPlayerData: [],
      secondPlayerData: []
    }
    this.setState(navalCombat)
    sessionStorage.setItem('navalCombat', JSON.stringify(navalCombat))
  }

  confirmData = (userFields: Array<string>) => {
    const navalCombat = JSON.parse(sessionStorage.getItem('navalCombat') || '{}');
    if (this.state.player === '1') {
      this.setState({ firstPlayerData: userFields, player: '2' })
      sessionStorage.setItem(
        'navalCombat',
        JSON.stringify({ ...navalCombat, firstPlayerData: userFields, player: '2' })
      )
    } else {
      this.setState({ secondPlayerData: userFields, player: '1', confirmed: true });
      sessionStorage.setItem(
        'navalCombat',
        JSON.stringify({ ...navalCombat, secondPlayerData: userFields, player: '1', confirmed: true })
      )
    }
  };

  startMoveHandler = () => {
    const navalCombat = JSON.parse(sessionStorage.getItem('navalCombat') || '{}');
    sessionStorage.setItem(
      'navalCombat',
      JSON.stringify({ ...navalCombat, startMove: true })
    )
    this.setState({ startMove: true })
  }

  playerChangeHandler = (player: string) => {
    const navalCombat = JSON.parse(sessionStorage.getItem('navalCombat') || '{}');
    sessionStorage.setItem(
      'navalCombat',
      JSON.stringify({ ...navalCombat, player })
    )
    this.setState({ player })
  }


  render() {
    const { started, player, confirmed, startMove, firstPlayerData, secondPlayerData } = this.state;

    return (
      <div className="App">
        <h2>Naval Combat</h2>
        <NavigationTop start={this.startHandler} reset={this.resetHandler} player={player} started={started} />
        {started && (
          <div className="playground-wrapper">
            {(!confirmed && player === "1") && <Playground player="1" confirmData={this.confirmData} />}
            {(!confirmed && player === "2") && <Playground player="2" confirmData={this.confirmData} />}
          </div>
        )}
        {(!startMove && confirmed) && <button className="btn btn-success" onClick={this.startMoveHandler}>start move</button>}
        {startMove && <Game player={player} firstPlayerData={firstPlayerData} secondPlayerData={secondPlayerData} playerChangeHandler={this.playerChangeHandler} reset={this.resetHandler} />}
      </div>
    );
  }
}
