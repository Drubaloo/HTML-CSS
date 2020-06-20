function getDrinkByProfession(param) {
    var lower = param.toLowerCase()
    switch (lower) {
        case "jabroni":
            return "Patron Tequila"
            break;
        case "school counselor":
            return "Anything with Alcohol"
            break;
        case "Ppogrammer":
            return "Hipster Craft Beer"
            break;
        case "bike gang member":
            return "Moonshine"
            break;
        case "politician":
            return "Your tax dolalrs"
            break;
        case "rapper":
            return "Cristal"
            break;
        case "anything else":
            return "Beer"
            break;

    }
}


getDrinkByProfession("bike ganG member")