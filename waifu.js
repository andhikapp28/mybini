const waifus = [
  { id: 1, name: "Mikasa Ackerman", series: "Attack on Titan", img: "src/img/waifu/1.jpg" },

  { id: 2, name: "Hinata Hyuga", series: "Naruto", img: "src/img/waifu/2.jpg" },

  { id: 3, name: "Tsunade", series: "Naruto", img: "src/img/waifu/3.jpg" },

  { id: 4, name: "Orihime Inoue", series: "Bleach", img: "src/img/waifu/4.jpg" },

  { id: 5, name: "Yoruichi Shihouin", series: "Bleach", img: "src/img/waifu/5.jpg" },

  { id: 6, name: "Tier Harribel", series: "Bleach", img: "src/img/waifu/6.jpg" },

  { id: 7, name: "Nelliel Tu Odelschwanck", series: "Bleach", img: "src/img/waifu/7.jpg" },

  { id: 8, name: "Nico Robin", series: "One Piece", img: "src/img/waifu/8.jpg" },

  { id: 9, name: "Nami", series: "One Piece", img: "src/img/waifu/9.jpg" },

  { id: 10, name: "Boa Hancock", series: "One Piece", img: "src/img/waifu/10.jpg" },

  { id: 11, name: "Makima", series: "Chainsaw Man", img: "src/img/waifu/11.jpg" },

  { id: 12, name: "Power", series: "Chainsaw Man", img: "src/img/waifu/12.jpg" },

  { id: 13, name: "Tatsumaki", series: "One Punch Man", img: "src/img/waifu/13.jpg" },

  { id: 14, name: "Fubuki", series: "One Punch Man", img: "src/img/waifu/14.jpg" },

  { id: 15, name: "Mai Sakurajima", series: "Bunny Girl Senpai", img: "src/img/waifu/15.jpg" },

  { id: 16, name: "Tomori Nao", series: "Charlotte", img: "src/img/waifu/16.jpg" },

  { id: 17, name: "Emilia", series: "Re:Zero", img: "src/img/waifu/17.jpg" },

  { id: 18, name: "Rem", series: "Re:Zero", img: "src/img/waifu/18.jpg" },

  { id: 19, name: "Ram", series: "Re:Zero", img: "src/img/waifu/19.jpg" },

  { id: 20, name: "Kurumi Tokisaki", series: "Date A Live", img: "src/img/waifu/20.jpg" },

  { id: 21, name: "Tohka Yatogami", series: "Date A Live", img: "src/img/waifu/21.jpg" },

  { id: 22, name: "Origami Tobiichi", series: "Date A Live", img: "src/img/waifu/22.jpg" },

  { id: 23, name: "Nia Honjo", series: "Date A Live", img: "src/img/waifu/23.jpg" },

  { id: 24, name: "Kotori Itsuka", series: "Date A Live", img: "src/img/waifu/24.jpg" },

  { id: 25, name: "Mukuro Hoshimiya", series: "Date A Live", img: "src/img/waifu/25.jpg" },

  { id: 26, name: "Natsumi Kyouno", series: "Date A Live", img: "src/img/waifu/26.jpg" },

  { id: 27, name: "Miku Izayoi", series: "Date A Live", img: "src/img/waifu/27.jpg" },

  { id: 28, name: "Yamai Sisters", series: "Date A Live", img: "src/img/waifu/28.jpg" },

  { id: 29, name: "Rinne Sonogami", series: "Date A Live", img: "src/img/waifu/29.jpg" },

  { id: 30, name: "Chizuru Mizuhara", series: "Rent-a-Girlfriend", img: "src/img/waifu/30.jpg" },

  { id: 31, name: "Marin Kitagawa", series: "Sono Bisque Doll", img: "src/img/waifu/31.jpg" },

  { id: 32, name: "Kaguya Shinomiya", series: "Kaguya-sama", img: "src/img/waifu/32.jpg" },

  { id: 33, name: "Ai Hayasaka", series: "Kaguya-sama", img: "src/img/waifu/33.jpg" },

  { id: 34, name: "Zero Two", series: "Darling in the FranXX", img: "src/img/waifu/34.jpg" },

  { id: 35, name: "Kurisu Makise", series: "Steins;Gate", img: "src/img/waifu/35.jpg" },

  { id: 36, name: "Faris NyanNyan", series: "Steins;Gate", img: "src/img/waifu/36.jpg" },

  { id: 37, name: "Albedo", series: "Overlord", img: "src/img/waifu/37.jpg" },

  { id: 38, name: "Shalltear Bloodfallen", series: "Overlord", img: "src/img/waifu/38.jpg" },

  { id: 39, name: "Hestia", series: "Danmachi", img: "src/img/waifu/39.jpg" },

  { id: 40, name: "Ais Wallenstein", series: "Danmachi", img: "src/img/waifu/40.jpg" },

  { id: 41, name: "Ryuu Lion", series: "Danmachi", img: "src/img/waifu/41.jpg" },

  { id: 42, name: "Raphtalia", series: "Shield Hero", img: "src/img/waifu/42.jpg" },

  { id: 43, name: "Aqua", series: "Konosuba", img: "src/img/waifu/43.jpg" },

  { id: 44, name: "Megumin", series: "Konosuba", img: "src/img/waifu/44.jpg" },

  { id: 45, name: "Darkness", series: "Konosuba", img: "src/img/waifu/45.jpg" },

  { id: 46, name: "Eris Boreas Greyrat", series: "Mushoku Tensei", img: "src/img/waifu/46.jpg" },

  { id: 47, name: "Sylphiette", series: "Mushoku Tensei", img: "src/img/waifu/47.jpg" },

  { id: 48, name: "Roxy Migurdia", series: "Mushoku Tensei", img: "src/img/waifu/48.jpg" },

  { id: 49, name: "Tio Klarus", series: "Arifureta", img: "src/img/waifu/49.jpg" },

  { id: 50, name: "Shea Haulia", series: "Arifureta", img: "src/img/waifu/50.jpg" },

  { id: 51, name: "Yue", series: "Arifureta", img: "src/img/waifu/51.jpg" },

  { id: 52, name: "Shirasaki Kaori", series: "Arifureta", img: "src/img/waifu/52.jpg" },

  { id: 53, name: "Asuka Langley", series: "Evangelion", img: "src/img/waifu/53.jpg" },

  { id: 54, name: "Rei Ayanami", series: "Evangelion", img: "src/img/waifu/54.jpg" },

  { id: 55, name: "Mari Makinami", series: "Evangelion", img: "src/img/waifu/55.jpg" },

  { id: 56, name: "Motoko Kusanagi", series: "Ghost in the Shell", img: "src/img/waifu/56.jpg" },

  { id: 57, name: "Yoko Littner", series: "Gurren Lagann", img: "src/img/waifu/57.jpg" },

  { id: 58, name: "Mikoto Misaka", series: "Railgun", img: "src/img/waifu/58.jpg" },

  { id: 59, name: "Misaki Shokuhou", series: "Railgun", img: "src/img/waifu/59.jpg" },

  { id: 60, name: "Yui Hirasawa", series: "K-On!", img: "src/img/waifu/60.jpg" },

  { id: 61, name: "Mio Akiyama", series: "K-On!", img: "src/img/waifu/61.jpg" },

  { id: 62, name: "Azusa Nakano", series: "K-On!", img: "src/img/waifu/62.jpg" },

  { id: 63, name: "Tsumugi Kotobuki", series: "K-On!", img: "src/img/waifu/63.jpg" },

  { id: 64, name: "Ritsu Tainaka", series: "K-On!", img: "src/img/waifu/64.jpg" },

  { id: 65, name: "Nagatoro Hayase", series: "Nagatoro-san", img: "src/img/waifu/65.jpg" },

  { id: 66, name: "Komi Shouko", series: "Komi-san", img: "src/img/waifu/66.jpg" },

  { id: 67, name: "Yamada Anna", series: "Yamada-kun", img: "src/img/waifu/67.jpg" },

  { id: 68, name: "Yumeko Jabami", series: "Kakegurui", img: "src/img/waifu/68.jpg" },

  { id: 69, name: "Mary Saotome", series: "Kakegurui", img: "src/img/waifu/69.jpg" },

  { id: 70, name: "Sachiko Juraku", series: "Kakegurui", img: "src/img/waifu/70.jpg" },

  { id: 71, name: "Gasai Yuno", series: "Mirai Nikki", img: "src/img/waifu/71.jpg" },

  { id: 72, name: "Ai Enma", series: "Hell Girl", img: "src/img/waifu/72.jpg" },

  { id: 73, name: "Aoba Suzukaze", series: "New Game!", img: "src/img/waifu/73.jpg" },

  { id: 74, name: "Aoba Kou", series: "New Game!", img: "src/img/waifu/74.jpg" },

  { id: 75, name: "Aki Adagaki", series: "Masamune-kun no Revenge", img: "src/img/waifu/75.jpg" },

  { id: 76, name: "Yuzuki Eba", series: "Kimi no Iru Machi", img: "src/img/waifu/76.jpg" },

  { id: 77, name: "Violet Evergarden", series: "Violet Evergarden", img: "src/img/waifu/77.jpg" },

  { id: 78, name: "Cattleya Baudelaire", series: "Violet Evergarden", img: "src/img/waifu/78.jpg" },

  { id: 79, name: "Tohru", series: "Dragon Maid", img: "src/img/waifu/79.jpg" },

  { id: 80, name: "Lucoa", series: "Dragon Maid", img: "src/img/waifu/80.jpg" },

  { id: 81, name: "Elma", series: "Dragon Maid", img: "src/img/waifu/81.jpg" },

  { id: 82, name: "Rikka Takarada", series: "SSSS.Gridman", img: "src/img/waifu/82.jpg" },

  { id: 83, name: "Akane Shinjo", series: "SSSS.Gridman", img: "src/img/waifu/83.jpg" },

  { id: 84, name: "Lu Lulucy", series: "Isekai Nonbiri Nouka", img: "src/img/waifu/84.jpg" },

  { id: 85, name: "Maki Oze", series: "Fire Force", img: "src/img/waifu/85.jpg" },

  { id: 86, name: "Tamaki Kotatsu", series: "Fire Force", img: "src/img/waifu/86.jpg" },

  { id: 87, name: "Iris", series: "Fire Force", img: "src/img/waifu/87.jpg" },

  { id: 88, name: "Princess Hibana", series: "Fire Force", img: "src/img/waifu/88.jpg" },

  { id: 89, name: "Tsukasa Tsukuyomi", series: "Tonikaku Kawaii", img: "src/img/waifu/89.jpg" },

  { id: 90, name: "Kana Arima", series: "Oshi no Ko", img: "src/img/waifu/90.jpg" },

  { id: 91, name: "Akane Kurokawa", series: "Oshi no Ko", img: "src/img/waifu/91.jpg" },

  { id: 92, name: "Ruby Hoshino", series: "Oshi no Ko", img: "src/img/waifu/92.jpg" },

  { id: 93, name: "Ai Hoshino", series: "Oshi no Ko", img: "src/img/waifu/93.jpg" },

  { id: 94, name: "Alice Zuberg", series: "Sword Art Online", img: "src/img/waifu/94.jpg" },

  { id: 95, name: "Asuna Yuuki", series: "Sword Art Online", img: "src/img/waifu/95.jpg" },

  { id: 96, name: "Sinon", series: "Sword Art Online", img: "src/img/waifu/96.jpg" },

  { id: 97, name: "Leafa", series: "Sword Art Online", img: "src/img/waifu/97.jpg" },

  { id: 98, name: "Yuuki Konno", series: "Sword Art Online", img: "src/img/waifu/98.jpg" },

  { id: 99, name: "Rikka Takanashi", series: "Chuunibyou", img: "src/img/waifu/99.jpg" },

  { id: 100, name: "Satone Shichimiya", series: "Suki na Ko ga Megane wo Wasureta", img: "src/img/waifu/100.jpg" },

  { id: 101, name: "Sena Kashiwazaki", series: "Haganai", img: "src/img/waifu/101.jpg" },

  { id: 102, name: "Yozora Mikazuki", series: "Haganai", img: "src/img/waifu/102.jpg" },

  { id: 103, name: "Shinobu Oshino", series: "Monogatari", img: "src/img/waifu/103.jpg" },

  { id: 104, name: "Hitagi Senjougahara", series: "Monogatari", img: "src/img/waifu/104.jpg" },

  { id: 105, name: "Tsubasa Hanekawa", series: "Monogatari", img: "src/img/waifu/105.jpg" },

  { id: 106, name: "Karen Araragi", series: "Monogatari", img: "src/img/waifu/106.jpg" },

  { id: 107, name: "Tsukihi Araragi", series: "Monogatari", img: "src/img/waifu/107.jpg" },

  { id: 108, name: "Yotsugi Ononoki", series: "Monogatari", img: "src/img/waifu/108.jpg" },

  { id: 109, name: "Hoshino", series: "Blue Archive", img: "src/img/waifu/109.jpg" },

  { id: 110, name: "Arona", series: "Blue Archive", img: "src/img/waifu/110.jpg" },

  { id: 111, name: "Shiroko", series: "Blue Archive", img: "src/img/waifu/111.jpg" },

  { id: 112, name: "Toki", series: "Blue Archive", img: "src/img/waifu/112.jpg" },

  { id: 113, name: "Wakamo", series: "Blue Archive", img: "src/img/waifu/113.jpg" },

  { id: 114, name: "Yuka", series: "Blue Archive", img: "src/img/waifu/114.jpg" },

  { id: 115, name: "Koharu", series: "Blue Archive", img: "src/img/waifu/115.jpg" },

  { id: 116, name: "Mika", series: "Blue Archive", img: "src/img/waifu/116.jpg" },

  { id: 117, name: "Azusa", series: "Blue Archive", img: "src/img/waifu/117.jpg" },

  { id: 118, name: "Karin", series: "Blue Archive", img: "src/img/waifu/118.jpg" },

  { id: 119, name: "2B", series: "Nier Automata", img: "src/img/waifu/119.jpg" },

  { id: 120, name: "A2", series: "Nier Automata", img: "src/img/waifu/120.jpg" },

  { id: 121, name: "Eve", series: "Stellar Blade", img: "src/img/waifu/121.jpg" },

  { id: 122, name: "Zero", series: "Drakengard 3", img: "src/img/waifu/122.jpg" },

  { id: 123, name: "Sophie Neuenmuller", series: "Atelier Sophie", img: "src/img/waifu/123.jpg" },

  { id: 124, name: "Ryza Stout", series: "Atelier Ryza", img: "src/img/waifu/124.jpg" },

  { id: 125, name: "Velvet Crowe", series: "Tales of Berseria", img: "src/img/waifu/125.jpg" },

  { id: 126, name: "Eleanor Hume", series: "Tales of Berseria", img: "src/img/waifu/126.jpg" },

  { id: 127, name: "Shionne", series: "Tales of Arise", img: "src/img/waifu/127.jpg" },

  { id: 128, name: "Raiden Shogun", series: "Genshin Impact", img: "src/img/waifu/128.jpg" },

  { id: 129, name: "Yae Miko", series: "Genshin Impact", img: "src/img/waifu/129.jpg" },

  { id: 130, name: "Ganyu", series: "Genshin Impact", img: "src/img/waifu/130.jpg" },

  { id: 131, name: "Hu Tao", series: "Genshin Impact", img: "src/img/waifu/131.jpg" },

  { id: 132, name: "Keqing", series: "Genshin Impact", img: "src/img/waifu/132.jpg" },

  { id: 133, name: "Ningguang", series: "Genshin Impact", img: "src/img/waifu/133.jpg" },

  { id: 134, name: "Shenhe", series: "Genshin Impact", img: "src/img/waifu/134.jpg" },

  { id: 135, name: "Rosaria", series: "Genshin Impact", img: "src/img/waifu/135.jpg" },

  { id: 136, name: "Eula", series: "Genshin Impact", img: "src/img/waifu/136.jpg" },

  { id: 137, name: "Ayaka", series: "Genshin Impact", img: "src/img/waifu/137.jpg" },

  { id: 138, name: "Yoimiya", series: "Genshin Impact", img: "src/img/waifu/138.jpg" },

  { id: 139, name: "Kokomi", series: "Genshin Impact", img: "src/img/waifu/139.jpg" },

  { id: 140, name: "Yelan", series: "Genshin Impact", img: "src/img/waifu/140.jpg" },

  { id: 141, name: "Beidou", series: "Genshin Impact", img: "src/img/waifu/141.jpg" },

  { id: 142, name: "Fischl", series: "Genshin Impact", img: "src/img/waifu/142.jpg" },

  { id: 143, name: "Lisa", series: "Genshin Impact", img: "src/img/waifu/143.jpg" },

  { id: 144, name: "Jean", series: "Genshin Impact", img: "src/img/waifu/144.jpg" },

  { id: 145, name: "Amber", series: "Genshin Impact", img: "src/img/waifu/145.jpg" },

  { id: 146, name: "Xiangling", series: "Genshin Impact", img: "src/img/waifu/146.jpg" },

  { id: 147, name: "Faruzan", series: "Genshin Impact", img: "src/img/waifu/147.jpg" },

  { id: 148, name: "Navia", series: "Genshin Impact", img: "src/img/waifu/148.jpg" },

  { id: 149, name: "Clorinde", series: "Genshin Impact", img: "src/img/waifu/149.jpg" },

  { id: 150, name: "Arlecchino", series: "Genshin Impact", img: "src/img/waifu/150.jpg" },

  { id: 151, name: "Kafka", series: "Honkai Star Rail", img: "src/img/waifu/151.jpg" },

  { id: 152, name: "Silver Wolf", series: "Honkai Star Rail", img: "src/img/waifu/152.jpg" },

  { id: 153, name: "Jingliu", series: "Honkai Star Rail", img: "src/img/waifu/153.jpg" },

  { id: 154, name: "Himeko", series: "Honkai Star Rail", img: "src/img/waifu/154.jpg" },

  { id: 155, name: "Seele", series: "Honkai Star Rail", img: "src/img/waifu/155.jpg" },

  { id: 156, name: "Bronya", series: "Honkai Star Rail", img: "src/img/waifu/156.jpg" },

  { id: 157, name: "Sparkle", series: "Honkai Star Rail", img: "src/img/waifu/157.jpg" },

  { id: 158, name: "Cyrene", series: "Honkai Star Rail", img: "src/img/waifu/158.jpg" },

  { id: 159, name: "Black Swan", series: "Honkai Star Rail", img: "src/img/waifu/159.jpg" },

  { id: 160, name: "Topaz", series: "Honkai Star Rail", img: "src/img/waifu/160.jpg" },

  { id: 161, name: "Acheron", series: "Honkai Star Rail", img: "src/img/waifu/161.jpg" },

  { id: 162, name: "Huohuo", series: "Honkai Star Rail", img: "src/img/waifu/162.jpg" },

  { id: 163, name: "Robin", series: "Honkai Star Rail", img: "src/img/waifu/163.jpg" },

  { id: 164, name: "Kiana", series: "Honkai Impact 3rd", img: "src/img/waifu/164.jpg" },

  { id: 165, name: "Mei", series: "Honkai Impact 3rd", img: "src/img/waifu/165.jpg" },

  { id: 166, name: "Bronya (HI3)", series: "Honkai Impact 3rd", img: "src/img/waifu/166.jpg" },

  { id: 167, name: "Elysia", series: "Honkai Impact 3rd", img: "src/img/waifu/167.jpg" },

  { id: 168, name: "Mobius", series: "Honkai Impact 3rd", img: "src/img/waifu/168.jpg" },

  { id: 169, name: "Durandal", series: "Honkai Impact 3rd", img: "src/img/waifu/169.jpg" },

  { id: 170, name: "Rita Rossweisse", series: "Honkai Impact 3rd", img: "src/img/waifu/170.jpg" },

  { id: 171, name: "Rozaliya", series: "Honkai Impact 3rd", img: "src/img/waifu/171.jpg" },

  { id: 172, name: "Liliya", series: "Honkai Impact 3rd", img: "src/img/waifu/172.jpg" },

  { id: 173, name: "Jinhsi", series: "Wuthering Waves", img: "src/img/waifu/173.jpg" },

  { id: 174, name: "Yinlin", series: "Wuthering Waves", img: "src/img/waifu/174.jpg" },

  { id: 175, name: "Mornye", series: "Wuthering Waves", img: "src/img/waifu/175.jpg" },

  { id: 176, name: "Sanhua", series: "Wuthering Waves", img: "src/img/waifu/176.jpg" },

  { id: 177, name: "Verina", series: "Wuthering Waves", img: "src/img/waifu/177.jpg" },

  { id: 178, name: "Jianxin", series: "Wuthering Waves", img: "src/img/waifu/178.jpg" },

  { id: 179, name: "Chixia", series: "Wuthering Waves", img: "src/img/waifu/179.jpg" },

  { id: 180, name: "Baizhi", series: "Wuthering Waves", img: "src/img/waifu/180.jpg" },

  { id: 181, name: "Augusta", series: "Wuthering Waves", img: "src/img/waifu/181.jpg" },

  { id: 182, name: "Camellya", series: "Wuthering Waves", img: "src/img/waifu/182.jpg" },

  { id: 183, name: "Cantarella", series: "Wuthering Waves", img: "src/img/waifu/183.jpg" },

  { id: 184, name: "Carlotta", series: "Wuthering Waves", img: "src/img/waifu/184.jpg" },

  { id: 185, name: "Cartethyia", series: "Wuthering Waves", img: "src/img/waifu/185.jpg" },

  { id: 186, name: "Changli", series: "Wuthering Waves", img: "src/img/waifu/186.jpg" },

  { id: 187, name: "Chisa", series: "Wuthering Waves", img: "src/img/waifu/187.jpg" },

  { id: 188, name: "Ciaccona", series: "Wuthering Waves", img: "src/img/waifu/188.jpg" },

  { id: 189, name: "Galbrena", series: "Wuthering Waves", img: "src/img/waifu/189.jpg" },

  { id: 190, name: "Iuno", series: "Wuthering Waves", img: "src/img/waifu/190.jpg" },

  { id: 191, name: "Lupa", series: "Wuthering Waves", img: "src/img/waifu/191.jpg" },

  { id: 192, name: "Phrolova", series: "Wuthering Waves", img: "src/img/waifu/192.jpg" },

  { id: 193, name: "Roccia", series: "Wuthering Waves", img: "src/img/waifu/193.jpg" },

  { id: 194, name: "F Rover", series: "Wuthering Waves", img: "src/img/waifu/194.jpg" },

  { id: 195, name: "Shorekeeper", series: "Wuthering Waves", img: "src/img/waifu/195.jpg" },

  { id: 196, name: "Zani", series: "Wuthering Waves", img: "src/img/waifu/196.jpg" },

  { id: 197, name: "Zhezhi", series: "Wuthering Waves", img: "src/img/waifu/197.jpg" },

  { id: 198, name: "Lumi", series: "Wuthering Waves", img: "src/img/waifu/198.jpg" },

  { id: 199, name: "Taoqi", series: "Wuthering Waves", img: "src/img/waifu/199.jpg" },

  { id: 200, name: "Lucilla", series: "Wuthering Waves", img: "src/img/waifu/200.jpg" },

  { id: 201, name: "Sigrika", series: "Wuthering Waves", img: "src/img/waifu/201.jpg" },
  
  { id: 202, name: "Lynae", series: "Wuthering Waves", img: "src/img/waifu/202.jpg" },


];
