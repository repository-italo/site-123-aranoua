const baseurl = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store'

const fetchPromisse = fetch(baseurl)

fetchPromisse.then((response) => console.log(`Received response: ${response.status}, `))

console.log(fetchPromisse)
