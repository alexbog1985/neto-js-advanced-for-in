import orderByProps from '../app';

describe('orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
  };

  test('should sort properties according to specified order', () => {
    const result = orderByProps(obj, ['name', 'level']);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ]);
  });

  test('should handle empty order array', () => {
    const result = orderByProps(obj, []);
    expect(result).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' }
    ]);
  });

  test('should ignore non-existing keys in order', () => {
    const result = orderByProps(obj, ['non-existing', 'name']);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 }
    ]);
  });
});