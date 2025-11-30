function upDate(previewPic) {
      const imageDiv = document.getElementById("image");
      imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
      imageDiv.innerHTML = previewPic.alt;
      imageDiv.style.backgroundSize = "cover";
      imageDiv.style.color = "white";
    }

    function undo() {
      const imageDiv = document.getElementById("image");
      imageDiv.style.backgroundImage = "url('')";
      imageDiv.innerHTML = "Hover over an image below to display here.";
      imageDiv.style.color = "black";
    }