function rpsGame(your_choice)
{
    let humanChoice = your_choice.id;
    console.log('human choice: ',humanChoice);
    let botChoice = randomChoice();
    console.log('bot choice: ',botChoice);
    let result = findScore(humanChoice, botChoice);
    console.log('Final result: ', result);
    let message = showWinner(result);
    console.log('final message: ', message);
    finalrpsGame(humanChoice, botChoice, message);
}
function randomChoice()
{
    return  ['rock', 'paper', 'scissor'][Math.floor(Math.random() * 3)];
}
function findScore(humanChoice, botChoice)
{
    let rpsDatabase = {
        'rock' : {'rock' : .5, 'paper' : 0, 'scissor' : 1},
        'paper' : {'rock' : 1, 'paper' : .5, 'scissor' : 0},
        'scissor' : {'rock' : 0, 'paper' : 1, 'scissor' : .5}
    };
    let yourScore = rpsDatabase[humanChoice][botChoice];
    let botScore = rpsDatabase[botChoice][humanChoice];
    return [yourScore, botScore];
}
function showWinner([yourScore, botScore])
{
    if(yourScore == 0)
    {
        return {'message' : 'You Lost!', 'color' : 'red', 'box-shadow' : '0px 10px 50px rgb(209, 13, 0)'};
    }
    else if(yourScore == 1)
    {
        return {'message' : 'You Won!', 'color' : 'green', 'box-shadow' : '0px 10px 50px rgb(67,209,0)'};
    }
    else if(yourScore == .5)
    {
        return {'message' : 'You Drew!', 'color' : 'yellow'};
    }
}
function finalrpsGame(humanChoice, botChoice, message)
{
    let rpsimageDatabase = {
        'rock' : 'Images/rock.jpg',
        'paper' : 'Images/paper.jpg',
        'scissor' : 'Images/scissor.png'
    };
    document.querySelector('#rock').remove();
    document.querySelector('#paper').remove();
    document.querySelector('#scissor').remove();
    let humanDiv = document.createElement('div');
    let textDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    humanDiv.innerHTML = "<img id = "+humanChoice+" src = "+rpsimageDatabase[humanChoice]+" height = '150' width = '150'></img>";   
    textDiv.innerHTML = "<h2 style = 'color : "+message['color']+"'>"+message['message']+"</h2>"
    botDiv.innerHTML = "<img id = "+botChoice+" src = "+rpsimageDatabase[botChoice]+" height = '150' width = '150'></img>";
    document.querySelector('#rps-row-1').appendChild(humanDiv);
    document.querySelector('#rps-row-1').appendChild(textDiv);
    document.querySelector('#rps-row-1').appendChild(botDiv);
}
