const { hexToAscii } = require("./lib");

module.exports = class H2A {
  constructor(data, options = { props: [] }) {
    this.props = this.deserialize(data);
    this.opts = options;
  }

  deserialize(data) {
    let result = data.toUppercase().replace(/FLAGBIT/, "");
    result = hexToAscii(result);
    result = result.trim();
    result = result.split("");
    return result;
  }

  propPosition(name) {
    return this.opts.props.findIndex((p) => p === name);
  }

  get date() {
    const pos = this.propPosition(EPropName.DATE);
    return this.props[pos];
  }

  get time() {
    const pos = this.propPosition(EPropName.TIME);
    return this.props[pos];
  }

  get imei() {
    const pos = this.propPosition(EPropName.IMEI);
    return this.props[pos];
  }

  get governorId() {
    const pos = this.propPosition(EPropName.GOVERNOR_ID);
    return this.props[pos];
  }

  get vehicleRegNumber() {
    const pos = this.propPosition(EPropName.VEHICLE_REG_NUMBER);
    return this.props[pos];
  }

  get speed() {
    const pos = this.propPosition(EPropName.SPEED);
    return this.props[pos];
  }

  get odometer() {
    const pos = this.propPosition(EPropName.ODOMETER);
    return this.props[pos];
  }

  get gpsStatus() {
    const pos = this.propPosition(EPropName.GPS_STATUS);
    const result = this.props[pos];
    if (result === "0") return "Invalid";
    if (result === "1") return "Valid";
    return "Old GPS";
  }

  get numberOfSatelite() {
    const pos = this.propPosition(EPropName.NUMBER_OF_SATELITE);
    return this.props[pos];
  }

  get longitude() {
    const pos = this.propPosition(EPropName.LONGITUDE);
    return this.props[pos];
  }

  get longitudeDirection() {
    const pos = this.propPosition(EPropName.LONGITUDE_DIRECTION);
    return this.props[pos];
  }

  get latitude() {
    const pos = this.propPosition(EPropName.LATITUDE);
    let result = this.props[pos];
    return result;
  }

  get latitudeDirection() {
    const pos = this.propPosition(EPropName.LATITUDE_DIRECTION);
    return this.props[pos];
  }

  get powerSignal() {
    const pos = this.propPosition(EPropName.POWER_SIGNAL);
    return this.props[pos] === "0" ? "OK" : "DISCONNECTED";
  }

  get speedSignal() {
    const pos = this.propPosition(EPropName.SPEED_SIGNAL);
    return this.props[pos] === "0" ? "OK" : "DISCONNECTED";
  }
};
