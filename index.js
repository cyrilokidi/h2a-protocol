const { hexToAscii } = require("./lib");

module.exports = class H2A {
  constructor(data, options = { props: [] }) {
    this.props = this.deserialize(data);
    this.opts = options;
  }

  deserialize(data) {
    let result = data.toUpperCase().replace(/FLAGBIT/, "");
    result = hexToAscii(result);
    result = result.trim();
    result = result.split(",");
    return result;
  }

  propPosition(name) {
    return this.opts.props.findIndex((p) => p === name);
  }

  get date() {
    const pos = this.propPosition("date");
    return this.props[pos];
  }

  get time() {
    const pos = this.propPosition("time");
    return this.props[pos];
  }

  get imei() {
    const pos = this.propPosition("imei");
    return this.props[pos];
  }

  get governorId() {
    const pos = this.propPosition("governorId");
    return this.props[pos];
  }

  get vehicleRegNumber() {
    const pos = this.propPosition("vehicleRegNumber");
    return this.props[pos];
  }

  get speed() {
    const pos = this.propPosition("speed");
    return this.props[pos];
  }

  get odometer() {
    const pos = this.propPosition("odometer");
    return this.props[pos];
  }

  get gpsStatus() {
    const pos = this.propPosition("gpsStatus");
    const result = this.props[pos];
    if (result === "0") return "Invalid";
    if (result === "1") return "Valid";
    return "Old GPS";
  }

  get numberOfSatelite() {
    const pos = this.propPosition("numberOfSatelite");
    return this.props[pos];
  }

  get longitude() {
    const pos = this.propPosition("longitude");
    return this.props[pos];
  }

  get longitudeDirection() {
    const pos = this.propPosition("longitudeDirection");
    return this.props[pos];
  }

  get latitude() {
    const pos = this.propPosition("latitude");
    let result = this.props[pos];
    return result;
  }

  get latitudeDirection() {
    const pos = this.propPosition("latitudeDirection");
    return this.props[pos];
  }

  get powerSignal() {
    const pos = this.propPosition("powerSignal");
    return this.props[pos] === "0" ? "OK" : "DISCONNECTED";
  }

  get speedSignal() {
    const pos = this.propPosition("speedSignal");
    return this.props[pos] === "0" ? "OK" : "DISCONNECTED";
  }
};
