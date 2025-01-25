let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good morning madam")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon madam")
    }
    else{
        speak("Good evening madam")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript = event.results[currentIndex] && event.results[currentIndex][0]?.transcript;

    if (transcript) {
        content.innerText = transcript; // Display the transcript
        takeCommand(transcript.toLowerCase()); // Convert to lowercase and pass to takeCommand
    } else {
        console.error("Transcript is undefined or not available");
    }
};


   /* let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.tolowercase)
}*/
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    if(typeof message==="string"){
        btn.style.display="block"
        voice.style.display="none"
    }
    if(message.includes("hello")){
        speak("hello madam how can i help you")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant,created by anupama madam")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube..")
        try {
            window.open("https://www.youtube.com", "_blank");
        } catch (e) {
            console.error("Window.open failed, redirecting instead.");
            window.location.href = "https://www.youtube.com";
        }
        /*Window.open("https://www.youtube.com","_blank")*/
    }
    else if(message.includes("open google")){
        speak("opening google..")
        try {
            window.open("https://www.google.co.in", "_blank");
        } catch (e) {
            console.error("Window.open failed, redirecting instead.");
            window.location.href = "https://www.google.co.in";
        }
        /*Window.open("https://www.google.co.in/","_blank")*/
    }
    else if(message.includes("open facebook")){
        speak("opening facebook..")
        try {
            window.open("https://www.facebook.com", "_blank");
        } catch (e) {
            console.error("Window.open failed, redirecting instead.");
            window.location.href = "https://www.facebook.com";
        }
        /*Window.open("https://www.facebook.com/","_blank")*/
    }
    else if(message.includes("open chatgpt")){
        speak("opening chatgpt..")
        try {
            window.open("https://openai.com/index/chatgpt", "_blank");
        } catch (e) {
            console.error("Window.open failed, redirecting instead.");
            window.location.href = "https://openai.com/index/chatgpt";
        }
        /*Window.open("https://openai.com/index/chatgpt/","_blank")*/
    }
    else if(message.includes("open linkedln")){
        speak("opening linkedln..")
        try {
            window.open("https://www.linkedin.com/feed", "_blank");
        } catch (e) {
            console.error("Window.open failed, redirecting instead.");
            window.location.href = "https://www.linkedin.com/feed";
        }
        /*Window.open("https://www.linkedin.com/feed/","_blank")*/
    }
    else if(message.includes("open instagram")){
        speak("opening instagram..")
        try {
            window.open("https://www.instagram.com/accounts/login", "_blank");
        } catch (e) {
            console.error("Window.open failed, redirecting instead.");
            window.location.href = "https://www.instagram.com/accounts/login";
        }
        /*Window.open("https://www.instagram.com/accounts/login/","_blank")*/
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        try {
            window.open("calculator://", "_blank");
        } catch (e) {
            console.error("Window.open failed, redirecting instead.");
            window.location.href = "calculator://";
        }
        /*Window.open("calculator://")*/
    }
    /*else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,(hour:"numeric",minute:"numeric"))
        speak(time)
    }*/
    else{
        let finaltext="this is what i found in internet regarding"+message.replace("aurora","")
        speak(finaltext)
        try {
            window.open(`https://www.google.com/search?q=${message}`, "_blank");
        } catch (e) {
            console.error("Window.open failed, redirecting instead.");
            window.location.href = `https://www.google.com/search?q=${message}`;
        }
        /*window.open(`https://www.google.com/search?q=${message}`)*/
    }
}
