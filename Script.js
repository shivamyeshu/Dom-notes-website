function copyCode() {
    const codeElement = document.getElementById("code-snippet");
    const button = document.getElementById("copy-button");
    const code = codeElement.textContent;

    navigator.clipboard.writeText(code).then(() => {
      button.textContent = "Copied!";
      button.classList.add("copied");
      
    //   Optional: Reset button text after 2 seconds
    //   setTimeout(() => {
    //     button.textContent = "Copy Code";
    //     button.classList.remove("copied");
    //   }, 2000);
    // }).catch(err => {
    //   console.error("Failed to copy code: ", err);
    });
  }
  
 