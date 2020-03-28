'use strict'

import './main.scss';
var Masonry = require('masonry-layout');

var container = document.querySelector('#masonry-grid');
var msnry = new Masonry( container, {
  // options
  columnWidth: '.elem',
  itemSelector: '.elem',
  // horizontalOrder: true,
  fitWidth: true,
});

