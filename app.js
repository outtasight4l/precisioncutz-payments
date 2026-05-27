let value = "0.00";
const stripe = Stripe("YOUR_PUBLISHABLE_KEY");

/* DISPLAY */
function updateDisplay() {
document.getElementById("amount").innerText = "$" + value;
}

function press(n) {
if(value==="0.00") value="";
value += n;
format();
}

function dot() {
if(!value.includes(".")) value+=".";
format();
}

function clearLast() {
value = value.slice(0,-1);
if(value==="") value="0.00";
format();
}

function format() {
let num = parseFloat(value);
if(isNaN(num)) num=0;
value = num.toFixed(2);
updateDisplay();
}

/* PAYMENTS */
async function payMoney() {
const res = await fetch("https://YOUR-BACKEND-URL/create-payment",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({amount:parseFloat(value)*100})
});
const data = await res.json();
stripe.redirectToCheckout({sessionId:data.id});
}

function requestMoney(){
alert("Request $" + value);
}

/* AI */
function openAI(){
document.getElementById("chatModal").style.display="flex";
}

function closeAI(){
document.getElementById("chatModal").style.display="none";
}

function addMessage(t,c){
let d=document.createElement("div");
d.innerText=t;
d.style.color=c==="user"?"#00ff99":"white";
document.getElementById("chatMessages").appendChild(d);
}

async function sendMessage(){
let input=document.getElementById("userInput");
let text=input.value;
if(!text)return;

addMessage("You: "+text,"user");
input.value="";

let res=await fetch("https://api.openai.com/v1/chat/completions",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},
body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{role:"system",content:"You are a lawn pricing assistant."},
{role:"user",content:text}
]
})
});

let data=await res.json();
addMessage("AI: "+data.choices[0].message.content,"ai");
}

/* QR */
let scanner;

function openQR(){
document.getElementById("qrModal").style.display="flex";

scanner=new Html5Qrcode("qr-reader");
scanner.start(
{facingMode:"environment"},
{fps:10,qrbox:250},
(text)=>{
alert("QR: "+text);
scanner.stop();
closeQR();
}
);
}

function closeQR(){
document.getElementById("qrModal").style.display="none";
if(scanner) scanner.stop();
}
