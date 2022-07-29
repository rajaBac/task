
import app from './config/express.js';

/* This is a callback function that is called when the server is started. */
app.listen(2002, () => {
    console.log(`Server Started  💚  On Port (${2002})`);
  });
  
  export default app;