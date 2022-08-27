
   
var map = new L.Map('map', {zoom: 14, center: new L.latLng([38.246639,21.734573]) });

    map.addLayer(new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));    //base layer

//sourceData: function to fill _recordsCache, passed searching text by first param and callback in second
map.addControl( new L.Control.Search({sourceData: searchByAjax, text:'Color...', markerLocation: true}) );

function searchByAjax(text, callResponse)//callback for 3rd party ajax requests
   {  console.log(text);
      const result = $.ajax({
            url: 'includes/data.inc.php?=q',    
            type: 'POST',
            data: {q: text},
            dataType: 'json',
            success: function(json) {
               callResponse(json);
            }
      });
result.done(onsuccess);

function onsuccess(response){
   console.log(response);

   let markersLayer = new L.LayerGroup();
   map.addLayer(markersLayer);

   for(let i=0; i<response.length; i++){
      let name,address, lat, longitude;

      lat = response[i].lat;
      lng = response[i].lng;
      name = response[i].name;
      address = response[i].address;

      let marker = L.marker(L.latLng(lat,lng),
      {title: name}); 
      marker.bindPopup( name +"<br>Location :"+lat +" "+lng + "<br>Address : "+ address);
      marker.addTo(markersLayer);
   }
   // removeLayer(markersLayer);
   return result;
}
// console.log(callResponse);
}
