const drinkData= [
    {
      id: 'drink_01',
      image: process.env.PUBLIC_URL+'/img/drink/drink01.png',
      desc: '상큼하고 달콤한 복숭아 맛 블라스트!',
      title: '피치블라스트',
      tag : '#복숭아맛 #블라스트',
      price: 4800
    },
    {
      id: 'drink_02',
      image: process.env.PUBLIC_URL+'/img/drink/drink02.png',
      desc: '파인애플 맛 그대로! 달콤상큼 파인애플맛 블라스트!',
      title: '파인애플 블라스트',
      tag : '#파인애플맛 #달콤상콤',
      price: 4800
    },
    {
      id: 'drink_03',
      image: process.env.PUBLIC_URL+'/img/drink/drink03.png',
      desc: '917ml 사이즈의 대용량으로 부담없이 마실 수 있는 자몽 블라스트!',
      title: '917 자몽 워터 블라스트',
      tag : '#대용량블라스트 #자몽맛블라스트',
      price: 5800
    },
    {
      id: 'drink_04',
      image: process.env.PUBLIC_URL+'/img/drink/drink04.png',
      desc: '917ml 사이즈의 대용량으로 부담없이 마실 수 있는 유자 블라스트!',
      title: '917 유자 워터 블라스트',
      tag : '#대용량블라스트 #유자블라스트',
      price: 5800
    },
    {
      id: 'drink_05',
      image: process.env.PUBLIC_URL+'/img/drink/drink05.png',
      desc: '엄마는외계인 프레첼 볼이 토핑된 진하고 달콤한 초코음료!',
      title: '엄마는외계인 초코라떼(HOT)',
      tag : '#엄마는외계인 #초코라떼',
      price: 4300
    },
    {
      id: 'drink_06',
      image: process.env.PUBLIC_URL+'/img/drink/drink06.png',
      desc: '시원하고 청량한 소다맛 블라스트에 귀여운 시나모롤 캐릭터 얼음이 토핑된 음료!',
      title: '시나모롤 소다 블라스트',
      tag : '#소다맛 #시나모롤얼음',
      price: 4800
    },
    {
      id: 'drink_07',
      image: process.env.PUBLIC_URL+'/img/drink/drink07.png',
      desc: '고소한 미숫가루와 인절미 다이스를 얼음과 함께 갈아 쫄깃한 식감까지 시원하게 즐기는 블라스트!',
      title: 'MSGR 블라스트',
      tag : '#미숫가루맛 #MSGR블라스트',
      price: 4800
    },
    {
      id: 'drink_08',
      image: process.env.PUBLIC_URL+'/img/drink/drink08.png',
      desc: '유자의 새콤달콤한 맛과 요거트가 조화롭게 어우러진 블라스트',
      title: '유자 요거트 블라스트',
      tag : '#유자요거트맛 #유자요거트블라스트',
      price: 4800
    },
    {
      id: 'drink_09',
      image: process.env.PUBLIC_URL+'/img/drink/drink09.png',
      desc: '납작복숭아의 새콤달콤한 맛과 요거트가 조화롭게 어우러진 블라스트',
      title: '납작복숭아 요거트 블라스트',
      tag : '#납작복숭아맛 #납작복숭아블라스트',
      price: 4800
    },
    {
      id: 'drink_10',
      image: process.env.PUBLIC_URL+'/img/drink/drink10.png',
      desc: '요거트 고유의 새콤달콤한 맛을 그대로 살린 블라스트',
      title: '플레인 요거트 블라스트',
      tag : '#플레인요거트 #블라스트',
      price: 4800
    },
    {
      id: 'drink_11',
      image: process.env.PUBLIC_URL+'/img/drink/drink11.png',
      desc: '기라델리의 진한 초코와 부드럽고 달콤한 바닐라빈 크림의 조화를 느낄수 있는 블라스트',
      title: '기라델리초코마블 블라스트',
      tag : '#기라델리초코마블블라스트',
      price: 5300
    },
    {
      id: 'drink_12',
      image: process.env.PUBLIC_URL+'/img/drink/drink12.png',
      desc: '고소한 흑임자에 부드러운 크림치즈를 더해 더 진하게 즐기는 흑임자맛 블라스트',
      title: '흑임자 크림치즈 블라스트',
      tag : '#흑임자크림치즈 #블라스트',
      price: 4800
    },
    {
      id: 'drink_13',
      image: process.env.PUBLIC_URL+'/img/drink/drink13.png',
      desc: '달콤한 초코에 초콜릿 아몬드를 더한 배스킨라빈스의 초코음료',
      title: '아몬드봉보초코라떼(ICED)',
      tag : '#아몬드 #초코라떼',
      price: 4800
    },
    {
      id: 'drink_14',
      image: process.env.PUBLIC_URL+'/img/drink/drink14.png',
      desc: '달콤한 초코에 초콜릿 아몬드를 더한 배스킨라빈스의 초코음료',
      title: '아몬드봉보초코라떼(HOT)',
      tag : '#아몬드 #초코라떼',
      price: 4800
    },
    {
      id: 'drink_15',
      image: process.env.PUBLIC_URL+'/img/drink/drink15.png',
      desc: '진한 허쉬 초콜릿과 고소한 리세스 피넛버터가 만나 달콤하게 즐기는 블라스트',
      title: '초콜릿피넛버터 블라스트',
      tag : '#초콜릿피넛버터 #허쉬초콜릿',
      price: 4800
    },
    {
      id: 'drink_16',
      image: process.env.PUBLIC_URL+'/img/drink/drink16.png',
      desc: '딸기맛 블라스트 위에 치즈케이크 토핑을 가득 음료',
      title: '딸기 치즈케이크 블라스트',
      tag : '#딸기 #치즈케이크',
      price: 5300
    },
    {
      id: 'drink_17',
      image: process.env.PUBLIC_URL+'/img/drink/drink17.png',
      desc: '초코바나나 블라스트 위에 바나나맛 프레첼볼을 올린 외계인 바나나킥 블라스트',
      title: '외계인의 바나나킥 블라스트',
      tag : '#바나나킥 #바나나',
      price: 4800
    },
    {
      id: 'drink_18',
      image: process.env.PUBLIC_URL+'/img/drink/drink18.png',
      desc: '고소하고 달달한 흑임자와 오트음료(식물성대체유)가 잘어울리는 음료',
      title: '흑임자 오트(HOT)',
      tag : '#흑임자 #오트',
      price: 5300
    },
    {
      id: 'drink_19',
      image: process.env.PUBLIC_URL+'/img/drink/drink19.png',
      desc: '고소하고 달달한 흑임자와 오트음료(식물성대체유)가 잘어울리는 음료',
      title: '흑임자 오트(ICED)',
      tag : '#흑임자 #오트',
      price: 5300
    },
    {
      id: 'drink_20',
      image: process.env.PUBLIC_URL+'/img/drink/drink20.png',
      desc: '피스타치오 블라스트와 초코아몬드 토핑을 함께 즐기는 블라스트',
      title: '피스타치오 초코아몬드 블라스트',
      tag : '#피스타치오 #초코아몬드',
      price: 5300
    },
    
  ]

export default drinkData