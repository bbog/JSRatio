#JSRatio


**JSRatio** is a tiny and very simple aspect ratio enforcing library.

It is designed for the basic scenario where your DOM element, a &lt;div&gt; perhaps, has a certain aspect ratio that needs to be preserved and you don't want to struggle with CSS or Javascript settings. 

##Project page

- [JSRatio](http://awesomestsite.com/awesomest-projects/js-ratio/)


##Download

- [Development](https://github.com/bbog/JSRatio/blob/master/dist/jsratio.js)
- [Production](https://github.com/bbog/JSRatio/blob/master/dist/jsratio.min.js)


##Demo

- [Demo](http://awesomestsite.com/awesomest-projects/js-ratio/demo/)


##Basic usage

**JSRatio** needs to be initialized after all the elements have been rendered. You can bind it to the window's `onload` event or simply place the following script at the end of the page.


```html
&lt;script&gt;JSRatio.init();&lt;/script&gt;
```

**JSRatio** will automatically recalculate everything on resize but if you need to update the values in case you dynamically add, remove or resize elements that have a ratio, you can call the `update` method, to 
needs to be initialized after all the elements have been rendered. You can bind it to the window's `onload` event or simply place the following script at the end of the page.

On your target elements all you have to do is specify the ratio via the `data-js-ratio` attribute. Based on the existing value for either width or height, the missing property will be automatically determined.

Example:

```html
&lt;div style="width: 50%;" data-js-ratio="1.5"&gt;1.5&lt;/div&gt;

&lt;div style="height: 300px;" data-js-ratio="0.5"&gt;0.5&lt;/div&gt;
```


If for some reasons you have both a width and a height set for your element, you can specify the reference value via the attributes `data-js-ratio-width` and `data-js-ratio-height`. All you have to do is simply place them on the element.

Example:

```html
&lt;div style="width: 50%; height: 200px;" data-js-ratio="1.5" data-js-ratio-width&gt;1.5&lt;/div&gt;

&lt;div style="width: 50%; height: 200px;" data-js-ratio="0.5" data-js-ratio-height&gt;0.5&lt;/div&gt;
```


##Options

If the root attribute name `data-js-ratio` is already in use or if you simply want a new one, you can overwrite it inside the initialization of the script.

Example:

```javascript
JSRatio.init({
	attributeName: 'data-other-ratio'
});
```


For the example above, the ratio will be set with `data-other-ratio` and the width and height dependencies with `data-other-ratio-width` and `data-other-ratio-height`


##Update

In order to update the sizes, in case they were changed dynamically, simply call the `update` method. By passing a "true" boolean parameter, the update method will also check if any new elements have been added.

Example:

```javascript
// this will force a recalculation of the ratios
JSRatio.update();

// this will also check for any new items before doing the calculations
JSRatio.update(true);
```

For the example above, the ratio will be set with `data-other-ratio` and the width and height dependencies with `data-other-ratio-width` and `data-other-ratio-height`


##Dependencies

None


##Browser support

Any modern browser that supports [querySelectorAll](http://caniuse.com/#feat=queryselector) and [addEventListener](http://caniuse.com/#feat=addeventlistener)

