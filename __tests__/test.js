
it('can check that a function is called without arguments', () => {
    let fn = jasmine.createSpy();

    fn();
    expect(fn).toHaveBeenCalledWith();
});
