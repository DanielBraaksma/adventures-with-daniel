import React, { Component } from "react";
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";

//functional component not working with svgmap//
class WorldMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width : window.innerWidth
    };
  }

  componentDidMount() {
    // let travelDataObj = {}

      fetch("https://adventures-with-daniel.herokuapp.com/countries/")
            .then(res => res.json())
            .then(data => this.setState({...this.state, "countryArr" : data}, createMap))

    // let travelDataObj = {}
    // this.props.countryArr.forEach(country=>{
    //   travelDataObj[country.countryName] = {
    //     ["yearVisited"] : country.yearVisited,
    //     ["lived"] : country.lived,
    //     ["stayLength"] : country.stayLength
    //   }
    // })

    console.log("new render of component");
    function createMap () {

      let travelDataObj = {}
      this.state.countryArr.forEach(country=>{
        travelDataObj[country.countryName] = {
          ["yearVisited"] : country.yearVisited,
          ["lived"] : country.lived,
          ["stayLength"] : country.stayLength
        }
      })

    console.log(travelDataObj)

    var mySvgMap = new svgMap({
      targetElementID: "svgMap",
      colorMin: "#3D9668",
      colorMax: "#3D9668",
      noDataText: "Hope to visit someday!",
      data: {
        data: {
          yearVisited: {
            name: "year visited",
            format: "",
            thresholdMax: 5000,
            thresholdMin: 0,
          },
          lived: {
            name: "lived",
            format: "",
          },
          stayLength: {
            name: "stay length",
            format: "",
          },
        },
        applyData: "yearVisited",
        values: travelDataObj,
      },
    });
    this.svgMap = mySvgMap;
    console.log(this.state)
  }

    console.log("render")
    // console.log(this.state)

    window.addEventListener("resize", () => {
      if (window.innerWidth !== this.state.width){
        this.setState({...this.state, width: window.innerWidth})
        window.location.reload()
      }
    });

    // window.location.reload()
    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth !== this.state.width){
          this.setState({...this.state, width: window.innerWidth})
          window.location.reload()
        }
      })
    };
  }



  render() {

    // console.log("render1")
    // console.log(this.state)
    return <div id="svgMap" className="map"></div>;
  }
}

export default WorldMap;

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
