const languages = [
    {english: 'Welcome'},
    {czech: 'Vitejte'},
    {danish: 'Velkomst'},
    {dutch: 'Welkom'},
    {estonian: 'Tere tulemast'},
    {finnish: 'Tervetuloa'},
    {flemish: 'Welgekomen'},
    {french: 'Bienvenue'},
    {german: 'Willkommen'},
    {irish: 'Failte'},
    {italian: 'Benvenuto'},
    {latvian: 'Gaidits'},
    {lithuanian: 'Laukiamas'},
    {polish: 'Witamy'},
    {spanish: 'Bienvenido'},
    {swedish: 'Valkommen'},
    {welsh: 'Croeso'}
]

console.log(languages[0])
function greet(language) {
    for (let i = 0; i < languages.length; i++) {
        
        if (language = languages[i][0]) {
            return language
        } continue
    }

}

greet("french")