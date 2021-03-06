var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    attribution: '&copy; </a>'
});


var map = L.map('map', {
  scrollWheelZoom: false,
  rotate: true,
  animate: true, 
  duration: 2
  }).setView([40.805177,-73.954929], 17);
  map.addLayer(layer);
  map.setBearing(331);

var geojson;


  $("#info").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
    });

      function rotate(ev) {
      if (ev.buttons === 0) return;
      var angle = ev.target.valueAsNumber;
      map.setBearing(angle);
    }

function getColor(d) {
    return d > 8  ? '#BEC2C3' : //9 vacant
           d > 7  ? '#FFEDA0' : //8 community facility
           d > 6  ? '#74A974' : //7 parks
           d > 5  ? '#FFEDA0' : //6 residential
           d > 4  ? '#4A7CA8' : //5 beauty & health
           d > 3  ? '#8AB0AB' : //4 retail
           d > 2  ? '#C8C6AF' : //3 services
           d > 1  ? '#D8A692' : //2 other food
           d > 0  ? '#DE8883' : //1 restaurants
                     '#FFEDA0';
  }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.Value),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '0',
        fillOpacity: 0.9
    };
  }

function mouseoverFunction(e) {

  
    // var layer = e.target;
this.openPopup();
}
  //   layer.setStyle({
  //       weight: 1,
  //       color: '#fff',
  //       dashArray: '',
  //       fillOpacity: 0.6
  //   });

  //   if (!L.Browser.ie && !L.Browser.opera) {
  //       layer.bringToFront();
  //   }

  //  $('#infoWindow').html(layer.feature.properties.Organization + '<br>' + '<h4>' + layer.feature.properties.Category + '</h4>');
  // }



function resetHighlight(e) {
    // geojson.resetStyle(e.target);

    // this.closePopup();
}


function onEachFeature(feature, layer) {
    var popup = "<h5>" + feature.properties.Organization + '<br>' + '<h6>' + feature.properties.Category + '</h6>' + "</h5>"  + feature.properties.Address + "<br>" + feature.properties.Phone + "<br><a href='http://" + feature.properties.Web + "' target='_blank'>" + feature.properties.Web + "</a>";
    layer.bindPopup(popup);

    // layer.bindLabel(feature.properties.Organization, {noHide:true});

    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
    });
}



var bizmarker = {
  radius: 8,
  fillColor: "#bbb",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};
  


  // $.getJSON('data/biz.geojson', function(Biz) {


    geojson1 = L.geoJson(resta, {
      style: style,
      onEachFeature: onEachFeature,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
     
      }
    }).addTo(map);
 
     geojson2 = L.geoJson(otherf, {
      style: style,
      onEachFeature: onEachFeature,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);

      geojson3 = L.geoJson(services, {
      style: style,
      onEachFeature: onEachFeature,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);
 
     geojson4 = L.geoJson(retail, {
      style: style,
      onEachFeature: onEachFeature,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);

     geojson5 = L.geoJson(beauhea, {
      style: style,
      onEachFeature: onEachFeature,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);

      geojson = L.geoJson(others, {
      style: style,
      onEachFeature: onEachFeature,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);
 



var parking = L.icon({
  iconUrl: 'img/p.png',
  iconSize: [23,23],
  iconAnchor: [15,5]
});

var atrain = L.icon({
  iconUrl: 'img/a.png',
  iconSize: [23,23],
  iconAnchor: [15,5]
});

var ctrain = L.icon({
  iconUrl: 'img/c.png',
  iconSize: [23,23],
  iconAnchor: [15,5]
});

var btrain = L.icon({
  iconUrl: 'img/b.png',
  iconSize: [23,23],
  iconAnchor: [15,5]
});

var dtrain = L.icon({
  iconUrl: 'img/d.png',
  iconSize: [23,23],
  iconAnchor: [15,5]
});

var pa = [
  {
    name: "122nd St Parking",
    coord: [40.808421,-73.952140]
  },
  {
    name: "121st St Parking",
    coord: [40.807999,-73.953170]
  },
  {
    name: "118th E St Parking",
    coord: [40.805400,-73.953942]
  },
  {
    name: "118th W St Parking",
    coord: [40.806026,-73.955433]
  },
  {
    name: "115th St Parking",
    coord: [40.804077,-73.956206]
  },
]



var at = [
  {
    name: "125th Street A Train",
    coord: [40.810851,-73.952783]
  },
]

var bt = [
  {
    name: "125th Street B Train",
    coord: [40.810754,-73.952558]
  },
  {
    name: "116th Street B Train",
    coord: [40.804469,-73.955409]
  },
  {
    name: "110th Street B Train",
    coord: [40.800639,-73.958207]
  },
]

var ct = [
  {
    name: "125th Street C Train",
    coord: [40.810799,-73.952671]
  },
  {
    name: "116th Street C Train",
    coord: [40.804424,-73.955297]
  },
  {
    name: "110th Street C Train",
    coord: [40.800603,-73.958097]
  },
]

var dt = [
  {
    name: "125th Street D Train",
    coord: [40.810705,-73.952440]
  },
]

pa.forEach(function(p) {
  var mar = L.marker(p.coord, {icon: parking}).addTo(map);
  mar.bindPopup(p.name)
});

at.forEach(function(a) {
  var mar2 = L.marker(a.coord, {icon: atrain}).addTo(map);
  mar2.bindPopup(a.name)
});

bt.forEach(function(b) {
  var mar3 = L.marker(b.coord, {icon: btrain}).addTo(map);
  mar3.bindPopup(b.name)
});

ct.forEach(function(c) {
  var mar4 = L.marker(c.coord, {icon: ctrain}).addTo(map);
  mar4.bindPopup(c.name)
});

dt.forEach(function(d) {
  var mar5 = L.marker(d.coord, {icon: dtrain}).addTo(map);
  mar5.bindPopup(d.name)
});



$(document).ready(function () {
  var listIt = "";
    for (var i = 0; i < resta.features.length; i++){
      listIt += "<li><a id='" + resta.features[i].properties.OBJECTID+ "'>" +  resta.features[i].properties.Organization + "&nbsp;" + "<br>" + "<h6>" + resta.features[i].properties.Address + "&nbsp;" + "| " + resta.features[i].properties.Category + "</h6>" + "</a></li><li role='separator' class='divider'></li>";
    
      resta.features.sort(function (a, b) {
      var aa = a.properties.Organization;
      var ba = b.properties.Organization;

      if(aa < ba) {
        return -1;
      }
      if (aa > ba) {
        return 1;
      }
      return 0;

      });


     }

    $("#resta").html(listIt);

    $("#resta li a").click(function(e){ 
      e.stopPropagation();
      
      var id = $(this)[0].id;
      geojson1.eachLayer(function(feature){

        if(feature.feature.properties.OBJECTID==id) {
        feature.openPopup();
      }
      });
  
});

  // var selText = $(this).text();
  // $(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
// });
});



  var listIt = "";
    for (var i = 0; i < otherf.features.length; i++){
      listIt += "<li><a id='" + otherf.features[i].properties.OBJECTID+ "'>" +  otherf.features[i].properties.Organization + "&nbsp;" + "<br>" + "<h6>" + otherf.features[i].properties.Address + "&nbsp;" + "| " + otherf.features[i].properties.Category + "</h6>" + "</a></li>" + "<li role=" + "separator" + " class=" + "divider" +"></li>";
      
      otherf.features.sort(function (a, b) {
      var aa = a.properties.Organization;
      var ba = b.properties.Organization;

      if(aa < ba) {
        return -1;
      }
      if (aa > ba) {
        return 1;
      }
      return 0;

    });

    }
    $("#otherf").html(listIt);

    $("#otherf li a").click(function(e){
      e.stopPropagation();
      
      var id = $(this)[0].id;
      geojson2.eachLayer(function(feature){

        if(feature.feature.properties.OBJECTID==id) {
        feature.openPopup();
      }
  });
});



$(document).ready(function () {

  var listIt = "";
    for (var i = 0; i < services.features.length; i++){
      listIt += "<li><a id='" + services.features[i].properties.OBJECTID+ "'>" +  services.features[i].properties.Organization + "&nbsp;" + "<br>" + "<h6>" + services.features[i].properties.Address + "&nbsp;" + "| " + services.features[i].properties.Category + "</h6>" + "</a></li>" + "<li role=" + "separator" + " class=" + "divider" +"></li>";
      
      services.features.sort(function (a, b) {
      var aa = a.properties.Organization;
      var ba = b.properties.Organization;

      if(aa < ba) {
        return -1;
      }
      if (aa > ba) {
        return 1;
      }
      return 0;

    });
    }

    $("#services").html(listIt);

    $("#services li a").click(function(e){
      e.stopPropagation();
      
      var id = $(this)[0].id;
      geojson3.eachLayer(function(feature){

        if(feature.feature.properties.OBJECTID==id) {
        feature.openPopup();
      }
});
});
});

$(document).ready(function () {

  var listIt = "";
    for (var i = 0; i < retail.features.length; i++){
      listIt += "<li><a id='" + retail.features[i].properties.OBJECTID+ "'>"  +  retail.features[i].properties.Organization + "&nbsp;" + "<br>" + "<h6>" + retail.features[i].properties.Address + "&nbsp;" + "| " + retail.features[i].properties.Category + "</h6>" + "</a></li>" + "<li role=" + "separator" + " class=" + "divider" +"></li>";
      
      retail.features.sort(function (a, b) {
      var aa = a.properties.Organization;
      var ba = b.properties.Organization;

      if(aa < ba) {
        return -1;
      }
      if (aa > ba) {
        return 1;
      }
      return 0;

    });
    

    }
    $("#retail").html(listIt);

    $("#retail li a").click(function(e){
     e.stopPropagation();
      
      var id = $(this)[0].id;
      geojson4.eachLayer(function(feature){

        if(feature.feature.properties.OBJECTID==id) {
        feature.openPopup();
      }
});
});
});

$(document).ready(function () {


  var listIt = "";
    for (var i = 0; i < beauhea.features.length; i++){
      listIt += "<li><a id='" + beauhea.features[i].properties.OBJECTID+ "'>"  +  beauhea.features[i].properties.Organization + "&nbsp;" + "<br>" + "<h6>" + beauhea.features[i].properties.Address + "&nbsp;" + "| " + beauhea.features[i].properties.Category + "</h6>" + "</a></li>" + "<li role=" + "separator" + " class=" + "divider" +"></li>";
      beauhea.features.sort(function (a, b) {
      var aa = a.properties.Organization;
      var ba = b.properties.Organization;

      if(aa < ba) {
        return -1;
      }
      if (aa > ba) {
        return 1;
      }
      return 0;

    });
    }

    $("#beauhea").html(listIt);

    $("#beauhea li a").click(function(e){
     e.stopPropagation();
      
      var id = $(this)[0].id;
      geojson5.eachLayer(function(feature){

        if(feature.feature.properties.OBJECTID==id) {
        feature.openPopup();
      }
});
});

  });


    $("#map").on('click', function(f) {
      f.stopPropagation();
    });


    $(".erimgMain_arrowRight").click(function(e) {
 e.stopPropagation();

});

 $("#source").click(function(e) {
 e.stopPropagation();

});

 $("#direct").click(function(e) {
 e.stopPropagation();

});


 $(".erimgMain_arrowLeft").click(function(e) {
 e.stopPropagation();

});


 $("#lef").click(function(e) {
 e.stopPropagation();

});


  $("#ju").click(function(e) {
 e.stopPropagation();

});

    $("#info").click(function(e) {
 e.stopPropagation();

});

    $("#aboutModal").click(function(e) {
 e.stopPropagation();

});





// pics

 $("#67o").click(function(e) {
 e.stopPropagation();
geojson1.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==56) {
  feature.openPopup();
}

});
});

 $("#hslc").click(function(e) {
 e.stopPropagation();
geojson5.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==49) {
  feature.openPopup();
}

});
});

 $("#hart").click(function(e) {
 e.stopPropagation();
geojson1.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==63) {
  feature.openPopup();
}

});
});

  $("#hll").click(function(e) {
 e.stopPropagation();
geojson1.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==80) {
  feature.openPopup();
}

});
});


 $("#lev").click(function(e) {
 e.stopPropagation();
geojson2.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==125) {
  feature.openPopup();
}

});
});


 $("#lid").click(function(e) {
 e.stopPropagation();
geojson1.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==98) {
  feature.openPopup();
}

});
});


 $("#spr").click(function(e) {
 e.stopPropagation();
geojson3.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==95) {
  feature.openPopup();
}

});
});


 $("#vin").click(function(e) {
 e.stopPropagation();
geojson1.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==129) {
  feature.openPopup();
}

});
});


 $("#beb").click(function(e) {
 e.stopPropagation();
geojson4.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==39) {
  feature.openPopup();
}

});
});

 $("#zoe").click(function(e) {
 e.stopPropagation();
geojson1.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==70) {
  feature.openPopup();
}

});
});

 $("#moc").click(function(e) {
 e.stopPropagation();
geojson1.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==53) {
  feature.openPopup();
}

});
});
 $("#xwyz").click(function(e) {
 e.stopPropagation();
geojson1.eachLayer(function(feature){

if(feature.feature.properties.OBJECTID==113) {
  feature.openPopup();
}

});
});






