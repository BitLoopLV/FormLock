function beginExam() {
  //var input = document.getElementById("inputBox").value;
  var examId = window.location.search.split("?examId=")[1];
  if(examId && examId.length > 0) {
    var examSrc = `https://docs.google.com/forms/d/e/${examId}/viewform?embedded=true`;
    document.getElementById("examFrame").src = examSrc;
    document.getElementById("exam").style.display = 'inline-block';
    document.getElementById("inputForm").style.display = 'none';
    var doc = document.documentElement;
    doc.requestFullscreen();
    document.addEventListener('fullscreenchange', (event) => {
      if(!document.fullscreenElement) {
        endExam();
      }
    });
  }
  else {
    alert("Invalid exam ID, please check if the link has been correctly copied.")
  }
}

function endExam() {
  document.getElementById("exam").style.display = 'none';
  document.getElementById("inputForm").style.display = 'inline-block';
}
