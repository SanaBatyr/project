import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    items:[
      {
          id: 1,
          title: 'bracelet',
          img: '02.jpeg',
          desc: 'Harry Winston.',
          category: 'bracelet',
          price: '150.000'
      },

      {
        id: 1,
        title: 'necklace',
        img: '03.jpeg',
        desc: 'Van Cleef & Arpels.',
        category: 'necklace',
        price: '200.000'
    },

    {
      id: 1,
      title: 'earrings',
      img: '04.jpeg',
      desc: 'Tiffany & Co.',
      category: 'earrings',
      price: '269.000'
  }
      ]
    }
  }
render() {
  return(
  <div className="wrapper">
    <Header />
    <Items items={this.state.items} />
    <Footer />
    </div>

)
  }
}

export default App;