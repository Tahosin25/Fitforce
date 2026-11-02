/* ========================================
   FITFORCE - FITNESS CALCULATORS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initBMICalculator();
    initCalorieCalculator();
});

function initBMICalculator() {
    const btn = document.getElementById('calc-bmi');
    const resultEl = document.getElementById('bmi-result');

    btn.addEventListener('click', () => {
        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const height = parseFloat(document.getElementById('bmi-height').value);

        if (!weight || !height || weight <= 0 || height <= 0) {
            showResult(resultEl, 'Please enter valid values', 'error');
            return;
        }

        const heightM = height / 100;
        const bmi = (weight / (heightM * heightM)).toFixed(1);
        const category = getBMICategory(bmi);

        showResult(resultEl, `BMI: ${bmi} - ${category}`, 'success');
    });
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
}

function initCalorieCalculator() {
    const btn = document.getElementById('calc-calorie');
    const resultEl = document.getElementById('calorie-result');

    btn.addEventListener('click', () => {
        const weight = parseFloat(document.getElementById('cal-weight').value);
        const height = parseFloat(document.getElementById('cal-height').value);
        const age = parseFloat(document.getElementById('cal-age').value);
        const gender = document.getElementById('cal-gender').value;
        const activity = parseFloat(document.getElementById('cal-activity').value);

        if (!weight || !height || !age || weight <= 0 || height <= 0 || age <= 0) {
            showResult(resultEl, 'Please enter valid values', 'error');
            return;
        }

        // Mifflin-St Jeor Equation
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        const tdee = (bmr * activity).toFixed(0);

        showResult(resultEl, `Daily calories: ${tdee} kcal`, 'success');
    });
}

function showResult(element, message, type) {
    element.textContent = message;
    element.className = 'calc-result show';
    if (type === 'error') {
        element.style.color = 'var(--error)';
    } else {
        element.style.color = 'var(--primary-color)';
    }
}