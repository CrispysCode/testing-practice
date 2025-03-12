const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
}



it("mock callback", () => {
  const mockCallBack = jest.fn(x => 42 + x);

  forEach([0, 1], mockCallBack);
  
  expect(mockCallBack.mock.calls.length).toBe(2)
  // [ call1, call2 ]

  expect(mockCallBack.mock.calls[0][0]).toBe(0)

  expect(mockCallBack.mock.results[0].value).toBe(42);

  expect(mockCallBack.mock.results[1].value).toBe(43);
})

it("mock return", () => {
  const mock = jest.fn();

  mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce("Hello");

  const results = mock();
  const results2 = mock();
  const results3 = mock();

  expect(results).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe("Hello");
})