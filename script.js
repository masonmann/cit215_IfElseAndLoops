var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var i;
for(var i=0; i<animals.length; i++){
  if (animals[i]=="dog"){
    document.querySelector(".loop"+i).innerHTML="borf borf";
  } else if (animals[i]=="cat"){
    document.querySelector(".loop"+i).innerHTML="I am a cat.";
  } else {
    document.querySelector(".loop"+i).innerHTML="I'm an animal.";
  } 
}