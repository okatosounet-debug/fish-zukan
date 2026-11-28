Object.assign(SRC,{
kmjBouz:{t:"市場魚貝類図鑑（ぼうずコンニャク）「クロメジナ」",u:"https://www.zukan-bouz.com/syu/%E3%82%AF%E3%83%AD%E3%83%A1%E3%82%B8%E3%83%8A"},
kmjYagi:{t:"Yagishita N, Nakabo T（2000）Revision of the genus Girella (Girellidae) from East Asia．Ichthyological Research 47(2):119-135",u:"https://link.springer.com/doi/10.1007/BF02684232"},
kmjNakai:{t:"Nakai S, Higuchi T, Iino Y, Itoi S, Sugita H, Takai N（2015）Spawning ecology of Girella punctata and G. leonina in the coastal waters of the Izu Peninsula, Japan．Coastal Marine Science 38(1):12-20",u:"https://repository.dl.itc.u-tokyo.ac.jp/record/40625/files/CMS380103.pdf"},
kmjTakai:{t:"Takai N ほか（2017）Sexual maturation of Girella punctata and G. leonina in the neritic sea off the Pacific coast of Japan．Coastal Marine Science 40(1):7-16",u:"https://repository.dl.itc.u-tokyo.ac.jp/records/48904"},
kmjIto18:{t:"Ito T, Iino Y, Nakai S, Itoi S, Sugita H, Takai N（2018）Distribution patterns of settlement-stage juveniles of Girella punctata and Girella leonina on the rocky coast of the Kanto–Izu region, Japan．Fisheries Science 84:627-640",u:"https://link.springer.com/article/10.1007/s12562-018-1206-5"},
kmjFb:{t:"FishBase Girella leonina (Richardson, 1846)",u:"https://fishbase.se/summary/Girella-leonina.html"},
kmjJaw:{t:"Wikipedia（日本語）「メジナ」クロメジナの項",u:"https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%B8%E3%83%8A"},
kmjHack:{t:"TSURI HACK「フカセ釣りの仕掛けとタックル」",u:"https://tsurihack.com/4580"}
});
Object.assign(FIGS,{
"kmj-body":()=>figKeysK("クロメジナの体（見分けのポイント）",{kind:"mejina",onaga:true,vbK:"10 -26 590 268",label:"番号付きのクロメジナの図",marks:[[1,120,120,104,226],[2,570,70,584,-10],[3,300,116,340,-10],[4,500,121,470,226],[5,36,122,28,36]]},
["<b>えらぶたの縁が黒い</b>：一番の決め手（市場魚貝類図鑑）","<b>尾鰭が長く深く二叉し、先が尖る</b>：「オナガ」の由来","<b>鱗が細かく、黒点がない</b>：側線鱗は普通59〜64枚（Yagishita & Nakabo 2000）","<b>尾柄が細く低い</b>（市場魚貝類図鑑）","<b>上唇が膨らまない</b>：歯はほぼ1列"],"模式図。体色は茶・黄・青・紫がかるなど個体差がある。"),
"kmj-compare":()=>figPair("クロメジナとメジナ",[["クロメジナ（オナガ）","メジナ科 メジナ属",{kind:"mejina",onaga:true,label:"クロメジナの模式図"},"えらぶたの縁が黒い。鱗は細かく黒点なし。尾は深く二叉"],["メジナ（クチブト）","メジナ科 メジナ属",{kind:"mejina",label:"メジナの模式図"},"えらぶたの縁は黒くない。鱗の付け根に黒点。尾の切れ込みは浅い"]],"区別点は市場魚貝類図鑑・Yagishita & Nakabo（2000）・本書のメジナの項。形は模式図。"),
"kmj-juv":()=>figBarsH("着底稚魚に占めるクロメジナの割合（相模湾）",[["伊東（伊豆東岸）",18.5,"var(--sea)"],["城ヶ島（三浦半島先端）",14,"var(--sea)"],["江の島",4.8,"var(--ochre)"],["葉山（湾奥寄り）",2,"var(--r2)"]],"%","Ito ほか（2018）。DNAで種を判定した744尾の結果。全体では8.9%。外洋に近いほど多い。"),
"kmj-temp":()=>figThermo("クロメジナ稚魚と水温（実験の引用値）",[[8,"死に至る水温の下限側"],[11.8,"死に至る水温の上限側"],[25.1,"適水温の下限"],[26.1,"最適水温"],[28.3,"適水温の上限"]],"Ito ほか（2018）が引用した室内実験の値。原典は要確認。"),
"kmj-size":()=>figBarsH("クロメジナの大きさの目安",[["体長（図鑑の記述）",60,"var(--ochre)"],["最大標準体長（FishBase）",46,"var(--ochre)"],["下田の市場・雄の最大（体長）",34,"var(--sea)"],["下田の市場・雌の最大（体長）",33.1,"var(--sea)"],["下田の市場・最小（体長）",25,"var(--sea)"],["潮だまりの稚魚・最大（体長）",4.7,"var(--r2)"],["稚魚の最小（体長）",1.4,"var(--r2)"]],"cm","図鑑は市場魚貝類図鑑、市場の24尾はNakai ほか（2015）、稚魚はNakai ほか（2015）とIto ほか（2018）。"),
"kmj-spawn":()=>figGantt("産卵期・稚魚・旬",[["文献の産卵期",[[11,12]]],["図鑑の産卵期（幅）",[[10,12],[1,1]]],["台湾近海で成熟",[[12,12],[1,3]]],["伊豆で稚魚",[[1,6,"var(--sea)"]]],["旬",[[10,12,"var(--ochre)"]]]],"文献はNakai ほか（2015）が引く荒賀（1997）、図鑑と旬は市場魚貝類図鑑、台湾は伊藤の博士論文、稚魚はNakai ほか（2015）。")
});
FISH.push({
id:"kuromejina",name:"クロメジナ",kana:"くろめじな 黒眼仁奈 オナガ オナガグレ オナガメジナ チャグレ オナガグロ クルシチュー タカウオ スヤ オキビシ",
sci:"Girella leonina",author:"(Richardson, 1846)",
en:"—（英名は定まらない）",family:"メジナ科 メジナ属",
base:"本州中部の太平洋側の外洋に面した磯（伊豆・相模湾・紀伊半島）",
hero:{kind:"mejina",onaga:true},heroCap:"えらぶたの縁が黒く、尾が長い。釣り人の言う「オナガ」",
rating:[3,2,2,1,1,2,2,2,2,3,3,3],spawn:[11,12,1],
lead:"磯釣り師が「オナガ」と呼ぶメジナの仲間。メジナより南の魚で、外洋の磯に多い。関東の稚魚は、遠い南の海から黒潮で運ばれてくると考えられている。",
profileSrc:["kmjBouz","kmjYagi","kmjFb","kmjNakai"],
profile:[
["和名","クロメジナ（黒眼仁奈）[確]"],
["学名","<i>Girella leonina</i> (Richardson, 1846) [確]"],
["古い学名","<i>Crenidens leoninus</i> [確]"],
["分類","メジナ科 メジナ属 [確]"],
["大きさ","体長60cm前後（図鑑）[確]。FishBaseは標準体長46cm [確]"],
["寿命","知見乏しい（要確認）"],
["旬","10〜12月（図鑑）[確]"],
["主な釣り方","磯のウキフカセ釣り [確]"]
],
sections:[
{h:"分類と名前",html:`
<p>メジナ科メジナ属 [確]。東アジアにはメジナ・クロメジナ・オキナメジナの3種 [確]。</p>
<p><b>2000年の見直し。</b>Yagishita & Nakaboが3種を整理した [確]。</p>
<p><b>呼び名。</b>東日本でオナガ、西日本でオナガグレ・チャグレ [確]。沖縄でクルシチュー [確]。</p>
<p><b>土地の名。</b>高知タカウオ、神津島スヤ、三重オキビシ [確]。</p>
<p class="note">「オナガ」は尾が長く見えることから [説]。</p>`,src:["kmjYagi","kmjJaw","kmjBouz"]},
{h:"形態と見分け方",html:`
<figure class="fig" data-fig="kmj-body"></figure>
<p><b>決め手。</b>えらぶたの後ろの縁が黒い [確]。</p>
<p><b>鱗。</b>メジナより細かい [確]。側線鱗は普通59〜64枚 [確]。</p>
<p><b>尾。</b>長く深く二叉し、先が尖る [確]。尾柄は低い [確]。</p>
<figure class="fig" data-fig="kmj-compare"></figure>
<p><b>メジナとの違い。</b>メジナは鱗の付け根に黒点がある [確]。尾の切れ込みは浅い [確]。</p>
<p class="note">稚魚は見た目で分けにくい。研究ではDNAで判定する [確]。</p>`,src:["kmjBouz","kmjYagi","kmjJaw","kmjIto18"]},
{h:"分布と生息環境",html:`
<p><b>国内。</b>主に千葉県外房〜九州南岸の太平洋岸と九州北・西岸 [確]。</p>
<p><b>少ない所。</b>東北太平洋岸、日本海の青森〜島根、琉球列島 [確]。</p>
<p><b>海外。</b>香港〜日本の西太平洋 [確]。</p>
<p><b>水深。</b>1〜15mの浅い岩礁 [確]。</p>
<p><b>すみ分け。</b>メジナより暖かい海の、やや沖寄りに多い [確]。</p>
<figure class="fig" data-fig="kmj-juv"></figure>
<p><b>稚魚の場所。</b>相模湾では外洋に近い所ほど稚魚が多い [確]。</p>
<figure class="fig" data-fig="kmj-temp"></figure>
<p class="note">磯に居着く群れと回遊する群れがいるとされる [説]。</p>`,src:["kmjBouz","kmjFb","kmjIto18","kmjJaw"]},
{h:"生活史",html:`
<p><b>産卵期。</b>文献では11〜12月 [確]。図鑑は10〜1月 [確]。</p>
<p><b>伊豆では産まない？</b>伊豆の成魚は生殖腺の指数がずっと0.5未満 [確]。</p>
<p><b>産卵場。</b>種子島のほうが成熟が進んでいた [確]。黒潮の上流で産むと考えられる [説]。</p>
<p><b>台湾近海。</b>12〜3月に成熟・産卵すると推察された [説]。</p>
<p><b>稚魚。</b>伊豆では1〜6月に潮だまりや流れ藻に現れる [確]。</p>
<p><b>大きめで着く。</b>体長25mm未満の稚魚はメジナより大きい [確]。</p>
<figure class="fig" data-fig="kmj-spawn"></figure>
<figure class="fig" data-fig="kmj-size"></figure>
<p class="note">年齢と成長の研究は見つからなかった（知見乏しい）。成熟サイズも要確認。</p>`,src:["kmjNakai","kmjTakai","itoMejina","kmjIto18","kmjBouz"]},
{h:"食性と行動",html:`
<p><b>餌。</b>海藻と微細な藻類を食べる（FishBase）[確]。</p>
<p><b>肉食寄り。</b>メジナより動物を多く食べるとされる [説]。</p>
<p><b>栄養段階。</b>FishBaseは2.0 [確]。</p>
<p><b>引き。</b>同じ大きさならメジナより強いとされる [経]。</p>
<p class="note">日本の成魚の胃内容物の研究は見つからなかった（要確認）。</p>`,src:["kmjFb","hondaMejina","kmjJaw"]}
],
calSrc:["kmjBouz","kmjNakai","kmjHack"],
calendar:{rows:[
["1","産卵期の終わり","外洋の磯","中〜大","◎","ウキフカセ"],
["2","越冬","外洋の磯","中〜大","○","ウキフカセ"],
["3","越冬","外洋の磯","中","○","ウキフカセ"],
["4","水温が上がる","磯","中","△","ウキフカセ"],
["5","索餌期","磯・沖の瀬","中","△","ウキフカセ"],
["6","索餌期","磯・サラシ","中","○","ウキフカセ"],
["7","高水温で活発","磯の潮通し","中〜大","○","ウキフカセ（夜も）"],
["8","高水温で活発","磯の潮通し","中〜大","○","ウキフカセ"],
["9","索餌期","磯の潮通し","中〜大","○","ウキフカセ"],
["10","旬","外洋の磯","中〜大","◎","ウキフカセ"],
["11","産卵期・旬","外洋の磯","大","◎","ウキフカセ"],
["12","産卵期・旬","外洋の磯","大","◎","ウキフカセ"]],
note:"旬と産卵期は図鑑 [確]。月ごとの場所・評価は経験則 [経]。九州南部・離島では季節がずれる [説]。"},
tactics:[
["磯のウキフカセ","秋〜冬","外洋に面した磯","朝夕・潮の動く時","中層〜深め","磯竿5.3m・1.5号、道糸2〜3号、フロロのハリス1.5〜2.5号、針5〜7号","オキアミ＋配合のまき餌","潮下へまき餌を流し、仕掛けを同調させる [経]"],
["沖の瀬の釣り","初夏〜秋","沖磯・瀬","日中","深め","上より太いハリス","オキアミ","強い引きに備え竿で溜める [経]"],
["堤防のウキ釣り","秋","外洋に面した堤防の先端","朝夕","中層","4.5m前後の磯竿","オキアミ","内湾ではほぼ釣れない [経]"]],
tacticsNote:"タックルの号数はTSURI HACK [経]。ハリスは歯で切られやすく、フロロを使う [経]。磯の立入と漁業者との取り決めは現地で確認。",
logic:[
{q:"「オナガは沖向きの魚」",v:"裏付けあり",c:"k",a:"相模湾では外洋に近い所ほど稚魚が多かった。図鑑もメジナより沖寄りとする。",src:["kmjIto18","kmjBouz"]},
{q:"「ハリスが歯で切られる」",v:"経験則のみ",c:"e",a:"歯は1列に並ぶ。切れやすさを比べた研究は確認できなかった。",src:["kmjYagi","kmjHack"]},
{q:"「冬が旬で脂が乗る」",v:"一部あり",c:"s",a:"図鑑は旬を10〜12月とする。脂の量を測った研究は未確認。",src:["kmjBouz"]},
{q:"「関東のオナガは南から来る」",v:"一部あり",c:"s",a:"伊豆の成魚はほぼ成熟しない。稚魚は黒潮で運ばれると考えられている。",src:["kmjNakai","kmjTakai","itoMejina"]}],
fishery:`
<p><b>獲り方。</b>主に定置網 [確]。</p>
<p><b>値段。</b>メジナの仲間では味がよく、やや高い [確]。</p>
<p><b>量。</b>入荷は少ない [確]。</p>
<p><b>評価。</b>IUCNは未評価 [確]。</p>
<p class="note">全国の漁獲量と国の資源評価は見つからなかった（要確認）。</p>`,
fisherySrc:["kmjBouz","kmjFb"],
food:`
<p><b>旬。</b>10〜12月 [確]。1月でも脂の乗る個体がいる [確]。</p>
<p><b>料理。</b>刺身・塩焼き・煮付けなど [説]。</p>
<p><b>扱い。</b>釣ったら血抜きし、冷やして持ち帰る [経]。</p>
<p class="note">磯臭さ・寄生虫の固有の情報は知見乏しい（要確認）。</p>`,
foodSrc:["kmjBouz"],
stories:[
{h:"伊豆の成魚はほとんど熟さない",b:"下田の市場の24尾は、雌雄とも生殖腺の指数が0.5未満のままだった。",f:"伊豆のオナガは、産みに行く前の魚かもしれない。",src:["kmjNakai"],c:"確"},
{h:"冬の稚魚はすべてオナガ",b:"下田では1〜3月の稚魚がすべてクロメジナだった。メジナの稚魚は春から。",f:"冬の潮だまりの小さなグレはオナガ。",src:["kmjIto18"],c:"確"},
{h:"外洋ほど多い",b:"相模湾の湾奥寄りの葉山で2.0%、伊東で18.5%だった。",f:"オナガ狙いは外洋に開いた磯から。",src:["kmjIto18"],c:"確"},
{h:"寒さに弱い",b:"稚魚は8〜11.8℃で死に至るとされる。最適は26.1℃。",f:"冷たい冬の海で、北に広がれない理由かもしれない。",src:["kmjIto18"],c:"説"},
{h:"大きく育ってから着く",b:"着底したばかりの稚魚は、メジナより大きかった。",f:"長い旅をしてから磯に来るのかもしれない。",src:["kmjNakai"],c:"確"},
{h:"体の色はいろいろ",b:"茶・黄・青・紫がかった個体がいる。",f:"色だけで判断せず、えらぶたの縁を見る。",src:["kmjJaw"],c:"説"}],
mysteries:[
"年齢と成長、寿命は知見乏しい [確]",
"本当の産卵場はどこか、まだ確かめられていない [説]",
"成魚の食性の季節変化は要確認 [確]",
"居着きと回遊の群れの違いは知見乏しい [説]",
"全国の資源量と漁獲量は要確認 [確]"],
mysterySrc:["kmjTakai","kmjNakai","kmjIto18"],
allSrc:["kmjBouz","kmjYagi","kmjNakai","kmjTakai","kmjIto18","itoMejina","kmjFb","kmjJaw","kmjHack"]
});
