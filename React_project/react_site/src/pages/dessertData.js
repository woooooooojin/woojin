const dessertData= [
    {
      id: 'dessert_01',
      image: process.env.PUBLIC_URL+'/img/dessert/dessert01.png',
      desc: '사랑스러운 하트 찹쌀떡 속에 달콤한 딸기 우유 아이스크림과 딸기리본이 어우러진 아이스 모찌',
      title: '스트로베리 하트 모찌',
      tag : '#딸기우유 #아이스모찌',
      price: 4800
    },
    {
        id: 'dessert_02',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert02.png',
        desc: '우유얼음에 달콤한 복숭아 토핑이 어우러진 빙수',
        title: '피치요거트 블라스트 빙수',
        tag : '#복숭아 #요거트빙수',
        price: 4800
    },
    {
        id: 'dessert_03',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert03.png',
        desc: '우유얼음에 달콤한 애플망고 토핑이 어우러진 빙수',
        title: '애플망고 블라스트 빙수',
        tag : '#애플망고 #요거트빙수',
        price: 4800
    },
    {
        id: 'dessert_04',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert04.png',
        desc: '우유얼음에 달콤한 팥과 바닐라 아이스크림 토핑이 어우러진 빙수',
        title: '팥 바닐라 블라스트 빙수',
        tag : '#팥블라스트 #컵빙수',
        price: 4800
    },
    {
        id: 'dessert_05',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert05.png',
        desc: '우유얼음에 달콤한 복숭아 토핑이 어우러진 빙수',
        title: '피치요거트 블라스트 빙수',
        tag : '#복숭아 #요거트빙수',
        price: 4800
    },
    {
        id: 'dessert_06',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert06.png',
        desc: '우유얼음에 달콤한 복숭아 토핑이 어우러진 빙수',
        title: '기라델리 초콜릿 타르트',
        tag : '#기라델리 #초코타르트',
        price: 4800
    },
    {
        id: 'dessert_07',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert07.png',
        desc: '우유얼음에 달콤한 복숭아 토핑이 어우러진 빙수',
        title: '애플망고 블라스트 빙수',
        tag : '#애플망고 #요거트빙수',
        price: 4800
    },
    {
        id: 'dessert_08',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert08.png',
        desc: '우유얼음에 쫄깃한 인절미, 견과류, 통단팥 토핑이 어우러진 빙수',
        title: '오리지널 팥 인절미 빙수',
        tag : '#팥인절미 #오리지널',
        price: 4800
    },
    {
        id: 'dessert_09',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert09.png',
        desc: '팝콘 칩 사이에 단짠 매력 가득한 치즈와 카라멜 두가지 맛 아이스크림의 조화',
        title: '시카고 팝콘 치즈&카라멜',
        tag : '#이달의디저트 #아이스샌드',
        price: 4800
    },
    {
        id: 'dessert_10',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert10.png',
        desc: '쫀득한 찹쌀떡 속에 달콤한 바나나킥 아이스크림을 넣으 모찌',
        title: '바나나킥 아이스 모찌',
        tag : '#바나나킥 #아이스모찌',
        price: 4800
    },
    {
        id: 'dessert_11',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert11.png',
        desc: '상큼달콤 사과 플레이버의 헬로키티 샤베트 스틱바',
        title: '헬로키티 스틱바 사과',
        tag : '#사과맛스틱바 #샤베트스틱바',
        price: 4800
    },
    {
        id: 'dessert_12',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert12.png',
        desc: '쫀득한 찹쌀떡 속에 달콤한 복숭아 과육과 복숭아 요거트 아이스크림이 어우러진 모찌',
        title: '아이스 모찌 복숭아 요거트',
        tag : '#복숭아요거트맛 #아이스모찌',
        price: 4800
    },
    {
        id: 'dessert_13',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert13.png',
        desc: '돌하르방 모나카 속에 바닐라 아이스크림과 우도땅콩의 조화',
        title: '돌하르방 우도 땅콩&바닐라',
        tag : '#돌하르방모나카 #우도땅콩',
        price: 4800
    },
    {
        id: 'dessert_14',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert14.png',
        desc: '돌하르방 모나카 속에 그린티 아이스크림과 팥의 조화',
        title: '돌하르방 제주 그린티&팥',
        tag : '#돌하르방모나카 #제주그린티',
        price: 4800
    },
    {
        id: 'dessert_15',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert15.png',
        desc: '달콤한 바닐라 아이스크림에 초콜릿 코팅과 아몬드 토핑을 더한 아이스 스틱바',
        title: '미니 아이스 스틱바 바닐라',
        tag : '#미니스틱바 #바닐라',
        price: 4800
    },
    {
        id: 'dessert_16',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert16.png',
        desc: '진한 기라델리 초콜릿 아이스크림에 카라멜 코팅과 아몬드 토핑을 더한 초코볼',
        title: '아이스 기라델리 초콜릿 볼',
        tag : '#아이스초코볼 #기라델리',
        price: 4800
    },
    {
        id: 'dessert_17',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert17.png',
        desc: '상큼한 딸기 플레이버의 아이스 스틱바',
        title: '주디 스틱바 스트로베리',
        tag : '#딸기 #주디스틱바',
        price: 4800
    },
    {
        id: 'dessert_18',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert18.png',
        desc: '상큼한 그린애플 플레이버의 아이스 스틱바',
        title: '주디 스틱바 그린애플',
        tag : '#그린애플 #주디스틱바',
        price: 4800
    },
    {
        id: 'dessert_19',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert19.png',
        desc: '상큼한 파인애플 플레이버의 아이스 스틱바',
        title: '주디 스틱바 파인애플',
        tag : '#파인애플 #주디스틱바',
        price: 4800
    },
    {
        id: 'dessert_20',
        image: process.env.PUBLIC_URL+'/img/dessert/dessert20.png',
        desc: '달콤한 망고 플레이버의 아이스 스틱바',
        title: '주디 스틱바 망고',
        tag : '#망고 #주디스틱바',
        price: 4800
    },
   
    
      
    
  ]

export default dessertData