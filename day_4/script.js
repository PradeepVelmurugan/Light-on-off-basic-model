var light=document.getElementById("light");



function toggleLight(values){
    if(values){
        light.className="lighton"
    }
    else{
        light.className="lightoff"
    }
}

