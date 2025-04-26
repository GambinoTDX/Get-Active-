window.onload = function () {
let footScenic = ['Walk a forest trail after rain','Wander a historic center', 'Explore a coastal boardwalk at sunset', 'Walk a mountain meadow trail', 'Explore a quiet university campus on a weekend'];
let footRelaxing = ['Slowly walk through a Japanese garden', 'Leisurely loop around a quiet neighborhood at dusk', 'Walk barefoot along a sandy beach in the morning', 'Wander inside a large greenhouse/conservatory', 'Walk along a river path in the early morning'];
let footAdventurous = ['Hike up a rugged cliffside trail', 'Explore a dense rainforest path', 'Walk through ancient castle ruins', 'Follow a hidden waterfall trail', 'Climd to a mountaintop fire lookout'];
let footChallenging = ['Summit a steep mountain trail with loose rocks and switchbacks', 'Hike a multi-day backcountry route with elevation gain and river crossings', 'Climb a narrow ridge trail with steep drop-offs on both sides', 'Scramble up a rocky path to a high alpine pass', 'Trek through deep snow in a winter wilderness trail'];
let bikeScenic = ['Ride along a coastal bike path with ocean views and salty breezes', 'Cycle through a countryside road lined with vineyards and rolling hills', 'Pedal a lakeside trail with calm waters and reflections of the mountains', 'Bike through a forested path with dappled sunlight and birdsong', 'Cruise along a river trail that winds through meadows and quiet villages'];
let bikeRelaxing = ['Ride through a peaceful park with shaded paths and gentle breezes', 'Cycle along a quiet beach promenade with the sound of waves in the background', 'Pedal on a calm, tree-lined trail through a botanical garden', 'Bike around a serene lake with distant mountain views', 'Cruise through a charming neighborhood with cozy cafés and scenic streets'];
let bikeAdventurous = ['Ride on a mountain trail with steep descents and rugged terrain', 'Cycle along a cliffside path with dramatic drops and challenging curves', 'Bike through a dense forest trail with muddy sections and wild terrain', 'Pedal through desert dunes with loose sand and intense sun', 'Tackle a rocky trail with sharp turns, boulders, and river crossings'];
let bikeChallenging = ['Cycle up a steep incline with tight switchbacks and high elevation', 'Ride through a rugged mountain trail with loose rocks and technical descents', 'Pedal along a narrow, rocky path with sharp drops on either side', 'Bike through a muddy, uphill trail after heavy rain', 'Tackle a high-altitude trail with thin air and extreme gradients'];
let carScenic = ['Drive along a coastal highway with panoramic ocean views', 'Cruise through winding mountain roads with breathtaking vistas', 'Take a road trip through a lush forest with sunrays filtering through trees', 'Drive along a countryside route with endless fields and distant hills', 'Explore a desert road with vibrant sunsets and vast, open landscapes'];
let carRelaxing = ['Drive through a quiet lakeside road with soft waves lapping the shore', 'Cruise on a peaceful country road with gentle curves and scenic farmlands', 'Take a drive through a coastal town with charming streets and cozy vibes', 'Enjoy a slow drive through a quiet, tree-lined avenue in the autumn', 'Drive along a mountain pass with calming views and cool, fresh air'];
let carAdventurous = ['Drive on a rugged, unpaved off-road trail through rocky landscapes', 'Take a thrilling ride along winding mountain roads with sharp turns and cliffs', 'Drive through a remote desert route with challenging terrain and endless horizons', 'Navigate through a dense jungle trail with uneven roads and muddy patches', 'Cruise through snowy mountain roads with unpredictable weather and steep slopes'];
let carChallenging = ['Drive through winding, tight mountain roads with steep drops', 'Navigate through a snowstorm on an icy highway with low visibility', 'Take a long drive across a bumpy, gravel road with potholes and uneven surfaces', 'Drive through a flood-prone area with rising water levels and flooded streets', 'Cruise through a city’s rush-hour traffic with constant stop-and-go'];
let lists = [footScenic,footRelaxing,footAdventurous,footChallenging,bikeScenic,bikeRelaxing,bikeChallenging,bikeAdventurous,carScenic,carRelaxing,carChallenging,carAdventurous];


function generateChallenge() {
    let checkboxFoot = document.getElementById("checkboxFoot");
        let checkboxBike = document.getElementById("checkboxBicycle");
        let checkboxCar = document.getElementById("checkboxCar");
        let selectedActivities = [];
    let selectedVehicles = [];
     if (checkboxFoot.checked) {
            selectedActivities.push('Foot');
        }
        if (checkboxBike.checked) {
            selectedActivities.push('Bike');
        }
        if (checkboxCar.checked) {
            selectedActivities.push('Car');
        }

    if (selectedActivities.length<1 || selectedActivities.length>1) {
        alert('Please select exactly one vehicle type!');
        return;
    }

    if (checkboxScenic.checked) {
        selectedVehicles.push('Scenic');
    }
    if (checkboxRelaxing.checked) {
        selectedVehicles.push('Relaxing');
    }
    if (checkboxAdventurous.checked) {
        selectedVehicles.push('Adventurous');
    }
    if (checkboxChallenging.checked) {
        selectedVehicles.push('Challenging');
    }

if (selectedVehicles.length<1 || selectedVehicles.length>1) {
    alert('Please select exactly one activity type!');
    return;
} else {
    alert("Generating challenge... Press OK when ready");
}







    let random = Math.floor(Math.random()*footScenic.length);
    let actRan =  footScenic[random];
    if(checkboxScenic.checked) {
    if (checkboxFoot.checked) {
        if (footScenic.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * footScenic.length);
        activity = footScenic[random];
        footScenic.splice(random, 1); 
        document.getElementById("output").innerText = activity; 
        }
    } else if (checkboxBicycle.checked) {
        if (bikeScenic.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * bikeScenic.length);
        activity = bikeScenic[random];
        bikeScenic.splice(random, 1);
        document.getElementById("output").innerText = activity;
        }
    } else if (checkboxCar.checked) {
        if (carScenic.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * carScenic.length);
        activity = carScenic[random];
        carScenic.splice(random, 1);
        document.getElementById("output").innerText = activity;
        }
    }
} else if(checkboxRelaxing.checked) {
    
    if (checkboxFoot.checked) {
        if (footRelaxing.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * footRelaxing.length);
        activity = footRelaxing[random];
        footRelaxing.splice(random, 1);  
        document.getElementById("output").innerText = activity;
        }
    } else if (checkboxBicycle.checked) {
        if (bikeRelaxing.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * bikeRelaxing.length);
        activity = bikeRelaxing[random];
        bikeRelaxing.splice(random, 1);
        document.getElementById("output").innerText = activity;
        }
    } else if (checkboxCar.checked) {
        if (carRelaxing.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * carRelaxing.length);
        activity = carRelaxing[random];
        carRelaxing.splice(random, 1);
        document.getElementById("output").innerText = activity;
        }
    }
} else if(checkboxAdventurous.checked) {
    if (checkboxFoot.checked) {
        if (footAdventurous.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * footAdventurous.length);
        activity = footAdventurous[random];
        footAdventurous.splice(random, 1); 
        document.getElementById("output").innerText = activity; 
        }
    } else if (checkboxBicycle.checked) {
        if (bikeAdventurous.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * bikeAdventurous.length);
        activity = bikeAdventurous[random];
        bikeAdventurous.splice(random, 1);
        document.getElementById("output").innerText = activity;
        }
    } else if (checkboxCar.checked) {
        if (carAdventurous.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * carAdventurous.length);
        activity = carAdventurous[random];
        carAdventurous.splice(random, 1);
        document.getElementById("output").innerText = activity;
    }
}
} else if(checkboxChallenging.checked) {
    if (checkboxFoot.checked) {
        if (footChallenging.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * footChallenging.length);
        activity = footChallenging[random];
        footChallenging.splice(random, 1); 
        document.getElementById("output").innerText = activity; 
        }
    } else if (checkboxBicycle.checked) {
        if (bikeChallenging.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * bikeChallenging.length);
        activity = bikeChallenging[random];
        bikeChallenging.splice(random, 1);
        document.getElementById("output").innerText = activity;
        }
    } else if (checkboxCar.checked) {
        if (carChallenging.length == 0) {
            document.getElementById("output").innerText = "You have completed all challenges in this category!";
        }else {
        let random = Math.floor(Math.random() * carChallenging.length);
        activity = carChallenging[random];
        carChallenging.splice(random, 1);
        document.getElementById("output").innerText = activity;
        }
    }
}
}
document.getElementById("btn").addEventListener("click", generateChallenge);
}
