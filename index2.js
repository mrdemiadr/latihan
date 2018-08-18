var x = [2,1,4,3,5];
var putar;
var temp;

temp = x[0];
for(putar = 1; putar <= x-1; putar++){
    x[putar-1] = x[putar];
}
x[putar-1] = temp;
for(putar=0;putar<=x-1;putar++){
 console.debug(x.length);
}

