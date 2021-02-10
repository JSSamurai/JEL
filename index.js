const { O_RDWR, O_CREAT } = require('constants');
const fs = require('fs');

class Log {
    #filepath = '/filepath';
    #contents = '';

    constructor(filepath) {
        if (typeof filepath !== 'string') {
            throw new TypeError('\n>> A type-error has occured...');
        }

        this.#filepath = filepath;

        this.regularExpression = /^[a-z|0-9]{4,20}(.)*\d\w$/gim;

        const fd = fs.openSync(filepath, O_RDWR | O_CREAT);
        const str = fs.readSync(fd);
    }

    printLog() {
        console.log();

        fs.readSync();

        return 124500;
    }
}

module.exports.class = Log;
