
import { Router } from 'express';
import MovieSchema from './movie.schema';
import BodyParser from 'body-parser';


export default class Routes extends Router {

    constructor() {
        super();

        // GET, POST
        this.route('/movies')
            .get((req, res) => {
                MovieSchema.find((err, movies) => {
                    if (err) {
                        res.send(err);
                    }

                    res.json(movies);
                });
            })

            .post(BodyParser.urlencoded({ extended: false }), (req, res) => {
                var movie = new MovieSchema(req.body);
                movie.save((err) => {
                    if (err) {
                        res.send(err);
                    }
                    movie['message'] = 'Movie Added';
                    res.send(movie);
                });
            });


        // PUT, GET:id, DELETE
        this.route('/movies/:id')
            .put((req, res) => {
                MovieSchema.findOne({ _id: req.params.id }, (err, movies) => {
                    if (err) {
                        res.send(err);
                    }

                    for (prop in req.body) {
                        console.log(prop, req.body[prop]);
                        movie[prop] = req.body[prop];
                    }

                    // save the movie
                    var movie;
                    movie.save((err) => {
                        if (err) {
                            res.send(err);
                        }
                        res.json({ message: 'Movie updated!' });
                    });

                });
            })

            .get((req, res) => {
                MovieSchema.findOne({ _id: req.params.id }, (err, movies) => {
                    if (err) {
                        res.send(err);
                    }
                    var movie;
                    res.json(movie);
                });
            })

            .delete((req, res) => {
                MovieSchema.remove({
                    _id: req.params.id
                }, (err, movies) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json({ message: 'Successfully deleted' });
                });
            });
    }
}








// import Movie from '../model';
// import { Router } from 'express';


// var router = Router();

// export default router.route('/movies')
//     .get((req, res) => {
//         Movie.find((err, movies) => {
//             if (err) {
//                 res.send(err);
//             }

//             res.json(movies);
//         });
//     })

//     .post((req, res) => {
//         var movie = new Movie(req.body);
//         movie.save((err) => {
//             if (err) {
//                 res.send(err);
//             }

//             res.send({ message: 'Movie Added' });
//         });
//     });

// router.route('/movies/:id')
//     .put((req, res) => {
//         Movie.findOne({ _id: req.params.id }, (err, movie) => {

//             if (err) {
//                 res.send(err);
//             }

//             for (prop in req.body) {
//                 movie[prop] = req.body[prop];
//             }

//             // save the movie
//             movie.save((err) => {
//                 if (err) {
//                     res.send(err);
//                 }

//                 res.json({ message: 'Movie updated!' });
//             });
//         });
//     })

//     .get((req, res) => {
//         Movie.findOne({ _id: req.params.id }, (err, movie) => {
//             if (err){
//                 res.send(err);
//             }

//             res.json(movie);
//         });
//     })

//     .delete((req, res) => {
//         Movie.remove({
//             _id: req.params.id
//         }, (err, movie) => {
//             if (err){
//                 res.send(err);
//             }

//             res.json({ message: 'Successfully deleted' });
//         });
//     });

