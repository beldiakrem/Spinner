import React, { Component } from 'react'
import List from './component/List'
import './App.css'
import WithLoading from './component/WithLoading';

const ListWithLoading = WithLoading(List);

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      cards: [
        {
          Image: "http://fr.web.img3.acsta.net/pictures/19/04/19/09/29/4029006.jpg",
          Title: "Aladin",
          Released: "Octobre 2019",
          Runtime: "129 min",
        },
        {
          Image: " https://e.snmc.io/i/300/w/cca26841985a30f02142aaee0db10d76/6772748",
          Title: "Bad Ginus",
          Released: "Mai 2017",
          Runtime: "139 min",
        },
        {
          Image: " https://specials-images.forbesimg.com/imageserve/5d6a0922fead28000892b2b7/960x0.jpg?fit=scale",
          Title: "Joker",
          Released: "Novembre 2019",
          Runtime: "125 min",
        }
      ],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout (
      ()=>{
        this.setState({loading:false})
      },3000
    )
  }

  render() {
    return (
      <div>
        <ListWithLoading isLoading={this.state.loading} cards={this.state.cards} />
      </div>
    )
  }
}

