const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ role: "admin" }),
};



const res = await fetch("http://localhost:1234/users", requestOptions);
const data = await res.json();

console.log(data);
