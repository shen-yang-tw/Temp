const urlToTab = () => {
  var str = location.search
  var hash = location.hash
  var selector = str.slice(str.indexOf('?') + 1, str.indexOf('=')) // Extract string between '?' and '='
  var el = str.slice(str.indexOf('=') + 1, str.indexOf(':')) // Extract string between '=' and ':'
  var type = str.slice(str.indexOf(':') + 1) // Extract string from next ':' to the end
  var index = hash.slice(1) // Extract string from next '#' to the end
  if (location.search) {
    if (selector == 'class') {
      if (type == 'switcher') {
        UIkit.switcher('.' + el).show(index)
      }
      if (type == 'tab') {
        UIkit.tab('.' + el).show(index)
      }
    }
    if (selector == 'id') {
      if (type == 'switcher') {
        UIkit.switcher('#' + el).show(index)
      }
      if (type == 'tab') {
        UIkit.tab('#' + el).show(index)
      }
    }
    if (selector == 'attr') {
      if (type == 'switcher') {
        UIkit.switcher('[' + el + ']').show(index)
      }
      if (type == 'tab') {
        UIkit.tab('[' + el + ']').show(index)
      }
    }
    // UIkit.switcher(element).show(index);
    console.log(str)
    console.log(selector, el, type, index)
  }
}
urlToTab()