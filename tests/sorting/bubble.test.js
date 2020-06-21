const bubbleSort = require('../../src/sorting/bubble');

describe('bubble sort unit test:', () => {
  it('Test#1 simple', async () => {
    const want = [2, 3, 5, 6, 7, 9];
    const got = bubbleSort([5, 3, 7, 6, 2, 9]);
    expect(got).toEqual(want);
  });

  it('Test#2 duplicate value', async () => {
    const want = [2, 3, 5, 5, 6, 7, 7, 9];
    const got = bubbleSort([5, 3, 7, 6, 2, 9, 7, 5]);
    expect(got).toEqual(want);
  });

  it('Test#3 with negative value', async () => {
    const want = [-7, -7, -3, 6, 17, 34, 42, 50, 52, 83, 87, 89, 96];
    const got = bubbleSort([83, 52, 89, 42, 6, 87, 50, 17, 34, 96, -7, -3, -7]);
    expect(got).toEqual(want);
  });
});
