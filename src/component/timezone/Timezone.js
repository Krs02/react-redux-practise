import React, { useState, useEffect, useRef } from "react";
import "./style.scss";
import { timeZones, TzMap } from "../../app/tz";
const DEFAULT_DATE = {
  timeZone: "Europe/London",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

function Timezone() {
  const [continentList, setContinentList] = useState(() => {
    return Object.keys(TzMap);
  });
  const [continent, setContinent] = useState(continentList?.[0]);

  const [regionList, setRegionList] = useState(() => {
    return [...new Set(TzMap[continent]["region"])];
  });
  const [region, setRegion] = useState(regionList?.[0]);

  const [cityList, setCityList] = useState(() => {
    const cities = TzMap[continent][region];
    console.log("Citi" + cities);
    return cities ? cities : [];
  });
  const [city, setCity] = useState(cityList?.[0]);
  const [curentTime, setCurentTime] = useState(0);
  const [timerObj, setTimerObj] = useState(null);

  const onContinentChange = (e) => {
    setCity("");
    setContinent(() => e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    setRegionList(() => [...new Set(TzMap[continent]["region"])]);
  }, [continent]);

  useEffect(() => {
    setRegion(() => (regionList ? regionList[0] : ""));
  }, [regionList]);

  const onRegionChange = (e) => {
    setCity("");
    setRegion(() => e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    const cities = TzMap[continent][region];
    setCityList(() => (cities ? cities : []));
  }, [region]);

  useEffect(() => {
    if (cityList && cityList.length > 0) {
      setCity(() => (cityList ? cityList[0] : ""));
    } else {
      timeHandling();
    }
  }, [cityList]);

  const onCityChange = (e) => {
    setCity(() => e.target.value);
    console.log(e.target.value);
  };
  const timeHandling = () => {
    clearTimer();
    setLocalTime();
    refreshTime();
  };
  const clearTimer = () => {
    clearInterval(timerObj);
    setTimerObj(null);
  };
  useEffect(() => {
    if (city) {
      timeHandling();
    }
  }, [city]);

  const refreshTime = () => {
    //console.log(`Old Interval Obj ${timerObj} New Interval - Start`);
    let timerTemp = setInterval(() => {
      setLocalTime();
    }, 100000);
    //console.log("Interval- End" + timerTemp);
    setTimerObj(() => timerTemp);
  };
  const setLocalTime = () => {
    const tz = `${continent}/${region}${city ? "/" + city : ""}`;
    //console.log("tz : ", tz);
    const formatter = new Intl.DateTimeFormat([], { ...DEFAULT_DATE, timeZone: tz });
    const date = formatter.format(new Date());
    //console.log("date -- " + date);
    setCurentTime(() => date);
  };
  return (
    <div className="counter_container">
      <div className="row">
        {" "}
        <div className="col">
          <RenderSelectOption data={continentList} name="continent" id="continent" onChangeFun={onContinentChange} value={continent} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <RenderSelectOption data={regionList} name="region" id="region" value={region} onChangeFun={onRegionChange} />
        </div>
      </div>
      {cityList && cityList.length > 0 ? (
        <div className="row">
          <div className="col">
            <RenderSelectOption data={cityList} name="city" id="city" value={city} onChangeFun={onCityChange} />
          </div>
        </div>
      ) : null}

      <div className="row">
        <div className="col">
          Current Timing in {city} is <b>{curentTime}</b>
        </div>
      </div>
    </div>
  );
}

const RenderSelectOption = ({ data, name, id, default_val, onChangeFun }) => {
  const renderCnt = useRef(0);
  useEffect(() => {
    //console.log("render");
    renderCnt.current = renderCnt.current + 1;
  });
  return (
    <select name={name} id={id} onChange={onChangeFun} value={default_val}>
      {data.map((ele, index) => {
        return (
          <option value={ele} key={index}>
            {ele}
          </option>
        );
      })}
    </select>
  );
};

export default Timezone;
