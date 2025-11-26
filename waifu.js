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

  { id: 121, name: "Kaine", series: "Nier", img: "src/img/waifu/121.jpg" },

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

  { id: 157, name: "Hanabi", series: "Honkai Star Rail", img: "src/img/waifu/157.jpg" },

  { id: 158, name: "Sparkle", series: "Honkai Star Rail", img: "src/img/waifu/158.jpg" },

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

  { id: 175, name: "Encore", series: "Wuthering Waves", img: "src/img/waifu/175.jpg" },

  { id: 176, name: "Sanhua", series: "Wuthering Waves", img: "src/img/waifu/176.jpg" },

  { id: 177, name: "Verina", series: "Wuthering Waves", img: "src/img/waifu/177.jpg" },

  { id: 178, name: "Jianxin", series: "Wuthering Waves", img: "src/img/waifu/178.jpg" },

  { id: 179, name: "Chixia", series: "Wuthering Waves", img: "src/img/waifu/179.jpg" },

  { id: 180, name: "Baizhi", series: "Wuthering Waves", img: "src/img/waifu/180.jpg" },

  { id: 181, name: "Texas", series: "Arknights", img: "src/img/waifu/181.jpg" },

  { id: 182, name: "Exusiai", series: "Arknights", img: "src/img/waifu/182.jpg" },

  { id: 183, name: "Amiya", series: "Arknights", img: "src/img/waifu/183.jpg" },

  { id: 184, name: "Skadi", series: "Arknights", img: "src/img/waifu/184.jpg" },

  { id: 185, name: "Surtr", series: "Arknights", img: "src/img/waifu/185.jpg" },

  { id: 186, name: "Blaze", series: "Arknights", img: "src/img/waifu/186.jpg" },

  { id: 187, name: "Lappland", series: "Arknights", img: "src/img/waifu/187.jpg" },

  { id: 188, name: "Ch'en", series: "Arknights", img: "src/img/waifu/188.jpg" },

  { id: 189, name: "Kal'tsit", series: "Arknights", img: "src/img/waifu/189.jpg" },

  { id: 190, name: "Angelina", series: "Arknights", img: "src/img/waifu/190.jpg" },

  { id: 191, name: "Enterprise", series: "Azur Lane", img: "src/img/waifu/191.jpg" },

  { id: 192, name: "Belfast", series: "Azur Lane", img: "src/img/waifu/192.jpg" },

  { id: 193, name: "Taihou", series: "Azur Lane", img: "src/img/waifu/193.jpg" },

  { id: 194, name: "Atago", series: "Azur Lane", img: "src/img/waifu/194.jpg" },

  { id: 195, name: "Takao", series: "Azur Lane", img: "src/img/waifu/195.jpg" },

  { id: 196, name: "Prinz Eugen", series: "Azur Lane", img: "src/img/waifu/196.jpg" },

  { id: 197, name: "Unicorn", series: "Azur Lane", img: "src/img/waifu/197.jpg" },

  { id: 198, name: "Akagi", series: "Azur Lane", img: "src/img/waifu/198.jpg" },

  { id: 199, name: "Kaga", series: "Azur Lane", img: "src/img/waifu/199.jpg" },

  { id: 200, name: "Illustrious", series: "Azur Lane", img: "src/img/waifu/200.jpg" },

  { id: 201, name: "Artoria Pendragon", series: "Fate", img: "src/img/waifu/201.jpg" },

  { id: 202, name: "Jeanne d’Arc", series: "Fate", img: "src/img/waifu/202.jpg" },

  { id: 203, name: "Mashu Kyrielight", series: "Fate", img: "src/img/waifu/203.jpg" },

  { id: 204, name: "Scathach", series: "Fate", img: "src/img/waifu/204.jpg" },

  { id: 205, name: "Tamamo no Mae", series: "Fate", img: "src/img/waifu/205.jpg" },

  { id: 206, name: "Mordred", series: "Fate", img: "src/img/waifu/206.jpg" },

  { id: 207, name: "Ishtar", series: "Fate", img: "src/img/waifu/207.jpg" },

  { id: 208, name: "Ereshkigal", series: "Fate", img: "src/img/waifu/208.jpg" },

  { id: 209, name: "Rin Tohsaka", series: "Fate", img: "src/img/waifu/209.jpg" },

  { id: 210, name: "Sakura Matou", series: "Fate", img: "src/img/waifu/210.jpg" },

  { id: 211, name: "Edelgard", series: "Fire Emblem", img: "src/img/waifu/211.jpg" },

  { id: 212, name: "Byleth (F)", series: "Fire Emblem", img: "src/img/waifu/212.jpg" },

  { id: 213, name: "Lucina", series: "Fire Emblem", img: "src/img/waifu/213.jpg" },

  { id: 214, name: "Tharja", series: "Fire Emblem", img: "src/img/waifu/214.jpg" },

  { id: 215, name: "Camilla", series: "Fire Emblem", img: "src/img/waifu/215.jpg" },

  { id: 216, name: "Lyn", series: "Fire Emblem", img: "src/img/waifu/216.jpg" },

  { id: 217, name: "Azura", series: "Fire Emblem", img: "src/img/waifu/217.jpg" },

  { id: 218, name: "Corrin (F)", series: "Fire Emblem", img: "src/img/waifu/218.jpg" },

  { id: 219, name: "Severa", series: "Fire Emblem", img: "src/img/waifu/219.jpg" },

  { id: 220, name: "Anna", series: "Fire Emblem", img: "src/img/waifu/220.jpg" },

  { id: 221, name: "Haruna", series: "Kancolle", img: "src/img/waifu/221.jpg" },

  { id: 222, name: "Kongou", series: "Kancolle", img: "src/img/waifu/222.jpg" },

  { id: 223, name: "Shimakaze", series: "Kancolle", img: "src/img/waifu/223.jpg" },

  { id: 224, name: "Musashi", series: "Kancolle", img: "src/img/waifu/224.jpg" },

  { id: 225, name: "Iowa", series: "Kancolle", img: "src/img/waifu/225.jpg" },

  { id: 226, name: "Graf Zeppelin", series: "Kancolle", img: "src/img/waifu/226.jpg" },

  { id: 227, name: "Tifa Lockhart", series: "Final Fantasy VII", img: "src/img/waifu/227.jpg" },

  { id: 228, name: "Aerith Gainsborough", series: "Final Fantasy VII", img: "src/img/waifu/228.jpg" },

  { id: 229, name: "Yuffie Kisaragi", series: "Final Fantasy VII", img: "src/img/waifu/229.jpg" },

  { id: 230, name: "Rikku", series: "Final Fantasy X", img: "src/img/waifu/230.jpg" },

  { id: 231, name: "Lulu", series: "Final Fantasy X", img: "src/img/waifu/231.jpg" },

  { id: 232, name: "Lightning", series: "Final Fantasy XIII", img: "src/img/waifu/232.jpg" },

  { id: 233, name: "Serah Farron", series: "Final Fantasy XIII", img: "src/img/waifu/233.jpg" },

  { id: 234, name: "Fang", series: "Final Fantasy XIII", img: "src/img/waifu/234.jpg" },

  { id: 235, name: "Quistis Trepe", series: "Final Fantasy VIII", img: "src/img/waifu/235.jpg" },

  { id: 236, name: "Rinoa Heartilly", series: "Final Fantasy VIII", img: "src/img/waifu/236.jpg" },

  { id: 237, name: "Selphie Tilmitt", series: "Final Fantasy VIII", img: "src/img/waifu/237.jpg" },

  { id: 238, name: "Sophitia", series: "Soul Calibur", img: "src/img/waifu/238.jpg" },

  { id: 239, name: "Taki", series: "Soul Calibur", img: "src/img/waifu/239.jpg" },

  { id: 240, name: "Ivy Valentine", series: "Soul Calibur", img: "src/img/waifu/240.jpg" },

  { id: 241, name: "KOS-MOS", series: "Xenosaga", img: "src/img/waifu/241.jpg" },

  { id: 242, name: "Pyra", series: "Xenoblade Chronicles 2", img: "src/img/waifu/242.jpg" },

  { id: 243, name: "Mythra", series: "Xenoblade Chronicles 2", img: "src/img/waifu/243.jpg" },

  { id: 244, name: "Melia Antiqua", series: "Xenoblade Chronicles", img: "src/img/waifu/244.jpg" },

  { id: 245, name: "Fiora", series: "Xenoblade Chronicles", img: "src/img/waifu/245.jpg" },

  { id: 246, name: "Elma", series: "Xenoblade Chronicles X", img: "src/img/waifu/246.jpg" },

  { id: 247, name: "Aigis", series: "Persona 3", img: "src/img/waifu/247.jpg" },

  { id: 248, name: "Mitsuru Kirijo", series: "Persona 3", img: "src/img/waifu/248.jpg" },

  { id: 249, name: "Yukari Takeba", series: "Persona 3", img: "src/img/waifu/249.jpg" },

  { id: 250, name: "Rise Kujikawa", series: "Persona 4", img: "src/img/waifu/250.jpg" },

  { id: 251, name: "Chie Satonaka", series: "Persona 4", img: "src/img/waifu/251.jpg" },

  { id: 252, name: "Naoto Shirogane", series: "Persona 4", img: "src/img/waifu/252.jpg" },

  { id: 253, name: "Ann Takamaki", series: "Persona 5", img: "src/img/waifu/253.jpg" },

  { id: 254, name: "Makoto Niijima", series: "Persona 5", img: "src/img/waifu/254.jpg" },

  { id: 255, name: "Hifumi Togo", series: "Persona 5", img: "src/img/waifu/255.jpg" },

  { id: 256, name: "Kasumi Yoshizawa", series: "Persona 5", img: "src/img/waifu/256.jpg" },

  { id: 257, name: "Futaba Sakura", series: "Persona 5", img: "src/img/waifu/257.jpg" },

  { id: 258, name: "Tae Takemi", series: "Persona 5", img: "src/img/waifu/258.jpg" },

  { id: 259, name: "Haru Okumura", series: "Persona 5", img: "src/img/waifu/259.jpg" },

  { id: 260, name: "Sae Nijima", series: "Persona 5", img: "src/img/waifu/260.jpg" },

  { id: 261, name: "Celestia Ludenberg", series: "Danganronpa", img: "src/img/waifu/261.jpg" },

  { id: 262, name: "Junko Enoshima", series: "Danganronpa", img: "src/img/waifu/262.jpg" },

  { id: 263, name: "Kyoko Kirigiri", series: "Danganronpa", img: "src/img/waifu/263.jpg" },

  { id: 264, name: "Chiaki Nanami", series: "Danganronpa", img: "src/img/waifu/264.jpg" },

  { id: 265, name: "Ibuki Mioda", series: "Danganronpa", img: "src/img/waifu/265.jpg" },

  { id: 266, name: "Vivy", series: "Vivy", img: "src/img/waifu/266.jpg" },

  { id: 267, name: "Shiranui", series: "Arknights", img: "src/img/waifu/267.jpg" },

  { id: 268, name: "Ines", series: "Arknights", img: "src/img/waifu/268.jpg" },

  { id: 269, name: "Saber Alter", series: "Fate", img: "src/img/waifu/269.jpg" },

  { id: 270, name: "Gray", series: "Fate", img: "src/img/waifu/270.jpg" },

  { id: 271, name: "M4A1", series: "Girls' Frontline", img: "src/img/waifu/271.jpg" },

  { id: 272, name: "HK416", series: "Girls' Frontline", img: "src/img/waifu/272.jpg" },

  { id: 273, name: "SOPMOD II", series: "Girls' Frontline", img: "src/img/waifu/273.jpg" },

  { id: 274, name: "UMP45", series: "Girls' Frontline", img: "src/img/waifu/274.jpg" },

  { id: 275, name: "UMP9", series: "Girls' Frontline", img: "src/img/waifu/275.jpg" },

  { id: 276, name: "AN-94", series: "Girls' Frontline", img: "src/img/waifu/276.jpg" },

  { id: 277, name: "Kalina", series: "Girls' Frontline", img: "src/img/waifu/277.jpg" },

  { id: 278, name: "Persephone", series: "Hades", img: "src/img/waifu/278.jpg" },

  { id: 279, name: "Megaera", series: "Hades", img: "src/img/waifu/279.jpg" },

  { id: 280, name: "Artemis", series: "Hades", img: "src/img/waifu/280.jpg" },

  { id: 281, name: "Aphrodite", series: "Hades", img: "src/img/waifu/281.jpg" },

  { id: 282, name: "Cassandra", series: "Assassin’s Creed Odyssey", img: "src/img/waifu/282.jpg" },

  { id: 283, name: "Evie Frye", series: "Assassin’s Creed Syndicate", img: "src/img/waifu/283.jpg" },

  { id: 284, name: "Ada Wong", series: "Resident Evil", img: "src/img/waifu/284.jpg" },

  { id: 285, name: "Claire Redfield", series: "Resident Evil", img: "src/img/waifu/285.jpg" },

  { id: 286, name: "Jill Valentine", series: "Resident Evil", img: "src/img/waifu/286.jpg" },

  { id: 287, name: "Lady Dimitrescu", series: "Resident Evil Village", img: "src/img/waifu/287.jpg" },

  { id: 288, name: "Diona", series: "Genshin Impact", img: "src/img/waifu/288.jpg" },

  { id: 289, name: "Sucrose", series: "Genshin Impact", img: "src/img/waifu/289.jpg" },

  { id: 290, name: "Lynn", series: "Fate Samurai Remnant", img: "src/img/waifu/290.jpg" },

  { id: 291, name: "Makima (Alt)", series: "Chainsaw Man", img: "src/img/waifu/291.jpg" },

  { id: 292, name: "Lila Decyrus", series: "Final Fantasy XV", img: "src/img/waifu/292.jpg" },

  { id: 293, name: "Gentiana", series: "Final Fantasy XV", img: "src/img/waifu/293.jpg" },

  { id: 294, name: "Shiva", series: "Final Fantasy", img: "src/img/waifu/294.jpg" },

  { id: 295, name: "Akari Yuki", series: "Asteroid in Love", img: "src/img/waifu/295.jpg" },

  { id: 296, name: "Hina Amano", series: "Weathering With You", img: "src/img/waifu/296.jpg" },

  { id: 297, name: "Mitsuha Miyamizu", series: "Your Name", img: "src/img/waifu/297.jpg" },

  { id: 298, name: "Asirpa", series: "Golden Kamuy", img: "src/img/waifu/298.jpg" },

  { id: 299, name: "Saeko Busujima", series: "Highschool of the Dead", img: "src/img/waifu/299.jpg" },

  { id: 300, name: "Rei Miyamoto", series: "Highschool of the Dead", img: "src/img/waifu/300.jpg" },

  { id: 301, name: "Saya Takagi", series: "Highschool of the Dead", img: "src/img/waifu/301.jpg" },

  { id: 302, name: "Ruri Miyamoto", series: "Nisekoi", img: "src/img/waifu/302.jpg" },

  { id: 303, name: "Chitoge Kirisaki", series: "Nisekoi", img: "src/img/waifu/303.jpg" },

  { id: 304, name: "Onodera Kosaki", series: "Nisekoi", img: "src/img/waifu/304.jpg" },

  { id: 305, name: "Marika Tachibana", series: "Nisekoi", img: "src/img/waifu/305.jpg" },

  { id: 306, name: "Rangiku Matsumoto", series: "Bleach", img: "src/img/waifu/306.jpg" },

  { id: 307, name: "Soifon", series: "Bleach", img: "src/img/waifu/307.jpg" },

  { id: 308, name: "Nemu Kurotsuchi", series: "Bleach", img: "src/img/waifu/308.jpg" },

  { id: 309, name: "Nezuko Kamado", series: "Demon Slayer", img: "src/img/waifu/309.jpg" },

  { id: 310, name: "Shinobu Kocho", series: "Demon Slayer", img: "src/img/waifu/310.jpg" },

  { id: 311, name: "Mitsuri Kanroji", series: "Demon Slayer", img: "src/img/waifu/311.jpg" },

  { id: 312, name: "Daki", series: "Demon Slayer", img: "src/img/waifu/312.jpg" },

  { id: 313, name: "Tamayo", series: "Demon Slayer", img: "src/img/waifu/313.jpg" },

  { id: 314, name: "Roxy Lalonde", series: "Homestuck", img: "src/img/waifu/314.jpg" },

  { id: 315, name: "Yor Forger", series: "Spy x Family", img: "src/img/waifu/315.jpg" },

  { id: 316, name: "Fiona Frost", series: "Spy x Family", img: "src/img/waifu/316.jpg" },

  { id: 317, name: "Nightfall", series: "Spy x Family", img: "src/img/waifu/317.jpg" },

  { id: 318, name: "Shuna (Alt)", series: "Tensei Slime", img: "src/img/waifu/318.jpg" },

  { id: 319, name: "Momoyo Kawakami", series: "MajiKoi!", img: "src/img/waifu/319.jpg" },

  { id: 320, name: "Chris Yukine", series: "Symphogear", img: "src/img/waifu/320.jpg" }
];
