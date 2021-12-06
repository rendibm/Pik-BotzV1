let handler = function (m) {
	this.sendContact(m.chat, '6283822205585', 'Owner PikBot :)', m)
}

handler.customPrefix = ['🍭Owner opik'] 
handler.command = new RegExp

module.exports = handler
