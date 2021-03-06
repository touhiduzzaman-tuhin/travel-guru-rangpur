import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class GoogleMap extends Component {
    render() {
        return (
            <div>
                <Map google={this.props.google} zoom={14}>
    
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
    
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        
                    </InfoWindow>
                </Map>
            </div>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAR5k4zF8FugkHufrQmjXLF25fMqirAUQE')
})(GoogleMap);