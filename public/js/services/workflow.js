/*
 * Module responsible for fetch workflow content from the backend
 * through HTTP calls (or for now, by loading a JSON file)
 */
const axios = window.axios;
const url = "https://placeholder";

export const getAllWorkflows = () => {
  console.log("Executing getAllWorkflows function");

  return (
    // Instead of making an HTTP request, load a list of dictionaries
    // with the actual workflow content
    axios
      // .get(`${url}/workflows`)
      .get("/js/services/workflow.json")
      .then((response) => {
        console.log("Data retrieved:", response.data);
        return response.data;
      })
      .catch((err) => {
        console.log("GET Error: ", err);
      })
  );
};

// FIXME: placeholder for when we have a REST API or backend database
export const createUser = (id, firstName, lastName, email, password) => {
  return axios({
    method: "post",
    url: `${url}/users`,
    data: {
      id,
      firstName,
      lastName,
      email,
      password,
    },
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  })
    .then((response) => {
      console.log("POST response: ", response);
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};
