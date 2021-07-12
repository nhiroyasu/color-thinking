import ColorBuilder from '../ColorBuilder';

describe('ColorBuilder Test', () => {
  it('testing build method with hex string', () => {
    const hex: string = '#ffffff';
    const color = ColorBuilder.build(hex);
    expect(color.R).toEqual(255);
    expect(color.G).toEqual(255);
    expect(color.B).toEqual(255);
  });
  it('testing build method with hex string without #', () => {
    const hex: string = 'ffffff';
    const color = ColorBuilder.build(hex);
    expect(color.R).toEqual(255);
    expect(color.G).toEqual(255);
    expect(color.B).toEqual(255);
  });
});
