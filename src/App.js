import React, { Component } from 'react';
import './App.css';
import SeriesPage from './SeriesPage/SeriesPage.js'
import SubSeriesPage from './SubSeriesPage/SubSeriesPage.js'
import UserInput from './UserInput/UserInput.js'

class App extends Component {
  state = {
    brand: '',
    series: '',
    productName: '',
    productType: ''
  }
  render() {

    const buttonStyle = {
      padding:'10px',
      backgroundColor:'white',
      border: '2px solid black',
      borderRadius:'3px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <UserInput
          brand={this.state.brand}
          series={this.state.series}
          product={this.state.productName}
          productType={this.state.productType} />
          <button
            style={buttonStyle}>Click for file names</button>
        <div className="output-container">
          <SeriesPage />
          <SubSeriesPage />
        </div>

      </div>
    );
  }
}

export default App;
