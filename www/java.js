// Header
var searchbar = document.getElementById('search-bar');
var menu = document.getElementById('action-menu');
searchbar.style.visibility = 'hidden';
function showsearchbar(){
    if(searchbar.style.visibility == 'hidden')
		searchbar.style.visibility = 'visible';
        menu.style.visibility = "hidden";
		searchbar.style.right = "0";

}
function hidesearchbar(){
    searchbar.style.visibility = 'hidden';
    menu.style.visibility = "visible";
}

$('input.input-qty').each(function() {
    var $this = $(this),
      qty = $this.parent().find('.is-form'),
      min = Number($this.attr('min')),
      max = Number($this.attr('max'))
    if (min == 0) {
      var d = 0
    } else d = min
    $(qty).on('click', function() {
      if ($(this).hasClass('minus')) {
        if (d > min) d += -1
      } else if ($(this).hasClass('plus')) {
        var x = Number($this.val()) + 1
        if (x <= max) d += 1
      }
      $this.attr('value', d).val(d)
    })
  })