/*!
 * JSRatio - aspect ratio enforcing library
 * v0.1.1
 * awesomestsite.com/awesomest-projects/js-ratio
 * copyright Bogdan Bucur 2015
 * MIT License
*/

(function (w) {


	var reference = 'JSRatio';


	var JSRatio = (function () {


		// stores the items that need to be updated
		var itemsWithRatio = [];
		// the attribute setting the ratio
		var attributeName = 'data-js-ratio',
			attributeUseWidth  = attributeName + '-width',
			attributeUseHeight = attributeName + '-height';


		/**
		 * Extracts the DOM elements with the js-ratio attribute
		 */
		var getItems = function () {

			var items = document.querySelectorAll('[' + attributeName + ']');
			appendItems(items);
		};


		/**
		 * Receives a set of DOM elements and adds them to the array of DOM items to be resized
		 */
		var appendItems = function (items) {

			var index = 0,
				totalItems = items.length;
			for ( ; index < totalItems; index++) {

				var item = items[index];

				if (itemsWithRatio.indexOf(item) === -1) {
					itemsWithRatio.push(item);
				}
			}
		};


		/**
		 * Cycles trough the DOM elements with a ratio and applies the newer size
		 */
		var applyRatios = function () {

			var index = 0,
				totalItems = itemsWithRatio.length;
			for ( ; index < totalItems; index++) {

				var item = itemsWithRatio[index],
					ratioString = parseFloat(item.getAttribute(attributeName)),
					ratio = parseFloat(ratioString);

				if (item.getAttribute(attributeUseWidth) !== null) {
					var useWidth = true;
				} else if (item.getAttribute(attributeUseHeight) !== null) {
					var useHeight = true;
				}

				var hasWidth  = (item.style.width),
					hasHeight = (item.style.height),
					hasWidthAndHeight = (hasWidth && hasHeight);

				if ((hasWidthAndHeight && useWidth) || hasWidth) {

					var width  = item.clientWidth,
						height = width / ratio;

					item.style.height = height + 'px';

				} else if ((hasWidthAndHeight && useHeight) || hasHeight) {

					var height = item.clientHeight,
						width  = height * ratio;

					item.style.width = width + 'px';
				}
			}
		};


		/**
		 * Sets the default options used by JSRatio
		 */ 
		var setOptions = function (options) {

			options = (typeof options === 'undefined') ? {} : options;

			if (typeof options.attributeName !== 'undefined' && options.attributeName !== null) {
				attributeName = options.attributeName;
			}
		};


		/**
		 * Listening to the window's resize event, to recalculate the ratios
		 */
		var bindEvents = function () {

			if (window.addEventListener) {

				window.addEventListener('resize', function() {
					update();
				});
			} else {
				console.log('addEventListener not supported! You need a newer browser')
			}
		}


		/**
		 * Here be dragons
		 */
		var init = function (options) {


			setOptions(options);

			if (document.querySelectorAll) {
				
				getItems();

				applyRatios();

				bindEvents();

			} else {
				console.error('querySelectorAll not supported! You need a newer browser')
			}
		};


		/**
		 * Provides a way to recalculate the sizes in case they are changed dynamically
		 */
		var update = function () {
			applyRatios();
		};


		return {
			init: init,
			update: update
		}
	})();


	w[reference] = w[reference] || JSRatio;

})(window);