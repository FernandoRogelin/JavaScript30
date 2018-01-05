const inputs = document.querySelectorAll('.container input');

function Update () {
    document.documentElement.style.setProperty(`--${this.name}`, this.value + (this.dataset.sizing || ''));
}


inputs.forEach(input => input.addEventListener('change', Update));
inputs.forEach(input => input.addEventListener('mousemove', Update));