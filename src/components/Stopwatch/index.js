import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state={totalSeconds:0}



  onClickStartBtn = ()=>{
      this.timerId = setInterval(this.timer,1000)
  }

  timer = ()=>{
    this.setState((prevState)=>({
      totalSeconds:prevState.totalSeconds+1
    }))
  } 

onClickStopBtn = ()=>{
  clearInterval(this.timerId)
}

onClickResetBtn = ()=>{
  clearInterval(this.timerId)
  this.setState({totalSeconds:0})
}

componentWillUnmount = ()=>{
  clearInterval(this.timerId)
}

formatTime = (totalSeconds)=>{
      const minutes = Math.floor(totalSeconds/60)
      const seconds = totalSeconds%60
      return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`

    }
  render() {
    const {totalSeconds} = this.state

    return (
      <div className="stop-watch-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stop-watch-img"
            />
            <p className="timer-description">Timer</p>
          </div>
          <h1 className="timer">{this.formatTime(totalSeconds)}</h1>
          <div className="start-stop-reset-container">
            <button className="start-btn" type="button" onClick={this.onClickStartBtn}>
              Start
            </button>
            <button className="start-btn stop-btn" type="button" onClick={this.onClickStopBtn}>
              Stop
            </button>
            <button className="start-btn reset-btn" type="button" onClick={this.onClickResetBtn}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
