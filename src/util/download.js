 const stream = require('stream');

module.exports = (file, res, fileName) => {
    const content  = Buffer.from(file, "base64");
    const readStream = new stream.PassThrough();

    readStream.end(content);

    res.set('Content-disposition', 'attachment; filename=' + fileName);
    res.set('Content-Type', 'application/vnd.ms-excel');

    readStream.pipe(res);
}