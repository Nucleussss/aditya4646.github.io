let elem = document.querySelectorAll('.sidenav');
M.Sidenav.init(elem);

let slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    duration: 500,
    interval: 3000
});

let parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

let materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);

let geser = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(geser,{
    scrollOffset:100
});