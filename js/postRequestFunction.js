async function postData(path = "", data = {method: 'POST',
body: JSON.stringify({
	id: 101,
	info: 'text'
}),
headers: {
	"Content-type": "application/json; charset=UTF-8"
}}) {
  try {
    return await fetch(path, data);
  } catch (err) {
    return `ERROR ${err}`;
  }
}

// вызов функции с методом post
postData('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      id: 123,
      info: 'text'
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json())
	.then(json => console.log(json))
	

