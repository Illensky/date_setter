let result = document.getElementById("result")

let aujourdhui = new Date()
aujourdhui.setDate(5);
aujourdhui.setMonth(10);
aujourdhui.setFullYear(2019);
aujourdhui.setHours(23);
aujourdhui.setMinutes(59);
aujourdhui.setSeconds(35);
aujourdhui.setMilliseconds(200)


result.innerHTML =
    "Jour de la semaine : " + aujourdhui.getDay() + "<br>" +
    "Jour du mois : " + aujourdhui.getDate() + "<br>" +
    "mois en cours version JS : " + aujourdhui.getMonth() + "<br>" +
    "Mois en cours version humaine : " + (aujourdhui.getMonth() +1) + "<br>" +
    "Année au format 4 chiffres : " + aujourdhui.getFullYear() + "<br>" +
    "Année au format 2 chiffres : " + aujourdhui.getFullYear().toString().slice(2) + "<br>" +
    "Heure : " + aujourdhui.getHours() + "<br>" +
    "Heure avec un zéro devant si besoin : " + aujourdhui.getHours().toString().padStart(2, 0) + "<br>" +
    "Minutes : " + aujourdhui.getMinutes() + "<br>" +
    "Minutes avec un zéro devant si besoin : " + aujourdhui.getMinutes().toString().padStart(2, 0) + "<br>" +
    "Secondes : " + aujourdhui.getSeconds() + "<br>" +
    "Millisecondes : " + aujourdhui.getMilliseconds();