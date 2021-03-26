# Hello this is my portfolio website

##### But if you like it you can also clone in and personalize it for yourself

## Getting Started 

- To personilize your resume website after cloning use

`npm install`

### 1. Setup the backend 
* To personalize this backend for your own usage you have to create `.env` file in the **config** folder and input your personal info
#### But don't forget to create 
- mongoDB account [mongoDB](https://www.mongodb.com/)

- and sending blue account [sendingblue](https://www.sendinblue.com/)


```

ADMIN_PASSWORD=your_admin_password

MDB_URL=mongodb+srv://<username>:<password>@cluster0.rjxyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

JWT_SECRET=secret word

PORT=8000 

EMAIL=your@email

NAME=Your Name

API_KEY=your sendingblue api-key

URL=https://api.sendinblue.com/v3/smtp/email

```
- don't forget if everything works in the [postman](https://www.postman.com/)

### 2. Start your frontend & backend together

`npm run dev`
### 3. Signin with your information on the admin page

### 4. Edit informarion on the Admin page 

### 5. Enjoy your new resume !
---

---

### Details of My-portfolio

#### back-end of portfolio 

| **What  dependencies used for backend**|  |  | 
| --- | :---: | ---: |
| middleware | `express` | `body-parser` | 
| protecting personal info |   `bcrypt,  jsonwebtoken` | `dotenv`| 
|  Database | `mongoose` |  | 
|  Uploading files |  `multer` |  | 
| Sending messages | `sendingblue` | |
|  Writing in  ES6 | `babel` |  |
| Combining backend and front-end | `concurrently` |  |

---
### front-end of portfolio 

| **What  dependencies used for front-end**|  |  |
| --- | :---: | ---: |
| User interface library | `react`, `react-dom` | `react-router-dom` | 
|  Binding library |   `redux,  react-redux` | `redux-thunk`| 
|  Database acces | `axios` |  | 
|   CSS Framework |  `bootstrap, react-bootstrap` | `react-icons` | 
| library component to render the Markdown markup | `react-markdown` `remark-gfm` | `emoji-dictionary` & `react-syntax-highlighter` |
|  Animation | `react-typical`| `react-scripts` , `react-minimal-pie-chart` |



