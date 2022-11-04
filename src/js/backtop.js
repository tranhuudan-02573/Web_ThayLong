
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
console.log("object");
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
  ) {
    document.getElementById("btn-back-to-top").style.display = "block";
  } else {
    document.getElementById("btn-back-to-top").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
document.getElementById("btn-back-to-top").addEventListener("click", ()=>{
  document.body.scrollTop = 0;
   document.documentElement.scrollTop =0;
});
