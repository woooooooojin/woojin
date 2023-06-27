const cakeData = [
    {
      id: 'cake_01',
      image: process.env.PUBLIC_URL+'/img/cake/cake01.png',
      desc: '찐한 카라멜과 짭쪼롬한 치즈가 어우려진 단짠의 조화!',
      title: '카라멜 치즈 케이크',
      tag : '#이달의케이크 #카라멜치즈',
      price: 18000
    },
    {
        id: 'cake_02',
        image: process.env.PUBLIC_URL+'/img/cake/cake02.png',
        desc: '부끄러운 웰시코기의 귀여운 뒷모습을 표현한 케이크!',
        title: '웰시코기의 숨바꼭질',
        tag : '#웰시코기 #수줍은케이크',
        price: 18500
      },
      {
        id: 'cake_03',
        image: process.env.PUBLIC_URL+'/img/cake/cake03.png',
        desc: '부끄러운 기린의 귀여운 뒷모습을 표현한 케이크!',
        title: '기린의 숨바꼭질',
        tag : '#기린 #수줍은케이크',
        price: 18500
      },
      {
        id: 'cake_04',
        image: process.env.PUBLIC_URL+'/img/cake/cake04.png',
        desc: '고소한 아몬드 타르트와 사과맛 아이스크림의 조화!',
        title: '배이비 애플 타르트',
        tag : '#애플샤베트 #애플타르트',
        price: 19500
      },
      {
        id: 'cake_05',
        image: process.env.PUBLIC_URL+'/img/cake/cake05.png',
        desc: '달콤한 아이스크림을 즐기러 피크닉을 떠난 구름 카페속 시나모롤!',
        title: '시나모롤의 구름 속 피크닉',
        tag : '#베리베리스토로베리 #아몬드봉봉',
        price: 19500
      },
      {
        id: 'cake_06',
        image: process.env.PUBLIC_URL+'/img/cake/cake06.png',
        desc: '고소한 아몬드 타르트와 상큼달콤한 피치맛 요거트의 조화!',
        title: '베이비 피치 타르트',
        tag : '#베이비피치타르트 #피치요거트',
        price: 19500
      },
      {
        id: 'cake_07',
        image: process.env.PUBLIC_URL+'/img/cake/cake07.png',
        desc: '고소한 아몬드 타르트와 멜론맛 아이스크림의 조화!',
        title: '베이비 멜론 타르트',
        tag : '#베이비멜론타르트 #멜론화이트',
        price: 19500
      },
      {
        id: 'cake_08',
        image: process.env.PUBLIC_URL+'/img/cake/cake08.png',
        desc: '조각조각 사각큐브 아이스크림을 개별 트레이로 편리하고 깔끔하게 나눠먹자!',
        title: '나눠먹는 큐브 와츄원',
        tag : '#나눠먹는큐브와츄원 #이상한나라의솜사탕',
        price: 25000
      },
      {
        id: 'cake_09',
        image: process.env.PUBLIC_URL+'/img/cake/cake09.png',
        desc: 'BR을 대표하는 플레이버! 엄마는 외계인을 컨셉으로 한 케이크!',
        title: '우주에서 온 엄마는 외계인',
        tag : '#엄마는외계인 #트리플초콜릿',
        price: 23000
      },
      {
        id: 'cake_10',
        image: process.env.PUBLIC_URL+'/img/cake/cake10.jpg',
        desc: '레트로감성의 컬러풀한 스프링클스와 달콤한레터링 초콜릿으로 모두의 생일을 특별하게 만들어 줄 케이크!',
        title: '해피벌스데이 케이크',
        tag : '#엄마는외계인 #베리베리스토로베리',
        price: 20000
      },
      {
        id: 'cake_11',
        image: process.env.PUBLIC_URL+'/img/cake/cake11.png',
        desc: '중앙 루피 얼굴모양 별을 뽑으면 3단 포크가 숨어있어 오직 베라에서만 만나볼 수 있는 케이크!',
        title: '반짝이는 잔망루피',
        tag : '#반짝이는잔망루피 #아몬드봉봉',
        price: 23000
      },
      {
        id: 'cake_12',
        image: process.env.PUBLIC_URL+'/img/cake/cake12.png',
        desc: '9가지 맛 아이스크림 바이트를 초콜릿 판 위에 쌓아올려 전체 다 취식 가능한 실속있는 케이크!',
        title: '골라먹는 27 큐브',
        tag : '#골라먹는27큐브 #이상한나라의솜사탕',
        price: 25000
      },
      {
        id: 'cake_13',
        image: process.env.PUBLIC_URL+'/img/cake/cake13.png',
        desc: '다양한 종류의 데코와 아이스크림을 트레이로 편리하게 나눠먹고 보관까지 쉬운 케이크!',
        title: '나눠먹는 와츄원',
        tag : '#나눠먹는와츄원 #베리베리스트로베리',
        price: 23000
      },
      {
        id: 'cake_14',
        image: process.env.PUBLIC_URL+'/img/cake/cake14.png',
        desc: '레트로감성의 컬러풀한 스프링클스와 달콤한레터링 초콜릿으로 모두의 생일을 특별하게 만들어 줄 미니 케이크!',
        title: '미니 해피벌스데이 케이크',
        tag : '#해피벌스데이 #미니케이크',
        price: 16000
      },
      {
        id: 'cake_15',
        image: process.env.PUBLIC_URL+'/img/cake/cake15.png',
        desc: '골라먹는 와츄원의 미니버전 다양한 맛을 골라먹는 가성비있는 미니케이크!',
        title: '미니 골라먹는 와츄원',
        tag : '#골라먹는와츄원 #미니케이크',
        price: 18500
      },
      {
        id: 'cake_16',
        image: process.env.PUBLIC_URL+'/img/cake/cake16.png',
        desc: '동글동글 스노우볼을 가득! 베라의 아이스크림을 한입에 쏙! 넣어 즐길수 있는 스노우볼 케이크!',
        title: '골라먹는 스노우볼',
        tag : '#스노우볼 #파티케이크',
        price: 25000
      },
      {
        id: 'cake_17',
        image: process.env.PUBLIC_URL+'/img/cake/cake17.jpg',
        desc: '16가지 베스트 플레이버로 구성된 풍성한 볼륨감의 베스트셀러 케이크!',
        title: '듀얼 와추원 NO.9',
        tag : '#엄마는외계인 #아몬드봉봉',
        price: 24000
      },
      {
        id: 'cake_18',
        image: process.env.PUBLIC_URL+'/img/cake/cake18.png',
        desc: '다양한 맛을 골라먹는 재미가 있는 아이스크림 케이크!',
        title: '골라먹는 와츄원',
        tag : '#엄마는외계인 #베리베리스트로베리',
        price: 25000
      },

    
    
    
    
    ]
  
    export default cakeData