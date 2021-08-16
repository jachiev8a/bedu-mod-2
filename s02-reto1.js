var time = 22;
var greet;

if ((time > 0) && (time < 12)) {
    greet = "Good morning";
} else if ((time > 12) && (time < 20)) {
    greet = "Good afternoon";
} else if ((time >= 20) && (time <=24)) {
    greet = "Good evening";
}
else
    greet = "Invalid time";

console.log(greet)