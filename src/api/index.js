const server = "http://localhost:4000";
function getApi(uri) {
  return fetch(server + uri).then((json) => json.json());
}

function apiPut(uri, data) {
  return fetch(server + uri, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export { getApi, apiPut };
