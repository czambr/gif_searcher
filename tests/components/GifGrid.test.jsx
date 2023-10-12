import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Evaluando el componente <GifGrid />', () => {
    const category = 'Dragon Ball';

    test('Debe hacer Match con el snapshot cuando no existen datos', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        const { container } = render(<GifGrid category={category} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imagenes de useFetchGifs()', () => {
        const gifs = [
            {
                id: 'abc',
                title: 'Dragon Ball',
                url: 'https://localhost:dragonball.jpg',
            },
            {
                id: '123',
                title: 'Avatar',
                url: 'https://localhost:avatar.jpg',
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
