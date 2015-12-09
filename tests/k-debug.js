describe('[k-debug][Unit] K.debug', () => {
  it('should be defined and equal true', () => {
    const
      expected = true,
      actual = K.debug;
    expect(actual).toEqual(expected);
  });
});
