const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const UserService = require('./services/user-service');
const db = require('./models/index');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started on port: ${PORT}`);
        
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true})
        }


        // const service = new UserService();
        // const newToken = service.createToken({email: 'ganesh@admin.com', id: 1});
        // console.log("New token is" , newToken);

        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhbmVzaEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjcyMTIwNDMyLCJleHAiOjE2NzIxMjQwMzJ9.u026yvj69nT63CJ0aeyXYUfPVOkZsZxwF8M08YyuYqo"
        // const response = service.verifyToken(token);
        // console.log(response);
    })

}

prepareAndStartServer();