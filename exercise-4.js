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

// Menggunakan spread operator untuk mengganti nilai
const newData = {
  ...data,
  name: "Yongki Satria Sanjaya",
  email: "Yongkisatrias@gmail.com",
  hobby: ["Gaming", "Reading", "Workout", "Hiking"],
};

console.log(newData);

// Menggunakan destructuring untuk mengambil data "street" dan "city"
const {
  address: { street, city },
} = data;

console.log(`Street: ${street}
City: ${city}`);
