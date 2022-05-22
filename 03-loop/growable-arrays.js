var sports = ["cracket", "baseball", "skiing"]; //
sports.push("football");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "football") {
        console.log(sport + " is a great sport!");
    }
    else {
        console.log(sport);
    }
}
