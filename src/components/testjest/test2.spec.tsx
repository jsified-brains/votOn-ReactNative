import filterArray from './test2';

test('check filterArray', () => {
  expect(filterArray(['A', 'BB'], 'B')).toBe('BB');
});

