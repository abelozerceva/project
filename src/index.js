'use strict'

import './main.scss';

function resizeGridItem(item){
	let grid = document.getElementsByClassName("elements")[0];
	let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
	let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
	let rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap)/(rowHeight + rowGap)); 
	item.style.gridRowEnd = "span " + rowSpan;
}
  
function resizeAllGridItems(){
	let allItems = document.getElementsByClassName("elem");
	for(let x = 0; x < allItems.length; x++){
		resizeGridItem(allItems[x]);
	}
	if (window.innerWidth > 450) {
		$('header .menu ')[0].style.display = 'flex';
		$('header .menu-btn')[0].style.display = 'none';
		$('header .menu').removeClass('hidden');
	}
	else {
		$('header .menu ')[0].style.display = 'none';
		$('header .menu-btn')[0].style.display = 'block';
		$('header .menu').addClass('hidden');
	}
	
}
  
// function resizeInstance(instance){
// 	let item = instance.elements[0];
// 	resizeGridItem(item);
// }
  
window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

// let allItems = document.getElementsByClassName("elem");
// for(let x = 0; x < allItems.length; x++){
// 	imagesLoaded(allItems[x], resizeInstance);
// }

// menu-btn click
$('.menu-btn').on('click', () => {
	$('header .menu').slideToggle('medium');
	$('header .menu').toggleClass('active');
});