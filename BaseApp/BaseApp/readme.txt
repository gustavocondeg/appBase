Kendo Application MVVC.
1 - La aplicación empieza en UI/app.js, en donde carga todas los modulos y crea y se devuelve el kendo router. 
2 - Cada vista tiene dos archivos, el js y el html. El HTML se llama desde en el modulo declarado en js y se devuelve una nueva kendo view. 
3 - Por ultimo, desde UI/main.js se llama al kendo router (var app = require('app.js')) y se inicializa (app.start()).


Para trabajar con Web Pack. 
1- Tener instalado NODE.js https://nodejs.org/es/
2- Descargar WebPack Task Runner. https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebPackTaskRunner
3- Agregar webpack configuration file al proyecto. 
4- Abrir CMD, en la carpeta donde se encuentra la carpeta 'node_modules' instalar webpack (npm install webpack --save) y text-loader (npm install text-loader --save)
5- Para compilar el codigo, abrir Task Runner Explorer (View > Other Windows > Task Runner Explorer ).
	Doble clic en Run - Development. Esto va a compilar la app y dejar todos los js en UI/dist/bundle.js
	Para trabajar y que lo haga automaticamente, doble click en Watch - Development. La primera vez va a demorar, por que va a compilar todas las libs, pero despues solamente va a compilar las modificaciones.
	 
