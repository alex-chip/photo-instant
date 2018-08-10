(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var toggleMenu = function toggleMenu(navId, toggleB) {
    var nav = navId,
        toggleButton = toggleB;

    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('is-active');
    });

    // function showNav () {
    //     nav.classList.toggle('is-active')
    // }

    // if(nav) {
    //     if(toggleButton) {
    //         toggleButton.addEventListener('click', showNav)
    //     }
    // }
};

var navId = document.getElementById('navId');
var toggleB = document.getElementById('navId-toggle');

toggleMenu(navId, toggleB);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sYUFBYSxTQUFiLFVBQWEsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFvQjtBQUNuQyxRQUFJLE1BQU0sS0FBVjtBQUFBLFFBQ0ksZUFBZSxPQURuQjs7QUFHSSxpQkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQ3pDLFlBQUksU0FBSixDQUFjLE1BQWQsQ0FBcUIsV0FBckI7QUFDSCxLQUZEOztBQUlKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FqQkQ7O0FBbUJBLElBQU0sUUFBUSxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLElBQU0sVUFBVSxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBaEI7O0FBRUEsV0FBVyxLQUFYLEVBQWtCLE9BQWxCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHRvZ2dsZU1lbnUgPSAobmF2SWQsIHRvZ2dsZUIpID0+IHtcbiAgICBsZXQgbmF2ID0gbmF2SWQsXG4gICAgICAgIHRvZ2dsZUJ1dHRvbiA9IHRvZ2dsZUJcblxuICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcbiAgICAgICAgfSlcblxuICAgIC8vIGZ1bmN0aW9uIHNob3dOYXYgKCkge1xuICAgIC8vICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcbiAgICAvLyB9XG5cbiAgICAvLyBpZihuYXYpIHtcbiAgICAvLyAgICAgaWYodG9nZ2xlQnV0dG9uKSB7XG4gICAgLy8gICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmF2KVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxufVxuXG5jb25zdCBuYXZJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZJZCcpXG5jb25zdCB0b2dnbGVCID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdklkLXRvZ2dsZScpXG5cbnRvZ2dsZU1lbnUobmF2SWQsIHRvZ2dsZUIpXG4iXX0=
