var n = 10;
var f0 = 0;
console.log(f0);

var f1 = 1;
console.log(f1);

for ( var i = 0; i < n; i++) {
  var fi = f1 - f0;
  console.log(fi);
  
  f0 = f1;
  f1 = fi;
} 
// Output => 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1
