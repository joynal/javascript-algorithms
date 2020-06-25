const binarySearch = require('../../src/search/binary');

describe('binary search unit test:', () => {
  it('Test#1 fail test', async () => {
    const want = false;
    const got = binarySearch([2, 3, 5, 6, 7, 9], 13);
    expect(got).toBe(want);
  });

  it('Test#2 find a value', async () => {
    const want = true;
    const got = binarySearch([-7, -7, -3, 6, 17, 34, 42, 50, 52, 83, 87, 89, 96], 96);
    expect(got).toBe(want);
  });
});
