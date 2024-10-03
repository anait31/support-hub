
const appService = document.getElementById('application-service');
const techAdvise = document.getElementById('tech-advisor');
const digitEnterprise = document.getElementById('digital-enterprise');
const dataAnalize = document.getElementById('data-anatyze');
const itManagement = document.getElementById('it-manage');


function applicationService() {
    techAdvise.classList.add('hidden');
    appService.classList.remove('hidden');
    digitEnterprise.classList.add('hidden');
    dataAnalize.classList.add('hidden');
    itManagement.classList.add('hidden');
}

function techAdvisor() {
    techAdvise.classList.remove('hidden');
    appService.classList.add('hidden');
    digitEnterprise.classList.add('hidden');
    dataAnalize.classList.add('hidden');
    itManagement.classList.add('hidden');
}

function digitalEnterprise() {
    digitEnterprise.classList.remove('hidden');
    appService.classList.add('hidden');
    techAdvise.classList.add('hidden');
    dataAnalize.classList.add('hidden');
    itManagement.classList.add('hidden');
}

function dataAnatyze() {
    digitEnterprise.classList.add('hidden');
    appService.classList.add('hidden');
    techAdvise.classList.add('hidden');
    dataAnalize.classList.remove('hidden');
    itManagement.classList.add('hidden');
}

function itManage() {
    digitEnterprise.classList.add('hidden');
    appService.classList.add('hidden');
    techAdvise.classList.add('hidden');
    dataAnalize.classList.add('hidden');
    itManagement.classList.remove('hidden');
}

document.getElementById('form-submit').addEventListener('click', function() {
    const nameField = document.getElementById('name-field').value;
    const emailField = document.getElementById('email-field').value
    const numberField = document.getElementById('number-field').value
    const companyNameField = document.getElementById('company-name-field').value
    const textAreaField = document.getElementById('text-area-field').value

    if(!nameField || !emailField || !numberField || !companyNameField || !textAreaField) {
        alert('Please fillup the form')
        return
    }
    my_modal_5.showModal();

})


const reloadButton = document.getElementById('reload-button');
reloadButton.addEventListener('click', () => {
    window.location.href = "../index.html"
})