declare namespace App {
  interface User {
    id: number;
    type: string;
    name: string;
    email: string;
    mobile_country_code: string;
    mobile: string;
    image: string;
    email_verified_at: boolean;
    is_complete: boolean;
    is_approved: boolean;
  }
  type OTPData = {
    name: string;
    email: string;
    mobile: string;
    token: string;
  };
}

type User = App.User;
type OTPData = App.OTPData;
