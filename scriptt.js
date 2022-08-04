function toggleBuy(id) {
    id = id.toString();
    console.log("toggle clicked")
    var div = document.getElementById(id);
    var div2 = document.getElementsByClassName(id)

    console.log(div2.length);
    for(i=0;i<div2.length;++i){
        console.log(div2[i])
        if (div2[i].style.display != 'none') {
            div2[i].style.display = 'none';
        }
        else {
            div2[i].style.display = 'block';
        }
    }
    
}