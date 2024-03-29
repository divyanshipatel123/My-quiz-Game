class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background('yellow');

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    //write code to show a heading for showing the result of Quiz
   
   
   
    //write condition to check if contestantInfor is not undefined
    if( allContestants !== undefined){
     var index 
     var y  = 300;
    //write code to add a note here
      textSize(20);
      fill('blue');
      text('NOTE : the contestant who gave the right answer is shown in green',150, 250);

    //write code to highlight contest who answered correctly
      for(var plr in allContestants){
        index =index + 1
        y = y + 30
      // var index = index+1;
        var correctAnswer = '2';
      if(correctAnswer === allContestants[plr].answer){
        
        fill('green');

      }
      else{
        
        fill('red');
      }
      textSize(20);
      text(allContestants[plr].name +'  : ' + allContestants[plr].answer ,250 , y )
      }
    } 
  }
   
}
