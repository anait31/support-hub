
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