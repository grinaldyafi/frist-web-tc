<script type="text/javascript">
var nav =document.getElementById('nav');
window.onscroll = function () {
    if(window.pageYOfset > 100){
        nav.style.position = "fixed";
        nav.style.top = 0;

    }else{
        box.style.position ="absolute";
       box.style.top = 100;
    } 
}
</script>