///////DataTypes/////
String  "dgrr" "4645" "true" 'fgfg' '456'
Number  47698 946940764907 47845.5867985
Boolean true/false

Es => Ecma Script 
Es5
Es6
EsNext

/////////////
Es5
////////

var a = "dgd"
var b = 678467
var c = true
var a = "dgd"
undefined
typeof(a)
"string"
var b = 678467
var c = true
undefined
typeof(b)
"number"
typeof(c)
"boolean"

//Es6////



var a = 10
var b = 322

var a  ///declare
var b
a =10  /// assignment
b =322


a =10
jxnvk
lkvvsdlknv
lkvvsdlknv
var a;



var => Redeclare and reassign
let => cannot Redeclare  but can reassign
const => cannot Redeclare nor reassign


var a = 10
var b = 20
a+b
30
a-b
-10
a*b
200
a/b
0.5
a%b


4%2
4%3
1
4%2
0
4%3
1
4%5
4
100%101
100

//////
var a = "hii"
var b = " React"

String+String = string
String+number = string
number+string = string
number+number= number

10+"10"+10
"101010"
"10"+10+10
"101010"
10+10+"10"
"2010"

10+"10"+10-1
101009
"10"+10+10-1
101009
10+10+"10"-1
2009


var a = "hii"
undefined
var b = "bie"
undefined
a+b
"hiibie"
a-b
NaN
a*b
NaN
a/b
NaN

var a = '5'
undefined
var b = '4'
undefined
a+b
"54"
a-b
1
a*b
20
a/b
1.25
var v = 'a5'
undefined
v-a
NaN



/////////Function////////
var a = 10
var b = 20
a+b
30

////Es5////
function add(a,b){
    return a+b
}
undefined
add(a,b)
"54"
add(1,3)
4
add("hii","hey")
"hiihey"

////Es6/////
const add = (a,b) => { return a+b }


///////Array////
var a = ['q','v','v']
var b = [2,3,5,62,45]
var c = [1,'f' ,5,"dd",true,54,"dg"]

/////////Map/Filter////////
var c = [1,'f' ,5,"dd",true,54,"dg"]
c[0]
c[0]
1
c[4]
true
c.length
7

1 == true
true
0 == false
true

for(i=0;i<c.length;i++){
    console.log(c[i])
}

var a = [1,2,3,4,5]
a.map((data) => { return data})

a.map((data) => { return data*2})
[2,4,6,8,10]
map always return same length of arrray

var b = [30,12,45,21,36,43]
var out = b.filter((data) => {return data>30})
[45, 36, 43]
filter may return same length of arrray or diff length
filter return those value froo which condition is true

var b = [30,12,45,21,36,43]
b.map((data) => {return data>30})
(6) [false, false, true, false, true, true]


var a = [0,1,2,3]
a.map((data) => {return data*2})
[0, 2, 4, 6]

a.filter((data) => {return data*2})
[1, 2, 3]


map use to peerform operation 
filter use for condition

var a = [3,5,7,8,2,6,7,1]
undefined
a.indexOf(3)
0
a.indexOf(7)
2
a.indexOf(1)
7
a.indexOf(0)
-1
a.indexOf(9)
-1
a.indexOf(10)
-1


function loop(userinput){
    for(i=0;i<userinput;i++){
        console.log(i)
    }
}
loop(5)
VM82:3 0
VM82:3 1
VM82:3 2
VM82:3 3
VM82:3 4

function * loop(userinput){
    for(i=0;i<userinput;i++){
       yield i
    }
}

loop(5)
loop {<suspended>}
var data = loop(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}
data.next()
{value: undefined, done: true}