class Form{
constructor(){

}
display(){
    var title=createElement("h1")
    title.html("car racing game")
    title.position(430,80)

    var input=createInput("name")
    var button=createButton("finish")
    var greeting=createElement("h2")
    
    input.position(420,250)
    button.position(480,300)

    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        playerCount++;
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("hello "+name)
        greeting.position(470,160)


    })

    
}
}