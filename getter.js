let result = document.getElementById("result")

let aujoudhui = new Date()

result.innerHTML =
    "Jour de la semaine : " + aujoudhui.getDay() + "<br>" +
    "Jour du mois : " + aujoudhui.getDate() + "<br>" +
    "mois en cours version JS : " + aujoudhui.getMonth() + "<br>" +
    "Mois en cours version humaine : " + (aujoudhui.getMonth() +1) + "<br>" +
    "Année au format 4 chiffres : " + aujoudhui.getFullYear() + "<br>" +
    "Année au format 2 chiffres : " + aujoudhui.getFullYear().toString().slice(2) + "<br>" +
    "Heure : " + aujoudhui.getHours() + "<br>" +
    "Heure avec un zéro devant si besoin : " + aujoudhui.getHours().toString().padStart(2, 0) + "<br>" +
    "Minutes : " + aujoudhui.getMinutes() + "<br>" +
    "Minutes avec un zéro devant si besoin : " + aujoudhui.getMinutes().toString().padStart(2, 0) + "<br>" +
    "Secondes : " + aujoudhui.getSeconds() + "<br>" +
    "Millisecondes : " + aujoudhui.getMilliseconds();