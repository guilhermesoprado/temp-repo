import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from '.';


describe('<Button />', () =>{

    it('should render the button with text "Load more"', () =>{
        render(<Button text="Load more" />)

        const button = screen.getByRole('button', {name : /load more/i});

        expect(button).toHaveAttribute('class', 'button');
        expect(button).toBeInTheDocument();
    });

    it('should call function on button click', () =>{
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} />)

        const button = screen.getByRole('button', {name : /load more/i});
        userEvent.click(button);
        //fireEvent.click(button); // as duas funções fazem a mesma coisa

        expect(fn).toHaveBeenCalledTimes(1);
        expect(fn).toHaveBeenCalled();

    });

    it('should be disabled when disabled is true', () =>{
        render(<Button text="Load more" disabled={true} />)

        const button = screen.getByRole('button', {name : /load more/i});
        expect(button).toBeDisabled();
    });

    it('should be enable when disabled is false', () =>{
        render(<Button text="Load more" disabled={false} />)

        const button = screen.getByRole('button', {name : /load more/i});
        expect(button).toBeEnabled();
    });

});