export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferArray = new Uint16Array(this.buffer);
    return String.fromCharCode(...bufferArray);
  }
}
