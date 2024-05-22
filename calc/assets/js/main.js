function createCalculator() {
  return {
    display: document.querySelector('.display'),

    start() {
      this.clickButton();
    },
    mathAccount() {
      let account = this.display.value;

      try {
        account = eval(account);

        if(!account) {
          alert('Conta inválida!');
          return;
        }
        this.display.value = String(account);
      } catch(err) {
        alert('Conta inválida!');
        return;
      }
    },

    deleteNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clearDisplay() {
      this.display.value = '';
    },
    clickButton() {
      document.addEventListener('click',(e) => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.buttonToDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        
        if(el.classList.contains('btn-del')) {
          this.deleteNumber();
        }
        if(el.classList.contains('btn-eq')) {
          this.mathAccount();
        }
      });
    },
    buttonToDisplay(value) {
      this.display.value += value;
    },
  };
}

const calculator = createCalculator();
calculator.start();