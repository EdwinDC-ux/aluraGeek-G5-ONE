function inputFocus (event) {
    const labelId = event.target.id.replace('input', 'label');
    const labelElement = document.getElementById(labelId);
    labelElement.classList.remove('inicial','out');
    labelElement.classList.add('in');
}

function inputBlur (event) {
    if (event.target.value == '') {
        const labelId = event.target.id.replace('input', 'label');
        const labelElement = document.getElementById(labelId);
        labelElement.classList.remove('in');
        labelElement.classList.add('out');
    }
}

const inputs = document.querySelectorAll('.formulario__input');

inputs.forEach(input => {
    input.addEventListener('focus', inputFocus);
    input.addEventListener('blur', inputBlur);
});

document.getElementById('input__mensaje').addEventListener('keydown', () => {
    let height = document.getElementById('input__mensaje').scrollHeight+'px';
    document.getElementById('input__mensaje').style.height = height;
});