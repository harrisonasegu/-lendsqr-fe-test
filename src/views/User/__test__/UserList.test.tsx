/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderWithProviders } from "../../../utils/test-utils";
import UserList from "../UserList"; // Import the component that uses the hook
import { screen } from "@testing-library/react"; // Import render and screen from testing-library
import { BrowserRouter } from "react-router-dom";
import { App } from "antd";


describe("UserList", () => {
  // Clear local storage before each test
  beforeEach(() => {
    localStorage.clear();
  }); 
 
  it("should render correctly with data retrieved from localStorage", () => {
    // Set mock users data in localStorage
    const mockUsers = [
      {
        "_id": "6616f78d56a946217f4a369d",
        "personalInformation": {
          "organization": "SLAMBDA",
          "username": "Earnestine Bass",
          "email": "earnestinebass@slambda.com",
          "phoneNumber": "+234 (886) 465-2181",
          "dateJoined": "2016-11-29T12:39:55 -01:00",
          "status": "Inactive",
          "maritalStatus": "Divorced",
          "bvn": 27727396701,
          "gender": "Male",
          "children": 0,
          "typeOfResidence": "Rented"
        },
        "educationAndEmployment": {
          "levelOfEducation": "HND",
          "employmentStatus": "Self-Employed",
          "sectorOfEmployment": "FinTech",
          "durationOfEmployment": 4,
          "officialEmail": "earnestinebass@slambda.com",
          "monthlyIncome": 409512.1499,
          "loanRepayment": 118174
        },
        "socials": {
          "twitter": "@White_Dunlap",
          "facebook": "@Reva Mays",
          "instagram": "Fay_Nash"
        },
        "guarantor": [
          {
            "fullName": "Hopkins Hayes",
            "phoneNumber": "+234 (967) 534-3034",
            "email": "hopkinshayes@slambda.com",
            "relationship": "Sister"
          },
          {
            "fullName": "Clayton Carney",
            "phoneNumber": "+234 (867) 412-2482",
            "email": "claytoncarney@slambda.com",
            "relationship": "Mother"
          }
        ],
        "bankInformation": {
          "accountNo": 45774772596,
          "bankName": "United Bank for Africa",
          "amount": 129195.7756
        }
      }
    ];
    localStorage.setItem("users", JSON.stringify(mockUsers));
    const bvn = mockUsers[0].personalInformation?.bvn?.toString()
 
    renderWithProviders( 
      <BrowserRouter>
        <App>
          <UserList />
        </App>
      </BrowserRouter>
    ); // Render the component

    // Assert that specific elements within the rendered component match the snapshot
    expect(screen.getByText("Earnestine Bass")).toBeInTheDocument();
    expect(bvn).toHaveLength(11)

  });

  it("should render correctly when no data is found in localStorage", () => {
    renderWithProviders(
      <BrowserRouter>
        <App>
          <UserList />
        </App>
      </BrowserRouter>
    ); // Render the component

    // Assert that specific elements within the rendered component match the snapshot
    expect(screen.getByText("No data to view.")).toBeInTheDocument();
  });
});
