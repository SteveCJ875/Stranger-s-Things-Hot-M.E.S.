const BASE_URL = "https://strangers-things.herokuapp.com/api/2007-LSU-RM-WEB-PT"

export async function logInUser (username, password) {

fetch(BASE_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      }
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
}