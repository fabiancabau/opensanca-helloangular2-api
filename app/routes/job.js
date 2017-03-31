module.exports = function(app) {

	var Job = require('../models/job');

	/* GET all users */
	app.get('/jobs', function(req, res) {
		Job.find({}).exec(function(err, jobs) {
			if(err) {
				res.status(500).json(err);
			}
			res.json(jobs);
		})
	})

	/* GET byId user */
	app.get('/jobs/:id', function(req, res) {
		Job.findById(req.params.id).exec(function(err, job) {
			if(err) {
				res.status(500).json(err);
			}
			res.json(job);
		})
	})


	app.post('/jobs', function(req, res) {
		var newJob = new Job(req.body);
		newJob.save(function(err, jobs) {
			if(err) {
				res.status(500).json(err);
			}
			res.json(jobs);
		})
	})




}
