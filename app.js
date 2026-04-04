(function(){
  var root = document.documentElement;
  var btn = document.querySelector("[data-theme-toggle]");
  var mode = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  root.setAttribute("data-theme", mode);
  if(btn) btn.addEventListener("click", function(){
    mode = mode==="dark" ? "light" : "dark";
    root.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  });
  var hdr = document.getElementById("header");
  var mob = document.getElementById("mobBtn");
  if(mob) mob.addEventListener("click", function(){
    var o = hdr.classList.toggle("open");
    mob.setAttribute("aria-expanded", o ? "true" : "false");
  });
  document.querySelectorAll(".nav-panel a").forEach(function(a){
    a.addEventListener("click", function(){ hdr.classList.remove("open"); });
  });
})();

function switchTab(id, btn) {
  document.querySelectorAll(".tab-content").forEach(function(t){ t.classList.remove("active"); });
  document.querySelectorAll(".tab-btn").forEach(function(b){ b.classList.remove("active"); });
  document.getElementById("tab-" + id).classList.add("active");
  btn.classList.add("active");
}

function updateCountdown() {
  var target = new Date("2026-04-12T10:00:00");
  var diff = target - new Date();
  if(diff <= 0){ var c=document.getElementById("countdown"); if(c) c.style.display="none"; return; }
  document.getElementById("cd-days").textContent = Math.floor(diff/86400000);
  document.getElementById("cd-hours").textContent = String(Math.floor((diff%86400000)/3600000)).padStart(2,"0");
  document.getElementById("cd-mins").textContent = String(Math.floor((diff%3600000)/60000)).padStart(2,"0");
  document.getElementById("cd-secs").textContent = String(Math.floor((diff%60000)/1000)).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  var nome = document.getElementById("cNome").value.trim();
  var email = document.getElementById("cEmail").value.trim();
  var msg = document.getElementById("cMsg").value.trim();
  if(!nome || !msg){ alert("Compila nome e messaggio."); return; }
  var testo = encodeURIComponent("Ciao Stefano, sono " + nome + (email ? " (" + email + ")" : "") + ".\n\n" + msg);
  window.open("https://wa.me/393423033404?text=" + testo, "_blank");
});

var C = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663319415429/";
function sm(src,alt,name){ return '<div class="bro-staff-member"><img class="bro-staff-avatar" src="'+src+'" alt="'+alt+'"/><span class="bro-staff-name">'+name+'</span></div>'; }
var sStefano=sm(C+"IGIxErTLntRsDXru.jpeg","Stefano","Stefano Balducci");
var sPaolo=sm(C+"WLrEFZfmGncoYZzr.jpeg","Paolo","Paolo Bardi");
var sMiretta=sm(C+"zKVEkBDPGHkktEvd.jpeg","Miretta","Miretta Frediani");
var sBase=sStefano+sPaolo+sMiretta;
var sFederica=sm("./federica.jpg","Federica","Federica");
var sCarmen=sm("./img-carmen.jpg","Carmen","Carmen");
var sMarzia=sm("./img-marzia.jpg","Marzia","Marzia");
var sMatilde=sm("./img-matilde.jpg","Matilde","Matilde");

var descIO="<strong>IO SONO IL MIO MAESTRO</strong> Dedica a te stesso una giornata in esclusiva e riscopri la tua essenza. Le sedute di guarigione quantica agiscono sui tuoi tre Corpi: mentale, fisico e spirituale.";
var descLU="<strong>Il Risveglio dell'Essenza</strong> Un invito profondo a una giornata di trasformazione. <strong>La Danza dei Sette Veli</strong> I sette veli simboleggiano le paure legate ai sette chakra.";

var broData={
  firenze:{city:"Firenze Quantica",title:"Guarigione quantica di gruppo",
    meta:"<strong>Domenica 12 Aprile 2026 - 10:00-18:00</strong><br>Circolo La Loggetta, Via Aretina 301, Firenze (FI)",
    program:["Tecniche di guarigione quantica","Trasmutazione emozionale","Connessione con il se superiore","Pratiche sincronizzate","Meditazioni guidate","Pasto in condivisione"],
    desc:descIO,staff:sBase,
    wa:"Ciao%20Stefano%2C%20vorrei%20informazioni%20su%20Firenze%20Quantica",
    pdf:"./brochure-firenze-quantica.pdf"},
  lucca:{city:"Lucca Quantica",title:"Danza dei 7 Veli",
    meta:"<strong>Domenica 19 Aprile 2026 - 10:00-18:00</strong><br>Via Ludovica 1658, Sesto di Moriano, Lucca (LU)",
    program:["Guarigione quantica","Danza libera - 7 veli","Meditazione guidata","Pratiche quantiche","Riequilibrio chakra","Pasto in condivisione"],
    desc:descLU,staff:sBase+sFederica,
    wa:"Ciao%20Stefano%2C%20vorrei%20informazioni%20su%20Lucca%20Quantica",
    pdf:"./brochure-lucca-quantica.pdf"},
  comeana:{city:"Comeana - Prato",title:"Connessione con le Guide Spirituali",
    meta:"<strong>Domenica 17 Maggio 2026 - 10:00-18:00</strong><br>Villa Macia, Via Macia 102, Comeana (PO)",
    program:["Riconoscere le Guide","Stabilire il contatto","Protezione e discernimento","Meditazione di connessione","Scrittura automatica","Pendolo"],
    desc:"",staff:sStefano+sMarzia+sCarmen,
    wa:"Ciao%20Stefano%2C%20vorrei%20informazioni%20sulla%20Connessione%20Guide",
    pdf:"./brochure-guide-spirituali.pdf"},
  vada:{city:"Vada - Livorno",title:"Percorso di Crescita - 1 Modulo",
    meta:"<strong>Sab 23 - Dom 24 Maggio 2026</strong><br>ASD Balliamo, Via Lombardia, Vada (LI)",
    program:["Apertura del cerchio","Meditazioni","Pratiche energetiche","Channeling","Cena condivisa","Theta-healing - Pranoterapia - Reiki","Cristalli - Tarocchi - Registri Akashici"],
    desc:"",staff:sStefano+sCarmen+sMarzia+sMatilde,
    wa:"Ciao%20Stefano%2C%20vorrei%20informazioni%20sul%201%20Modulo%20a%20Vada",
    pdf:"./brochure-2modulo-vada.pdf"},
  vicenza:{city:"Vicenza Quantica",title:"Guarigione quantica di gruppo",
    meta:"<strong>Domenica 31 Maggio 2026 - 10:00-18:00</strong><br>Strada di Saviabona 328, Vicenza (VI)",
    program:["Tecniche di guarigione quantica","Trasmutazione emozionale","Connessione con il se superiore","Meditazioni guidate","Pranzo condiviso"],
    desc:descIO,staff:sBase,
    wa:"Ciao%20Stefano%2C%20vorrei%20informazioni%20su%20Vicenza%20Quantica",
    pdf:"./brochure-vicenza-quantica.pdf"},
  piacenza:{city:"Piacenza Quantica",title:"Guarigione quantica di gruppo",
    meta:"<strong>Sabato 30 Maggio 2026 - 10:00-18:00</strong><br>Il Soffio Vitale, Piacenza (PC)",
    program:["Tecniche di guarigione quantica","Trasmutazione emozionale","Connessione con il se superiore","Pratiche sincronizzate","Meditazioni guidate"],
    desc:descIO,staff:sBase,
    wa:"Ciao%20Stefano%2C%20vorrei%20informazioni%20su%20Piacenza%20Quantica",
    pdf:"./brochure-piacenza-quantica.pdf"}
};

function openBro(id){
  var d=broData[id]; if(!d) return;
  document.getElementById("broCity").textContent=d.city;
  document.getElementById("broTitle").textContent=d.title;
  document.getElementById("broMeta").innerHTML=d.meta;
  document.getElementById("broProgram").innerHTML=d.program.map(function(i){ return "<li>"+i+"</li>"; }).join("");
  document.getElementById("broStaff").innerHTML=d.staff;
  document.getElementById("broWa").href="https://wa.me/393423033404?text="+d.wa;
  document.getElementById("broPdf").href=d.pdf;
  var dw=document.getElementById("broDescWrap");
  if(d.desc){ document.getElementById("broDesc").innerHTML=d.desc; dw.style.display="block"; }
  else{ dw.style.display="none"; }
  document.getElementById("broOverlay").classList.add("open");
  document.body.style.overflow="hidden";
}

function closeBro(){
  document.getElementById("broOverlay").classList.remove("open");
  document.body.style.overflow="";
}

document.addEventListener("keydown",function(e){ if(e.key==="Escape") closeBro(); });
