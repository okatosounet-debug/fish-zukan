DRAW.meita=function(o){const F=`fill="var(--karei-fin)" stroke="var(--fish-line)" stroke-width="1"`;const b="M84,130 C88,52 190,32 262,48 C322,62 352,100 356,130 C352,160 322,198 262,212 C190,228 88,208 84,130 Z";let s=`<path ${F} d="M72,130 C76,40 190,16 264,32 C330,46 366,96 368,130 C366,164 330,214 264,228 C190,244 76,220 72,130 Z"/><path ${F} d="M80,130 L32,100 C24,120 24,140 32,160 Z"/><path d="${b}" fill="${o.blind?"var(--belly)":"var(--karei)"}" stroke="var(--fish-line)" stroke-width="1.3"/>`;if(!o.blind){if(o.nagare)[[130,96],[170,80],[210,74],[250,82],[140,166],[180,182],[220,186],[260,176],[160,124],[200,130],[240,128],[120,132],[285,150]].forEach(p=>{s+=`<circle cx="${p[0]}" cy="${p[1]}" r="8" fill="none" stroke="#6b5a44" stroke-width="2.4"/><circle cx="${p[0]}" cy="${p[1]}" r="3" fill="#6b5a44"/>`;});else[[124,100,12,5,20],[168,78,9,4,-30],[214,96,14,5,60],[256,78,8,4,10],[150,150,10,6,-50],[190,180,13,4,30],[236,160,9,5,80],[270,190,8,4,-20],[118,166,7,4,40],[196,128,6,3,0],[290,108,7,3,-40],[226,206,6,3,10],[170,118,5,3,70],[262,130,6,3,25]].forEach(e=>{s+=`<ellipse cx="${e[0]}" cy="${e[1]}" rx="${e[2]}" ry="${e[3]}" transform="rotate(${e[4]} ${e[0]} ${e[1]})" fill="#5c4a36" opacity=".8"/>`;});s+=`<path d="M84,130 L270,130 C276,104 300,96 310,118" fill="none" stroke="var(--fish-line)" stroke-width="1.4" opacity=".75"/><circle cx="318" cy="98" r="12" fill="var(--eye)" stroke="var(--fish-line)" stroke-width="1.4"/><circle cx="319" cy="98" r="5.6" fill="#13212b"/><circle cx="330" cy="126" r="12" fill="var(--eye)" stroke="var(--fish-line)" stroke-width="1.4"/><circle cx="331" cy="126" r="5.6" fill="#13212b"/><path d="M322,112 L340,104 L328,116 Z" fill="#e8e0cc" stroke="var(--fish-line)"/><path d="M350,140 C353,142 353,146 350,148" fill="none" stroke="var(--fish-line)" stroke-width="1.6"/>`;}(o.marks||[]).forEach(m=>{s+=mark(m);});return `<svg viewBox="${o.vbK||"0 10 400 240"}" role="img" aria-label="${o.label||"メイタガレイのイラスト"}">${s}</svg>`;};
Object.assign(SRC,{
mtgBouz:{t:"市場魚貝類図鑑（ぼうずコンニャク）「メイタガレイ」",u:"https://www.zukan-bouz.com/syu/%E3%83%A1%E3%82%A4%E3%82%BF%E3%82%AC%E3%83%AC%E3%82%A4"},
mtgSuzuki:{t:"Suzuki S, Kawashima T, Nakabo T（2009）Taxonomic review of East Asian Pleuronichthys, with description of a new species．Ichthyological Research 56:276-291",u:"https://agris.fao.org/search/en/records/64724ac52c1d629bc979e11b"},
mtgFishbase:{t:"FishBase Pleuronichthys lighti（Common frog flounder）",u:"https://fishbase.se/summary/69706"},
mtgKagawaG:{t:"山本昌幸 香川県におけるメイタガレイの成長（香川県水産試験場，Yamamoto & Katayama 2016 Asian Fisheries Science 29:112-123に基づく）",u:"https://www.pref.kagawa.lg.jp/documents/19779/tp052meitanoseichoh28-2.pdf"},
mtgKagawaW:{t:"山本昌幸 夏の高水温とメイタガレイ（香川県水産試験場，Yamamoto, Shoji & Tomiyama Regional Environmental Change 20:76に基づく）",u:"https://www.pref.kagawa.lg.jp/documents/19778/tp077meitagarei.pdf"},
mtgMasaki:{t:"正木康昭ほか（1987）周防灘産メイタガレイの成熟と産卵期．日本水産学会誌53(7):1191-1198",u:"https://www.jstage.jst.go.jp/article/suisan1932/53/7/53_7_1191/_article/-char/ja"},
mtgKorea:{t:"Kim MS ほか（2024）Feeding habits of the ridged-eye flounder Pleuronichthys cornutus in South Sea, Korea．J Korean Soc Fish Ocean Technol 60(3):228-234",u:"https://koreascience.kr/article/JAKO202428940162660.pdf"},
mtgShimane:{t:"由木雄一・若林英人・村山達朗 資源管理型漁業推進総合対策事業「メイタガレイ」（島根県水産試験場 平成5年度事業報告）",u:"https://www.pref.shimane.lg.jp/industry/suisan/shinkou/suigi/publish/jigyouhou/1993/index.data/199303-12.pdf"},
mtgHack:{t:"TSURI HACK「メイタガレイ」の釣り方",u:"https://tsurihack.com/1792"}
});
Object.assign(FIGS,{
"mtg-body":()=>figKeysK("メイタガレイの体（見分けのポイント）",{kind:"meita",vbK:"0 0 400 260",label:"番号付きのメイタガレイの図",marks:[[1,331,112,372,40],[2,320,98,300,20],[3,214,96,190,30],[4,190,200,190,248],[5,96,90,40,40]]},
["<b>両目の間に骨の突起（トゲ）</b>：名前の由来（市場魚貝類図鑑）","<b>目が大きく飛び出す</b>（TSURI HACK）","<b>表に不規則な斑紋が密に散る</b>（Suzuki ほか2009）","<b>体は丸みが強く、体高がある</b>（模式図）","<b>目は体の右側</b>：カレイ科の基本形"],"模式図。斑紋の形がナガレメイタガレイとの決め手になる。"),
"mtg-compare":()=>figPair("メイタガレイとナガレメイタガレイ",[["メイタガレイ","カレイ科 メイタガレイ属",{kind:"meita",label:"メイタガレイの模式図"},"不規則な小さい斑紋が密に散る。鱗は細長く、規則的に並ぶ。腹椎は普通13個"],["ナガレメイタガレイ","カレイ科 メイタガレイ属",{kind:"meita",nagare:true,label:"ナガレメイタガレイの模式図"},"丸い斑紋や大理石模様。鱗は丸く、やや不規則。腹椎は普通12個"]],"区別点はSuzuki ほか（2009）。形は模式図。ナガレメイタは値段が安い（市場魚貝類図鑑）。"),
"mtg-growth":()=>figLine("年齢と全長（香川・成長式からの推定）",[{n:"香川（雌雄共通）",c:"var(--sea)",d:[[0,17.1],[1,23.4],[2,25.4],[3,25.9],[4,26.1]]}],["1歳","2歳","3歳","4歳","5歳"],"cm","Yamamoto & Katayama（2016）の成長式 全長=262×(1−e^−1.18(t−0.10)) mmから計算。雌雄差はないとされる。最高齢は5歳。"),
"mtg-size":()=>figBarsH("メイタガレイの大きさの目安",[["韓国南海の標本の最大（全長）",33.9,"var(--ochre)"],["香川の成長の上限（全長）",26.2,"var(--ochre)"],["標準体長の目安（最大）",25,"var(--ochre)"],["香川・満1歳（全長）",17.1,"var(--sea)"],["島根の漁獲の中心（全長）",17.5,"var(--sea)"],["周防灘・雌の50%成熟（体長）",11,"var(--r2)"],["周防灘・雄の50%成熟（体長）",9,"var(--r2)"]],"cm","韓国はKim ほか（2024）、香川はYamamoto & Katayama（2016）、標準体長は市場魚貝類図鑑、島根は由木ほか（15〜20cmの中央）、周防灘は正木ほか（1987）。"),
"mtg-food":()=>figBarsH("何を食べているか（韓国南海・%IRI）",[["ゴカイの仲間（多毛類）",55.5,"var(--sea)"],["ヨコエビの仲間",21.3,"var(--sea)"],["ナマコの仲間",10.8,"var(--ochre)"],["イソギンチャクなど",7.1,"var(--ochre)"],["巻貝",5,"var(--r2)"]],"%","Kim ほか（2024）。2022〜23年の底曳き調査、全長14.1〜33.9cm。207尾のうち107尾は胃が空だった。"),
"mtg-spawn":()=>figGantt("産卵期と釣れる時期",[["香川（盛期）",[[11,11]]],["周防灘（主期）",[[11,11]]],["図鑑の記述",[[10,12]]],["釣期",[[11,12,"var(--sea)"],[1,3,"var(--sea)"]]]],"香川はYamamoto & Katayama（2016）、周防灘は正木ほか（1987）の「11月初め」、図鑑は市場魚貝類図鑑。釣期はTSURI HACKの記述で経験則。")
});
FISH.push({
id:"meitagarei",name:"メイタガレイ",kana:"めいたがれい 目板鰈 メイタ ホンメイタ メタンボ ミミガレイ タバコガレイ マツバガレイ",
sci:"Pleuronichthys cornutus",author:"(Temminck & Schlegel, 1846)",
en:"Ridged-eye flounder",family:"カレイ科 メイタガレイ属",
base:"本州中部の太平洋側の内湾と瀬戸内海の砂泥底（数字は瀬戸内海・周防灘が中心）",
hero:{kind:"meita"},heroCap:"両目の間に骨のトゲがあり、目が大きく飛び出す丸いカレイ",
rating:[3,3,3,2,2,1,1,1,1,2,3,3],spawn:[10,11,12],
lead:"両目の間にトゲがある小型のカレイ。名は「目板」から。瀬戸内海では高級魚で、活魚に高値がつく。2009年に、よく似た別種ナガレメイタガレイが分けられた。",
profileSrc:["mtgBouz","mtgSuzuki","mtgKagawaG"],
profile:[
["和名","メイタガレイ（目板鰈）[確]"],
["学名","<i>Pleuronichthys cornutus</i> (Temminck & Schlegel, 1846) [確]"],
["別の学名","<i>P. lighti</i> Wu, 1929 を使う資料もある [説]"],
["英名","Ridged-eye flounder [確]"],
["分類","カレイ科 メイタガレイ属 [確]"],
["大きさ","標準体長25cm前後（市場魚貝類図鑑）[確]"],
["寿命","香川で最高5歳 [確]"],
["旬","夏〜秋（市場魚貝類図鑑）[確]"],
["主な釣り方","投げ釣り・船のカレイ釣り [確]"]
],
sections:[
{h:"分類と名前",html:`
<p>カレイ科メイタガレイ属 [確]。日本には2種いる [確]。</p>
<p><b>2009年の見直し。</b>Suzuki ほかが新種ナガレメイタガレイ（<i>P. japonicus</i>）を記載した [確]。同時に <i>P. lighti</i> を <i>P. cornutus</i> の新参異名とした [確]。</p>
<p><b>学名のずれ。</b>FishBaseや香川の研究は <i>P. lighti</i> を使う [確]。どちらを使うかは資料で割れる [説]。</p>
<p><b>名前の由来。</b>両目の間の骨の板「目板」から [確]。触ると痛い「目痛」説もある [説]。</p>
<p><b>呼び名。</b>ホンメイタ、メタンボ、ミミガレイ、タバコガレイ、マツバガレイなど [確]。</p>
<p class="note">島根ではナガレメイタを「バケメイタ」と呼ぶ [確]。</p>`,src:["mtgSuzuki","mtgFishbase","mtgKagawaG","mtgBouz","mtgShimane"]},
{h:"形態と見分け方",html:`
<figure class="fig" data-fig="mtg-body"></figure>
<p>目は体の右側 [確]。目が大きく飛び出す [確]。</p>
<p><b>決め手。</b>両目の間に骨のトゲがある [確]。素手で触ると痛い [確]。</p>
<p><b>形。</b>体は丸く、体高が高い [経]。</p>
<figure class="fig" data-fig="mtg-compare"></figure>
<p><b>ナガレメイタとの違い。</b>メイタは不規則な小斑が密 [確]。ナガレメイタは丸い斑紋か大理石模様 [確]。</p>
<p class="note">研究では腹椎の数（13か12）や背鰭の条数も使う [確]。</p>`,src:["mtgBouz","mtgHack","mtgSuzuki"]},
{h:"分布と生息環境",html:`
<p><b>国内。</b>太平洋側は宮城県〜豊後水道 [確]。日本海側は秋田県〜対馬海峡 [確]。瀬戸内海にもいる [確]。</p>
<p><b>海外。</b>東シナ海・黄海・渤海・台湾海峡・中国南部 [確]。</p>
<p><b>水深。</b>100mより浅い砂泥底 [確]。</p>
<p><b>汽水。</b>FishBaseは河口や汽水にも入るとする [確]。</p>
<p><b>大きさと深さ。</b>島根では小型が岸寄り、大型が沖側にいた [確]。</p>
<p class="note">ナガレメイタは北海道南部まで分布し、北側に広い [確]。</p>`,src:["mtgSuzuki","mtgBouz","mtgFishbase","mtgShimane"]},
{h:"生活史",html:`
<p><b>産卵期。</b>香川の盛期は11月 [確]。周防灘の主産卵期は11月初め [確]。図鑑は10〜12月とする [確]。</p>
<p><b>成熟。</b>周防灘の50%成熟体長は雌11.0cm、雄9.0cm [確]。</p>
<p><b>早く親になる。</b>周防灘では最も若い年齢群で雌7割、雄9割が成熟 [確]。年齢の数え方は原論文で要確認。</p>
<p><b>成長。</b>香川では満1歳で全長約17cm [確]。3歳以降はほとんど伸びない [確]。</p>
<p><b>雌雄差。</b>香川では成長に差がない [確]。最高齢は雌雄とも5歳 [確]。</p>
<figure class="fig" data-fig="mtg-growth"></figure>
<figure class="fig" data-fig="mtg-size"></figure>
<figure class="fig" data-fig="mtg-spawn"></figure>
<p class="note">耳石の不透明帯は10〜2月に年1本できる（香川）[確]。1987年の周防灘の調査は2種を分ける前で、ナガレメイタが混じる可能性がある（要確認）。</p>`,src:["mtgKagawaG","mtgMasaki","mtgBouz"]},
{h:"食性と行動",html:`
<p><b>主な餌。</b>韓国南海ではゴカイ類が%IRIで55.5% [確]。次がヨコエビ類21.3% [確]。</p>
<p><b>成長で変わる。</b>大きくなるとヨコエビが減る [確]。ナマコやイソギンチャクが増える [確]。</p>
<p><b>季節で変わる。</b>春秋はゴカイ、夏は巻貝、冬はナマコが中心 [確]。</p>
<p><b>夏ばて。</b>香川では底層が25℃を超える8〜9月に胃の中身が減る [確]。</p>
<figure class="fig" data-fig="mtg-food"></figure>
<p class="note">日本の海での胃内容物の研究は今回見つからなかった（要確認）[確]。FishBaseの栄養段階は3.2 [確]。</p>`,src:["mtgKorea","mtgKagawaW","mtgFishbase"]}
],
calSrc:["mtgHack","mtgKagawaG","mtgBouz","mtgKagawaW"],
calendar:{rows:[
["1","産卵後","砂泥・カケアガリ","中","◎","投げ釣り・船釣り"],
["2","産卵後","砂泥・カケアガリ","中","◎","投げ釣り"],
["3","回復期","砂泥","中","◎","投げ釣り"],
["4","索餌期","砂泥","中","○","投げ釣り・船釣り"],
["5","索餌期","砂泥","中","○","船釣り"],
["6","索餌期・旬","砂泥","中","△","船釣り"],
["7","旬","やや深い砂泥","中","△","船釣り"],
["8","高水温で食いが落ちる","やや深い砂泥","中","△","船釣り"],
["9","高水温で食いが落ちる","やや深い砂泥","中","△","船釣り"],
["10","産卵前・旬","砂泥","中","○","投げ釣り"],
["11","産卵盛期","砂泥・浅場","中〜大","◎","投げ釣り・船釣り"],
["12","産卵期","砂泥・浅場","中〜大","◎","投げ釣り"]],
note:"釣期11〜3月はTSURI HACKの記述 [経]。産卵盛期11月（香川）[確]。8〜9月の摂餌の低下は香川の結果 [確]。月ごとの場所と評価は経験則 [経]。"},
tactics:[
["投げ釣り（置き竿）","11〜3月","サーフ・堤防の砂泥","朝夕・日中","底","遠投できる投げ竿2〜3本＋ハリス3号前後","アオイソメの房掛け","沖のカケアガリを狙って待つ [経]"],
["投げ釣り（探り）","11〜3月","砂浜・港の砂泥","日中","底","投げ竿＋天秤","アオイソメ","ゆっくりサビいて砂煙で誘う [経]"],
["船のカレイ釣り","通年（冬中心）","内湾の砂泥","日中","底","船竿＋小型天秤","アオイソメ","オモリで底を小突く [経]"],
["チョイ投げ","11〜3月","港内の砂地","朝夕","底","2m前後の竿＋オモリ5〜10号","イソメ類","食いが悪ければエサを小さく切る [経]"]],
tacticsNote:"仕掛け・エサ・ビーズの使い方はTSURI HACK [経]。オモリの号数は一般的な目安 [経]。県ごとの全長制限・禁漁は要確認。",
logic:[
{q:"「冬が釣りどき」",v:"一部あり",c:"s",a:"産卵盛期は11月（香川・周防灘）で、冬の釣期と重なる。釣果を月ごとに比べた研究は未確認。",src:["mtgKagawaG","mtgMasaki","mtgHack"]},
{q:"「エサはイソメ」",v:"一部あり",c:"s",a:"韓国南海ではゴカイ類が主な餌だった。日本の胃内容物の研究は確認できなかった。",src:["mtgKorea"]},
{q:"「真夏は釣れない」",v:"一部あり",c:"s",a:"香川では25℃以上の8〜9月に胃の中身が減った。釣果での検証はない。",src:["mtgKagawaW"]},
{q:"「ビーズの光で寄る」",v:"経験則のみ",c:"e",a:"釣りメディアの推奨。視覚で寄る試験は確認できなかった。",src:["mtgHack"]}],
fishery:`
<p><b>獲り方。</b>主に小型底曳き網 [確]。</p>
<p><b>島根。</b>1992年、小型底曳き網2種の漁獲金額の49%がメイタガレイだった [確]。ただしホンメイタは数％で、大半はバケメイタ [確]。</p>
<p><b>漁獲の大きさ。</b>島根の市場では全長15〜20cm前後が中心 [確]。</p>
<p><b>値段。</b>関東では比較的高い [確]。関西では活魚がとても高い [確]。</p>
<p class="note">IUCNはデータ不足（DD、2021年）[確]。国の資源評価は見つからなかった（要確認）。</p>`,
fisherySrc:["mtgShimane","mtgBouz","mtgFishbase"],
food:`
<p><b>旬。</b>夏〜秋 [確]。冬は産卵期にあたる [確]。</p>
<p><b>料理。</b>刺身、洗い、煮つけ、唐揚げ、一夜干しなど [確]。</p>
<p><b>扱い。</b>目の間のトゲで手を切らないよう注意 [確]。</p>
<p class="note">締め方・寄生虫の固有の情報は知見乏しい（要確認）。</p>`,
foodSrc:["mtgBouz"],
stories:[
{h:"1種と思われていた2種",b:"2009年、ナガレメイタガレイが新種として記載された。それまで同じ魚として扱われていた。",f:"昔の記録のメイタには、ナガレメイタが混じるかもしれない。",src:["mtgSuzuki"],c:"確"},
{h:"本物は数％だけ",b:"島根の底曳き網の「メイタ」は、ホンメイタが数％。大半はバケメイタ（ナガレメイタ）だった。",f:"高いのはホンメイタ。斑紋を見れば分かる。",src:["mtgShimane","mtgBouz"],c:"確"},
{h:"暑い夏はやせる",b:"香川では底層が25℃を超える8〜9月に、胃の中身と肥満度が落ちた。暑い年ほど落ち方が大きい。",f:"温暖化で夏のメイタは細くなるかもしれない。",src:["mtgKagawaW"],c:"確"},
{h:"冬はナマコを食べる",b:"韓国南海の調査では、冬の主な餌がナマコの仲間だった。",f:"カレイがナマコを食べるのは意外。",src:["mtgKorea"],c:"確"},
{h:"1年で大人の7割の大きさ",b:"香川では満1歳で全長17cm。最大の65%に達する。",f:"その後はほとんど伸びない。25cm超は貴重。",src:["mtgKagawaG"],c:"確"},
{h:"半数が胃が空",b:"韓国南海の207尾のうち、107尾は胃が空だった。",f:"いつも食べているわけではない。時合いを待つ釣りに通じる。",src:["mtgKorea"],c:"説"}],
mysteries:[
"<i>P. cornutus</i> と <i>P. lighti</i> のどちらが正しいかは資料で割れる [説]",
"日本の海での胃内容物の研究は知見乏しい [確]",
"本州中部の太平洋側の成長・資源量は要確認 [確]",
"ナガレメイタとの分布の境目と混じり方は知見乏しい [説]",
"卵と稚魚の育つ場所の詳しいことは要確認 [確]"],
mysterySrc:["mtgSuzuki","mtgFishbase","mtgKorea"],
allSrc:["mtgBouz","mtgSuzuki","mtgFishbase","mtgKagawaG","mtgKagawaW","mtgMasaki","mtgKorea","mtgShimane","mtgHack"]
});
