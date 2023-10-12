import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
    const title = 'Dragon Ball';
    const url = 'https://dragon-ball-z.com/goku.jpg';

    test('Match con el Snapshot', () => {
        const { container } = render(
            <GifItem
                title={title}
                url={url}
            />
        );
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(
            <GifItem
                title={title}
                url={url}
            />
        );

        // ===> Alternantiva 1
        // expect(screen.getByRole('img').src).toBe(url);

        // ===> Alternantiva 2
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(
            <GifItem
                title={title}
                url={url}
            />
        );
        expect(screen.getByText(title)).toBeTruthy();
    });
});
