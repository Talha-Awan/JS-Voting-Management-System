
const imgDIV = document.querySelector(".profile-pic-div");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadBtn = document.querySelector("#uploadBtn");

imgDIV.addEventListener("mouseenter", function(){
    uploadBtn.style.display = "block";
});

imgDIV.addEventListener("mouseleave", function(){
    uploadBtn.style.display = "none";
});

file.addEventListener("change",function(){
    const choosedFiles = this.files[0];
    if (choosedFiles)
    {
        const reader = new FileReader();
        reader.addEventListener("load",function(){
            img.setAttribute("src",reader.result);
        });
        reader.readAsDataURL(choosedFiles);
    }
});