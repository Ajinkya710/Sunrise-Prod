import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  // Marker
} from "react-simple-maps";

const geoUrl = "/features.json";
const Highlightedgreen = ["UGA", "ETH", "AFG", "MWI"];
const Highlightedorange = ["IND", "PAK", "MAR", "NGI", "TUN", "EGY", "ZWE", "TZA", "KEN", "LBN", "IRN", "NPL", "BGD", "LKA", "IDN", "VNM", "PHL", "MNG", "PNG", "NGA", "VEN", "CPV", "GHA"];
const Highlightedyellow = ["BIH", "BWA", "BRA", "CHN", "COL", "FJI", "MYS", "MEX", "NAM", "RUS", "ZAF", "THA", "TUR", "ALB"];
const Highlightedpurple = ["AUS", "CAN", "CHL", "FIN", "JPN", "NLD", "POL", "SGP", "KOR", "ESP", "SWE", "ARE", "GBR", "USA", "URY"];

const Countries = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);
  // const [content, setContent] = useState("");
  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div id="countries">
      <div className="CountriesPage" >
        {/* <Countries setTooltipContent={setContent} /> */}
        {/* <ReactTooltip>{content}</ReactTooltip> */}
        <h1>Countries</h1>
        <div className="Countries" >
          <ComposableMap className="CMap" projection="geoEqualEarth">
            <Sphere stroke="#DDD" />
            <Graticule stroke="#DDD" />
            <Geographies geography={geoUrl} fill="#000" strokeWidth={0.5}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlightedgreen = Highlightedgreen.indexOf(geo.id) !== -1;
                  const isHighlightedyellow = Highlightedyellow.indexOf(geo.id) !== -1;
                  const isHighlightedorange = Highlightedorange.indexOf(geo.id) !== -1;
                  const isHighlightedpurple = Highlightedpurple.indexOf(geo.id) !== -1;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlightedgreen ? "#44b64d" : isHighlightedorange ? "#ff8730" : isHighlightedyellow ? "#fff067e7" : isHighlightedpurple ? "#c341eb" : "#817d7d70"}
                    />
                  );
                })
              }
            </Geographies>
            {/* <Geographies geography={geoUrl} fill="#000" strokeWidth={0.5}>
            {({ geographies }) =>
              geographies.map((geo) => {
                console.log("in marker")
                return (
                  <Marker coordinates={[-101, 53]} fill="#777">
                    <text textAnchor="middle" fill="#F53">
                      {geo.properties.id}
                    </text>
                  </Marker>
                );
              })
            }
            </Geographies> */}
          </ComposableMap>
          <div className="numbers">
            <h3 id="numberc" style={{ paddingLeft: '40px' }}>countries</h3>
            <h1>Involved in the SUNRISE Study</h1>
            <ul>
              <li>
                <h2>World Bank GDP</h2>
              </li>
              <li>
                <ul className='high'>
                  <li><p></p></li>
                  {/* +1 because HONG KONG is included in China */}
                  <li><h3>HIGH - {Highlightedpurple.length+1}</h3></li>
                </ul>
              </li>
              <li>
                <ul className='umiddle'>
                  <li><p></p></li>
                  <li><h3>UPPER MIDDLE - {Highlightedyellow.length}</h3></li>
                </ul>
              </li>
              <li>
                <ul className='lmiddle'>
                  <li><p></p></li>
                  <li><h3>LOWER MIDDLE - {Highlightedorange.length}</h3></li>
                </ul>
              </li>
              <li>
                <ul className='low'>
                  <li><p></p></li>
                  <li><h3>LOW - {Highlightedgreen.length}</h3></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
