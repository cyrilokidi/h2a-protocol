# H2A PROTOCOL

Hex to ASCII protocol conversion library

```javascript
const H2A = require("h2a-protocol");

const data =
  "323032322d31312d31352c31323a31363a35352c3836383830353036313235393734362c4133452d3942484741332c4b4241313736542c302c3439382c312c31312c33362e3835353630362c45282b292c312e3235393237312c53282d292c302c302c3023";

const options = {
  props: [
    "date",
    "time",
    "imei",
    "governorId",
    "vehicleRegNumber",
    "speed",
    "odometer",
    "gpsStatus",
    "numberOfSatelite",
    "longitude",
    "longitudeDirection",
    "latitude",
    "latitudeDirection",
    "powerSignal",
    "speedSignal",
  ],
};

const h2a = new H2A(data, options);

console.log("Date: ", h2a.date); // 2022-11-15
console.log("Time: ", h2a.time); // 12:16:55
console.log("IMEI: ", h2a.imei); // 868805061259746
console.log("Governor Id: ", h2a.governorId); // A3E-9BHGA3
console.log("Vehicle Reg. No.: ", h2a.vehicleRegNumber); // KBA176T
console.log("Speed: ", h2a.speed); // 0
console.log("Odometer: ", h2a.odometer); // 498
console.log("GPS status: ", h2a.gpsStatus); // Valid
console.log("Number of satelite: ", h2a.numberOfSatelite); // 11
console.log("Longitude: ", h2a.longitude); // 36.855606
console.log("Longitude Direction: ", h2a.longitudeDirection); // E(+)
console.log("Latitude: ", h2a.latitude); // 1.259271
console.log("Latitude Direction: ", h2a.latitudeDirection); // S(-)
console.log("Power signal: ", h2a.powerSignal); // OK
console.log("Speed signal: ", h2a.speedSignal); // OK
```
