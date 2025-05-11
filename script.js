let ciphertextButton = document.getElementById('ciphertext-button');
let ciphertextOutput = document.getElementById('ciphertext-output');
let deciphertextButton = document.getElementById('deciphertext-button');
let deciphertextOutput = document.getElementById('deciphertext-output');

function cipher() {
    // Pobieramy wartość tekstu z textarea
    let inputText = document.getElementById('ciphertext').value;

    // Dzielimy tekst na tablicę znaków
    let charactersArray = inputText.split(''); 
    let textLength = charactersArray.length;

    // Zmienna przechowująca zaszyfrowany tekst
    let encryptedText = '';

    // Przechodzimy przez każdy znak w tablicy
    for (let i = 0; i < textLength; i++) {
        // Pobieramy kod ASCII bieżącego znaku
        let charCode = charactersArray[i].charCodeAt();

        // Przesuwamy znak o 3 pozycje
        let shiftedCharCode = charCode + 3;

        // Jeśli znak przekracza zakres dużych liter, przenosimy go na początek
        if (charCode >= 65 && charCode <= 90 && shiftedCharCode > 90) {
            shiftedCharCode = shiftedCharCode - 26;
        } 
        // Jeśli znak przekracza zakres małych liter, przenosimy go na początek
        else if (charCode >= 97 && charCode <= 122 && shiftedCharCode > 122) {
            shiftedCharCode = shiftedCharCode - 26;
        }

        // Dodajemy zaszyfrowany znak do wyniku
        encryptedText += String.fromCharCode(shiftedCharCode);
    }

    return encryptedText;
}

ciphertextButton.addEventListener('click', () => {
    // Pobieramy wynik szyfrowania i wyświetlamy go
    let result = cipher(); 
    ciphertextOutput.value = result;
});

function decipher() {
    // Pobieramy wartość tekstu z textarea
    let inputText = document.getElementById('deciphertext').value;

    // Dzielimy tekst na tablicę znaków
    let charactersArray = inputText.split(''); 
    let textLength = charactersArray.length;

    // Zmienna przechowująca zaszyfrowany tekst
    let encryptedText = '';

    // Przechodzimy przez każdy znak w tablicy
    for (let i = 0; i < textLength; i++) {
        // Pobieramy kod ASCII bieżącego znaku
        let charCode = charactersArray[i].charCodeAt();

        // Przesuwamy znak o 3 pozycje
        let shiftedCharCode = charCode -3;

        // Jeśli znak przekracza zakres dużych liter, przenosimy go na początek
        if (charCode >= 65 && charCode <= 90 && shiftedCharCode < 65) {
            shiftedCharCode = shiftedCharCode + 26;
        } 
        // Jeśli znak przekracza zakres małych liter, przenosimy go na początek
        else if (charCode >= 97 && charCode <= 122 && shiftedCharCode < 97) {
            shiftedCharCode = shiftedCharCode + 26;
        }

        // Dodajemy zaszyfrowany znak do wyniku
        encryptedText += String.fromCharCode(shiftedCharCode);
    }

    return encryptedText;
}

deciphertextButton.addEventListener('click', () => {
    // Pobieramy wynik szyfrowania i wyświetlamy go
    let result = decipher(); 
    deciphertextOutput.value = result;
});

