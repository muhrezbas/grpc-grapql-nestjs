export function calculateDistance({
  fromLatitude,
  fromLongitude,
  toLatitude,
  toLongitude,
  unit = 'K',
}: {
  fromLatitude: number;
  fromLongitude: number;
  toLatitude: number;
  toLongitude: number;
  unit?: string;
}): number {
  if (fromLatitude == toLatitude && fromLongitude == toLongitude) {
    return 0;
  } else {
    const radlat1 = (Math.PI * fromLatitude) / 180;
    const radlat2 = (Math.PI * toLatitude) / 180;
    const theta = fromLongitude - toLongitude;
    const radtheta = (Math.PI * theta) / 180;
    let distance =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (distance > 1) {
      distance = 1;
    }
    distance = Math.acos(distance);
    distance = (distance * 180) / Math.PI;
    distance = distance * 60 * 1.1515;
    if (unit == 'K') {
      distance = distance * 1.609344;
    }
    if (unit == 'N') {
      distance = distance * 0.8684;
    }
    return distance;
  }
}
