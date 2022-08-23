import { filtering} from './src/data.js';


describe('filtering', () => {
  it('debería retornar ___para input ___', () => {
    expect(filtering  ('___')).toBe(true);
  });

  it('debería retornar ___para input ___', () => {
    expect(filtering  ('___')).toBe(false);
  });
});

