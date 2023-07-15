import { Component, OnInit } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent implements OnInit {  
  ColumnDefs = [{}];  
  RowData: any;  
  AgLoad: boolean =false;  
  constructor() { }  
  
  ngOnInit() {  
    this.GetAgColumns();  
    this.GetStaffData();  
  }  
  GetAgColumns() {  
    this.ColumnDefs = [  
      { headerName: 'Staff Name', field: 'staff_name', sortable: true, filter: true },  
      { headerName: 'Primary Contact', field: 'primary_contact', sortable: true, filter: true },  
      { headerName: 'Secondary Contact', field: 'secondary_contact', sortable: true, filter: true },  
      { headerName: 'Address', field: 'address', sortable: true, filter: true },  
      { headerName: 'Email', field: 'email', sortable: true, filter: true },  
      { headerName: 'Whatsapp Number', field: 'whatsapp_no', sortable: true, filter: true }  
    ];  
  }  
  GetStaffData() {  
    this.AgLoad = true;  
    this.RowData = [  
      {  
        staff_name: "User1",  
        primary_contact: "AES",  
        secondary_contact: "1Yu",  
        address: "Chennai",  
        email: 7810,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User2",  
        primary_contact: "ABC",  
        secondary_contact: "1Yu",  
        address: "Pune",  
        email: 2310,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User3",  
        primary_contact: "ADS",  
        secondary_contact: "1Yu",  
        address: "Chennai",  
        email: 7810,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User4",  
        primary_contact: "AAA",  
        secondary_contact: "1Yu",  
        address: "New York",   
        email: 5810,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User5",  
        primary_contact: "GEW",  
        secondary_contact: "1Yu",  
        address: "Chennai",  
        email: 7810,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User6",  
        primary_contact: "NDS",  
        secondary_contact: "1Yu",  
        address: "Pune",  
        email: 2310,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User7",   
        primary_contact: "NDS",  
        secondary_contact: "1Yu",  
        address: "Chennai",  
        email: 7810,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User8",  
        primary_contact: "UTE",  
        secondary_contact: "1Yu",  
        address: "New York",  
        email: 5810,  
        whatsapp_no: "123",  
      }  ,
      {  
        staff_name: "User9",   
        primary_contact: "NDS",  
        secondary_contact: "1Yu",  
        address: "Chennai",  
        email: 7810,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User10",  
        primary_contact: "AES",  
        secondary_contact: "1Yu",  
        address: "Pune",  
        email: 2310,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User11",   
        primary_contact: "AES",  
        secondary_contact: "1Yu",  
        address: "Chennai",  
        email: 7810,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User12",  
        primary_contact: "UTE",  
        secondary_contact: "1Yu",  
        address: "New York",   
        email: 5810,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User13",   
        primary_contact: "NDS",  
        secondary_contact: "1Yu",  
        address: "Chennai",  
        email: 7810,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User14",  
        primary_contact: "SIW",  
        secondary_contact: "1Yu",  
        address: "Pune",  
        email: 2310,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User15",   
        primary_contact: "AAA",  
        secondary_contact: "1Yu",  
        address: "Chennai",  
        email: 7810,  
        whatsapp_no: "123",  
      },  
      {  
        staff_name: "User16",  
        primary_contact: "UTE",  
        secondary_contact: "1Yu",  
        address: "New York",   
        email: 5810,  
        whatsapp_no: "123",  
      }  
    ];  
  }  
}  