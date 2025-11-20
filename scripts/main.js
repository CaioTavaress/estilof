


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector(".formulario-login")
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = "./agendar.html"
        })
    }
    const bnt_agendar = document.querySelector('.menu-agendar')
    if (bnt_agendar) {
        bnt_agendar.addEventListener('click', () => {
            window.location.href = './agendamentos.html'
        });
    }
    const btn_voltar = document.querySelector('.voltar')
    if (btn_voltar) {
        btn_voltar.addEventListener('click', () => {
            window.location.href = './agendar.html'
        });
    }
});



