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
   let output=[];

   input.sort(function(a,b){
      return a-b;
   }) // 오름차순,,,,


   let floor = [...new Set(input)] ///중복값제거,,,
  
   console.log(floor)

    {{ 

      for(let i = 1; i<=10; i++){
         if(floor.includes(i)){
            output.push(i)
            
         }
       
      }

      
     }}

 return output;

 }
 console.log(question([7,2,7,3,9]))