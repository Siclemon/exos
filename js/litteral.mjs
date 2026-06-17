// Vous devez créer un objet littéral nommé  :  nosFormations
// qui contient les paires clé valeur suivante : 
// sachant que les valeurs seront stockés sous forme numérique :
// ABC_I : 24  (ABC Informatique) 
// ADRN : 8 (Agent de Dépannage et de Reconditionnement Numérique) ( niv3 CAP)
// TIP : 20      (Technicien(ne) Informatique de Proximité) (niv4)
// TRI : 7         ( Technicien(ne) Réseaux IP) ( niv4)
// TSSR: 22       (Technicien(ne) Supérieur(e) Systèmes et Réseaux)( niv5)
// AIS: 6    (Administrateur d’Infrastructures Sécurisées) (niv6)
// AEC: 5    (Automaticien(ne) d’Études et Conception) (niv5)
// DWWM: 21    (Développeur Web Web Mobile) (niv5)
// CDA : 23  (Concepteur Développeur d’Applications) (niv6)
// ISI : 4  (Ingénieur spécialité information – option Systèmes d’Information) (niv7)
// Vous devez ensuite trier l'objet littéral  "formationsInfo" par formation (clé) en fonction de leur effectifs stagiaires  de manière décroissante. ( De la formation à l'effectif le plus nombreux à l'effectif le moins nombreux ) 
// Définition de la méthode Sort() avec paramètres. ( pour info les chiffres sont fictifs mais vraissemblables). 

function main() {
    let nosFormations = {
        ABC_I:24,
        ADRN:8,
        TIP:20,
        TRI:7,
        TSSR:22,
        AIS:6,
        AEC:5,
        DWWM:21,
        CDA:23,
        ISI:4,
    };

    console.log(nosFormations);


    nosFormations = tri(nosFormations);

    console.log(nosFormations);
}

function tri(obj) {
    const tab = [];
    const ret = {};

    for (const element in obj) {
        tab.push([element, obj[element]]);
    }

    tab.sort((a,b) => b[1] - a[1]);

    for (const element of tab) {
        ret[element[0]] = element[1];
    }

    return ret;
}

main();