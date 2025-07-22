function age() {
    const input = document.getElementById('yearOfBirth');
    const year = parseInt(input.value);

    if (isNaN(year)) {
        alert("Por favor ingresa un año válido.");
        return;
    }

    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - year;

    document.getElementById('age-result').textContent = `Tienes ${calculatedAge} años.`;

    document.querySelector('.block-result').style.visibility = 'visible';
}
