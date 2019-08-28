
/* 


TODO// Create a loading template for new items being rendered / loaded into the list.
TODO// DONE. only load original content in the list for each iteration of the scroller.
TODO// Add animtions to each items being rendered with a css selector class..
TODO// Reset scroller to top of page or content section.
*/
document.querySelector('#infinite-scroll-left').scrollTop = 0;
  var log = function(msg) {
};

var InfiniteScroller = function(options) {
  console.log("InfiniteScroller Loaded...");
  
  this.options = options;
  this.view = document.querySelector(this.options.selector);
  this.debug = options.debug;

  // this.view.scrollTop(0); // reset scroll position to top of view/screen. 

  this.list = this.view.getElementsByTagName("ul")[0];
  this.items = [];

  // if user neables debuging, some information will be logged into the browser console window logs.
  this.log = function(msg) {
    if(this.debug == true) {
      console.log(msg);
    }
  };

  // Save the existing items onload.
  Array.prototype.forEach.call(this.list.getElementsByTagName("li"), (item) => {
    this.log(item);
    this.items.push(item);
  });

  // 
  this.addNewItem = function() {
    this.items.forEach( (item) => {
      this.log(item);
      this.list.appendChild(item.cloneNode(true));
    });
  };

  //
  this.view.addEventListener('scroll', () => {
    if (this.view.scrollTop + this.view.clientHeight >= this.view.scrollHeight - 100) {
      this.log(this)
      this.addNewItem();
    }
  });
};

// var x = new infiniteScroller({
//   selector: '#infinite-scroll',
//   animationSelector: '.myCoolAnimation' 
// });
// window.onload = new InfiniteScroller({
//   debug: true,
//   selector: '#infinite-scroll'
// }, true);

// window.onload = new InfiniteScroller({
//   debug: true,
//   selector: '#infinite-scroll-right'
// }, true);
// window.pageYOffset

