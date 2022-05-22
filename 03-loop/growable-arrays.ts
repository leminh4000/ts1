let sports: string[] = ["cracket", "baseball", "skiing"]; //
sports.push("football");
for (let sport of sports) {
    if (sport == "football") {
        console.log(sport + " is a great sport!");
    } else {
        console.log(sport);
    }
}