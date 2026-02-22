
function templateModern(data){
  return `
    <div class="template-modern">
      <div class="left">
        <h2>${data.name}</h2>
        <p>${data.title}</p>
      </div>
      <div class="right">
        <h3>Profil</h3>
        <p>${data.profile}</p>
        <h3>Experiență</h3>
        <p>${data.experience}</p>
        <h3>Educație</h3>
        <p>${data.education}</p>
        <h3>Skill-uri</h3>
        <p>${data.skills}</p>
      </div>
    </div>
  `;
}

function templateClean(data){
  return `
    <div class="template-clean">
      <h2>${data.name}</h2>
      <p><strong>${data.title}</strong></p>
      <h3>Profil</h3>
      <p>${data.profile}</p>
      <h3>Experiență</h3>
      <p>${data.experience}</p>
      <h3>Educație</h3>
      <p>${data.education}</p>
      <h3>Skill-uri</h3>
      <p>${data.skills}</p>
    </div>
  `;
}
