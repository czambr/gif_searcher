import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Evaluando el componente <AddCategory />', () => {
    test('Debe hacer Match con el snapshot', () => {
        const { container } = render(<AddCategory onNewCategory={() => {}} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'goku' } });

        expect(input.value).toBe('goku');
    });

    test('Debe llamar onNewcategory si el input tiene un valor', () => {
        const inputValue = 'Dragon Ball';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar el onNewCategory si el input está vacio', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });
});
