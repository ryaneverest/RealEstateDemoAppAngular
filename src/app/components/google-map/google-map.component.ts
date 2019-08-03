import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit, OnChanges {
  // google maps zoom level
  map: any;
  zoom = 8;
  @Input() markers: any[]  = [];
  @Output()  markerAdded: EventEmitter<any> =  new EventEmitter();
  lat = 34.6786;
  lng = -83.460;
  showMarker = false;

ngOnInit() {
}
ngOnChanges(changes: SimpleChanges) {
  const newVal =  changes.markers.currentValue;
  if(newVal) {
    this.showMarker  = true;
    if (this.map) { this.map.setCenter({ lat: newVal[0].latitude, lng: newVal[0].longitude }); }
  }



}
protected mapReady(map) {
  this.map = map;
}
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    this.markerAdded.emit(this.markers);
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}

// just an interface for type safety.
interface Marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
