DRAW.hiiragi=function(o){const id="ghr"+(++gid),F=`fill="var(--fin)" stroke="var(--fish-line)" stroke-width="1" stroke-linejoin="round"`;const up=o.oki?"M58,136 C70,104 120,62 170,54 C240,46 300,90 320,118":"M58,136 C64,118 84,100 108,92 L122,90 C126,76 138,64 162,56 C232,42 300,90 320,118";const b=up+" L320,142 C290,172 220,212 150,206 C100,200 70,170 58,146 Z";let s=`<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--back)"/><stop offset=".4" stop-color="var(--side)"/><stop offset=".62" stop-color="var(--belly)"/><stop offset="1" stop-color="var(--belly)"/></linearGradient></defs><path ${F} d="M316,120 L380,70 C368,104 362,118 352,130 C362,142 368,156 380,190 L316,140 Z"/><path ${F} d="M166,56 L182,14 L190,22 L202,44 C240,40 284,66 308,102 L296,104 Z"/><path d="M166,56 L182,14 L190,22 L202,50 Z" fill="#2b2b2b" opacity="${o.oki?.35:.75}"/><path ${F} d="M176,204 L196,240 L204,232 L214,214 C252,204 292,174 310,146 L300,152 Z"/><path ${F} d="M128,190 L138,222 L150,200 Z"/>`;if(o.mouth)s+=`<path d="M60,138 L40,158 L48,170 L66,148 Z" fill="var(--belly)" stroke="var(--fish-line)" stroke-width="1.2"/>`;s+=`<path d="${b}" fill="url(#${id})" stroke="var(--fish-line)" stroke-width="1.3"/><path d="M120,96 C190,70 280,96 318,128" fill="none" stroke="var(--fish-line)" stroke-width="1.2" opacity=".55"/><path d="M130,150 C190,166 260,160 312,136" fill="none" stroke="#fff" stroke-width="3" opacity=".45"/><path d="M118,106 C112,130 112,150 124,170" fill="none" stroke="var(--fish-line)" stroke-width="1.1" opacity=".6"/><ellipse cx="${o.oki?146:140}" cy="${o.oki?70:80}" rx="11" ry="6" fill="#2a2a2a" opacity="${o.oki?.3:.85}"/><circle cx="96" cy="120" r="13" fill="var(--eye)" stroke="var(--fish-line)" stroke-width="1.3"/><circle cx="95" cy="120" r="6.5" fill="#13212b"/><path d="M58,140 L72,142" stroke="var(--fish-line)" stroke-width="1.4"/>`;(o.marks||[]).forEach(m=>{s+=mark(m);});return `<svg viewBox="${o.vbK||"20 0 380 250"}" role="img" aria-label="${o.label||"ヒイラギのイラスト"}">${s}</svg>`;};
Object.assign(SRC,{
hrgBouz:{t:"市場魚貝類図鑑（ぼうずコンニャク）「ヒイラギ」",u:"https://www.zukan-bouz.com/syu/%E3%83%92%E3%82%A4%E3%83%A9%E3%82%AE"},
hrgWiki:{t:"Wikipedia（日本語）「ヒイラギ (魚)」（木村清志『日本の海水魚』、Kimura et al. 2008 Ichthyol Res 55:22-42ほかに基づく）",u:"https://ja.wikipedia.org/wiki/%E3%83%92%E3%82%A4%E3%83%A9%E3%82%AE_(%E9%AD%9A)"},
hrgFb:{t:"FishBase Nuchequula nuchalis（Spotnape ponyfish）",u:"https://fishbase.org/summary/4596"},
hrgLee:{t:"Lee JS, Huh SH（2000）Reproductive biology of the slimy, Leiognathus nuchalis．Korean J Ichthyol 12(3):192-202",u:"https://koreascience.or.kr/article/JAKO200027236816981.pub"},
hrgJeong:{t:"Jeong JM ほか（2015）Diet composition of spot nape ponyfish, Leiognathus nuchalis in the coastal waters of Gadeok-do．Korean J Ichthyol 27(1):33-38",u:"https://koreascience.or.kr/article/JAKO201524848982278.pub"},
hrgHuh:{t:"Huh SH, Kwak SN（1997）Feeding habits of Leiognathus nuchalis in eelgrass bed in Kwangyang Bay．Korean J Ichthyol 9(2):221-227",u:"https://koreascience.or.kr/article/JAKO199727236818337.pub"},
hrgCha:{t:"Cha SS, Park KJ（2001）Food organisms and feeding selectivity of postlarvae of slimy (Leiognathus nuchalis) in Kwangyang Bay．韓国水産学会誌34(6):666-671",u:"https://koreascience.kr/article/JAKO200124839390009.page"},
hrgChoi:{t:"Choi B ほか（2020）Isotopic evidence for ontogenetic shift in food resource utilization during the migration of the slipmouth Leiognathus nuchalis in Gwangyang Bay．Korean J Ichthyol 32(2):84-90",u:"https://koreascience.or.kr/article/JAKO202019163740999.page"},
hrgOnbe:{t:"Onbe T, Kakuda S（1962頃）Ecology of fishes of Kasaoka Bay as observed from the catch of pound nets．広島大学水畜産学部紀要4(1/2):21-45",u:"https://ir.lib.hiroshima-u.ac.jp/39910/files/22765"},
hrgFkok:{t:"濵田弘之・徳田眞孝・宮本博和（1993）行橋市地先の干潟における試験定置網漁獲物の季節的変動．福岡水技研報1",u:"https://www.sea-net.pref.fukuoka.jp/info/kenkyu/upLoad/k1-7.pdf"},
hrgSparks:{t:"Sparks JS, Dunlap PV, Smith WL（2005）Evolution and diversification of a sexually dimorphic luminescent system in ponyfishes (Leiognathidae)．Cladistics 21:305-327",u:"https://deepblue.lib.umich.edu/items/0f77aa1c-22b1-4d36-956b-93ee5baff1b4/full"},
hrgHyakka:{t:"釣り百科（山と溪谷社）「ヒイラギ【鮗】」",u:"https://tsurihyakka.yamaria.com/issues/%E3%83%92%E3%82%A4%E3%83%A9%E3%82%AE"}
});
Object.assign(FIGS,{
"hrg-body":()=>figKeysK("ヒイラギの体（見分けのポイント）",{kind:"hiiragi",mouth:true,vbK:"0 0 400 260",label:"番号付きのヒイラギの図",marks:[[1,140,80,120,30],[2,123,88,60,60],[3,184,18,236,24],[4,44,162,30,214],[5,230,150,260,236]]},
["<b>後頭部の黒褐色の斑</b>：英名 Spotnape の由来（Wikipedia）","<b>後頭部が高く段差になる</b>：オキヒイラギとの区別点","<b>背鰭の棘は鋭く、前半が黒い</b>","<b>口は下向きの筒に伸びる</b>（市場魚貝類図鑑）","<b>体は平たく銀白色、ぬめりが多い</b>"],"模式図。口を伸ばした姿で描いた。"),
"hrg-compare":()=>figPair("ヒイラギとオキヒイラギ",[["ヒイラギ","ヒイラギ科 ヒイラギ属",{kind:"hiiragi",label:"ヒイラギの模式図"},"後頭部が高く突き出て段差ができる。内湾・汽水域に多い"],["オキヒイラギ","ヒイラギ科",{kind:"hiiragi",oki:true,label:"オキヒイラギの模式図"},"後頭部に段差がない。やや沖合にすむ"]],"区別点はWikipedia（後頭部の段差）と市場魚貝類図鑑（すみか）。斑紋の違いは要確認。形は模式図。"),
"hrg-size":()=>figBarsH("ヒイラギの大きさの目安（全長）",[["FishBaseの最大",25,"var(--ochre)"],["日本の図鑑の最大",15,"var(--ochre)"],["加徳島の標本の最大（体長）",9.8,"var(--sea)"],["よく見る大きさ",10,"var(--sea)"],["光陽湾・初めて成熟",7.5,"var(--r2)"],["豊前海の干潟に来る稚魚（4割以上）",3,"var(--r2)"]],"cm","FishBase、Wikipedia（最大15cm・10cm前後が多い）、Jeong ほか（2015）、Lee & Huh（2000）、濵田ほか（1993、全長30mm以下）。最大値は資料で大きく違う。"),
"hrg-gsi":()=>figBarsH("生殖腺の大きさの指数（GSI）の最高と最低（光陽湾）",[["雄の最高（6月）",19,"var(--sea)"],["雌の最高（7月）",12.83,"var(--ochre)"],["雌の最低（9月）",1.08,"var(--ochre)"],["雄の最低（10月）",0.24,"var(--sea)"]],"","Lee & Huh（2000）。1998年11月〜99年10月、588尾。主な産卵は7月下旬〜8月初め。"),
"hrg-food":()=>figBarsH("仔魚の餌（光陽湾・%IRI）",[["繊毛虫ティンティノプシス",80.6,"var(--sea)"],["カイアシ類のノープリウス",18.5,"var(--ochre)"]],"%","Cha & Park（2001）。1995年夏。成魚の餌は大きさで変わる（本文）。"),
"hrg-spawn":()=>figGantt("一年の動きと釣期",[["産卵期（図鑑）",[[5,7]]],["光陽湾の成熟",[[6,8]]],["笠岡湾の定置網",[[5,12,"var(--sea)"]]],["豊前海の干潟に稚魚",[[7,10,"var(--r2)"]]],["釣期",[[5,10,"var(--sea)"]]]],"図鑑は市場魚貝類図鑑、光陽湾はLee & Huh（2000）、笠岡湾はOnbe & Kakuda、豊前海は濵田ほか（1993）。釣期は経験則の目安。")
});
FISH.push({
id:"hiiragi",name:"ヒイラギ",kana:"ひいらぎ 柊 鮗 ニロギ ゼンメ ギチ ギラ ネコマタギ ネコナカセ ネコクワズ エノハ ギンギン ゲッケ トンバ",
sci:"Nuchequula nuchalis",author:"(Temminck & Schlegel, 1845)",
en:"Spotnape ponyfish",family:"ヒイラギ科 ヒイラギ属",
base:"本州中部の内湾・河口の砂泥底（数字は瀬戸内海・豊前海と韓国南岸が中心）",
hero:{kind:"hiiragi"},heroCap:"体が光り、釣ると鳴き、口が筒に伸びる内湾の小魚",
rating:[0,0,0,1,2,2,3,3,3,2,1,0],spawn:[5,6,7],
lead:"柊の葉に似た平たい銀色の小魚。食道に発光細菌を飼い、腹が光る。釣ると「ギーギー」と鳴く。ぬめりとトゲで嫌われるが、西日本では高値の地域もある。",
profileSrc:["hrgBouz","hrgWiki","hrgFb"],
profile:[
["和名","ヒイラギ（柊・鮗）[確]"],
["学名","<i>Nuchequula nuchalis</i> (Temminck & Schlegel, 1845) [確]"],
["古い学名","<i>Leiognathus nuchalis</i> [確]"],
["英名","Spotnape ponyfish [確]"],
["分類","ヒイラギ科 ヒイラギ属 [確]"],
["大きさ","全長10cm前後が多く、最大15cm [確]"],
["寿命","知見乏しい（要確認）"],
["旬","春〜夏（市場魚貝類図鑑）[確]"],
["主な釣り方","チョイ投げ・投げ釣り・サビキ [確]"]
],
sections:[
{h:"分類と名前",html:`
<p>ヒイラギ科ヒイラギ属 [確]。図鑑によってはニザダイ目に置く [確]。</p>
<p><b>学名。</b>以前はセイタカヒイラギ属 <i>Leiognathus</i> [確]。2008年の見直しで今の属になった [説]。</p>
<p><b>名前の由来。</b>長崎の呼び名から [確]。周りに棘があり、柊の葉に似る [説]。</p>
<p><b>呼び名。</b>とても多い [確]。高知ニロギ、愛知ゼンメ、東京ギチ、静岡ネコマタギなど [確]。</p>
<p class="note">鳥取の「エノハ」は九州ではヤマメのこと [確]。混同に注意。</p>`,src:["hrgBouz","hrgWiki"]},
{h:"形態と見分け方",html:`
<figure class="fig" data-fig="hrg-body"></figure>
<p>体は強く平たい楕円形 [確]。青みのある銀白色 [確]。</p>
<p><b>決め手。</b>後頭部に黒褐色の斑 [確]。後頭部が段差状に高い [確]。</p>
<p><b>口。</b>小さく、前下方へ筒状に伸びる [確]。</p>
<p><b>鰭。</b>背鰭8棘16軟条、臀鰭3棘14軟条 [確]。棘は鋭い [確]。</p>
<p><b>鱗。</b>頭を含む前半は鱗がない [確]。後半の鱗は小さく剥がれやすい [確]。</p>
<figure class="fig" data-fig="hrg-compare"></figure>
<p class="note">近い仲間にシマヒイラギ・ヒメヒイラギなど多数 [確]。</p>`,src:["hrgWiki","hrgBouz"]},
{h:"分布と生息環境",html:`
<p><b>国内。</b>青森〜九州の日本海側、宮城〜九州の太平洋側 [確]。瀬戸内海・種子島・沖縄島にも [確]。</p>
<p><b>海外。</b>朝鮮半島・済州島・台湾・中国沿岸 [確]。</p>
<p><b>すみか。</b>内湾の砂泥底と河口の汽水域 [確]。数十尾の群れで泳ぐ [確]。</p>
<p><b>笠岡湾。</b>定置網67回のうち60回で獲れた [確]。魚で4番目に多かった [確]。</p>
<p><b>大きさで移る。</b>韓国の光陽湾では小型が塩分30未満の河口に、大型が深い湾にいた [確]。</p>
<p class="note">笠岡湾は水深10m以下の泥底で、水温は年8〜30℃ [確]。</p>`,src:["hrgBouz","hrgWiki","hrgFb","hrgOnbe","hrgChoi"]},
{h:"生活史",html:`
<p><b>産卵期。</b>日本では5〜7月とされる [確]。光陽湾の主な産卵は7月下旬〜8月初め [確]。</p>
<p><b>卵。</b>直径0.6〜0.7mmの浮く卵 [確]。</p>
<p><b>成熟。</b>光陽湾では雌雄とも全長7.5cmで成熟が始まる [確]。</p>
<p><b>性比。</b>雌が多く、雌1.81対雄1 [確]。</p>
<p><b>稚魚。</b>豊前海の干潟では7〜10月に多い [確]。4割以上が全長3cm以下 [確]。</p>
<figure class="fig" data-fig="hrg-size"></figure>
<figure class="fig" data-fig="hrg-gsi"></figure>
<figure class="fig" data-fig="hrg-spawn"></figure>
<p class="note">日本での年齢と成長の研究は今回見つからなかった（要確認）。</p>`,src:["hrgBouz","hrgWiki","hrgLee","hrgFkok"]},
{h:"食性と行動",html:`
<p><b>口で吸う。</b>口を筒に伸ばし、小動物を吸い込む [確]。</p>
<p><b>仔魚。</b>繊毛虫ティンティノプシスが%IRIで80.6% [確]。</p>
<figure class="fig" data-fig="hrg-food"></figure>
<p><b>大きさで変わる。</b>3〜5cmはカイアシ類 [確]。5〜7cmはカニ・エビの幼生 [確]。8〜10cmはゴカイ類 [確]。</p>
<p><b>浮遊から底へ。</b>河口では動物プランクトン、深い湾では底の餌を使う [確]。</p>
<p><b>鳴く。</b>上下の咽頭歯をこすって音を出す [確]。</p>
<p><b>光る。</b>食道に発光細菌が共生し、腹が光る [確]。</p>
<p class="note">ヒイラギ科では雄だけの光り方が5型ある [確]。本種の光の役割は要確認。</p>`,src:["hrgWiki","hrgCha","hrgJeong","hrgHuh","hrgChoi","hrgSparks","hrgBouz"]}
],
calSrc:["hrgBouz","hrgLee","hrgOnbe","hrgFkok","hrgHyakka"],
calendar:{rows:[
["1","越冬","やや深い内湾","小〜中","×","—"],
["2","越冬","やや深い内湾","小〜中","×","—"],
["3","越冬","やや深い内湾","小〜中","×","—"],
["4","浅場へ","内湾の砂泥","中","△","チョイ投げ"],
["5","産卵期の始まり","内湾・河口","中","○","チョイ投げ・投げ釣り"],
["6","産卵期","内湾・河口","中","○","チョイ投げ・サビキ"],
["7","産卵盛期","内湾・河口","中","◎","チョイ投げ・投げ釣り"],
["8","産卵期の終わり","河口・港","小〜中","◎","チョイ投げ・サビキ"],
["9","稚魚が増える","干潟・港","小〜中","◎","チョイ投げ"],
["10","索餌期","干潟・港","小〜中","○","チョイ投げ"],
["11","深みへ","内湾","中","△","投げ釣り"],
["12","越冬","やや深い内湾","中","×","—"]],
note:"産卵期は図鑑と光陽湾 [確]。笠岡湾の定置網では5〜12月に獲れた [確]。冬の居場所と月ごとの評価は経験則 [経]。"},
tactics:[
["チョイ投げ","5〜10月","内湾の砂地・河口","朝夕","底","短い投げ竿かルアー竿＋オモリ5〜10号","アオイソメ・ジャリメ","キス用の2本針60cmで十分 [確]"],
["投げ釣り","5〜10月","サーフ・河口の砂泥","朝夕","底","投げ竿＋天秤","アオイソメ","キス狙いと同じ場所で混じる [確]"],
["サビキ","夏〜秋","足元が深い岸壁","日中","中層〜底","サビキ仕掛け","アミエビ","群れが来ると数が出る [確]"],
["岸壁の際","夏","岸壁の根元","日中","底","延べ竿＋ウキか脈釣り","ジャリメ","1尾釣れたら同じ所を続けて狙う [確]"]],
tacticsNote:"釣り方は釣り百科 [確]。針外しはメゴチばさみで [確]。海の遊漁で本種に特有の規制は見当たらない（要確認）。",
logic:[
{q:"「釣ると鳴く」",v:"裏付けあり",c:"k",a:"上下の咽頭歯をこすって音を出す。FishBaseも発音を記す。",src:["hrgWiki","hrgFb"]},
{q:"「1尾釣れたら近くにまだいる」",v:"一部あり",c:"s",a:"数十尾の群れで泳ぐ。釣果で検証した研究はない。",src:["hrgWiki","hrgHyakka"]},
{q:"「エサはイソメ」",v:"一部あり",c:"s",a:"全長8〜10cmではゴカイ類が主な餌だった（韓国）。小型はプランクトン食。",src:["hrgJeong"]},
{q:"「夏が釣りどき」",v:"一部あり",c:"s",a:"産卵期が6〜8月で、干潟には7〜10月に稚魚が多い。釣果の季節変化の研究は未確認。",src:["hrgLee","hrgFkok"]}],
fishery:`
<p><b>獲り方。</b>地引き網・刺し網・釣り [確]。群れなので一度に多く獲れる [確]。</p>
<p><b>笠岡湾。</b>定置網の13か月の調査で1,699尾 [確]。1回平均25.4尾 [確]。</p>
<p><b>値段。</b>関東では流通しない [確]。大阪湾・島根・高知・福岡では人気で高値もある [確]。</p>
<p><b>高知。</b>浦戸湾の汽水のものを「ウチニロギ」と呼び分ける [確]。</p>
<p class="note">国の資源評価・IUCNの評価は見つからなかった（要確認）。</p>`,
fisherySrc:["hrgWiki","hrgOnbe","hrgBouz"],
food:`
<p><b>旬。</b>春〜夏 [確]。</p>
<p><b>身。</b>透明感のある白身で、アジ類に似た旨味 [確]。</p>
<p><b>料理。</b>煮つけ、塩焼き、唐揚げ、刺身、干物、潮汁 [確]。</p>
<p><b>下ごしらえ。</b>ぬめりは塩でもんで洗う [確]。トゲは調理ばさみで切る [確]。</p>
<p><b>骨。</b>酢に数時間つけると柔らかくなる [確]。</p>
<p class="note">寄生虫の固有の情報は知見乏しい（要確認）。</p>`,
foodSrc:["hrgBouz","hrgWiki","hrgHyakka"],
stories:[
{h:"お腹の中にライト",b:"食道の発光器に発光細菌がすみ、暗い所で腹が光る。",f:"堤防の小魚が、深海魚と同じ仕組みを持つ。",src:["hrgWiki","hrgBouz"],c:"確"},
{h:"喉の歯で鳴く",b:"上下の咽頭歯をこすり合わせて「ギーギー」と鳴く。",f:"ギチ・ゲッケなど、鳴き声から付いたらしい呼び名もある。",src:["hrgWiki","hrgBouz"],c:"説"},
{h:"赤ちゃんの餌は繊毛虫",b:"光陽湾の仔魚の餌は、%IRIで8割が繊毛虫ティンティノプシスだった。",f:"魚より先に、目に見えない単細胞生物を食べて育つ。",src:["hrgCha"],c:"確"},
{h:"猫もまたぐ魚",b:"ネコマタギ、ネコナカセ、ネコクワズなど、猫にちなむ名が各地にある。",f:"可食部が少ないからとされるが、刺身は非常に美味という評価もある。",src:["hrgWiki","hrgBouz"],c:"説"},
{h:"雌が倍近く多い",b:"光陽湾の588尾は雌379、雄209。雌が1.81倍だった。",f:"理由はまだ分かっていない。",src:["hrgLee"],c:"確"},
{h:"大きくなると沖へ",b:"光陽湾では小型が河口、大型が深い湾にいた。餌もプランクトンから底の生き物へ変わる。",f:"河口で釣れるのは小さめ、沖寄りで大きめ、の可能性。",src:["hrgChoi"],c:"説"}],
mysteries:[
"日本での年齢・成長・寿命は知見乏しい [確]",
"本種の発光の役割と雌雄差は要確認 [説]",
"最大の大きさは15cmか25cmか、資料で割れる [説]",
"冬の居場所と季節移動の詳しいことは知見乏しい [説]",
"性比が雌に偏る理由は不明 [説]"],
mysterySrc:["hrgFb","hrgWiki","hrgSparks","hrgLee"],
allSrc:["hrgBouz","hrgWiki","hrgFb","hrgLee","hrgJeong","hrgHuh","hrgCha","hrgChoi","hrgOnbe","hrgFkok","hrgSparks","hrgHyakka"]
});
