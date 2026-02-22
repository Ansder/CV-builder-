let selectedTemplate = "";
let cpaUnlocked = false;
let cpaLink = "PUNE_AICI_LINKUL_TAU_CPA";

function openTemplateMenu(){
  document.getElementById("templateMenu").style.left = "0";
}

function closeTemplateMenu(){
  document.getElementById("templateMenu").style.left = "-260px";
}

document.addEventListener("click", function(e){
  let menu = document.getElementById("templateMenu");
  if(!menu.contains(e.target) && 
     !e.target.classList.contains("menu-icon")){
      closeTemplateMenu();
  }
});

function selectTemplate(template){
  selectedTemplate = template;
  closeTemplateMenu();
  document.getElementById("home").classList.add("hidden");
  document.getElementById("builder").classList.remove("hidden");
}

function generateCV(){

  let data = {
    name: document.getElementById("name").value,
    title: document.getElementById("title").value,
    profile: document.getElementById("profile").value,
    experience: document.getElementById("experience").value,
    education: document.getElementById("education").value,
    skills: document.getElementById("skills").value
  };

  let preview = document.getElementById("preview");

  if(selectedTemplate === "modern"){
    preview.innerHTML = templateModern(data);
  }

  if(selectedTemplate === "clean"){
    preview.innerHTML = templateClean(data);
  }

  preview.innerHTML += `<br><button onclick="downloadCV()">Descarcă CV</button>`;
  preview.classList.remove("hidden");
}

function downloadCV(){

  if(!cpaUnlocked){
    cpaUnlocked = true;
    window.open(cpaLink, "_blank");
    return;
  }

  let content = document.getElementById("preview").innerText;
  let blob = new Blob([content], {type:"text/plain"});
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "CV.txt";
  a.click();
}
