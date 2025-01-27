import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import indiaTopoJson from "../assets/map.topojson"; // Path to your TopoJSON file
const markers = [
  {
    id: 1,
    name: "Vikram Sarabhai Space Centre (VSSC)",
    coordinates: [76.8645, 8.5241],
  },
  {
    id: 2,
    name: "Liquid Propulsion Systems Centre (LPSC)",
    coordinates: [76.9366, 8.5241],
  },
  {
    id: 3,
    name: "ISRO Inertial Systems Unit (IISU)",
    coordinates: [76.8645, 8.5241],
  },
  {
    id: 4,
    name: "Indian Institute of Space Science and Technology (IIST)",
    coordinates: [76.8645, 8.5241],
  },
  {
    id: 5,
    name: "ISRO Propulsion Complex (IPRC)",
    coordinates: [77.6956, 8.2528],
  },
  {
    id: 6,
    name: "Satish Dhawan Space Centre (SDSC) SHAR",
    coordinates: [80.2305, 13.7199],
  },
  { id: 7, name: "Down Range Station", coordinates: [92.748, 11.6234] },
  {
    id: 8,
    name: "National Atmospheric Research Laboratory (NARL)",
    coordinates: [79.4163, 13.6288],
  },
  {
    id: 9,
    name: "U R Rao Satellite Centre (URSC)",
    coordinates: [77.628, 12.9716],
  },
  {
    id: 10,
    name: "Space Applications Centre (SAC)",
    coordinates: [72.5714, 23.0225],
  },
  {
    id: 11,
    name: "Development and Educational Communication Unit (DECU)",
    coordinates: [72.5714, 23.0225],
  },
  {
    id: 12,
    name: "National Remote Sensing Centre (NRSC)",
    coordinates: [78.4867, 17.385],
  },
  {
    id: 13,
    name: "ISRO Telemetry, Tracking and Command Network (ISTRAC)",
    coordinates: [77.628, 12.9716],
  },
  {
    id: 14,
    name: "Master Control Facility (MCF)",
    coordinates: [76.1025, 13.0072],
  },
  {
    id: 15,
    name: "Semi Conductor Laboratory (SCL)",
    coordinates: [76.7794, 30.7333],
  },
  {
    id: 16,
    name: "North-Eastern Space Applications Centre (NE-SAC)",
    coordinates: [91.8833, 25.5788],
  },
  {
    id: 18,
    name: "Human Space Flight Centre (HSFC)",
    coordinates: [77.628, 12.9716],
  },
  {
    id: 19,
    name: "Indian Institute of Remote Sensing (IIRS)",
    coordinates: [78.0322, 30.3165],
  },
];
const IndiaMapWithISROCenters = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  return (
    <div className="flex">
      {/* List o  f ISRO Centers */}
      <div className="w-1/3 p-4 ">
        <section className="rounded-md text-gray-300 border-1  bg-slate-600 !bg-opacity-15 border-slate-700">
          <h2 className="text-xl font-bold text-center p-6 border-b border-slate-600">
            ISRO Centers
          </h2>
          {/* <Divider variant="middle" className="border-1 !border-slate-800" /> */}
          <section className="flex flex-col  gap-2 h-[40rem] px-6 overflow-y-scroll scrollbar-none">
            {markers.map((marker) => (
              <section
                key={marker.name}
                className={`py-6 w-full border-b border-gray-800  text-center cursor-pointer ${
                  hoveredLocation === marker.name
                    ? "bg-gray-200 text-gray-900 font-bold "
                    : ""
                }`}
                onMouseEnter={() => {
                  setHoveredLocation(marker.name);
                }}
                onMouseLeave={() => {
                  setHoveredLocation(null);
                }}
              >
                {marker.name}
              </section>
            ))}
          </section>
        </section>
      </div>

      {/* Map with Markers */}
      <div className="w-2/3">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 1000,
            center: [78.9629, 22.5937],
          }}
        >
          <Geographies geography={indiaTopoJson}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
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
                );
              })
            }
          </Geographies>
          {markers.map((marker) => (
            <Marker key={marker.name} coordinates={marker.coordinates}>
              <circle
                r={5}
                fill={hoveredLocation === marker.name ? "#FFD700" : "#FF0000"}
                stroke="#FFFFFF"
                strokeWidth={2}
              />
              <text
                textAnchor="middle"
                y={-10}
                style={{
                  fontFamily: "system-ui",
                  fill:
                    hoveredLocation === marker.name ? "#ff0000" : "transparent",
                  fontSize: 12,
                }}
              >
                {marker.name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default IndiaMapWithISROCenters;
