function generateId() {
	return require('uuid/v1')();
}

module.exports = {generateId};
