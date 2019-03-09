import { Component, OnInit, ViewChild } from '@angular/core';

import { CoreModalComponent } from '../../global/core-modal/core-modal.component';

@Component({
  selector: 'ecomm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public title = 'R-Commerce';

  public loggedIn = false;
  constructor() { }

  @ViewChild('loginModal') loginModal: CoreModalComponent;

  public openLoginModal(): void {
    this.loginModal.openModal();
  }

  public closeLoginModal(): void {
    this.loginModal.closeModal();
  }

  ngOnInit() {
  }

}
