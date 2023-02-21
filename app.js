(function()
{
    let ekran = document.querySelector('.ekran');
    let dugmici = document.querySelectorAll('.btn');
    let obrisi = document.querySelector('.btn-obrisi');
    let jednako = document.querySelector('.btn-equal');




    dugmici.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            ekran.value+=value;
        })
    });


    jednako.addEventListener('click', function(e){
        if(ekran.value === ''){
            ekran.value= "Molim vas unesite broj";
        }else{
            let odgovor = eval(ekran.value);
            ekran.value = odgovor;
        }
    })

    obrisi.addEventListener('click', function(e){
        ekran.value="";
    })
})();