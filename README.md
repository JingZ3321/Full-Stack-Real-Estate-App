# Full-Stack Real Estate MERN Web Application

This project is a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to create an awesome and responsive platform for real estate listings.

## Features
- React Hooks: Utilizes modern React features for state management and component lifecycle.
- React Router: Implements client-side routing for a seamless single-page application experience.
- Modern CSS: Utilizes modern CSS techniques for styling, ensuring a visually appealing user interface.
- Framer Motion: Implements animations and transitions using Framer Motion library for a polished user experience.
- MongoDB: Utilizes MongoDB as the database for storing real estate listings and related data.
- Cloudinary: Integrates Cloudinary for managing and storing images associated with real estate listings.
- Auth0: Implements authentication and authorization using Auth0 for secure user access.
- Mantine UI: Utilizes Mantine UI library for building responsive and accessible user interface components.

## Installation

```bash
cd client && yarn init
```

```bash
cd server && yarn init
```

Start the backend server:<br> 
```bash
cd server && yarn run start
```

Start the frontend development server: <br> 
```bash
cd client && yarn run dev
```

Access the application at 
```bash
http://localhost:3000
```

## Project Structure

```
real-estate/
│
├── client/         
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── pages/
│       ├── utils/
│       ├── App.js
│       ├── main.js
│       └── ...
│
├── server/         
│   ├── configcontrollers/
│   ├── controllers/
│   ├── data/
│   ├── Prisma/
│   ├── routes/
│   ├── index.js/
│   └── ...
│
├── .env             
├── README.md        
└── ...
```

## Contributing

PContributions are welcome! Feel free to open issues or submit pull requests.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
