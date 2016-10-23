
import Express from 'express';
import BodyParser from 'body-parser';
import Routes from './routes';


// webserver
export default class Server extends Express {

    // express module doest like extends much wtf.
    // forced to use a funky setup like this..  ¯\_(ツ)_/¯
    constructor() {
        super();

        // default stuff maybe?
        this.use(BodyParser.json());
        this.use(BodyParser.urlencoded({ extended: false }));

        // es5ish methods
        this.setStaticServe = (dirname) => {
            this.use(Express.static(dirname || __dirname));
        }

        this.start = () => {
            var details = this.listen(this.get('port'), () => {
                console.log('Express server listening on port ' + details.address().port);
            });
        }
    }
}




