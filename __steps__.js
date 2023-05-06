/**
 * 1. create a post api on the server side
 * 2. client side send data via post 
 * 3. set (fetch(resource, options)) fetch method inside the fetch options (second parameter)
 * 
 * 4. options will have three things: method, headers, body.
 * 5. method: "POST", 
 * 6. headers: {
    "Content-Type": "application/json",
    },   
 * 7. don't forget to send data by JSON.stringify in the body; body: JSON.stringify(data),
 * 8. on the server side: don't forget to use  express.json(): app.use(express.json());
 * 
 *
**/ 