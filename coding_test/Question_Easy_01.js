/*
 * 1층부터 10층까지 있는 빌딩이 있습니다.
 * 엘리베이터에 탑승객들이 무작위로 본인들이 내릴 층수를 누르고 나면
 * 엘리베이터가 무작위로 누른 순서가 아닌 윗층으로 올라가면서 차례대로 멈출 수 있게 코드를 작성해 주세요.
 * 단, 2번 입력시 해당층은 취소이며, 3번입력 시 다시 재입력입니다.

 *
 * 예시1. 
 * (String) INPUT : 1,8,10,5
 * (String) OUTPUT : 1,5,8,10
 *
 * 예시2. 
 * (String) INPUT : 7,2,7,3,9
 * (String) OUTPUT : 2,3,9
 * 
 * 주어진 함수에 결과값이 RETURN 되도록 코드를 작성해 주세요.
 * {{ Code }} 부분에 코드를 작성해 주시면 됩니다.
 */

 function question(input)
 {
   let output = []
   input.sort((a,b)=>{ //오름차순으로 정렬,,,
      return a - b;
   })

    {{ 

      for(let i =0; i<=10; i++){
         if(input.includes(input[i])){
            output.push(input[i])
         }
      }


     }}

    return output;
 }
 console.log(question([2,4,6,3,4]))