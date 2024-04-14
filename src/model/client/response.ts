/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
export namespace Apiresponse {
  export class Users {
    _id: string = '';
    personalInformation: PersonalInformation = new PersonalInformation();
    educationAndEmployment: EducationAndEmployment = new EducationAndEmployment();
    socials: Socials = new Socials();
    guarantor: Guarantor[] = [];
    bankInformation: BankInfomation = new BankInfomation()
  }
  export class Guarantor {
    fullName: string = '';
    phoneNumber: string = '';
    email: string = '';
    relationship: string = '';
  }
  export class Socials {
    twitter: string = '';
    facebook: string = '';
    instagram: string = '';
  }
  export class EducationAndEmployment {
    levelOfEducation: string = '';
    employmentStatus: string = '';
    sectorOfEmployment: string = '';
    durationOfEmployment: string = '';
    officialEmail: string = '';
    monthlyIncome: number = 0;
    loanRepayment: number = 0;
  }
  export class PersonalInformation {
    organization: string = '';
    username: string = '';
    email: string = '';
    phoneNumber: string = '';
    dateJoined: string = '';
    status: string = '';
    maritalStatus: string = '';
    bvn: number = 0;
    gender: string = '';
    children: number = 0;
    typeOfResidence: string = '';
  }

  export class BankInfomation {
    accountNo: number = 0;
    bankName: string = '';
    amount: number = 0;
  }
}
