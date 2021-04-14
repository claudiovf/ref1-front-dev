import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Location } from '../../types';
import { handleCountdown } from '../../utils/formatting';

const WeatherContainer = styled.div`
    display: flex;
    display-direction: row;
    justify-content: center;
    align-items: top;
    height: auto;
    width: auto;
    max-width: 90%;
    margin: 0.25rem 0 1rem 0;
    border-radius: 0.5rem;
    background-color: rgb(255, 255, 255, 0.1);

    @media (min-width: 768px) {
        width: 80%;
        max-width: 36rem;
        justify-content: left;
      }
`;

const IconTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6rem;
    min-height: 100%;
    background-color: #0b3142;
    margin: 2px;
    border-radius: 0.5rem;

   @media (min-width: 768px) {
        width: 10rem;
  }
`;
const MeasuresWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;

    @media (min-width: 768px) {
        width: 20rem;
  }
`;

const MeasureBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem 0.5rem 0.5rem 0;
    font-family: "Work Sans Bold";
    color: white;

    @media (min-width: 768px) {
        flex-grow: 2;
        align-items: center;
    }
`;

const MeasureRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem 0.125rem;
    font-family: "Work Sans Bold";
    color: white;
    width: 3.75rem;
`;

const Value = styled.div`
    font-size: 1rem;
    font-family: "Work Sans Bold";
    color: white;
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }

`;
const Unit = styled.span`
    font-family: "Work Sans Semi Bold";
    color: #FFFFFF;
    font-size: 0.75rem;
    min-height: 100%;
`;

const WeatherTitle = styled.div`
    font-size: 0.5rem;
    margin: 0.25rem;
    font-family: "Work Sans Bold";
    color: white;
    @media (min-width: 768px) {
        font-size: 0.75rem;
    }
`;
const Description = styled.span`
    font-size: 0.5rem;
    margin: 0.25rem 0;
    justify-content: bottom;
    font-family: "Work Sans Semi Bold";
    color: white;
    @media (min-width: 768px) {
        font-size: 0.75rem;
    }
`;

const Notif = styled.div`
    font-family: "Work Sans Semi Bold";
    color: #FFF;
    font-size: 0.5rem;
`;


interface Weather {
    chance_of_rain: string;
    temp: number;
    wind: number;
    wind_dir: string;
    condition_text: string;
    icon: string;
    locality: string;
}

interface Props {
    nextRaceLoc: Location;
    raceTime: string;
}


const Weather: React.FC<Props> = ({nextRaceLoc, raceTime}: Props) => {
    const [raceWeather, setRaceWeather] = useState<Weather | null>(null);
    const [isWeather, setIsWeather] = useState<boolean>(false);

    useEffect(() => {
        if (raceWeather) {
            setIsWeather(true);
        }
    }, [raceWeather, nextRaceLoc]);

    if (handleCountdown(raceTime).days > 7 ) return <Notif>*Weather forecast is displayed when race is within 7 days</Notif>;


    const lat = nextRaceLoc.lat;
    const long = nextRaceLoc.long;

    const nextRaceDate = raceTime.substring(0, 10);
    const nextRaceTime= `${nextRaceDate} ${raceTime.substring(11, 16)}`;


    if((!isWeather && !raceWeather) ||  raceWeather?.locality !== nextRaceLoc.locality) {
        
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${lat},${long}&days=7&aqi=no&alerts=no`)
        .then(res => {
            const raceDay = res.data.forecast.forecastday.find((day: { date: string; }) => day.date === nextRaceDate);
    
            if(raceDay) {
                const raceStart = raceDay.hour.find((hour: { time: string; }) => hour.time === nextRaceTime);
    
                if (raceStart) {
                    const raceForecast = {
                        chance_of_rain: raceStart.chance_of_rain,
                        temp: raceStart.temp_c,
                        wind: raceStart.wind_kph,
                        wind_dir: raceStart.wind_dir,
                        condition_text: raceStart.condition.text,
                        icon: raceStart.condition.icon.substring(21, raceStart.condition.icon.length),
                        locality: nextRaceLoc.locality
                    };
    
                    setRaceWeather(raceForecast);
                    
                }
            }
        }); 
    }

    if(!isWeather || !raceWeather) return null;

    

    return (
        <WeatherContainer>
            <IconTextWrap>
                <img src={process.env.PUBLIC_URL + `/${raceWeather.icon}`} />
            </IconTextWrap>
            <MeasureBox>
            <WeatherTitle>RACE FORECAST</WeatherTitle>
                <MeasuresWrap>
                    <MeasureRow>
                        <Value>{raceWeather.temp}&#176;</Value>
                        <Description>Celcius</Description>
                    </MeasureRow>
                    <MeasureRow>
                        <Value>{raceWeather.chance_of_rain}<Unit>%</Unit></Value> 
                        <Description>Chance of rain</Description>
                    </MeasureRow>
                    <MeasureRow>
                        <Value>{raceWeather.wind}<Unit>kph</Unit></Value>
                        <Description>Wind speed</Description>
                    </MeasureRow>
                </MeasuresWrap>
            </MeasureBox>
        </WeatherContainer>
    );
};

export default Weather;