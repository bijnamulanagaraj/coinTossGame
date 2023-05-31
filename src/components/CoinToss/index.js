// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, tossResultImage: HEADS_IMG_URL}

  onClickTossCoins = () => {
    const {headsCount, tailsCount} = this.state
    let countIncrementHeads = headsCount
    let countDecrementTails = tailsCount
    let tossImage = ''
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      tossImage = HEADS_IMG_URL
      countIncrementHeads += 1
    } else {
      tossImage = TAILS_IMG_URL
      countDecrementTails += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: countIncrementHeads,
      tailsCount: countDecrementTails,
    })
  }

  render() {
    const {headsCount, tailsCount, tossResultImage} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="head-tails-para">Heads (or) Tails</p>
          <img src={tossResultImage} className="img-coins" alt="toss result" />
          <button
            type="button"
            className="button-coin-toss"
            onClick={this.onClickTossCoins}
          >
            Toss Coin
          </button>
          <div className="container_count">
            <p className="count_show">Total:{totalCount}</p>
            <p className="count_show">Heads:{headsCount}</p>
            <p className="count_show">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
