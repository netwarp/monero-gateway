const express = require('express')
const router = express.Router()

var exec = require('child_process').exec;

router.post('/setup', async (req, res) => {

	const software = req.body.software

	var child = exec(`which ${software}`);
	child.stdout.on('data', function(data) {
	    console.log('stdout: ' + data);
	});
	child.stderr.on('data', function(data) {
	    console.log('stderr: ' + data);
	});
	child.on('close', function(code) {
	    console.log('closing code: ' + code);

	    if (code) 
	    	return res.json(false)
	    else
	    	return res.json(true)
	});
})

module.exports = router