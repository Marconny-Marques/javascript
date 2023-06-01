function Verificar() {
   var data= new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.querySelector('div#res')
     if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
     } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        res.innerHTML =  `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem' 
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src ,foto-bebe-m.png')
            } else if (idade >=10 && idade < 21) {
                //jovem 
                img.setAttribute ('src,foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src,foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src,foto-idoso-m.png')
            } 
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src, foto-bebe-f.png')
            } else if (idade >=10 && idade < 21) {
                //jovem 
                img.setAttribute('src, foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src, foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src, foto-idoso-d-f.png')
            } 
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
        res.appendChild(img)
    } 

}