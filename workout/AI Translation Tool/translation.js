const inputText =
    document.getElementById("inputText");

const result =
    document.getElementById("result");

const language =
    document.getElementById("language");

const translateBtn =
    document.getElementById("translateBtn");

const swapBtn =
    document.getElementById("swapBtn");

const copyBtn =
    document.getElementById("copyBtn");

const voiceBtn =
    document.getElementById("voiceBtn");

const speakBtn =
    document.getElementById("speakBtn");



async function translateText() {

    
    const text = inputText.value.trim();

    
    const targetLanguage = language.value;


    
    if (text === "") {

        alert("Please enter some text.");

        return;
    }


    try {

        
        result.value = "Translating...";


        
        const encodedText =
            encodeURIComponent(text);


        
        const response = await fetch(

            `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=en|${targetLanguage}`

        );


        
        const data =
            await response.json();


        
        result.value =
            data.responseData.translatedText;

    }

    catch (error) {

        console.error(error);

        result.value = "";

        alert("Translation failed. Please try again.");

    }

}



function swapText() {

    const input =
        inputText.value;


    
    inputText.value =
        result.value;


    
    result.value =
        input;

}




async function copyText() {

    const text =
        result.value;


    
    if (text.trim() === "") {

        alert("No translation available.");

        return;
    }


    try {

        
        await navigator.clipboard.writeText(text);

        alert("Translation copied successfully!");

    }

    catch (error) {

        console.error(error);

        alert("Unable to copy text.");

    }

}



function startVoice() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "Voice recognition is not supported in this browser."
        );

        return;

    }


    const recognition =
        new SpeechRecognition();


    recognition.lang = "en-US";

    recognition.interimResults = true;

    recognition.continuous = false;


    recognition.onstart = function () {

        console.log("Listening...");

        voiceBtn.textContent = "Listening...";

    };


    recognition.onresult = function (event) {

        const spokenText =
            event.results[0][0].transcript;


        inputText.value =
            spokenText;

    };


    recognition.onerror = function (event) {

        console.log(
            "Voice error:",
            event.error
        );



        if (event.error === "no-speech") {

            alert(
                "No speech detected. Please click Voice Input and speak clearly."
            );

        }

        else if (event.error === "not-allowed") {

            alert(
                "Microphone permission is blocked. Please allow microphone access."
            );

        }

        else {

            alert(
                "Voice input error: " +
                event.error
            );

        }

    };



    recognition.onend = function () {

        voiceBtn.textContent =
            "Voice Input";

    };


    recognition.start();

}



function speakText() {

    const text = result.value.trim();


    if (text === "") {

        alert("No translation available.");

        return;
    }

    const languageCodes = {
        ml: "ml-IN",
        hi: "hi-IN",
        fr: "fr-FR",
        es: "es-ES",
        ar: "ar-SA",
        de: "de-DE",
        it: "it-IT",
        ja: "ja-JP",
        ko: "ko-KR"
    };

    const selectedLanguage = language.value;


    const speech = new SpeechSynthesisUtterance(text);


    speech.lang = languageCodes[selectedLanguage];

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

}


translateBtn.addEventListener(
    "click",
    translateText
);


swapBtn.addEventListener(
    "click",
    swapText
);


copyBtn.addEventListener(
    "click",
    copyText
);


voiceBtn.addEventListener(
    "click",
    startVoice
);


speakBtn.addEventListener(
    "click",
    speakText
);