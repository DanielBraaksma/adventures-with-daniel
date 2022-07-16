import React, { Component } from 'react';
import svgMap from 'svgmap'
import 'svgmap/dist/svgMap.min.css';

class App extends Component {

  componentDidMount() {
    if (!this.svgMap) {

      console.log(this.state);

      var mySvgMap = new svgMap({
        targetElementID: 'svgMap',
        colorMin: '#85ffbd',
        colorMax: '#85ffbd',
        noDataText: "Hope to visit someday!",
        data: {
          data: {
            yearVisited: {
              name: 'year visited',
              format: '',
              thresholdMax: 5000,
              thresholdMin: 0
            },
            lived: {
              name: 'lived',
              format: ''
            },
            stayLength: {
              name: "stay length",
              format: ''
            }
          },
          applyData: 'yearVisited',
          values: {
            AF: {yearVisited: 1997, lived: "true", stayLength: "1 week"},
            BR: {yearVisited: 2010, lived: "true", stayLength: "5 weeks"},
            AU: {yearVisited: 2022, lived: "false", stayLength: "currently living here"}
            // ...
          },
        }
      });
      this.svgMap = mySvgMap;
    }
  }

  render() {
    return (
        <div id='svgMap'></div>
    );
  }
}

export default App;
