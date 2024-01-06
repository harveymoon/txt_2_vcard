
  
  function downloadToFile(content, filename, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
  
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
    URL.revokeObjectURL(a.href);
  }
  
  function previewFile(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
  
    reader.readAsDataURL(file);
    reader.onloadend = () => (previewEl.src = reader.result);
  }
  
  function makeVCard() {
    // use url argument "txt" as the vcard content
    let vcard = decodeURIComponent(location.search.substr(1));
    // remove txt= from the vcard beginning
    vcard = vcard.substr(4);
    // convert all ' ' to '\n'
    vcard = vcard.replace(/ /g, '\n');
    downloadToFile(vcard, 'Contact.vcf', 'text/vcard');
  }
  
  //downloadEl.addEventListener('click', makeVCard);
  //fileEl.addEventListener('change', previewFile);
  
  
  makeVCard()