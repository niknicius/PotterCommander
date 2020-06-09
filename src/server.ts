import app from './app';

const server = app.listen(3000, async () => {

    // tslint:disable-next-line:no-console
    console.log("App is running on port 3000");
});

export default server;
