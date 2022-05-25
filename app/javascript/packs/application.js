// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"



Rails.start()
Turbolinks.start()
ActiveStorage.start()




import "controllers"
import "bootstrap"

import { home_hello } from './home_hello';

document.addEventListener('turbolinks:load', () => {
  home_hello();
});

import { home_myname } from "./home_myname";

document.addEventListener('turbolinks:load', () => {
  home_myname();
});
