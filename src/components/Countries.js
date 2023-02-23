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
const Highlightedgreen = ["UGA", "ETH", "AFG", "MWI", "RWA"];
const Highlightedorange = ["DZA", "IND", "PAK", "MAR", "TUN", "EGY", "ZWE", "TZA", "KEN", "LBN", "IRN", "NPL", "BGD", "IDN", "VNM", "PHL", "MNG", "PNG", "NGA", "CPV", "GHA"];
const Highlightedyellow = ["BIH", "BWA", "BRA", "CHN", "COL", "FJI", "JAM", "MYS", "MEX", "NAM", "RUS", "ZAF", "THA", "TUR", "ALB", "LKA", "VEN"];
const Highlightedpurple = ["AUS", "CAN", "CHL", "FIN", "JPN", "NLD", "GRC", "POL", "SGP", "KOR", "ESP", "SWE", "ARE", "GBR", "USA", "URY"];

const Countries = ({  }) => {
  const [data, setData] = useState([]);
  const [tooltipContent, setTooltipContent] = useState('');
  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  const handleMouseEnter = (geo) => {
    setTooltipContent(geo.properties.name);
  };

  const handleMouseLeave = () => {
    setTooltipContent('');
  };

  return (
    <div id="countries">
      <div className="CountriesPage" >
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
                    // <Geography
                    //   key={geo.rsmKey}
                    //   geography={geo}
                    //   fill={isHighlightedgreen ? "#44b64d" : isHighlightedorange ? "#ff8730" : isHighlightedyellow ? "#fff067e7" : isHighlightedpurple ? "#c341eb" : "#817d7d70"}
                    // />
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        isHighlightedgreen
                          ? "#44b64d"
                          : isHighlightedorange
                            ? "#ff8730"
                            : isHighlightedyellow
                              ? "#fff067e7"
                              : isHighlightedpurple
                                ? "#c341eb"
                                : "#817d7d70"
                      }
                      onMouseEnter={() => handleMouseEnter(geo)}
                      onMouseLeave={() => handleMouseLeave()}
                      style={{
                        hover: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
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
                  <li><h3>HIGH - {Highlightedpurple.length + 1}</h3></li>
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
                  <li><h3>LOWER MIDDLE - {Highlightedorange.length - 1}</h3></li>
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
