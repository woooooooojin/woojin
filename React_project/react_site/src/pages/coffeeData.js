const coffeeData= [
    {
      id: 'coffee_01',
      image: process.env.PUBLIC_URL+'/img/coffee/coffee01.png',
      desc: '917ml로 즐기는 대용량 브리즈 사이즈 아메리카노',
      title: '디카페인 917 아메리카노',
      tag : '#디카페인 #대용량커피',
      price: 4800
    },
    {
        id: 'coffee_02',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee02.png',
        desc: '917ml로 즐기는 대용량 브리즈 사이즈 아메리카노',
        title: '917 아메리카노',
        tag : '#아이스아메리카노 #대용량커피',
        price: 4300
    },
    {
        id: 'coffee_03',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee03.png',
        desc: '피스타치오와 에스프레소 샷의 풍미가 어우러진 라떼',
        title: '피스타치오 아몬드 라떼',
        tag : '#피스타치오 #초코핫라떼',
        price: 4800
    },
    {
        id: 'coffee_05',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee05.png',
        desc: '달콤한 스페니쉬 라떼에 솔티크림을 올려 단짠단짠 극대화',
        title: '아이스 솔티크림라떼',
        tag : '#단짠단짠 #라떼',
        price: 4800
    },
    {
        id: 'coffee_06',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee06.png',
        desc: '달콤한 스페니쉬 라떼에 솔티크림을 올려 단짠단짠 극대화',
        title: '솔티크림라떼',
        tag : '#단짠단짠 #라떼',
        price: 4800
    },
    {
        id: 'coffee_07',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee07.png',
        desc: '토피넛 라떼 위에 캔디 토핑을 올린 배라의 시그니처 라떼',
        title: '아이스 토피넛 캔디라떼',
        tag : '#토피넛 #캔디라떼',
        price: 4800
    },
    {
        id: 'coffee_08',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee08.png',
        desc: '토피넛 라떼 위에 캔디 토핑을 올린 배라의 시그니처 라떼',
        title: '토피넛 캔디 라떼',
        tag : '#토피넛 #캔디라떼',
        price: 4800
    },
    {
        id: 'coffee_09',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee09.png',
        desc: '영국왕실 말돈소금이 들어간 달콤짭짤한 우유크림을 듬뿍올린 크림커피!',
        title: '아이스 솔티크림슈패너',
        tag : '#달콤짭짤 #크림커피',
        price: 4800
    },
    {
        id: 'coffee_10',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee10.png',
        desc: '영국왕실 말돈소금이 들어간 달콤짭짤한 우유크림을 듬뿍올린 크림커피!',
        title: '솔티크림슈패너',
        tag : '#달콤짭짤 #크림커피',
        price: 4800
    },
    {
        id: 'coffee_11',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee11.png',
        desc: '영국왕실 말돈소금이 들어간 달콤짭짤한 우유크림을 듬뿍올린 크림커피!',
        title: '콜드브루 아메리카노',
        tag : '#아메리카노 #콜드브루',
        price: 4800
    },
    {
        id: 'coffee_12',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee12.png',
        desc: '콜드브루 커피와 오트음료가 어우러진 고소하고 깔끔한 맛의 음료',
        title: '콜드브루 오트',
        tag : '#콜드브루 #오트',
        price: 4800
    },
    {
        id: 'coffee_13',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee13.png',
        desc: '아이스아메리카노에 주니어 아이스크림 1스쿱을 올린 메뉴',
        title: '카페31 아메리카노',
        tag : '#아메리카노 #아이스크림',
        price: 5000
    },
    {
        id: 'coffee_14',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee14.png',
        desc: '카페브리즈 커피를 가장 부드럽게 즐길 수 있는 아메리카노!',
        title: '아메리카노',
        tag : '#아메리카노 #카페브리즈',
        price: 3800
    },
    {
        id: 'coffee_15',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee15.png',
        desc: '카페브리즈 커피를 가장 부드럽게 즐길 수 있는 아메리카노!',
        title: '아이스 아메리카노',
        tag : '#아메리카노 #카페브리즈',
        price: 3800
    },
    {
        id: 'coffee_16',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee16.png',
        desc: '카페브리즈 커피를 가장 부드럽게 즐길 수 있는 아메리카노!',
        title: '아메리카노(L)',
        tag : '#아메리카노 #카페브리즈',
        price: 4300
    },
    {
        id: 'coffee_17',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee17.png',
        desc: '카페브리즈 커피를 가장 부드럽게 즐길 수 있는 아메리카노!',
        title: '아이스 아메리카노(L)',
        tag : '#아메리카노 #카페브리즈',
        price: 4300
    },
    {
        id: 'coffee_18',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee18.png',
        desc: '크리미한 벨벳밀크에 바닐라빈이 더해진 풍부하고 달콤한 라떼!',
        title: '바닐라빈 라떼',
        tag : '#바닐라빈 #라떼',
        price: 4800
    },
    {
        id: 'coffee_19',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee19.png',
        desc: '크리미한 벨벳밀크에 바닐라빈이 더해진 풍부하고 달콤한 라떼!',
        title: '아이스 바닐라빈 라떼',
        tag : '#바닐라빈 #라떼',
        price: 4800
    },
    {
        id: 'coffee_20',
        image: process.env.PUBLIC_URL+'/img/coffee/coffee20.png',
        desc: '우유와 연유를 함께 스티밍하여 거품까지 부드러운 달콤함!',
        title: '연유 라떼',
        tag : '#우유 #연유',
        price: 4800
    },

    
      
    
  ]

export default coffeeData