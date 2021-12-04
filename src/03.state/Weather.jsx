import React, { Component } from 'react'

export default class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {isHot: true}
    this.changeWeather = this.changeWeather.bind(this)
  }

  changeWeather() {
    const { isHot } = this.state
    this.setState({
      isHot:!isHot
    })
  }

  render() {
    return (
      <div>
        今天天气很{this.state.isHot ? '炎热':'凉爽'} <button onClick={this.changeWeather}>changeWeather</button>
      </div>
    )
  }
}

// import React, { useState } from 'react'

// export default function Weather() {
//   const [isHot, setisHot] = useState(true)
//   function changeWeather() {
//     setisHot(!isHot)
//   }

//   return (
//     <div>
//       今天天气很{isHot ? '炎热' : '凉爽'} <button onClick={changeWeather}>changeWeather</button>
//     </div>
//   )
// }


