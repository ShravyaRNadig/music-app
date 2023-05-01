import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  active: boolean = false;
  showInfo: boolean = false;
  showDocs: boolean = false;
  selectedItem: string = '';
  isChildVisible: boolean = false;
  isUserChildVisible: boolean = false;
  isOtherChildVisible: boolean = false;

  userMenu: any = [];

  otherMenu: any = [
    {
      label: 'New',
      childs: [
        {
          icon: 'fa fa-plus',
          name: 'Create Account',
          url: 'main/accounts/create-account',
        },
        { icon: 'fa fa-plus', name: 'Create Contact', url: '' },
        { icon: 'fa fa-plus', name: 'Create Case', url: '' },
        { icon: 'fa fa-plus', name: 'Create Opportunity', url: '' },
        { icon: 'fa fa-plus', name: 'Create Leads', url: '' },
      ],
    },
  ];
  menuData: any = [];
  menusData: any = [];

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
   
  }

  
}
