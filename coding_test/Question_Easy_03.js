/*
 * 어떠한 수 N이 1이 될때까지 다음의 두 과정중 하나를 반복적으로 선택하여 수행하려고 한다.
 * 단, 두 번째 연산은 N이 K로 나누어 떨어질 때만 선택할 수 있다.
 * 1. N에서 1을 뺀다.
 * 2. N을 K로 나눈다.
 *
 * 최소한 몇 번의 반복과정이 나와야 하는지 알아보자.
 * 
 * 예시1. 
 * INPUT : 25, 5
 * OUTPUT : 2
 *
 * 예시2. 
 * INPUT : 18, 2
 * OUTPUT : 5
 * 
 * 예시3. 
 * INPUT : 24, 3
 * OUTPUT : 5
 *
 * 주어진 함수에 결과값이 JSON 형태로 RETURN 되도록 코드를 작성해 주세요.
 * {{ Code }} 부분에 코드를 작성해 주시면 됩니다.
 */

 function question(input, k)
 {
    let output = 0;

    {{ 

      while(input !==1){ //1이 될때까지 반복,,,,
         if(input % k === 0 ){ 
            input = input / k 
         }else{
            input = input - 1
         }

         output++ 
      }


     }}

    return JSON.stringify(output);
 }

 console.log(JSON.stringify(question(24,3)))
 console.log(JSON.stringify(question(25,5)))
 console.log(JSON.stringify(question(24,3)))