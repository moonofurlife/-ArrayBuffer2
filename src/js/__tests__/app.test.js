import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

// test('loading to the buffer', () => {
//     const bufferConverter = new ArrayBufferConverter();
//     bufferConverter.load(getBuffer());
//     expect(bufferConverter.buffer).toEqual(getBuffer());
//   });

test('Return a string from the buffer', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  expect(bufferConverter.toString()).toBe(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
  );
});
