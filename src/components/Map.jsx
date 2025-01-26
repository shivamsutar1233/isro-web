import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import mapJson from "../assets/ne_110m_land.json";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers = [
  {
    markerOffset: -15,
    name: "Akluj",
    coordinates: [75.01666667, 17.88333333],
  },
];

const Map = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        // scale: , // Adjust the scale for India
        center: [78.9629, 22.5937], // Coordinates to center on India [Longitude, Latitude]
      }}
    >
      <ZoomableGroup zoom={1}>
        <Geographies geography={mapJson}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
