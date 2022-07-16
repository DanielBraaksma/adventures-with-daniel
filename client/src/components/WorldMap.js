import React from 'react';
import svgMap from 'svgmap'
import 'svgmap/dist/svgMap.min.css';


export default function WorldMap (props) {

  new svgMap({
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





  // new svgMap({
  //   targetElementID: 'svgMap',
  //   colorMin: '#85ffbd',
  //   colorMax: '#85ffbd',
  //   noDataText: "Hope to visit someday!",
  //   data: {
  //     data: {
  //       yearVisited: {
  //         name: 'year visited',
  //         format: '',
  //         thresholdMax: 5000,
  //         thresholdMin: 0
  //       },
  //       lived: {
  //         name: 'lived',
  //         format: ''
  //       },
  //       stayLength: {
  //         name: "stay length",
  //         format: ''
  //       }
  //     },
  //     applyData: 'yearVisited',
  //     values: {
  //       AF: {yearVisited: 1997, lived: "true", stayLength: "1 week"},
  //       BR: {yearVisited: 2010, lived: "true", stayLength: "5 weeks"},
  //       AU: {yearVisited: 2022, lived: "false", stayLength: "currently living here"}
  //       // ...
  //     },
  //   }
  // });

    return (
      <div id="svgMap">test</div>
    )
}
