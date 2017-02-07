/*jshint esversion: 6, browser:true, -W097  */

'use strict';

class SideNav {
  constructor () {
    this.sideNavEl = document.querySelector('.js-side-nav');
    this.showButtonEl = document.querySelector('.js-menu-show');
    this.hideButtonEl = document.querySelector('.js-menu-hide');
    this.sideNavContainerEl = document.querySelector('.js-side-nav-container');

    this.showSideNav = this.showSideNav.bind(this);
    this.hideSideNav = this.hideSideNav.bind(this);
    this.blockClicks = this.blockClicks.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);


    this.addEventListeners();
  }

  addEventListeners() {
    this.showButtonEl.addEventListener('click', this.showSideNav);
    this.hideButtonEl.addEventListener('click', this.hideSideNav);
    this.sideNavEl.addEventListener('click', this.hideSideNav);
    this.sideNavContainerEl.addEventListener('click', this.blockClicks);
    this.sideNavContainerEl.addEventListener('touchstart', this.onTouchStart);
  }

  onTouchStart(e) {
    
  }

  blockClicks(e) {
    e.stopPropogation();
  }

  showSideNav() {
    this.sideNavEl.classList.add('.side-nav--visible');
  }

  hideSideNav() {
    this.sideNavEl.classList.remove('.side-nav--visible');
  }
}

new SideNav();
