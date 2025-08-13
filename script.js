/*function GerarQRCode(){ 
    var inputUsuario = document.querySelector('input').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=';
    var conteudoQRCode = GoogleChartAPI + inputUsuario;
    document.querySelector('#QRCodeImage').src = conteudoQRCode;
    /*qrImg.src = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl= ';
}*/

const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generateBtn.addEventListener('click',() => {
    
    let qrValue = qrInput.value;
    
    if(!qrValue){
    
        alert('\n\n       Digite um texto ou uma URL para gera o QRCode \n\n')
        return;
    }
    generateBtn.innerText = "Gerando um Qr Code...";    
    qrImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;    
    qrImg.addEventListener('load', () => {
        generateBtn.innerText = "Gerar Qr Code";
        container.classList.add('active');
    });
});

qrInput.addEventListener('keyup', () =>{
    if(!qrInput.value ){
        container.classList.remove('active');
    };
});
