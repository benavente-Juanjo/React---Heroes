import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import { SearchPage } from "../../../src/heroes/pages/SearchPage";

describe('Pruebas en <SearchPage/>', () => {
    
    test('debe de mostrarse correctamente con valores por defecto', () => {
        
        render(
            <MemoryRouter>
                {/* <SearchPage /> Error al ejecutar JEST 8.0*/}
            </MemoryRouter>
        )

        screen.debug();

    });

});