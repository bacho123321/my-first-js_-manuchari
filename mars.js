function marsTrip() {
    let monthDistance= 7; 
    let distanceWeek = monthDistance * 4;
    let distanceDay = monthDistance *30;

    return `ადამიანს მარსამდე მისასვლელად სჭირდება: ${monthDistance} თვე, ან ${distanceWeek} კვირა, ან ${distanceDay} დღე`;
}


console.log(marsTrip());
