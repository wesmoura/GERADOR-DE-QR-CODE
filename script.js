const wrapper = document.querySelector(".card"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = "Gerando QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Gerar QR Code";
        wrapper.querySelector(".qr-code").style.opacity = 1;
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.querySelector(".qr-code").style.opacity = 0;
    }
});
