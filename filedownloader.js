const fileInput = document.querySelector('input');
downloadBtn = document.querySelector('button');

downloadBtn.addEventListener('click', e => {
e.preventDefault();
console.log(fileInput.value);
fetchFile(fileInput.value);
});

function fetchFile(url){
fetch(url).then(Response => Response.blob().then(file => {
  console.log(file);
  let tempUrl = URL.createObjectURL(file)
  let aTag = document.createElement('a');
  aTag.href = tempUrl;
  aTag.download =url.replace(/^.*[\\\/]/, '');
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
  
}));
}