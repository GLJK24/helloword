var arr = [1,2,4,8,4];
function deleteEle(){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == 4){
			console.log(arr[i]);
			arr.splice(i,1);
		}
	}
}
var obj = {'name': 'lili','age': 10};
var obj1 = {'name': [1,2],'age': 10};
function deepCopy(p, c) {
	var c = c || {};
	for (var i in p) {
		if (typeof p[i] === 'object') {
			c[i] = (p[i].constructor === Array) ? [] : {};
			deepCopy(p[i], c[i]);
		} else {
			c[i] = p[i];
		}
	}
	return c;
}
function Copy(p, c) {
	var c = c || {};
	for (var i in p) {
		c[i] = p[i];
	}
	return c;
}
function clone(obj) {
    var o;
    switch (typeof obj) {
        case "undefined":
            break;
        case "string":
            o = obj + "";
            break;
        case "number":
            o = obj - 0;
            break;
        case "boolean":
            o = obj;
            break;
        case "object": // object 分为两种情况 对象（Object）或数组（Array）
            if (obj === null) {
                o = null;
            } else {
            	// Object.prototype.toString() => "[Object Object]"
            	// Object.prototype.toString.call(obj) => "[Object Object]"或者 "[Object Array]"
                if (Object.prototype.toString.call(obj).slice(8, -1) === "Array") {
                    o = [];
                    for (var i = 0; i < obj.length; i++) {
                        o.push(clone(obj[i]));
                    }
                } else {
                    o = {};
                    for (var k in obj) {
                        o[k] = clone(obj[k]);
                    }
                }
            }
            break;
        default:
            o = obj;
            break;
    }
    return o;
}
function count(){
	var str = "adfhjfhvjfqasfomasdec";
	var obj = {};
	for (var i = 0;i < str.length; i++){
		var e = str[i];
		if (obj[e] /*&& obj[e].ele == e*/) {
			obj[e].count = ++ obj[e].count;
		} else {
			obj[e] = {};
			/*obj[e].ele = e;*/
			obj[e].count = 1;
		}
	}
	console.log(obj);
}