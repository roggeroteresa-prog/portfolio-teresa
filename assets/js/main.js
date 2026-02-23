emailjs.init({ publicKey: 'KusDaTIdnMJjYxJXb' });
document.getElementById("contactForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = document.getElementById("sendBtn");
  btn.disabled = true;
  btn.innerText = "Invio...";

  try {
  
    const params = {
      name:   document.getElementById("name").value,
      email:  document.getElementById("email").value,
      message:document.getElementById("message").value
    };

    
    await emailjs.send("service_7r37rm7", "template_df32v0p", params);

    alert("Grazie! Il messaggio è stato inviato.");
    e.target.reset();
  } catch (err) {
    console.error(err);
    alert("Errore durante l'invio. Riprova più tardi.");
  } finally {
    btn.disabled = false;
    btn.innerText = "Invia";
  }
});
