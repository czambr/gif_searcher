const { renderHook, waitFor } = require('@testing-library/react');
const { useFetchGifs } = require('../../src/hooks/useFetchGifs');

describe('Pruebas en el hook en useFetchGifs', () => {
    test('Debe devolver el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe retornar un arreglo de imagenes y isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
        await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
