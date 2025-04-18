import React from 'react'
import BookCard from './BookCard';

const data = {
    "product": [
        {
            "author": "Frank Herbert",
            "cover": "dune.png",
            "created_at": "2023-01-09T14:39:18.509219",
            "description": "Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or \"spice\", a drug that...",
            "id": 3,
            "name": "dune",
            "price": 87.75,
            "sales": 5,
            "slug": "dune",
            "likes_aggregate": {
                "aggregate": {
                    "count": 0
                }
            }
        },
        {
            "author": "George Orwell",
            "cover": "1984.png",
            "created_at": "2023-01-09T14:39:33.035651",
            "description": "Parti’nin dünya görüşü, onu hiç anlayamayan insanlara çok daha kolay dayatılıyordu. (...) Her şeyi yutuyorlar ve hiçbir zarar görmüyorlardı çünkü tıpkı bir mısır tanesinin bir kuşun bedeninden sindirilmeden geçip gitmesi gibi, yuttuklarından geriye bir şey kalmıyordu.",
            "id": 4,
            "name": "1984",
            "price": 35.75,
            "sales": 5,
            "slug": "1984",
            "likes_aggregate": {
                "aggregate": {
                    "count": 0
                }
            }
        },
        {
            "author": "Hector Garcia",
            "cover": "ikigai.png",
            "created_at": "2023-01-09T14:41:13.384527",
            "description": "Uluslararası çok satan bir rehber olan Ikigai’yle her gününüz bir anlam kazansın. Japonlar herkesin bir ikigaisi olduğuna inanır, her sabah yataktan kalkmaları için bir sebepleri vardır. İlham verici ve rahatlatıcı bu kitap sizlere kendi ikigainizi keşfetmeniz için gerekli tüm bilgileri veriyor. Aceleci davranmamanızı, hayat gayenizi keşfetmenizi, ilişkilerinizi canlandırmanızı ve kendinizi tutkularınıza adamanızı sağlıyor.",
            "id": 5,
            "name": "İkigai",
            "price": 36,
            "sales": 10,
            "slug": "ikigai",
            "likes_aggregate": {
                "aggregate": {
                    "count": 0
                }
            }
        },
        {
            "author": "Jerome David Salinger",
            "cover": "cavdar-tarlasinda-cocuklar.png",
            "created_at": "2023-01-09T14:42:21.302346",
            "description": "1951 yılında basılan kitap, Salinger’in ilk ve tek romanıdır. Çıktığı andan bu yana ilgi gören roman, ergenlik dönemindeki bir çocuğun dünyayı algılayış biçimini bize anlatırken, yetişkinlerin düzenine karşı olan isyanını da başarılı bir dil ile aktarıyor. Samimi dili ve karakterin içinde bulunduğu duyguların okuyucuya olan yansıması, onu kısa sürede dünya edebiyatı listelerinde ilk sıralara taşıyor.",
            "id": 6,
            "name": "Çavdar Tarlasında Çocuklar",
            "price": 35.75,
            "sales": 10,
            "slug": "cavdar-tarlasinda-cocuklar",
            "likes_aggregate": {
                "aggregate": {
                    "count": 0
                }
            }
        },
        {
            "author": "Sabahattin Ali",
            "cover": "kurk-mantolu-madonna.png",
            "created_at": "2023-01-09T17:15:19.06806",
            "description": "İlk baskısı 1943 yılında yapılan Kürk Mantolu Madonna, günümüzde halen en çok ilgi gören ve satılan kitaplar arasında bulunuyor. Basıldığı günden bu yana 1 milyondan fazla satan kitap üzerine, birçok araştırma ve inceleme yapılmış, hakkında tezler yazılmış, fakat bu başarısının sırrı tam olarak çözülememiştir. Onu bu kadar özel kılan ve hala konuşuluyor olmasındaki en büyük pay, tabii ki Sabahattin Ali’nin usta kalemi ve başarılı ruh tahlilleridir.",
            "id": 7,
            "name": "Kürk Mantolu Madonna",
            "price": 55.9,
            "sales": 10,
            "slug": "kurk-mantolu-madonna",
            "likes_aggregate": {
                "aggregate": {
                    "count": 0
                }
            }
        },
        {
            "author": "Oğuz Atay",
            "cover": "tutunamayanlar.png",
            "created_at": "2023-01-09T17:17:09.444487",
            "description": "Ülkemizin en değerli yazarlarından biri olan Oğuz Atay’ın yazıldığı dönemde büyük tartışma konusu olmuş eseri Tutunamayanlar, 1972 yılında yayımlanmıştır. Eser, bilinç-akışı tekniğiyle döneme damgasını vurarak Türk Edebiyatı’nda yeni bir çağı başlatmıştır. Pek çok eleştirmen, Tutunamayanlar’ı Türk Dili’nde yazılmış en iyi eser olarak değerlendirmektedir.  Tutunamayanlar Oğuz Atay ismiyle özdeşleşmiş bir roman olarak, büyük yazarımızın hayatından izler taşımasıyla da kısmen otobiyografik bir eser olarak da değerlendirilebilir. Roman, son derece üst düzey diliyle çevirisi en zor romanlar arasında yer alır. Tutunamayanlar, sadece birkaç dile çevrilebilmiştir. “Het leven in stukken” adı altında Flemenkçeye (Hollanda Dili) çevrilen eser, eserin Hollandalı çevirmenine ödül kazandırmıştır.",
            "id": 8,
            "name": "Tutunamayanlar",
            "price": 65.9,
            "sales": 8,
            "slug": "tutunamayanlar",
            "likes_aggregate": {
                "aggregate": {
                    "count": 0
                }
            }
        }
    ]
}
function CategoryRow() {
    const sliced = data.product.slice(0,3);
  return (
    <div className="grid grid-flow-col auto-cols-auto lg:auto-cols-fr overflow-auto grid-rows-[9rem] lg:grid-rows-[13rem] gap-x-10 justify-between">
        {sliced.map((book) => (
            <BookCard key={book.id} author={book.author} cover={book.cover} id={book.id.toString()} name={book.name} price={book.price.toString()} />
        ))}
    </div>
  )
}

export default CategoryRow;