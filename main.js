canvas = document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
tomateh=100;
tomatew=100;
backgroundimage="saladona.jpg";
tomateimage="tomate.png";
tomatex=350;
tomatey=200;
function add(){
    backgroundimagetag= new Image();
    backgroundimagetag.onload=uploadBackground;
    backgroundimagetag.src= backgroundimage;
    tomateimagetag=new Image();
    tomateimagetag.onload=uploadtomate;
    tomateimagetag.src=tomateimage;
}
function uploadtomate(){
    ctx.drawImage(tomateimagetag, tomatex, tomatey, tomatew, tomateh);

}
function uploadBackground(){
    ctx.drawImage(backgroundimagetag, 0 ,0, canvas.width, canvas.height);
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("cima");

    }
    if(keyPressed=='40')

    {
        down();
        console.log("baixo");
    }
    if(keyPressed =='37')
    {
        left();
        console.log("esquerda");
    }
    if (keyPressed == '39')
    {
        right();
        console.log("right");
    }
}
function up()
{
    if(tomatey >=0)
    {tomatey=tomatey -10;
    console.log("quando a seta para cima é pressinaoda, x="+ tomatex+" | y="+tomatey);
    uploadBackground();
    uploadtomate();
}
}
function down()
{
    if(tomatey <=500)
    {tomatey=tomatey +10;
    console.log("quando a seta para baixo é pressinaoda, x="+ tomatex+" | y="+tomatey);
    uploadBackground();
    uploadtomate();
}
}
function left()
{
    if(tomatex >=0)
    {tomatex=tomatex -10;
    console.log("quando a seta para esquerda é pressinaoda, x="+ tomatex+" | y="+tomatey);
    uploadBackground();
    uploadtomate();
}
}
function right()
{
    if(tomatex <=700)
    {tomatex=tomatex +10;
    console.log("quando a seta para direita é pressinaoda, x="+ tomatex+" | y="+tomatey);
    uploadBackground();
    uploadtomate();
}
}

