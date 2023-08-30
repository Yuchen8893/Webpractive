let set1 = [];
A = 10, B = 5, theta = Math.PI / 4;;
for (let i = -10000; i < 10001; i++) {
    a = (Math.PI / 10000) * i
    x = B * Math.cos(a)
    y = A * Math.sin(a)
    xx = Math.cos(theta) * x + Math.sin(theta) * y
    yy = Math.cos(theta) * y - Math.sin(theta) * x
    set1.push([xx, yy]);
};
// for (let i = 9999; i > -10001; i--) {
//     a = (Math.PI / 10000) * i
//     x = B * Math.cos(a)
//     y = A * Math.sin(a)
//     set1.push([x, -y]);
// };

let set2 = [];
A = 10, B = 5, theta = Math.PI / 4;
for (let i = -10000; i < 10001; i++) {
    a = (Math.PI / 10000) * i
    x = A * Math.cos(a)
    y = B * Math.sin(a)
    xx = Math.cos(theta) * x + Math.sin(theta) * y
    yy = Math.cos(theta) * y - Math.sin(theta) * x
    set2.push([xx, yy]);
};
// for (let i = 9999; i > -10001; i--) {
//     a = (Math.PI/ 10000) * i
//     x = A * Math.cos(a)
//     y = B * Math.sin(a)
//     xx=Math.cos(theta)*x+Math.sin(theta)*y
//     yy=Math.cos(theta)*y-Math.sin(theta)*x
//     set2.push([xx, -yy]);
// };


let set3 = [];
r = 10;
for (let i = -10000; i < 10001; i++) {
    a = (Math.PI / 10000) * i
    x = r * Math.cos(a)
    y = r * Math.sin(a)
    set3.push([x, y]);
};
for (let i = 9999; i > -10001; i--) {
    a = (Math.PI / 10000) * i
    x = r * Math.cos(a)
    y = r * Math.sin(a)
    set3.push([x, -y]);
};
