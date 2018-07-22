/*
 * @Author: RocWong 
 * @Date: 2018-07-22 16:05:18 
 * @Last Modified by:   RocWong 
 * @Last Modified time: 2018-07-22 16:05:18 
 */

function myPromise(constructor) {
    let self = this;
    self.status = 'pending';
    self.value = undefined;// 定义状态为resolved的时候的状态
    self.reason = undefined;// 定义状态为rejected的时候的状态

    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'resolved';
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected';
        }
    }

    try {
        constructor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

myPromise.prototype.then = function (onFullfilled, onRejected) {
    let self = this;
    switch (self.status) {
        case 'resolved':
            onFullfilled(self.value);
            break;
        case 'rejected':
            onRejected(self.reason);
            break;
        default:
            break;
    }
}


// test code
var p = new myPromise(function(resolve,reject){resolve(1)});

p.then(function(x){console.log(x)})