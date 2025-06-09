// DRUM LESSONS thumbnail hovering effect
document.getElementById('Food').addEventListener('mouseover', function(){
    document.getElementById('EHFood').style.display = "block";
})

document.getElementById('Food').addEventListener('mouseleave', function(){
    document.getElementById('EHFood').style.display = "none";
})

// GUITAR LESSONS  thumbnail hovering effect
document.getElementById('Famine').addEventListener('mouseover', function(){
    document.getElementById('EHFamine').style.display = "block";
})

document.getElementById('Famine').addEventListener('mouseleave', function(){
    document.getElementById('EHFamine').style.display = "none";
})

// SINGING LESSONS  thumbnail hovering effect
document.getElementById('HungerandWar').addEventListener('mouseover', function(){
    document.getElementById('EHHungerandWar').style.display = "block";
})

document.getElementById('HungerandWar').addEventListener('mouseleave', function(){
    document.getElementById('EHHungerandWar').style.display = "none";
})

// KEYBOARD LESSONS  thumbnail hovering effect
document.getElementById('Drought').addEventListener('mouseover', function(){
    document.getElementById('EHDrought').style.display = "block";
})

document.getElementById('Drought').addEventListener('mouseleave', function(){
    document.getElementById('EHDrought').style.display = "none";
})

// VOCALS LESSONS  thumbnail hovering effect
document.getElementById('MigrantsinItaly').addEventListener('mouseover', function(){
    document.getElementById('EHMigrantsinItaly').style.display = "block";
})

document.getElementById('MigrantsinItaly').addEventListener('mouseleave', function(){
    document.getElementById('EHMigrantsinItaly').style.display = "none";
})

// BASS-GUITAR LESSONS thumbnail hovering effect
document.getElementById('FoodborneDiseases').addEventListener('mouseover', function(){
    document.getElementById('EHFoodborneDiseases').style.display = "block";
})

document.getElementById('FoodborneDiseases').addEventListener('mouseleave', function(){
    document.getElementById('EHFoodborneDiseases').style.display = "none";
})

// SONG-WRITING LESSONS  thumbnail hovering effect
document.getElementById('FoodWaste').addEventListener('mouseover', function(){
    document.getElementById('EHFoodWaste').style.display = "block";
})

document.getElementById('FoodWaste').addEventListener('mouseleave', function(){
    document.getElementById('EHFoodWaste').style.display = "none";
})

// EVENTS-TM  thumbnail hovering effect
document.getElementById('WeFood').addEventListener('mouseover', function(){
    document.getElementById('EHWeFood').style.display = "block";
})

document.getElementById('WeFood').addEventListener('mouseleave', function(){
    document.getElementById('EHWeFood').style.display = "none";
})

// WORKSHOPS thumbnail hovering effect
document.getElementById('ArtAgriculture').addEventListener('mouseover', function(){
    document.getElementById('EHArtAgriculture').style.display = "block";
})

document.getElementById('ArtAgriculture').addEventListener('mouseleave', function(){
    document.getElementById('EHArtAgriculture').style.display = "none";
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// change background of nav bar

function changeNavColor(color) {
    var nav = document.querySelector('nav');
    nav.style.backgroundColor = color;
  }

  function changeNavColorA(color) {
    var navA = document.querySelector('nav div a');
    navA.style.backgroundColor = color;
  }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// background color dark mode
function changeBackgroundColorIntoDarkMode() {
    changeNavColor('#4c4c4c');
    changeNavColorA('#BCFD4C');


    
    document.body.style.backgroundColor = "black";

    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.backgroundColor = "#4c4c4c";
    }
    for(var i = 0; i < document.getElementsByClassName('drp-content').length; i++) {
        document.getElementsByClassName('drp-content')[i].style.backgroundColor = "#BCFD4C";
    }
    for(var i = 0; i < document.getElementsByClassName('EH-Name').length; i++) {
        document.getElementsByClassName('EH-Name')[i].style.color = "white";
        document.getElementsByClassName('EH')[i].style.borderColor = "#BCFD4C";

    }
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.color = "white";
    }
    for(var i = 0; i < document.getElementsByClassName('EH-HEADER').length; i++) {
        document.getElementsByClassName('EH-HEADER')[i].style.color = "#BCFD4C";
    }
    for(var i = 0; i < document.getElementsByClassName('EHdetails').length; i++) {
        document.getElementsByClassName('EHdetails')[i].style.color = "white";
    }
    for(var i = 0; i < document.getElementsByClassName('EH').length; i++) {
        document.getElementsByClassName('EH')[i].style.backgroundColor.backdropfilter==("black",blur(5));
        document.getElementsByClassName('EH')[i].style.borderColor = "#BCFD4C"; 
    }
}

// background color light mode
function changeBackgroundColorIntoLightMode() {
    changeNavColor('#9a9590');
    changeNavColorA('#bebab7');
    
    document.body.style.backgroundColor = "#ffffff";
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.backgroundColor = "#bebab7";
    }
    for(var i = 0; i < document.getElementsByClassName('EH-Name').length; i++) {
        document.getElementsByClassName('EH-Name')[i].style.color = "black";
        document.getElementsByClassName('EH')[i].style.borderColor = "#c3ff73";
    }
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.color = "black";
    }
    for(var i = 0; i < document.getElementsByClassName('EH-HEADER').length; i++) { 
        document.getElementsByClassName('EH-HEADER')[i].style.color = "#c3ff73";
    }
    for(var i = 0; i < document.getElementsByClassName('EHdetails').length; i++) {
        document.getElementsByClassName('EHdetails')[i].style.color = "white";
    }
    for(var i = 0; i < document.getElementsByClassName('EH').length; i++) {
        document.getElementsByClassName('EH')[i].style.backgroundColor.backdropfilter==("black",blur(5)); 
    }
}

// background color spring mode
function changeBackgroundColorIntoBlueLightOffMode() {
    changeNavColor('#3e6608');
    changeNavColorA('#BCFD4C');


    document.body.style.backgroundColor = "#2e4c06"; 
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.backgroundColor = "#BCFD4C";
    }
    for(var i = 0; i < document.getElementsByClassName('EH-Name').length; i++) {
        document.getElementsByClassName('EH-Name')[i].style.color = "#BCFD4C";
        document.getElementsByClassName('EH')[i].style.borderColor = "#BCFD4C";
    }
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.color = "black";
    }
    for(var i = 0; i < document.getElementsByClassName('EH-HEADER').length; i++) { 
        document.getElementsByClassName('EH-HEADER')[i].style.color = "#BCFD4C";
    }
    for(var i = 0; i < document.getElementsByClassName('EHdetails').length; i++) {
        document.getElementsByClassName('EHdetails')[i].style.color = "white";
    }
    for(var i = 0; i < document.getElementsByClassName('EH').length; i++) {
        document.getElementsByClassName('EH')[i].style.backgroundColor.backdropfilter==("black",blur(5));
    }
}
/////////////////////////font size jss////////////////////////////////////////////////////////////////////////////////////



// increase Font size
function increaseFontSize() {
    var text = document.getElementById("TextSize");
    var currentSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
    var newSize = parseInt(currentSize) + 1;
    TextSize.style.fontSize = newSize + 'px';
}

// decrease Font size
function decreaseFontSize() {
    var myText = document.getElementById("TextSize");
    var currentSize = window.getComputedStyle(myText, null).getPropertyValue("font-size");
    var newSize = parseInt(currentSize) - 1;
    TextSize.style.fontSize = newSize + "px";
  }

  // back to default Font size
  function currentFontSize() {
    var myText = document.getElementById("TextSize");
    var currentSize = 16;
    // var newSize = parseInt(currentSize);
    TextSize.style.fontSize = currentSize + "px";
  }

/////////////////////////////////modal images JSS////////////////////////////////////////////////////////////////////////////


function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
  }
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
