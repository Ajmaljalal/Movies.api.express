describe("Movies Controller", function () {

    var movieController, movie, req, res;
    movie = {find: jasmine.createSpy(),findById:jasmine.createSpy()};
    req = {params: {id: 1}};
    res = {send: jasmine.createSpy(), status: jasmine.createSpy()};
    movieController = require('./../controllers/moviesController')(movie);

    describe("Get", function () {

        it('should call Movie.find function', function () {
            movieController.get(req, res);
            expect(movie.find).toHaveBeenCalled();
        });
    });

    describe("get by id", function () {
        it('should call Movie.findById function', function () {
            movieController.getById(req, res);
            expect(movie.findById).toHaveBeenCalled();
        });
    });
});