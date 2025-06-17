const bcrypt = require('bcrypt');
bcrypt.hash('admin123', 8).then(console.log);
