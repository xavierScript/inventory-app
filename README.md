# A full stack Inventory management system

### How to run application locally

1. Create a `.env` file to `client` folder and add the environment variable

```bash
   VITE_BASE_URL=http://localhost:8000/api/v1
```

2. Create a `.env` file to `server` folder and add the environment variable

```bash
   NODE_ENV=dev
   PORT=8000
   DATABASE_URL=  #### use your local mongodb URI or mongodb atlas URI
   JWT_SECRET=your_secret_key
```

3. Install the dependencies and run backend

```bash

   cd client # or go to server folder and open the terminal in this directory

   npm install

   # then

   npm run dev

```

4. Install the dependencies and run frontend

```bash

   cd client # or go to client folder and open the terminal in this directory

   npm install

   # then

   npm run dev

```
