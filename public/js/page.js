function loadProcess(){
    let goBack = document.querySelector('.goBack')
    let process = document.querySelector('.process')
    let msg = document.querySelector('.inactive')
    let spinner = document.querySelector('.spinner')

    setTimeout(() => {
        process.classList.add('inactive')
        spinner.classList.add('inactive')
        msg.classList.remove('inactive')
        goBack.classList.remove('inactive')
        goBack.classList.add('activeBtn')
    }, 3000);
}