let displayElement = document.getElementById('display');
let currentInput = '';
let openBracketCount = 0;

// Hiển thị nội dung trên màn hình
function updateDisplay(value) {
    displayElement.textContent = value || '0';
}

// Thêm số
function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Thêm toán tử
function appendOperator(operator) {
    if (currentInput !== '') {
        currentInput += operator;
        updateDisplay(currentInput);
    }
}

// Xóa toàn bộ
function clearDisplay() {
    currentInput = '';
    openBracketCount = 0;
    updateDisplay('0');
}

// Xóa ký tự cuối cùng
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}

// Thêm ngoặc đơn ()
function toggleBracket() {
    if (openBracketCount > 0 && (currentInput.slice(-1).match(/[0-9)]/))) {
        currentInput += ')';
        openBracketCount--;
    } else {
        currentInput += '(';
        openBracketCount++;
    }
    updateDisplay(currentInput);
}

// Tính toán kết quả
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        openBracketCount = 0; // Reset lại đếm ngoặc
        updateDisplay(currentInput);
    } catch {
        updateDisplay('Error');
        currentInput = '';
    }
}
