export interface Patient {
  id: string;
  name: string;
  age: number;
  lastVisit: string;
  hasInsurance: boolean;
  status: 'Critical' | 'Scheduled' | 'Completed';
  // gender: string;
  // email: string;
  // phone: string;
  // address: string;
  // city: string;
  // state: string;
  // zip: string;
  // country: string;
}