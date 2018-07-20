$(document).ready(function(){
    $(".startInput form").submit(function(event){
        event.preventDefault();


        var player1 = $("#player1").val();
        var player2 = $("#player2").val();
          $(this).hide();

        playerOne = new player1(player1,true);
        playerTwo = new player2(player2,false);        

    });
    
    $(".roll").click(function(){
        if(playerOne.turn == true){

            if(playerOne.totalRoll >=100){
                alert(playerOne.playerName + "Congrats to the Winner!");
                playerOne.reset()
            }else{
                player
            }
        }
    })

})
 