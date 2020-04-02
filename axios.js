import axios from "axios";

const baseUrl = ``;

// --- Methods ---

const get = url => {
  const options = {
    method: "get",
    url
  };
  axios.request(options);
};

const post = (path, payload) => {
  const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    url: `${baseUrl}/${path}`,
    data: payload,
    withCredentials: true
  };
  axios.request(options);
};

// --- APIs ---

export const fetchGetData = url => get(url);

export const fetchPostData = (data1, data2) => post(`pathName`, { data1, data2 });
