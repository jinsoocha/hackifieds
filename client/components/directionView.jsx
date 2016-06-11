import { Modal } from 'react-bootstrap';

class DirectionView extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidUpdate() {
    var context = this;
    if(this.props.location) {
      window.directionsService = new google.maps.DirectionsService();
      window.directionsDisplay = new google.maps.DirectionsRenderer();
      var map;
      var lat;
      var lng;
      var markers;
      var bounds = new google.maps.LatLngBounds();
      var geocoder = new google.maps.Geocoder();                    
      var mapOptions = {
          mapTypeId: 'roadmap'
      };
      map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
      map.setTilt(45);    
      if (geocoder) {
        geocoder.geocode({
          'address': this.props.location,
        }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
              lat = results[0].geometry.location.lat();
              lng = results[0].geometry.location.lng();
              window.markers = [
                [lat, lng],
                [37.7836966, -122.4089664]
              ];
              directionsDisplay.setMap(map);
              context.calcRoute();
            } else {
              alert("No results found");
            }
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
      } 
    }
  }

  calcRoute() {
    var context = this;
    var selectedMode = document.getElementById('travelType').value;
    var request = {
      origin: new google.maps.LatLng(markers[0][0], markers[0][1]),
      destination: new google.maps.LatLng(markers[1][0], markers[1][1]),
      travelMode: google.maps.TravelMode[selectedMode]
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        var newDiv = document.getElementById("contents"); 
        newDiv.innerHTML = "Hack Reactor is " + response.routes[0].legs[0].distance.text + " away from " + context.props.location + "<br/><br/>It takes "+response.routes[0].legs[0].duration.text + " by " + selectedMode.toLowerCase(); 
      }
    });
  }
  render() {
    if(this.props.location) {
      return (
        <div>
          <div id="map_wrapper">
            <div id="map_canvas" class="mapping"></div>
          </div>
          <div id="travel_selector">
            <p><strong>Mode of Travel: </strong>
            <select id="travelType" onChange={this.calcRoute.bind(this)}>
              <option value="WALKING">Walking</option>
              <option value="BICYCLING">Bicycling</option>
              <option value="DRIVING">Driving</option>
              <option value="TRANSIT">Transit</option>
            </select></p>
          </div>
          <h3 id="contents"></h3><br/><br/>
        </div>
      );    
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default DirectionView;
