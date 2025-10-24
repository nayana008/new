const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let expression = '';

function updateDisplay() {
  display.textContent = expression || '0';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const value = button.dataset.value;

    if (action === 'clear') {
      expression = '';
      updateDisplay();
      return;
    }

    if (action === 'backspace') {
      expression = expression.slice(0, -1);
      updateDisplay();
      return;
    }

    if (action === 'equals') {
      try {
        expression = String(Function(`return ${expression}`)());
      } catch {
        expression = 'Error';
      }
      updateDisplay();
      return;
    }

    if (value) {
      expression += value;
      updateDisplay();
    }
  });
});

updateDisplay();
