




const asyncFetch = (method, url, data) => {
  let request;
  if (method === 'get') {
    request = new Request(url, {
      method: 'GET',
      headers: ({
        'Content-Type': 'application/json'
      })
    });
  } else if (method === 'post') {
    request = new Request(url, {
      method: 'POST',
      headers: ({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    });
  }
  return fetch(request).then((response) => response.json())
}




export default asyncFetch