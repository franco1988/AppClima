import React from 'react';
import "./Ciudad.css";

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {Math.round(city.temp - 273)} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}