const path = require('path');

exports.about = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/quem_somos.html'));
};
