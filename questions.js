let questions = [
    {
        numb: 1,
        question: "Hewan ini dikenal sebagai sahabat manusia dan suka menggonggong. Siapakah dia?",
        answer: "Anjing",
        options: [
            "Kucing", 
            "Anjing", 
            "Rubah", 
            "Serigala"
        ],
        mediaType: "video",
        mediaSrc: "asset/bgm.mp3"
    },
    {
        numb: 2,
        question: "Hewan ini bisa terbang dan memiliki bulu berwarna-warni. Apa nama hewan ini?",
        answer: "Burung",
        options: [
            "Ayam", 
            "Burung", 
            "Bebek", 
            "Kelelawar"
        ],
        mediaType: "image",
        mediaSrc: "asset/elephant.jpg"
    },
    {
        numb: 3,
        question: "Hewan ini dikenal dengan kemampuan berlari cepat dan bintik-bintik di tubuhnya. Apakah hewan ini?",
        answer: "Cheetah",
        options: [
            "Macan", 
            "Cheetah", 
            "Singa", 
            "Leopard"
        ],
        mediaType: "image",
        mediaSrc: "assets/cheetah.jpg"
    },
    {
        numb: 4,
        question: "Hewan ini memiliki belalai panjang dan dikenal sebagai hewan darat terbesar. Apa namanya?",
        answer: "Gajah",
        options: [
            "Badak", 
            "Gajah", 
            "Kuda Nil", 
            "Bison"
        ],
        mediaType: "image",
        mediaSrc: "assets/gajah.jpg"
    },
    {
        numb: 5,
        question: "Hewan ini dikenal pandai meniru suara manusia. Hewan apakah ini?",
        answer: "Burung Beo",
        options: [
            "Burung Hantu", 
            "Burung Beo", 
            "Burung Elang", 
            "Burung Kenari"
        ]
    },
    {
        numb: 6,
        question: "Hewan manakah yang termasuk mamalia laut terbesar?",
        answer: "Paus",
        options: [
            "Lumba-lumba", 
            "Paus", 
            "Ikan Hiu", 
            "Anjing Laut"
        ],
        mediaType: "image",
        mediaSrc: "assets/paus.jpg"
    },
    {
        numb: 7,
        question: "Hewan ini suka memanjat pohon dan dikenal dengan ekor panjangnya. Apa namanya?",
        answer: "Monyet",
        options: [
            "Monyet", 
            "Kucing", 
            "Tupai", 
            "Koala"
        ],
        mediaType: "image",
        mediaSrc: "assets/monyet.jpg"
    },
    {
        numb: 8,
        question: "Hewan ini dapat mengubah warna tubuhnya untuk berkamuflase. Siapakah dia?",
        answer: "Bunglon",
        options: [
            "Kadal", 
            "Bunglon", 
            "Iguana", 
            "Komodo"
        ],
        mediaType: "image",
        mediaSrc: "assets/bunglon.jpg"
    },
    {
        numb: 9,
        question: "Hewan ini memiliki cangkang keras dan berjalan lambat. Apa namanya?",
        answer: "Kura-kura",
        options: [
            "Kura-kura", 
            "Siput", 
            "Kepiting", 
            "Udang"
        ],
        mediaType: "image",
        mediaSrc: "assets/kura-kura.jpg"
    },
    {
        numb: 10,
        question: "Hewan ini dikenal dengan telinganya yang panjang dan suka makan wortel. Siapakah dia?",
        answer: "Kelinci",
        options: [
            "Rusa", 
            "Kelinci", 
            "Tikus", 
            "Hamster"
        ],
        mediaType: "image",
        mediaSrc: "assets/kelinci.jpg"
    },
    {
        numb: 11,
        question: "Hewan ini berbulu tebal dan hidup di daerah dingin. Apa namanya?",
        answer: "Beruang Kutub",
        options: [
            "Beruang Coklat", 
            "Beruang Kutub", 
            "Serigala", 
            "Pinguin"
        ],
        mediaType: "image",
        mediaSrc: "assets/beruang-kutub.jpg"
    },
    {
        numb: 12,
        question: "Hewan ini berbisa dan dikenal dengan taringnya yang tajam. Siapakah dia?",
        answer: "Ular",
        options: [
            "Komodo", 
            "Ular", 
            "Iguana", 
            "Biawak"
        ],
        mediaType: "image",
        mediaSrc: "assets/ular.jpg"
    },
    {
        numb: 13,
        question: "Hewan ini disebut juga sebagai 'Raja Hutan'. Apa namanya?",
        answer: "Singa",
        options: [
            "Harimau", 
            "Singa", 
            "Cheetah", 
            "Leopard"
        ],
        mediaType: "image",
        mediaSrc: "assets/singa.jpg"
    },
    {
        numb: 14,
        question: "Hewan ini bisa berenang dan dikenal dengan siripnya yang lebar. Apa namanya?",
        answer: "Ikan Pari",
        options: [
            "Ikan Hiu", 
            "Ikan Pari", 
            "Ikan Paus", 
            "Lumba-lumba"
        ],
        mediaType: "image",
        mediaSrc: "assets/ikan-pari.jpg"
    },
    {
        numb: 15,
        question: "Hewan ini memiliki kantung di perutnya untuk membawa anak-anaknya. Siapakah dia?",
        answer: "Kanguru",
        options: [
            "Koala", 
            "Kanguru", 
            "Panda", 
            "Beruang"
        ],
        mediaType: "image",
        mediaSrc: "assets/kanguru.jpg"
    },
    {
        numb: 16,
        question: "Hewan ini dikenal dengan suara melengkingnya dan sering dijadikan hewan peliharaan. Apa namanya?",
        answer: "Burung Kenari",
        options: [
            "Burung Kenari", 
            "Burung Beo", 
            "Burung Hantu", 
            "Burung Merpati"
        ],
        mediaType: "image",
        mediaSrc: "assets/burung-kenari.jpg"
    },
    {
        numb: 17,
        question: "Hewan ini dikenal dengan lehernya yang panjang. Apa namanya?",
        answer: "Jerapah",
        options: [
            "Jerapah", 
            "Zebra", 
            "Kuda", 
            "Gajah"
        ],
        mediaType: "image",
        mediaSrc: "assets/jerapah.jpg"
    },
    {
        numb: 18,
        question: "Hewan ini adalah yang tercepat di darat. Siapakah dia?",
        answer: "Cheetah",
        options: [
            "Singa", 
            "Cheetah", 
            "Harimau", 
            "Leopard"
        ],
        mediaType: "image",
        mediaSrc: "assets/cheetah.jpg"
    },
    {
        numb: 19,
        question: "Hewan ini dikenal dengan suara 'kukuk'. Apa namanya?",
        answer: "Burung Hantu",
        options: [
            "Burung Hantu", 
            "Burung Merak", 
            "Burung Kenari", 
            "Burung Elang"
        ],
        mediaType: "image",
        mediaSrc: "assets/burung-hantu.jpg"
    },
    {
        numb: 20,
        question: "Hewan ini suka hidup di air dan memiliki kulit licin. Apa namanya?",
        answer: "Katak",
        options: [
            "Kura-kura", 
            "Katak", 
            "Buaya", 
            "Salamander"
        ],
        mediaType: "image",
        mediaSrc: "assets/katak.jpg"
    },
    {
        numb: 21,
        question: "Hewan ini dikenal dengan loreng hitam dan oranye di tubuhnya. Apakah ini?",
        answer: "Harimau",
        options: [
            "Harimau", 
            "Leopard", 
            "Singa", 
            "Cheetah"
        ],
        mediaType: "image",
        mediaSrc: "assets/harimau.jpg"
    },
    {
        numb: 22,
        question: "Hewan ini dikenal dengan suara melengkingnya dan sering dijadikan hewan peliharaan. Apa namanya?",
        answer: "Burung Merpati",
        options: [
            "Burung Kenari", 
            "Burung Hantu", 
            "Burung Merpati", 
            "Burung Elang"
        ],
        mediaType: "image",
        mediaSrc: "assets/burung-merpati.jpg"
    },
    
];
