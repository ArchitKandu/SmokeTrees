## User Address Form Project

A simple web application that allows users to input their name and address, which are then stored in a MongoDB database. This project includes a frontend built with **HTML**, **CSS**, and **JavaScript**, and a backend built with **Express.js** and **MongoDB**.

### Features:

- Simple user interface to add a name and address.
- User data is sent to the backend for storage in the database.
- Validates user input before submission.
- Displays success or error messages to the user based on the response.

---

### Technologies Used:

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Tools**: Nodemon, dotenv

---

### Folder Structure:

```
  ├── frontend
      ├── index.html        # Frontend HTML file
      ├── style.css         # Frontend CSS for styling
      └── script.js         # JavaScript file for form handling

   ├── config
   │   └── db.js         # MongoDB connection file
   ├── controllers
   │   └── userController.js # Controller handling user logic
   ├── models
   │   └── userModel.js   # Mongoose schema for User and Address
   ├── routes
   │   └── userRoutes.js  # Routes for API requests
   └── index.js          # Main server file
```

---

### Installation Instructions:

#### 1. Clone the Repository:

```bash
git clone https://github.com/ArchitKandu/SmokeTrees.git
cd smoketrees
```

#### 2. Install Backend Dependencies:

Navigate to the backend directory:

```bash
npm install
```

#### 3. Configure the Environment Variables:

Create a `.env` file in the `/backend` directory with the following content:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
```

Replace `<username>` and `<password>` with your actual MongoDB credentials.

#### 4. Start the Backend Server:

Run the backend with Nodemon:

```bash
npm start
```

#### 5. Start the Frontend:

Open the `frontend/index.html` file in a browser to start using the app.

---

### API Endpoints:

| HTTP Method | Endpoint | Description                 |
| ----------- | -------- | --------------------------- |
| `POST`      | `/user`  | Adds a new user and address |

---

### Usage:

1. Open `frontend/index.html` in your browser.
2. Fill in the name and address fields.
3. Submit the form, and the data will be sent to the server.
4. The server will respond with a success or error message, which is displayed on the form.

---

### Example Request:

When the user submits the form, the following JSON request is sent to the backend:

```json
{
  "name": "John Doe",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "123456",
    "country": "USA"
  }
}
```

---

### Example Response:

Upon success, the backend will respond with:

```json
{
  "_id": "614c1e4f2f8b9b0015b2b5e5",
  "name": "John Doe",
  "addresses": [
    {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "123456",
      "country": "USA"
    }
  ],
  "__v": 0
}
```

---

### Contribution:

Feel free to fork this repository and submit pull requests for improvements or bug fixes.

---

### License:

This project is licensed under the MIT License.

---

### Author:

**Archit Kandu**
