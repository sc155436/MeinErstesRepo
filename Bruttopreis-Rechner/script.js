const frmBruttopreisrechner = window.document.bruttopreisrechner;
const inpMwst = frmBruttopreisrechner.mwst;
const inpNettopreis = frmBruttopreisrechner.nettopreis;



const btnBerechnen = frmBruttopreisrechner.berechnen;
const ausgabe = document.querySelector('#id-ausgabe')

btnBerechnen.addEventListener("click", fBruttoPreisBerechnen);

function fBruttoPreisBerechnen(event){
    event.preventDefault();
    const nettoPreis = parseFloat(inpNettopreis.value);
    const mwst = parseFloat(inpMwst.value);
    ausgabe.innerHTML = (1+mwst/100)*nettoPreis;
}
