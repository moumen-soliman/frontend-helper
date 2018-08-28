/*
-----------------
   Custom filters
-----------------
*/
// Filter for cutting off strings that are too long.
export function truncate (value) {
  var length = 124

  if (value.length <= length) {
    return value
  } else {
    return value.substring(0, length) + '...'
  }
}

// Filter that unescape URL
export function unescape (value) {
  var textArea = document.createElement('textarea')
  textArea.innerHTML = value
  return textArea.value
}
