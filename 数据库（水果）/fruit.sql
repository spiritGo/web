-- fruit.sql
SET NAMES UTF8;
DROP DATABASE IF EXISTS fruit;
CREATE DATABASE fruit CHARSET=UTF8;

USE fruit;
CREATE TABLE fruit_type(
	ftId INT PRIMARY KEY AUTO_INCREMENT,
	fsection VARCHAR(20), 		  #所属科目
	ftype VARCHAR(20),	  		  #所属类别
	fname VARCHAR(50) UNIQUE,	  #水果名
	furl VARCHAR(128) UNIQUE
);

INSERT INTO fruit_type VALUES(NULL,"蔷薇科","梨果","苹果","./images/apple.jpg");  #apple
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","梨果","沙果","./images/crabapple.jpg");  #crabapple
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","梨果","海棠","./images/cherry-apple_tree.JPG");	 #cherry-apple_tree
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","梨果","野樱莓","./images/Aronia.jpg"); #Aronia
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","梨果","枇杷","./images/loquat.jpg");  #loquat
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","梨果","欧楂","./images/medlars.jpg");  #medlars
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","梨果","山楂","./images/hawthorn.jpg");  #hawthorn
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","梨果","梨（香梨、雪梨 等）","./images/pear.jpg");  #pear
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","梨果","温柏","./images/quince.jpg");  #quince
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","梨果","蔷薇果","./images/rose_bud.jpg");  #rose_bud
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","梨果","花楸","./images/mountain_ash.jpg");  #mountain_ash

INSERT INTO fruit_type VALUES(NULL,"蔷薇科","核果","樱桃","./images/cherry.jpg");  #cherry
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","核果","桃（水蜜桃、油桃、蟠桃等）","./images/peach.jpg");  #peach
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","核果","李子","./images/plum.jpg");  #plum
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","核果","梅子（青梅）","./images/plums");  #plums
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","核果","西梅","./images/prune.jpg");  #prune
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","核果","白玉樱桃","./images/White_cherry.jpg");  #White_cherry

INSERT INTO fruit_type VALUES(NULL,"蔷薇科","聚合核果","黑莓","./images/blackberry.jpg");  #blackberry
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","聚合核果","覆盆子","./images/raspberry.jpg");  #raspberry
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","聚合核果","罗甘莓","./images/loganberry.jpg");  #loganberry
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","聚合核果","白里叶莓","./images/wineberry.jpg");  #wineberry
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","聚合核果","云莓","./images/molka.jpg");  #molka

INSERT INTO fruit_type VALUES(NULL,"蔷薇科","瘦果","草莓","./images/strawberry.jpg");  #strawberry
INSERT INTO fruit_type VALUES(NULL,"蔷薇科","瘦果","菠萝莓","./images/pineberry.jpg");  #pineberry

INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","橘子","./images/tangerine.jpg");  #tangerine
INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","砂糖桔","./images/citrus_shatangju.jpg");  #citrus_shatangju
INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","橙子","./images/orange/jpg");  #orange
INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","柠檬","./images/lemon.jpg");  #lemon
INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","青柠","./images/lime.jpg");  #lime
INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","柚子","./images/grapefruit.jpg");  #grapefruit
INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","金桔","./images/kumquat.jpg");  #kumquat
INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","葡萄柚","./images/putao_grapefruit.jpg");  #putao_grapefruit
INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","香橼","./images/citron.jpg");  #citron
INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","佛手","./images/fingered_citron.jpg");  #fingered_citron
INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","指橙","./images/refers_orange.jpeg");  #refers_orange
INSERT INTO fruit_type VALUES(NULL,"芸香科","柑果","黄皮果","./images/wampee_fruit.jpg");  #wampee_fruit

INSERT INTO fruit_type VALUES(NULL,"葫芦科","瓠果","哈密瓜","./images/hami_melon.jpg");  #hami_melon
INSERT INTO fruit_type VALUES(NULL,"葫芦科","瓠果","香瓜","./images/muskmelon.jpg");  #muskmelon
INSERT INTO fruit_type VALUES(NULL,"葫芦科","瓠果","白兰瓜","./honey_dew_melon.jpg");  #honey_dew_melon
INSERT INTO fruit_type VALUES(NULL,"葫芦科","瓠果","刺角瓜","./images/horned_melon.jpg");  #horned_melon
INSERT INTO fruit_type VALUES(NULL,"葫芦科","瓠果","金铃子（癞葡萄）","./images/chinaberry.jpg");  #chinaberry

INSERT INTO fruit_type VALUES(NULL,"芭蕉科",NULL,"香蕉","./images/banana.jpg");  #banana
INSERT INTO fruit_type VALUES(NULL,"芭蕉科",NULL,"大蕉","./images/plantain.jpg"); #plantain
INSERT INTO fruit_type VALUES(NULL,"芭蕉科",NULL,"南洋红香蕉","./images/nanyang_red_banana.jpg");  #nanyang_red_banana

INSERT INTO fruit_type VALUES(NULL,"鼠李科","核果","枣","./images/jujube/jpg");  #jujube

INSERT INTO fruit_type VALUES(NULL,"葡萄科","浆果","葡萄","./images/grape/jpg");  #grape
INSERT INTO fruit_type VALUES(NULL,"葡萄科","浆果","提子","./images/concord_grape.jpg");  #concord_grape
INSERT INTO fruit_type VALUES(NULL,"葡萄科","浆果","醋栗","./images/gooseberry.jpg");  #gooseberry
INSERT INTO fruit_type VALUES(NULL,"葡萄科","浆果","黑醋栗","./images/blackcurrant.jpg");  #blackcurrant
INSERT INTO fruit_type VALUES(NULL,"葡萄科","浆果","红醋栗","./images/garnetberry.jpg");  #garnetberry

INSERT INTO fruit_type VALUES(NULL,"杜鹃花科","浆果","蓝莓","./images/blueberry.jpg");  #blueberry
INSERT INTO fruit_type VALUES(NULL,"杜鹃花科","浆果","蔓越莓","./images/cranberry.jpg");  #cranberry
INSERT INTO fruit_type VALUES(NULL,"杜鹃花科","浆果","越橘","./images/huckleberry.jpeg");	#huckleberry
INSERT INTO fruit_type VALUES(NULL,"杜鹃花科","浆果","乌饭果","./images/blueberries.jpeg");  #blueberries

INSERT INTO fruit_type VALUES(NULL,"漆树科","核果","芒果","./images/mango.jpg");  #mango

INSERT INTO fruit_type VALUES(NULL,"猕猴桃科",NULL,"猕猴桃（奇异果）","./images/kiwi_fruit.jpg");  #kiwi_fruit
INSERT INTO fruit_type VALUES(NULL,"猕猴桃科",NULL,"黄心猕猴桃","./images/yellow_heart_kiwi.jpg");  #yellow_heart_kiwi
INSERT INTO fruit_type VALUES(NULL,"猕猴桃科",NULL,"软枣猕猴桃（奇异莓）","./images/arguta.jpg");  #arguta
INSERT INTO fruit_type VALUES(NULL,"猕猴桃科",NULL,"红心猕猴桃","./images/kiwi_hearts.jpg");  #kiwi_hearts

INSERT INTO fruit_type VALUES(NULL,"凤梨科",NULL,"菠萝（凤梨）","./images/pineapple.jpg");  #pineapple

INSERT INTO fruit_type VALUES(NULL,"杨梅科","核果","杨梅","./images/waxberry.jpg");  #waxberry

INSERT INTO fruit_type VALUES(NULL,"柿科",NULL,"柿子","./images/persimmon.jpg");  #persimmon
INSERT INTO fruit_type VALUES(NULL,"柿科",NULL,"黑枣（君迁子）","./images/dateplum_persimmon.jpg");  #dateplum_persimmon
INSERT INTO fruit_type VALUES(NULL,"柿科",NULL,"黑柿","./images/black_persimmon.jpg");  #black_persimmon

INSERT INTO fruit_type VALUES(NULL,"番木瓜科","瓠果","番木瓜","./images/papaya.jpg");  #papaya

INSERT INTO fruit_type VALUES(NULL,"桑科",NULL,"桑葚（桑椹）","./images/mulberry.jpg");  #mulberry
INSERT INTO fruit_type VALUES(NULL,"桑科",NULL,"菠萝蜜","./images/jack_fruit.jpg");  #jack_fruit
INSERT INTO fruit_type VALUES(NULL,"桑科",NULL,"构树果实","./images/fruit_papyrifera.jpg");  #fruit_papyrifera
INSERT INTO fruit_type VALUES(NULL,"桑科",NULL,"牛奶果","./images/vu_sua.jpg");  #vu_sua

INSERT INTO fruit_type VALUES(NULL,"仙人掌科","浆果","火龙果","./images/dragon_fruit.jpg");  #dragon_fruit
INSERT INTO fruit_type VALUES(NULL,"仙人掌科","浆果","黄龙果","./images/huang_longguo.jpg");  #huang_longguo
INSERT INTO fruit_type VALUES(NULL,"仙人掌科","浆果","红心火龙果","./images/red_pitaya.jpg");  #red_pitaya
INSERT INTO fruit_type VALUES(NULL,"仙人掌科","浆果","仙人掌果","./images/prickly_pear.jpg");  #prickly_pear

INSERT INTO fruit_type VALUES(NULL,"无患子科","核果","荔枝","./images/litchi.jpg");  #litchi
INSERT INTO fruit_type VALUES(NULL,"无患子科","核果","龙眼（桂圆）","./images/longan.jpg");  #longan
INSERT INTO fruit_type VALUES(NULL,"无患子科","核果","红毛丹","./images/rambutan.jpg");  #rambutan

INSERT INTO fruit_type VALUES(NULL,"无患子科","蒴果","榴莲","./images/durian.jpg");  #durian
INSERT INTO fruit_type VALUES(NULL,"无患子科","蒴果","猴面包果（猴面包树的果实）","./images/monkey_breadfruit.jpg");  #monkey_breadfruit

INSERT INTO fruit_type VALUES(NULL,"酢浆草科","浆果","阳桃","./images/carambola.jpg");  #carambola

INSERT INTO fruit_type VALUES(NULL,"千屈菜科",NULL,"石榴","./images/pomegranate.jpg");  #pomegranate

INSERT INTO fruit_type VALUES(NULL,"棕榈科","核果","椰子","./images/coconut.jpg");  # coconut
INSERT INTO fruit_type VALUES(NULL,"棕榈科","核果","槟榔","./images/areca_nut.jpg");  #areca_nut
INSERT INTO fruit_type VALUES(NULL,"棕榈科","核果","海枣（椰枣）","./images/phoenix_dactylifera.jpg");  #phoenix_dactylifera
INSERT INTO fruit_type VALUES(NULL,"棕榈科","核果","蛇皮果","./images/snake_fruit.jpg");  #snake_fruit
INSERT INTO fruit_type VALUES(NULL,"棕榈科","浆果","阿萨伊浆果","./images/assai_berries.jpeg");  #assai_berries

INSERT INTO fruit_type VALUES(NULL,"藤黄科",NULL,"山竹","./images/mangosteen.jpg");  #mangosteen

INSERT INTO fruit_type VALUES(NULL,"桃金娘科",NULL,"莲雾","./images/wax_apple.jpg");  #wax_apple
INSERT INTO fruit_type VALUES(NULL,"桃金娘科",NULL,"嘉宝果","./images/jaboticaba.jpg");  #jaboticaba
INSERT INTO fruit_type VALUES(NULL,"桃金娘科",NULL,"番石榴","./images/guava.jpg");  #guava
INSERT INTO fruit_type VALUES(NULL,"桃金娘科",NULL,"菲油果","./images/feijoa_sellowiana.jpg");  #feijoa_sellowiana
INSERT INTO fruit_type VALUES(NULL,"桃金娘科",NULL,"苏里南苦樱桃","./images/eugenia_uniflora.jpg");  #eugenia_uniflora

INSERT INTO fruit_type VALUES(NULL,"西番莲科",NULL,"西番莲（百香果/热情果/鸡蛋果）","./images/passion_flower.jpg");  #passion_flower

INSERT INTO fruit_type VALUES(NULL,"樟科",NULL,"牛油果（鳄梨）","./images/avocado.jpg");  #avocado

INSERT INTO fruit_type VALUES(NULL,"番荔枝科",NULL,"番荔枝","./images/sweetsop.jpg");  #sweetsop
INSERT INTO fruit_type VALUES(NULL,"番荔枝科",NULL,"牛心果（牛心番荔枝）","./images/bullock.jpeg");  #bullock's-heart

INSERT INTO fruit_type VALUES(NULL,"茄科",NULL,"枸杞","./images/medlar.jpg");  #medlar
INSERT INTO fruit_type VALUES(NULL,"茄科",NULL,"香瓜茄（人参果）","./images/pepino.jpg");  #pepino
INSERT INTO fruit_type VALUES(NULL,"茄科",NULL,"灯笼果","./images/poha.jpg");  #poha
INSERT INTO fruit_type VALUES(NULL,"茄科",NULL,"圣女果（小番茄）","./images/cherry_tomato.jpg");  #cherry_tomato

INSERT INTO fruit_type VALUES(NULL,"胡颓子科",NULL,"沙棘","./images/sea_buckthorn.jpg");  #sea_buckthorn
INSERT INTO fruit_type VALUES(NULL,"胡颓子科",NULL,"牛奶子","./images/elaeagnus_umbellata.jpg");  #elaeagnus_umbellata

INSERT INTO fruit_type VALUES(NULL,"大戟科",NULL,"余甘子","./images/emblic_leafflower_fruit.jpg");  #emblic_leafflower_fruit
INSERT INTO fruit_type VALUES(NULL,"大戟科",NULL,"木奶果","./images/burmese_grape.jpg");  #burmese_grape
 
INSERT INTO fruit_type VALUES(NULL,"苏木科",NULL,"罗望子（酸角果）","./images/tamarindus.jpg");  #tamarindus

INSERT INTO fruit_type VALUES(NULL,"五味子科",NULL,"黑老虎","./images/kadsura_coccinea.jpg");  #kadsura_coccinea

INSERT INTO fruit_type VALUES(NULL,"露兜树科",NULL,"露兜果（露兜树的果实，又名野菠萝/哈拉果）","./images/dew_bear_fruit.jpg");  #dew_bear_fruit

INSERT INTO fruit_type VALUES(NULL,"山榄科",NULL,"神秘果","./images/miracle_fruit.jpg");  # miracle_fruit
INSERT INTO fruit_type VALUES(NULL,"山榄科",NULL,"黄晶果","./images/abiu.jpg");  #abiu
 INSERT INTO fruit_type VALUES(NULL,"山榄科",NULL,"人心果","./images/naseberry.jpg");  #naseberry
INSERT INTO fruit_type VALUES(NULL,"山榄科",NULL,"蛋黄果","./images/eggfruit.jpg");  #eggfruit

INSERT INTO fruit_type VALUES(NULL,"楝科","核果","龙功果（龙宫果/龙贡/冷刹/兰撒果）","./images/long_gong_fruit.jpg");  #long_gong_fruit

INSERT INTO fruit_type VALUES(NULL,"忍冬科",NULL,"苦糖果（裤裆果/杈杷果）","./images/lonicera_standishii.jpg");  #lonicera_standishii

INSERT INTO fruit_type VALUES(NULL,"木通科",NULL,"猫屎瓜（阿科比果）","./images/decaisne_fargesii.jpeg");  #decaisne_fargesii

INSERT INTO fruit_type VALUES(NULL,"锦葵科",NULL,"古布阿苏","./images/cupuacu.jpg");  #cupuacu

INSERT INTO fruit_type VALUES(NULL,"金虎尾科",NULL,"针叶樱桃","./images/conifer_cherry.jpg");  #conifer_cherry

INSERT INTO fruit_type VALUES(NULL,"木质藤本",NULL,"地果","./images/ficus_tikoua_bur.jpg");  #ficus_tikoua_bur