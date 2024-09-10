import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components/Navbar";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en <NavBar />', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 'abc',
            name: 'Juan Carlos'
        },
        logout: jest.fn(),
    }

    beforeEach(() => jest.clearAllMocks );

    test('debe de mostrar el nombre del usuario', () => {


        render(
            <AuthContext.Provider value = {contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        )

        expect(screen.getByText(contextValue.user.name)).toBeTruthy();


    });

    test('debe de llamar el logut y navigate cuando se hace click en el boton', () => {
        

        render(
            <AuthContext.Provider value = {contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        )

        const logoutBtb = screen.getByRole('button');

        fireEvent.click( logoutBtb );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});

    });
    
});