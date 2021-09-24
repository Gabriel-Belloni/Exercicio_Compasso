
var x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var aux1 =0;
var aux2 =0;
var media=0
for(var i =1; i <= x.length; i++){
    if(i % 2 ==0){
     aux1= aux1 +1;
     aux2 =aux2 +i;
    }
}

media= aux2/aux1;

console.log(media)