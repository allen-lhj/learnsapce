function getAjax(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true);
    xhr.send()

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        try {
          var response = JSON.parse(xhr.responseText)
          return resolve(response);
        } catch (e) {
          return reject(e)
        }
      } else {
        reject(new Error(xhr.statusText))
      }
    }
  })
}