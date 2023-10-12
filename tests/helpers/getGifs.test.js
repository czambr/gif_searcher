import { getGif } from '../../src/helpers/getGifs';

describe('Evaluando el helper getGifs()', () => {
    test('Debe de retornar un arreglo de gifs', async () => {
        const gifs = await getGif('Dragon Ball');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});
