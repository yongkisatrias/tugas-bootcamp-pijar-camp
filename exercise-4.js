let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// Using the spread operator to replace values
const newData = {
  ...data,
  name: "Yongki Satria Sanjaya",
  email: "Yongkisatrias@gmail.com",
  hobby: ["Gaming", "Reading", "Workout", "Hiking"],
};

console.log(newData);

// Using destructuring to retrieve "street" and "city" from data
const {
  address: { street, city },
} = data;

console.log(`Street: ${street}
City: ${city}`);
