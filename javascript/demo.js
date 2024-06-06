function distributeDrink() {
    const choice = document.getElementById ("demo").value;

    let drink;
    switch(choice) {
        case "1":
            drink = "fristi";
            break;
            case "2":
                drink = "orangina";
                break;
                case "3":
                    drink = "coca";

                break;
            case "4":
        drink = "7up"
        break;
        case "5":
            drink = "pepsi";
            break;
            case "6":
                drink = "icetea";
                break;

        default:
            document.getElementById("resultats").innerHTML = "veuillez slelectionner un numero de boisson valide entre 1 et 6";
            return;
    }
    document.getElementById("resultat").innerHTML = drink
}
