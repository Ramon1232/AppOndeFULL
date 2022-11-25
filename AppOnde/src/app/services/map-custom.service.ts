import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Socket } from 'ngx-socket-io';
//import { toStringHDMS } from 'ol/coordinate';
import { environment } from 'src/environments/environment';
import * as turf from "@turf/turf";
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MapCustomService {

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 21.47672642658506;
  lng = -104.86678243632873;
  zoom = 12;
  markerDriver: any = null;
  notific = true;
  notific2 = true;


  constructor(private socket:Socket, private toastr: ToastrService) {
    this.mapbox.accessToken = environment.mapPK;
   }

   buildMap(): Promise<any> {
    /**
     * TODO: Aqui construimos el mapa
     */

    return new Promise((resolve, reject) => {
      try {
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: this.zoom,
          center: [this.lng, this.lat]
        });

        this.map.addControl(new mapboxgl.NavigationControl())

        this.map.addControl(new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        }))

        resolve({
          map: this.map
        });

      } catch (e) {
        reject(e);
      }
    });
  }

  loadCoords(coordenadas: any): void{

    //console.log(coordenadas);
    

    this.map?.addSource('route', {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: coordenadas
          }
      }
    });


    this.map?.addLayer({
      id: 'route',
      type: 'line',
      source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#D3472A',
          'line-width': 4
        }
    });

    //this.toastr.success('Hello world!', 'Toastr fun!');
    /*
    this.map?.fitBounds(coordenadas, {
      padding: 10
    })*/ 
    
    this.socket.emit('find-driver', {points: coordenadas});
  };

  emitirLocalizacion(coordenadas: any){
    this.socket.emit('find-driver', {points: coordenadas});
  }
  //console.log('****', url)

    addMarkerCustom(coords: any): void {
      //console.log('----->', coords)
      navigator.geolocation.getCurrentPosition(position => {
        const userCoordinates = [position.coords.longitude, position.coords.latitude];

      const el = document.createElement('div');
      el.className = 'marker';
      if (!this.markerDriver) {
        this.markerDriver = new mapboxgl.Marker(el,{
          draggable: true
        });
      } else {
        this.markerDriver
          .setLngLat(coords)
          .addTo(this.map);
          //console.log(this.markerDriver);
          /*
          const lngLat = this.markerDriver.getLngLat();
          console.log('--->', lngLat);
          */
          this.estaCerca(coords[0],coords[1], position.coords.longitude, position.coords.latitude);
          this.estaCercaA200M(coords[0],coords[1], position.coords.longitude, position.coords.latitude);
      }
    });  
    }

   /* marcadorUser(coordenadasUser: any){
        const marker = new mapboxgl.Marker({
          draggable: true
        }).setLngLat(coordenadasUser).addTo(map.));
    } */

    borraMarcador(): void{
      this.markerDriver.remove();
      this.socket.removeAllListeners('find-driver');
      this.notific = true;
    }

    borrarLayer(): void{
      this.map?.removeLayer('route');
      this.map?.removeSource('route')
    }
    
    isDraw(){
      if(!!this.map?.getLayer('route'))
      {
          this.borrarLayer();
      } if(!!this.markerDriver){
          this.borraMarcador();
      }
    }
    
    /*
    radioMarcador(){
      
      // [-104.86977807393716, 21.49504766159397]
      const center = [-104.866345, 21.491463];
      const radius = 1;
      const options = {steps: 10, units: 'kilometers', properties: {foo: 'bar'}}
      const circle = turf.circle(center, radius,);
      
        this.map?.addSource('circleData', {
          type: "geojson",
          data: circle
        });

        this.map?.addLayer({
          id: "circle-fill",
          type: "fill",
          source: "circleData",
          paint: {
            "fill-color": "blue",
            "fill-opacity": 0.2,
          },
        });

        console.log(circle)   
    }
    */

    estaCerca(lngA: any, latA: any, lngU: any, latU: any ){
      console.log('------->',lngA);
      const puntoA = ((lngU-(lngA))*(lngU-(lngA)))+((latU-(latA))*(latU-(latA)));
      if(puntoA<0.00008 && this.notific){
        this.notific = false;
        this.toastr.success('Tu transporte esta a punto de llegar', 'ONDE!!!', {
          positionClass: 'toast-center-center'
        });
        console.log("Ahi viene tu camion")
      }
    }


    estaCercaA200M(lngA: any, latA: any, lngU: any, latU: any ){
      console.log('------->',lngA);
      const puntoA = ((lngU-(lngA))*(lngU-(lngA)))+((latU-(latA))*(latU-(latA)));
      if(puntoA<0.0000032406 && this.notific2){
        this.notific2 = false;
        this.toastr.success('Llegada inminente, sal en putiza XD', 'ONDE!!!', {
          positionClass: 'toast-center-center'
        });
        console.log("Ahi viene tu camion")
      }
    }

    
    obtenerLocalizacion(){
      navigator.geolocation.getCurrentPosition(position => {
        const userCoordinates = [position.coords.longitude, position.coords.latitude];

       // console.log('Coordenadas actuales', userCoordinates);
        
        this.map?.addSource("user-coordinates", {
          type: "geojson",
          data: {
            "type": "FeatureCollection",
                "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                "type": "Point",
                "coordinates": userCoordinates
                  }
                }]
          }
        });
        this.map?.addLayer({
          id: "user-coordinates",
          type: 'circle',
            source: "user-coordinates",
              paint: {
                'circle-radius': 8,
                'circle-color': '#223b53',
                'circle-stroke-color': 'white',
                'circle-stroke-width': 1,
                'circle-opacity': 1
      }
        });
        this.map?.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 14
        });
      });
    } 
    
}
