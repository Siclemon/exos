# distributeur de boisson v1

```
VARIABLES
    prix_cafe est un ENTIER
    argent_insere est un DECIMAL

DEBUT
    prix_cafe = 1
    AFFICHER "Le prix du café est de" prix_cafe " €. Veuillez payer."

    LIRE argent_insere

    SI argent_insere < prix_cafe
        AFFICHER "Solde insuffisant"
    SINON
        AFFICHER "Préparation du café en cours..."
        AFFICHER "Merci et bonne journée !"
    FIN SI
FIN
```

# exo 8

```js
VARIABLES
    prix_boisson_sélectionnée est un ENTIER
    boisson_sélectionnée est une Boisson(nom, type, prix, stock)
    argent_insere est un DECIMAL
    machine_disponible est un BOOLEEN
    stock_gobelets est un ENTIER
    stock_cafe est un DECIMAL
    stock_monnaie est un TABLEAU d'ENTIERS
    stock_boissons est un TABLEAU de Boissons(nom, type, prix, stock)
    boissons_disponibles est un TABLEAU de Boissons(nom, type prix, stock)

DEBUT

    machine_disponible = VRAI

    SI stock_gebelets = 0
        AFFICHER "Stock de gobelets vide"
        notifTechnicien("Stock de gobelets vide")
        machine_disponible = FAUX
    FIN SI

    SI gobeletCoince()
        AFFICHER "Gobelet coincé"
        notifTechnicien("Gobelet coincé")
        machine_disponible = FAUX
    FIN SI

    SI gobeletDejaPresent()
        AFFICHER "Gobelet déjà présent"
        machine_disponible = FAUX
    FIN SI

    SI gobeletCoince()
        AFFICHER "Gobelet coincé"
        notifTechnicien("Gobelet coincé")
        machine_disponible = FAUX
    FIN SI

    SI ecranTactileDysfonctionnel()
        machine_disponible = FAUX
    FIN SI

    SI reservoirMarcPlein()
        POUR i ALLANT DE 0 à longueur(stock_boissons)
            SI stock_boissons[i].type != "café"
                AJOUTER stock_boissons[i] À boissons_disponibles
            FIN SI
        FIN POUR
    FIN SI

    POUR boisson DANS boissons_disponibles
        SI boisson.stock <= 0
            RETIRER boisson DE boissons_disponibles
        FIN SI
    FIN POUR


    SI machine_disponible

        POUR boisson DANS boissons_disponibles
            AFFICHER boisson.nom boisson.prix "€"
        FIN POUR

        boisson_sélectionnée = sélectionDeBoisson()
        prix_boisson_sélectionnée = boisson_électionnée.prix
        
        AFFICHER "Le prix de " boisson_sélectionnée.nom " est de" prix_boisson_sélectionnée " €. Veuillez payer."

        LIRE argent_insere

        SI argent_insere < prix_boisson_sélectionnée
            AFFICHER "Solde insuffisant"
        SINON
            AFFICHER "Préparation du café en cours..."
            AFFICHER "Merci et bonne journée !"
        FIN SI
    FIN SI
FIN
```

```
FONCTION paiement(prix)
    
```
