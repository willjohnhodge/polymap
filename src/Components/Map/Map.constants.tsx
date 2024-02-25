import config from 'config/client.json';

export const containerStyle = {
    height: '100%',
    width: '100%',
};

export const initialViewState = {
    longitude: 144.9631,
    latitude: -37.8136,
    zoom: 12,
}

export const mapboxToken = process.env.NODE_ENV === 'production' ?
    process.env.REACT_APP_MAPBOX_TOKEN :
    config.mapboxAccessToken;
