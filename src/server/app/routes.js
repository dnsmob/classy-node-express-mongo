
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
                MovieSchema.findOne({ _id: req.params.id }, (err, movie) => {
                    if (err) {
                        res.send(err);
                    }

                    for (var prop in req.body) {
                        movie[prop] = req.body[prop];
                    }

                    // save the movie
                    movie.save((err) => {
                        if (err) {
                            res.send(err);
                        }
                        res.json({ message: 'Movie updated!' });
                    });

                });
            })

            .get((req, res) => {
                MovieSchema.findOne({ _id: req.params.id }, (err, movie) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json(movie);
                });
            })

            .delete((req, res) => {
                MovieSchema.remove({
                    _id: req.params.id
                }, (err, movie) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json({ message: 'Successfully deleted' });
                });
            });
    }
}




