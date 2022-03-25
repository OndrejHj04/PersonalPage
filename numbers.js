document.querySelectorAll(".rotate").forEach((e, index) => {
  if(index % 2 === 0){
    let i = 0;
    setInterval(() => {
      i += 90;
      e.style.transform = `rotate(${i}deg)`;
      e.style.transition = "transform 1s";
      i === 450 ? (i = 0) : "";
    }, 1500);
  }else{
    let i = 90;
    e.style.transform = `rotate(${90}deg)`
    setInterval(() => {
      i += 90;
      e.style.transform = `rotate(${i}deg)`;
      e.style.transition = "transform 1s";
      i === 450 ? (i = 0) : "";
    }, 1500);
  }

});
