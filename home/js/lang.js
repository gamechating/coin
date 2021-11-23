function selectLang(id){
    const langDiv = document.getElementById(id);
    if (langDiv.style.display==="none"){
        langDiv.style.display ="block"
    }else{
        langDiv.style.display="none"
    }
}
