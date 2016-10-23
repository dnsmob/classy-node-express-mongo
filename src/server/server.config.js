
import Server from './app/webserver';
import Routes from './app/routes';


// express setup
var server = new Server();
server.setStaticServe('src');
server.use('/api', new Routes());
server.set('port', process.env.PORT || 8080);
server.start();



