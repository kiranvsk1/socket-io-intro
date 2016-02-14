function getQueryParameters(param) {
  var paramSrting = window.location.search.substring(1);
  var params = paramSrting.split('&');
  for (var i = 0; i < params.length; i++) {
    var pair = params[i].split('=');
    console.log(pair[1]);
    if (decodeURIComponent(pair[0])==param) {
      return decodeURIComponent(pair[1]).replace(/\+/g,' ');
    }
  }
  return undefined;
}
