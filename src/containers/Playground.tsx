import { Component } from "react";

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

  clickHandler = (e: React.MouseEvent<HTMLElement>, id: string) => {
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
        <div>
          <div className="row">
            <div className={`square`} onClick={(e) => this.clickHandler(e, '1-1')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '1-2')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '1-3')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '1-4')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '1-5')} />
          </div>
          <div className="row">
            <div className={`square`} onClick={(e) => this.clickHandler(e, '2-1')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '2-2')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '2-3')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '2-4')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '2-5')} />
          </div>
          <div className="row">
            <div className={`square`} onClick={(e) => this.clickHandler(e, '3-1')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '3-2')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '3-3')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '3-4')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '3-5')} />
          </div>
          <div className="row">
            <div className={`square`} onClick={(e) => this.clickHandler(e, '4-1')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '4-2')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '4-3')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '4-4')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '4-5')} />
          </div>
          <div className="row">
            <div className={`square`} onClick={(e) => this.clickHandler(e, '5-1')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '5-2')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '5-3')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '5-4')} />
            <div className={`square`} onClick={(e) => this.clickHandler(e, '5-5')} />
          </div>
        </div>
        <br />
        <button className="btn btn-success" onClick={this.confirmHandler}>confirm</button>
      </div>
    );
  }
}

export default Playground;
