import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Evaluando el componente <GifExpertApp />', () => {
    const category = 'Dragon Ball';

    test('Se prueba que haga match con el snapshot', () => {
        expect(render(<GifExpertApp />).container).toMatchSnapshot();
    });

    test('Deberia no agregar la categoria mas de una vez', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        expect(screen.getAllByText(category).length).toBeGreaterThan(0);
        expect(screen.getAllByText(category).length).not.toBeGreaterThan(1);
    });
});
