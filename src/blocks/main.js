import hamburger from "./hamburger/hamburger";
import tabs from "./tabs/tabs";
import filter from "./filter/filter";
import spoler from "./spoler/spoler";
import sliders from "./sliders/sliders";
import toTop from "./to-top/to-top"
import linkAnchor from "./link-anchor/link-anchor";
import menu from "./menu-css/menu";

window.addEventListener("DOMContentLoaded", () => {
	if ($('.spoler').length) {
		spoler();
	}
	hamburger();
	linkAnchor();
  if ($('.tabs').length) {
    tabs('.about__desc', '.tabs__item', '.tabs__content', 'tabs__item--active')
  }
	toTop();
	if ($('.menu').length) {
		menu();
	}
  if ($('.works__list-nav').length) {
    filter();
  }
	sliders();
});


