document.addEventListener('DOMContentLoaded', solve);

function solve() {

const questions = document.querySelectorAll('.question');
 let currentQuestion = 0;
 let RightAnswers = 0;

  function ShowNextSection(){
    questions[currentQuestion].classList.add('hidden');
    currentQuestion++;
    if(currentQuestion < questions.length)
    {
      questions[currentQuestion].classList.remove('hidden');
    }
    else{
      showResult();
    }
  }
  function showResult(){
    const resultElement = document.querySelector('#results')
    if(RightAnswers === 3){
     resultElement.textContent = "You are recognized as top JavaScript fan!";
    }
    else if(RightAnswers === 1)
    {
      resultElement.textContent = `You have ${RightAnswers} right answer`;
    }
    else{
      resultElement.textContent = `You have ${RightAnswers} right answers`;
    }
  }

  questions.forEach((section,index) =>{
     const listItems = section.querySelectorAll('.quiz-answer');
     listItems.forEach(item =>{
      const correctAnswers = [
        'onclick', 
        'JSON.stringify()',
        'A programming API for HTML and XML documents'
     ];
         item.addEventListener('click', function(){
            if(item.textContent.trim() === correctAnswers[index])
            {
                RightAnswers++;
            }
            ShowNextSection();
         });
     });
  });
  questions[0].classList.remove('hidden');
}