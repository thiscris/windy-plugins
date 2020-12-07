"use strict";

/**
 * This is main plugin loading function
 * Feel free to write your own compiler
 */
W.loadPlugin(
/* Mounting options */
{
  "name": "windy-plugin-mapbox",
  "version": "0.5.0",
  "author": "Hristo Dobrev",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/thiscris/windy-plugin-mapbox"
  },
  "description": "Windy plugin for integration of Mapbox map styles.",
  "displayName": "Mapbox plugin",
  "hook": "contextmenu"
},
/* HTML */
'<input id="mapbox-plugin-input" type="text" data-ref="mapbox-style"> <small> <button id="btn-mapbox-load">Load custom map</button></br> <input type="checkbox" data-ref="box" id="mapbox-plugin-checkbox"> <label for="mapbox-plugin-checkbox" class="clickable noselect">Reduce overlay opacity and move mapbox layer behind it</label></br> <button class="mapbox-btn-def" id="btn-default" data-mapboxstyle="">Default map</button> <label for="btn-default" class="clickable noselect">Load default map and labels</label></br> <button class="mapbox-btn-example" id="btn-example-1" data-mapboxstyle="https://api.mapbox.com/styles/v1/thiscris/cki9zxkouczj519qudpgudhop.html?fresh=true&title=view&access_token=pk.eyJ1IjoidGhpc2NyaXMiLCJhIjoiY2tpNzV5Y2hxMGxqNDMwbXE0bmRpdXBwYSJ9.HpVl6ea7-T8pzav2_qqcgg">Example #1</button> <label for="btn-example-1" class="clickable noselect">Load example map style: Neon roads</label></br> <button class="mapbox-btn-example" id="btn-example-2" data-mapboxstyle="https://api.mapbox.com/styles/v1/thiscris/cki7cufuv2kg919pi49mivxs1.html?fresh=true&title=view&access_token=pk.eyJ1IjoidGhpc2NyaXMiLCJhIjoiY2tpNzV5Y2hxMGxqNDMwbXE0bmRpdXBwYSJ9.HpVl6ea7-T8pzav2_qqcgg">Example #2</button> <label for="btn-example-2" class="clickable noselect">Load example map style: Tolkien map</label> </small> <div class="iconfont"></div>',
/* CSS */
'#windy-plugin-mapbox{position:fixed;top:103px;left:50%;transform:translateX(-50%);padding:.1em 2em .1em .5em;z-index:1000;white-space:nowrap;overflow:hidden;color:#6b6b6b;background-color:#f8f8f8;box-sizing:border-box;border:1px solid #c1c1c1;border-radius:5px}#windy-plugin-mapbox .iconfont{color:#ddd;margin-right:.5em;position:absolute;right:-15px;bottom:0;font-size:40px;z-index:-1}#windy-plugin-mapbox .closing-x{color:#9d0300;font-size:20px;background:none;display:block;right:-5px;top:-5px}.lower-opac{opacity:.5}.back-pos{z-Index:9}',
/* Constructor */
function () {
  var map = W.require('map');

  console.log('I am mounted to the page');
  var mapboxExample = 'https://api.mapbox.com/styles/v1/thiscris/cki9zxkouczj519qudpgudhop.html?fresh=true&title=view&access_token=pk.eyJ1IjoidGhpc2NyaXMiLCJhIjoiY2tpNzV5Y2hxMGxqNDMwbXE0bmRpdXBwYSJ9.HpVl6ea7-T8pzav2_qqcgg';
  var def_baselayer = map.baseLayer;
  var def_labelayer = W.labelsLayer;
  var myGr = L.layerGroup().addTo(map);
  var mb_input = document.getElementById("mapbox-plugin-input");
  var ex_btns = document.getElementsByClassName("mapbox-btn-example");
  var plugin_layer = '';

  this.onopen = function () {
    console.log('I am opened');
  };

  this.onclose = function () {
    return console.log('I am being closed');
  };

  document.getElementById("btn-mapbox-load").addEventListener('click', function () {
    console.log("loading mapstyle " + mb_input.value);
    SetCustomLayer(mb_input.value);
  });
  document.getElementById("mapbox-plugin-checkbox").addEventListener('change', function () {
    if (this.checked) {
      document.querySelector(".overlay-layer").classList.add("lower-opac");
      document.querySelector(".leaflet-layer").classList.add("lower-opac");
      document.querySelector(".mapboxLayer").classList.add("back-pos");
    } else {
      document.querySelector(".overlay-layer").classList.remove("lower-opac");
      document.querySelector(".leaflet-layer").classList.remove("lower-opac");
      document.querySelector(".mapboxLayer").classList.remove("back-pos");
    }
  });

  for (var i = 0; i < ex_btns.length; i++) {
    ex_btns[i].addEventListener('click', function () {
      var thisStyle = this.dataset.mapboxstyle;
      console.log(thisStyle);

      if (document.getElementById("mapbox-plugin-input").value == thisStyle) {
        console.log("already loaded");
        return;
      }

      mb_input.value = thisStyle;
      document.getElementById("btn-mapbox-load").dispatchEvent(new Event('click'));
    });
  }

  ;
  document.getElementById("btn-default").addEventListener('click', function () {
    if (plugin_layer != undefined) {
      myGr.removeLayer(plugin_layer);
    }

    console.log(plugin_layer);
    def_baselayer.addTo(map);
    def_labelayer.addTo(map);
    plugin_layer = '';
    mb_input.value = '';
  });

  function SetCustomLayer(mapboxPrevLink) {
    var token = mapboxPrevLink.match(/access_token=(\S*)$/)[1];
    var style = mapboxPrevLink.match(/^(\S*)\.html/)[1];
    var mapboxStyle = style + "/tiles/256/{z}/{x}/{y}?access_token=" + token;

    if (plugin_layer != '') {
      myGr.removeLayer(plugin_layer);
    }

    def_baselayer.remove();
    def_labelayer.remove();
    plugin_layer = L.tileLayer(mapboxStyle, {
      className: "mapboxLayer",
      tileSize: 256
    });
    myGr.addLayer(plugin_layer);
  }
});