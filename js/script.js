function train_ticket(){

    let km = prompt("Quanti km vuoi percorrere?");
    let eta = prompt("Quanti anni ha il passeggero?");

    km = parseInt(km);
    eta = parseInt(eta);

    while(isNaN(eta) || isNaN(km)){
        alert("Uno o più valori non sono corretti, reinseriscili");
        
        km = prompt("Quanti km vuoi percorrere?");
        eta = prompt("Quanti anni ha il passeggero?");

        km = parseInt(km);
        eta = parseInt(eta);
    }
    
    let price = (km * 0.21);
    if(eta < 18){
        price = (price * 0.8);
    }
    if(eta > 65){
        price = (price * 0.6);
    }

    price = price.toFixed(2);
    document.getElementById("price").innerText = `Il prezzo è ${price} €`;
}