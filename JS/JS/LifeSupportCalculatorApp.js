document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculate');
    const result = document.getElementById('result');

    const chicken = {
        small: 1,
        medium: 3,
        big: 5,
        xtralarge: 7,
    };

    const maximumAge = 80;

    function calculateSupply() {
        let ageInput = document.getElementById('age');
        let age = ageInput.value;

        if (!age || isNaN(age) || age <= 0) {
            result.innerHTML = '<p>Please enter a valid age.</p>';
            return;
        }

        let supplyType = document.getElementById('supplyType').value;

        let dailyChickenConsumption = chicken[supplyType];
        let totalChicken = dailyChickenConsumption * 365 * (maximumAge - age);

        result.innerHTML = `<p>Your estimated total chicken supply from age ${age} to ${maximumAge} for ${supplyType} option is: ${totalChicken} units</p>`;
    }

    calculateBtn.addEventListener('click', calculateSupply);
});
