const shout = document.querySelector(".shout");
const whisper = document.querySelector(".whisper");
const whisperText = document.querySelector(".whisper-text");

const inputTextAlertShout = document.querySelector(".text-alert-shout");
const buttonAlertShout = document.querySelector(".button-alert-shout");

const buttonSmallWhisper = document.querySelector(".button-small-whisper");
const inputTextSmallWhisper = document.querySelector(".text-small-whisper");
const textReplaceSmallWhisper = document.querySelector(".text-replace-small-whisper");

const randomNumber = document.querySelector(".random-number");
const replaceRandomNumber = document.querySelector(".replace-random-number");


const randomName = document.querySelector(".random-name");
const replaceRandomName = document.querySelector(".replace-random-name");

shout.addEventListener("click", () => {
    alert("LOUD NOISES");
})

whisper.addEventListener("click", () => {
    whisperText.innerHTML = `quiet noises`;
})

buttonAlertShout.addEventListener("click", () => {
    const textAlertShout = (inputTextAlertShout.value).toUpperCase();
    alert(`${textAlertShout}`);
})

buttonSmallWhisper.addEventListener("click", () => {
    const textSmallWhisper = inputTextSmallWhisper.value;
    textReplaceSmallWhisper.innerHTML = `${textSmallWhisper}`;

})

randomNumber.addEventListener("click", () => {
    const randomNumberOptions = Math.ceil(Math.random() * 10);
    replaceRandomNumber.innerHTML = randomNumberOptions;
})

randomName.addEventListener("click", () => {
    const nameArray = ["Shweta", "Greg", "Lewis", "Vicky", "Gareth", "James", "Cian", "Jordan", "Jake", "Ollie"];
    const randomNameFromArray = nameArray[Math.floor(Math.random() * nameArray.length)];
    console.log(randomNameFromArray);
    replaceRandomName.innerHTML = randomNameFromArray;

})