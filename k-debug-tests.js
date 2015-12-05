describe('[k-debug][Unit] K.Debug', () => {
  it('should be defined and equal true', () => {
    const
      expected = true,
      actual = K.Debug;
    expect(actual).toEqual(expected);
  });
});
