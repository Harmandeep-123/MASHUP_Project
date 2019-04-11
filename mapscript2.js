var map;
function initilize(){
    var mapOptions={
        zoom:12,
        center:new google.maps.LatLng(40.758909,-73.985128)
    };
    
    map=new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
    
}
google.maps.event.addDomListener(window,'load',initilize);