// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
//converts a JavaScript object or value to a JSON string, 
//optionally replacing values if a replacer function is specified or 
//optionally including only the specified properties if a replacer array is specified

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number'){
    return String(obj);
  } else if (obj === null){
    return 'null';
  } else if (typeof obj === 'boolean'){
    if (obj){
      return 'true';
    } else {
      return 'false';
    }
  } else if (typeof obj === 'string'){
    return "\""+obj+"\"";
  } else if (Array.isArray(obj)){
      return "[" + _.reduce(obj,function(memo,value){
          return memo.concat(stringifyJSON(value)); 
      },[]).join(",") + "]";
  } else if (_.isObject(obj)){
      return '{' + _.reduce(obj, function(memo,value,key){
        return (value instanceof Function || value === undefined) ? [] : memo.concat(stringifyJSON(key)+':'+stringifyJSON(value));
      },[]).join(',')+'}'
  } 
};