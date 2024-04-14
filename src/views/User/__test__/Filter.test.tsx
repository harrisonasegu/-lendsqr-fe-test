/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderWithProviders } from "../../../utils/test-utils";
import { screen } from "@testing-library/react"; // Import render and screen from testing-library
import Filter from '../Filter';


describe("Filter", () => {

    it('renders the Filter component', () => {
        renderWithProviders(<Filter setFilters={function (_value: any): void {
            throw new Error("Function not implemented.");
        } } filters={undefined} clearFilters={function (): void {
            throw new Error("Function not implemented.");
        } } confirm={function (): void {
            throw new Error("Function not implemented.");
        } } />);
        // Add assertions to verify that the component renders correctly
        expect(screen.getByText('Filter')).toBeInTheDocument();
      });

      it('renders a placeholder text', () => {
        renderWithProviders(<Filter setFilters={function (_value: any): void {
            throw new Error("Function not implemented.");
        } } filters={undefined} clearFilters={function (): void {
            throw new Error("Function not implemented.");
        } } confirm={function (): void {
            throw new Error("Function not implemented.");
        } } />);

        expect(screen.getByPlaceholderText("Date")).toBeTruthy()
        expect(screen.getByLabelText("Organization")).toBeInTheDocument()
      })
})