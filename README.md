
### Mapbox integration in Windy
This plugin allows you to use your own mapbox style as a base map in windy.com
How to make a map with mapbox:
1) Go to https://www.mapbox.com/ and register a profile
2) Go to https://studio.mapbox.com/ and create your map style
3) Once you are finished in the style editor, press Publish
4) Back on the main page of studio.mapbox.com use the share button 
5) Copy the preview style link and either share it in the forums or apply it with this plugin

How to apply a mapbox style to Windy:
1) Go to https://www.windy.com/
2) From the menu press "install windy plugin"
3) Select "load plugin directly from npm"
4) Enter the name windy-plugin-mapbox and press Load & Activate
5) Anywhere on the map press the right mouse button or hold your finger on the touchscreen to open the context menu
6) Select mapbox plugin to open the options popup
7) Paste and load the preview link you got from the mapbox website or use one of the examples provided.

___

<p align="center"><img src="https://www.windy.com/img/logo201802/logo-full-windycom-gray-v3.svg"></p>

### Windy plugins
This repository acts as an documentation, playground and boilerplate for your own Windy plugin.

Therefore always **fork this repository** before editing it.

Plugins are written in Javascript and published as npm package, so you already know how to create them

### Getting started
Fork this repository and then clone it
```sh
git clone https://github.com/yourUsername/windy-plugins
cd windy-plugins
npm i
npm start
```
Now open your browser browser at [https://localhost:9999/plugin.js](https://localhost:9999/plugin.js) to accept self signed SSL certificate.

Then open your browser at [www.windy.com/dev](https://www.windy.com/dev) to test your plugin.

If it fails, make sure that your plugin is correctly built and accessible with your browser at [https://localhost:9999/plugin.js](https://localhost:9999/plugin.js).

<p align="center"><img src="https://www.windy.com/img/windy-plugins/tutorial3.gif" width="80%"></p>

### Tutorials
 - [Hello World](examples/01-hello-world)
 - [Left side window](examples/02-window-on-left-side)
 - [Right side window](examples/03-window-on-right-side)
 - [Boat tracker](examples/04-boat-tracker)
 - [Loading external library](examples/05-use-external-library)
 - [Use weather picker](examples/06-weather-picker)
 - [Working with multiple files](examples/07-multiple-files-plugin)
 - [Display CSV, GPX, KML, WKT and other](examples/08-display-csv-gpx-kml-formats)
 - [Interpolate weather values from a map](examples/09-reading-weather-values)
 - [Loading data from Windy API](examples/10-obtaining-meteorological-data)

### Other resources
 - [How Windy Plugin work](docs/WINDY_PLUGIN.md)
 - [Windy API documentation](docs/WINDY_API.md)
 - [Leaflet 0.7.7 documentation](https://leafletjs.com/reference-0.7.7.html)
 - [List of Leaflet Plugins](https://leafletjs.com/plugins.html)
 - [Windy Plugins technical forum](https://community.windy.com/category/21/windy-plugins)

### Compiling your plugin
Our custom [Windy Plugin Compiler](docs/PLUGIN_COMPILER.md) does all the job for you. Just run `npm start` to launch it or `npm run start-dev` to skip beginner's prompt.

### Publishing your plugin
 1) Make sure, that your `package.json` is updated, and that:
    + name, is unique name of your plugin
    + description, describes what your plugin does
    + author and repository reflects your name and where the plugin hosted is
 2) Remove this `README.md` and put there few words about your plugin (and maybe some screenshot if you want). The text from README file will be used in our planned plugins gallery.
 3) Publish your plugin as npm package by `npm publish`.  (If you are not familiar with npm, create and account and login:  https://docs.npmjs.com/creating-a-new-npm-user-account.)  
 4) Test your published npm package on [Windy's Plugin page](https://www.windy.com/plugins)
 5) Let [us know in our community](https://community.windy.com/category/21/windy-plugins) about your new achievement.
 6) Once you are satisfied with your plugin,  you can request permission for it to be approved.  Your plugin will then be listed in the "windy.com/plugins" gallery,  and you will be able to use the url query string.
 7) Commit your work and pull your repository back to GitHub. Rename your repository to reflect name of your plugin.

### Conditions
It is strictly prohibited to use plugin to:
 - Modify user's setting without his consent
 - Download any of user's settings, favorites or location to your server
 - Download any meteorological data from Windy to your own server or use them in any other scope than inside your plugin
 - Do any action that would harm our [privacy policy](https://www.windy.com/privacy)

### Enterprise use
We prepare **Windy Enterprise** project, that will enable to
 1) Use private plugins (not published publicly)
 2) Limit access to your data just to your invited users
 3) Let us know if you want to be informed about this project

### Things to remember
 - While providing coordinates to Leaflet can be done via object `{ lat, lng }` with **lng** property, Windy supports `{ lat, lon }` with **lon** property.
 - Using undocumented functions of Windy API can break your plugin, when we decide to upgrade our codes. If you miss something, rather [let us know here](https://community.windy.com/category/21/windy-plugins) and ask us to document and expose other features.

### Technical support
Drop a line in our [Windy Plugins section](https://community.windy.com/category/21/windy-plugins) of our Community forum.

### ROADMAP
 - Initial release
 - Extend Windy API on a basis users requests
 - Create gallery of the most useful plugins
 - Create system so anyone can publish its own forecast/climatological model on Windy

### CHANGELOG
   * 0.5.0
      - Remove ECMWF from `plugin-data-loader` - ECMWF fortunately added again!
   * 0.4.0
      - Added `plugin-data-loader` to the Plugins API
   * 0.3.0
      - Examples moved to examples dir
   * 0.2.0
      - Fixed wrong examples
   * 0.1.1
      - Initial version of this repo

<small>This is default readme - please do not remove this line</small>



