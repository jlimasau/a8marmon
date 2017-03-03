
/*
 * GET New Entry page.
 */

var chat = require('../chat.json');

exports.view = function(req, res){
  res.render('newEntry', chat);
};


exports.addMessage = function(req, res) {

	var message = req.body.message;
	var type = "answer";
	var style = "display:none";
	var num = req.body.num;

	var newChat = {
		message: message,
		type: type,
		style: style,
		num: num
	};

	chat.messages.push(newChat);
}

exports.addQuestion = function(req, res) {

	var message = req.body.message;
	var type = "question";
	var style = "display:none";
	var num = "3";

	var newChat = {
		message: message,
		type: type,
		style: style,
		num: num
	};

	chat.messages.push(newChat);
}

function projectClick(e){
	e.preventDefault();
} 


function sendMessage(e){
	e.preventDefault();

	var message = document.getElementbyId('#inputmessage').value;
	var type = "answer";
	var style = "display:none";

	var newChat = {
		message: message,
		type: type,
		style: style
	}

	chat.messages.push(newChat);
	res.redirect('/');
  	res.json(chat);
 	res.render('newEntry', chat);
} 