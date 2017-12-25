module.exports = function(app, fs) {

	app.get('/', function(req,res) {
		res.render('index', {
			title : "my homepage",
			length : 5
		})
	});
}