import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import indiaTopoJson from "../assets/map.topojson";

const Map = () => {
  const markers = [
    { name: "New Delhi", coordinates: [77.209, 28.613] },
    { name: "Mumbai", coordinates: [72.8777, 19.076] },
    { name: "Chennai", coordinates: [80.2707, 13.0827] },
    { name: "Kolkata", coordinates: [88.3639, 22.5726] },
  ];
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 700,
        center: [78.9629, 22.5937],
      }}
    >
      {/* <ZoomableGroup> */}
      <Geographies geography={indiaTopoJson}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  fill: "#fefefe11",
                  stroke: "#fff",
                  strokeWidth: "0.1",
                },
                hover: {
                  fill: "#ffffff78",
                  stroke: "#fff",
                },
                pressed: {
                  fill: "#ffffff78",
                  stroke: "#fff",
                },
              }}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={5} fill="#F53" stroke="#FFF" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={-10}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
      {/* </ZoomableGroup> */}
    </ComposableMap>
  );
};

export default Map;
