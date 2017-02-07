/*jshint esversion: 6 */

'use strict';

class SideNav {
  constructor () {
    this.sideNavEl = document.querySelector('.js-menu');
    this.toggleButtonEl = document.querySelector('.js-side-nav');

    this.showSideNav = this.showSideNav.bind(this);

    this.addEventListeners();
  }

  addEventListeners() {
    this.toggleButtonEl('click', this.showSideNav);
  }
}

new SideNav();
