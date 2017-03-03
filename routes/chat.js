var chat = require('../chat.json');

exports.addChat = function(req, res) {

	var message = req.query.message;
	var type = req.query.type;
	var icon = "file://null"

	var newChat = {
		message: message,
		type: type,
		icon: icon
	}

	chat.messages.push(newChat);
	res.redirect('/');
  	res.json(chat);
  	res.render('newEntry', chat)
}


