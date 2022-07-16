import React, { Component } from "react";
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";

// function WorldMap() {
//   const [dimensions, setDimensions] = React.useState({
//     height: window.innerHeight,
//     width: window.innerWidth,
//   });


  // React.useEffect(() => {
  //   function handleResize() {
  //     console.log("resized");
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //   }



  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });
//-----------------------------------------------------//

// function WorldMap () {

//   React.useEffect(()=>{
//     if (!svgMap) {

//       console.log(this.state);

//       var mySvgMap = new svgMap({
//         targetElementID: 'svgMap',
//         colorMin: '#85ffbd',
//         colorMax: '#85ffbd',
//         noDataText: "Hope to visit someday!",
//         data: {
//           data: {
//             yearVisited: {
//               name: 'year visited',
//               format: '',
//               thresholdMax: 5000,
//               thresholdMin: 0
//             },
//             lived: {
//               name: 'lived',
//               format: ''
//             },
//             stayLength: {
//               name: "stay length",
//               format: ''
//             }
//           },
//           applyData: 'yearVisited',
//           values: {
//             AF: {yearVisited: 1997, lived: "true", stayLength: "1 week"},
//             BR: {yearVisited: 2010, lived: "true", stayLength: "5 weeks"},
//             AU: {yearVisited: 2022, lived: "false", stayLength: "currently living here"}
//             // ...
//           },
//         }
//       });
//       svgMap = mySvgMap;
//     }
//   })

//     return (
//         <div id='svgMap' className='map'></div>
//     );

// }

// export default WorldMap;



class WorldMap extends Component {



  state = {
    dimensions: {
      height: window.innerHeight,
      width: window.innerWidth
    }
  }

  componentDidMount() {
    console.log(this.state)

    console.log("new render of component");


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



    //   setDimensions({
    //     height: window.innerHeight,
    //     width: window.innerWidth,
    //   });
    // }

    window.addEventListener("resize", this.handleResize);

    // return () => {
    //   window.removeEventListener("resize", this.handleResize);
    // };

  }

  
  handleResize = () => {
    console.log("resized");
    console.log(this.state)
    this.setState(prevState => {
      return {
          ...prevState, dimensions: {
            height: window.innerHeight,
            width: window.innerWidth
          }
      }
  })





}


  render() {
    return (
        <div id='svgMap' className='map'></div>
    );
  }
}

export default WorldMap;
