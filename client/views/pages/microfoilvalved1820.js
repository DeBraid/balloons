Template.smallmicrofoilcharges.helpers({
    allCharges: function () {
        return [
            { charges: "Add additional charges", chargesFr: "Ajoutez tous frais supplémentaires."},
            { charges: "Screen Charge: $100.00(A) per imprint and colour", chargesFr: "Frais de trame: 100,00$(A) par impression et couleur."},
            { charges: "Photo Screen Charge: $36.00(A) per imprint", chargesFr: "Frais de trame pour photo: 36,00$(A) par impression." },{ charges: "Second-Side print: (18” & 20”) $0.44(A) per balloon  ", chargesFr: "Deuxième côté imprimé: (18 po. et 20 po.) 0,44$(A) par ballon." }, 
            { charges: "Second-Side print: (36”) $3.00(A) per balloon", chargesFr: "Deuxième côté imprimé: (36 po.) 3,00$(A) par ballon. "},
            { charges: "Second-Side print (multi-colour): Min. 250 pieces.", chargesFr: "Deuxième côté imprimé: Min. 250 pièces."},
            { charges: "For same print second side: $0.50(A) per colour, per piece.", chargesFr: "Deuxième côté même impression: 0,50$(A) par couleur, par pièce."},
            { charges: "For different print second side: $0.60(A) per colour, per piece. See above for applicable screen charges.", chargesFr: "Deuxième côté différente impression: 0,60$(A) par couleur, par pièce. Frais de trame applicable. "},
            { charges: "Ink Blend: $90.00(A) – Mélange d’encre: 90,00$(A).", chargesFr: "Mélange d’encre: 90,00$(A)."},
            { charges: "Art charge: $50.00(A) per hour ", chargesFr: "Frais de conception graphique: 50,00$(A) de l’heure. "}
        ]     
    }
});


Template.microfoilvalved1820.helpers({
    settings: function () {
    return {
        showFilter: true,
        showNavigation: 'never',
        fields: [{
                  key: 'Product Description',
                    label: 'Product -- Price Per Balloon 4AB -- Description du produit',
                        fn: function (str, obj) {
                            var sortString = ("0000" + parseInt(str, 10)).slice(-4),
                                unit = 'inch',
                                size = str.split(unit),
                                myString = "" + size[0] + " " + unit + " " + size[1] + "",
                                french = obj["Product Description_fr"];

                            var html = "<p sortString=" + french + ">" + myString + "</p>" + 
                                        "<p>" + french + "</p>";
                            return Spacebars.SafeString(html);
                        }
                }, {
                    key: 'Number of Colours', 
                    label: '# Ink Colours - couleurs d\'encre',
                    fn: function (str) {
                        return parseInt(str)
                    }
                }, {
                    key: '50',
                    label: '50',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                }, {
                    key: '100',
                    label: '100',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                }, {
                    key: '250',
                    label: '250',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                },{
                    key: '500',
                    label: '500',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                }, {
                    key: '1000',
                    label: '1000',
                    fn : function (value) {
                        return value.length == undefined ? value.toFixed(2) : value;
                    }
                }
            ]
        }
    }
});