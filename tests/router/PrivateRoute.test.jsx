import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { AuthContext } from "../../src/auth/context";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el <PrivateRoute/>', () => {
    
    test('debe de mostrar el children si está autenticado', () => {
        

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Juan Carlos'
            }
        }

        render( 
            
            <AuthContext.Provider value = { contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>

            )

        expect( screen.getByText('Ruta Privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith( "lastPath", "/marvel");
    
    });

});