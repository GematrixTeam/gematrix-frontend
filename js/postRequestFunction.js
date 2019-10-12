async function postData(path = "", data = {}) {
  try {
    return result = await fetch(path, data);
    //return result;
  } catch (err) {
    throw new Error(err);
  }
}

postData('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo158',
      body: 'bar573',
      userId: 57
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json())
  .then(json => console.log(json))
