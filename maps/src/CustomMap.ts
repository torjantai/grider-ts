export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    getMarkerContent: () => string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(element: Element) {
        this.googleMap = new google.maps.Map(element, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }

    addMarkers(items: Mappable[]): void {
        items.forEach((item) => {
            const marker = new google.maps.Marker({
                map: this.googleMap,
                position: {
                    lat: item.location.lat,
                    lng: item.location.lng,
                },
            });
            marker.addListener('click', () => {
                const infoWindow = new google.maps.InfoWindow({
                    content: item.getMarkerContent(),
                });
                infoWindow.open(this.googleMap, marker)
            });
        });
    };
}