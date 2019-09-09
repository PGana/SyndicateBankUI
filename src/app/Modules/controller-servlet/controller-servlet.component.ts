import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controller-servlet',
  templateUrl: './controller-servlet.component.html',
  styleUrls: ['./controller-servlet.component.scss']
})
export class ControllerServletComponent implements OnInit {

  constructor() { }

  schemaType: any[] = [{ value: 'home', text: 'Housing Loan' },
  { value: 'personal', text: 'Personal Loan' },
  { value: 'vehicle', text: 'Vehicle Loan' }
  ];

  purposeOfLoan: any[] = [
    { value: 'Purchase of Land & Contruction of House', text: 'Purchase of Land & Contruction of House' },
    { value: 'Purchase of Flat', text: 'Purchase of Flat' },
    { value: 'Purchase of readu build House', text: 'Purchase of readu build House' },
    { value: 'Foreclosure/takeover from other Bank/Fls', text: 'Foreclosure/takeover from other Bank/Fls' },
    { value: 'Contruction of House/Flat', text: 'Contruction of House/Flat' },

  ];

  region: any[] = [
    { value: 'AGRA REGIONAL OFFICE', text: 'AGRA REGIONAL OFFICE' },
    { value: 'AHMEDABAD REGIONAL OFFICE', text: 'AHMEDABAD REGIONAL OFFICE' },
    { value: 'BANGALORE CENTRAL REGIONAL OFFICE', text: 'BANGALORE CENTRAL REGIONAL OFFICE' },
    { value: 'BANGALORE EAST REGIONAL OFFICE', text: 'BANGALORE EAST REGIONAL OFFICE' },
    { value: 'BANGALORE NORTH REGIONAL OFFICE', text: 'BANGALORE NORTH REGIONAL OFFICE' },
    { value: 'BANGALORE SOUTH REGIONAL OFFICE', text: 'BANGALORE SOUTH REGIONAL OFFICE' },
  ];

  PfreferredLoc: any[] = [
    { value: 'ADAJAN SURAT', text: 'ADAJAN SURAT' },
    { value: 'ADELI', text: 'ADELI' },
    { value: 'ADHARTAL', text: 'ADHARTAL' },
    { value: 'AGHAR', text: 'AGHAR' },
    { value: 'BAGADI', text: 'BAGADI' },
    { value: 'BHANDATA', text: 'BHANDATA' },
  ];
  ngOnInit() {
  }

}
