DRAW.bera=function(o){const t=o.type||"aka",c="br"+(++gid),P={aka:["#c98a66","#f0d6c2","#3b2b2a"],ao:["#6f9a7e","#d6e4cf","#2a3a33"],sasa:["#b8735c","#ecd0bf","#4a2e28"]}[t]||["#c98a66","#f0d6c2","#3b2b2a"];const B="M30,112 C44,92 90,78 170,74 C280,70 400,80 470,96 L500,100 L500,128 L470,134 C400,148 280,158 170,154 C90,150 44,134 30,118 Z",F=`fill="${P[0]}" fill-opacity=".55" stroke="var(--fish-line)" stroke-width="1"`;let s=`<defs><linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P[0]}"/><stop offset=".55" stop-color="${P[0]}"/><stop offset="1" stop-color="${P[1]}"/></linearGradient><clipPath id="${c}c"><path d="${B}"/></clipPath></defs><path ${F} d="M150,76 L158,58 L462,76 L474,96 Z"/><path ${F} d="M290,154 L298,170 L462,142 L470,132 Z"/><path ${F} d="M496,100 C520,88 548,82 566,80 C561,102 561,126 566,148 C548,146 520,140 496,128 Z"/><path d="${B}" fill="url(#${c})" stroke="var(--fish-line)" stroke-width="1.2"/><g clip-path="url(#${c}c)">`;if(t==="aka"){s+=`<path d="M60,112 C200,108 360,112 500,114" stroke="${P[2]}" stroke-width="9" fill="none" opacity=".8"/>`;for(let k=0;k<12;k++)s+=`<circle cx="${180+k*25}" cy="${92+k*.6}" r="2.6" fill="#a8332a" opacity=".8"/>`;}if(t==="ao"){s+=`<path d="M60,112 C200,108 360,112 500,114" stroke="${P[2]}" stroke-width="5" fill="none" opacity=".45"/><ellipse cx="170" cy="108" rx="15" ry="11" fill="#1d2622"/><path d="M40,100 C60,94 80,96 96,104 M42,124 C60,130 82,128 96,122" stroke="#d98a3a" stroke-width="3" fill="none"/>`;}if(t==="sasa"){s+=`<path d="M54,106 C90,108 120,112 150,116" stroke="${P[2]}" stroke-width="7" fill="none" stroke-linecap="round"/>`;for(let k=0;k<14;k++)s+=`<circle cx="${190+(k%7)*42}" cy="${96+Math.floor(k/7)*26}" r="3" fill="#f6e7d6" opacity=".8"/>`;}s+=`</g><path ${F} d="M118,120 C138,108 166,110 176,118 C166,128 138,132 118,124 Z"/><path d="M110,82 C100,100 100,130 112,146" fill="none" stroke="var(--fish-line)" opacity=".6"/><path d="M30,114 L46,117" stroke="var(--fish-line)" stroke-width="1.6"/><circle cx="70" cy="104" r="8" fill="var(--eye)" stroke="var(--fish-line)"/><circle cx="69" cy="104" r="3.8" fill="#13212b"/>`;(o.marks||[]).forEach(m=>{s+=mark(m);});return `<svg viewBox="${o.vbK||"10 50 570 130"}" role="img" aria-label="${o.label||"キュウセンのイラスト"}">${s}</svg>`;};
Object.assign(SRC,{
kyuBouz:{t:"市場魚貝類図鑑（ぼうずコンニャク）「キュウセン」",u:"https://www.zukan-bouz.com/syu/%E3%82%AD%E3%83%A5%E3%82%A6%E3%82%BB%E3%83%B3"},
kyuYama:{t:"山本昌幸（2018）瀬戸内海備讃瀬戸におけるキュウセンの資源特性．香川県水産試験場研究報告 17",u:"https://www.pref.kagawa.lg.jp/documents/12948/220yamamoto20kyuusen.pdf"},
kyuYamaTp:{t:"香川県水産試験場（山本昌幸）香川県におけるキュウセンの年齢と成長",u:"https://www.pref.kagawa.lg.jp/documents/19779/tp060kyuusen.pdf"},
kyuFukui:{t:"Fukui Y, Gushima K, Kakuda S, Hashimoto H（1991）Growth-related changes in color and sex in Halichoeres poecilopterus．魚類学雑誌 37(4):395-401",u:"https://www.jstage.jst.go.jp/article/jji1950/37/4/37_4_395/_article/-char/en"},
kyuHonda:{t:"Honda釣り倶楽部 魚図鑑 キュウセン",u:"https://www.honda.co.jp/fishing/picture-book/kyuusen/"},
kyuMaruha:{t:"マルハ食品（マルハシンコウ）日本の旬・魚のお話「キュウセン」",u:"https://www.maruha-shinko.co.jp/uodas/syun/29-kyusen.html"},
kyuFb:{t:"FishBase Parajulis poecilepterus（Multicolorfin rainbowfish）",u:"https://fishbase.se/summary/Parajulis-poecilepterus.html"},
kyuHakone:{t:"箱根園水族館ブログ（2009年1月1日）冬眠する魚 ～ベラ～",u:"http://blog.princehotels.co.jp/hakone-en/yamanouekara/2009/01/no41.html"}
});
Object.assign(FIGS,{
"kyu-body":()=>figKeysK("キュウセンの体（見分けのポイント）",{kind:"bera",type:"aka",vbK:"0 26 600 190",label:"番号付きのキュウセン雌の図",marks:[[1,36,116,34,190],[2,260,111,230,196],[3,300,64,300,40],[4,92,106,110,40],[5,540,114,580,190]]},
["<b>小さな口</b>：甲殻類や多毛類を食べる（Honda）","<b>黒い縦帯</b>：雌（赤ベラ）に目立つ（ぼうずコンニャク）","<b>長い背びれ</b>：一続きで低い（模式図）","<b>頭と目</b>：頭は小さく、体は細長い（模式図）","<b>尾びれ</b>：後ろの縁はほぼまっすぐ（模式図）"],"模式図。雌と若魚は赤っぽく、黒い縦帯がある（ぼうずコンニャク）。"),
"kyu-compare":()=>figPair("キュウセンと似た魚",[["キュウセン雌（赤ベラ）","ベラ科 キュウセン属",{kind:"bera",type:"aka",label:"キュウセン雌の模式図"},"赤っぽい体に黒い縦帯"],["キュウセン雄（青ベラ）","ベラ科 キュウセン属",{kind:"bera",type:"ao",label:"キュウセン雄の模式図"},"緑色。胸びれの後ろに黒い斑"],["ササノハベラ","ベラ科 ササノハベラ属",{kind:"bera",type:"sasa",label:"ササノハベラの模式図"},"目から胸びれへ黒い線。岩場に多い"]],"キュウセンの色は市場魚貝類図鑑。ササノハベラは一般的な特徴（要確認）。形は模式図。"),
"kyu-growth":()=>figLine("年齢と体長（備讃瀬戸、成長式から）",[{n:"体長",c:"var(--sea)",d:[[0,6.1],[1,9.1],[2,11.7],[3,13.8],[4,15.6],[5,17.1],[6,18.3],[7,19.4]]}],["1歳","2歳","3歳","4歳","5歳","6歳","7歳","8歳"],"cm","山本（2018）の成長式。最高年齢8歳。20cm近くまで8年かかる。"),
"kyu-male":()=>figBarsH("一次雄（初めから雄）の割合",[["広島県沿岸",44.2,"var(--ochre)"],["瀬戸内海中央部・赤い型",42.6,"var(--ochre)"],["駿河湾沿岸",34,"var(--sea)"],["九州沿岸",11.8,"var(--sea)"],["備讃瀬戸（全体）",8.6,"var(--r2)"]],"%","備讃・広島・駿河・九州は山本（2018）の比較。中央部の赤い型はFukui ほか（1991）。調べ方は資料で違う。"),
"kyu-season":()=>figGantt("キュウセンの一年",[["釣期",[[5,12]]],["産卵期・備讃",[[6,8,"var(--r2)"]]],["産卵期・Honda",[[6,9,"var(--r2)"]]],["砂中で越冬",[[1,3,"var(--sea)"],[12,12,"var(--sea)"]]]],"釣期と産卵期の幅はHonda、備讃は山本（2018）。越冬は11〜12月〜4月頃とする解説から作った目安 [説]。"),
"kyu-temp":()=>figThermo("キュウセンと水温",[[13,"このあたりから砂に潜って越冬"],[15,"春は14〜15℃で動き出す"]],"マルハ食品の解説の値 [説]。研究で確かめた値は見つからなかった（要確認）。")
});
FISH.push({
id:"kyusen",name:"キュウセン",kana:"きゅうせん 九線 九仙 求仙 ギザミ ぎざみ キザミ アオベラ 青ベラ アカベラ 赤ベラ キョウセン シマメグリ クサビ ジョロ",
sci:"Parajulis poecilepterus",author:"(Temminck & Schlegel, 1845)",
en:"Multicolorfin rainbowfish",family:"ベラ科 キュウセン属",
base:"本州中部の太平洋側〜瀬戸内海の、砂地と岩が混じる浅い内湾。数字は主に瀬戸内海（備讃瀬戸・中央部）",
hero:{kind:"bera",type:"ao"},heroCap:"夜と冬は砂の中。投げ釣りでおなじみの青ベラ",
rating:[0,0,0,1,2,3,3,3,3,2,1,0],spawn:[6,7,8],
lead:"砂地の投げ釣りでよく掛かるベラ。雌から雄へ性が変わり、色も赤から青へ変わる。夜と冬は砂に潜って休む。関東では雑魚扱いだが、瀬戸内では「ギザミ」と呼ぶ高級魚。",
profileSrc:["kyuBouz","kyuFb","kyuYama"],
profile:[
["和名","キュウセン（九線・求仙など）[確]"],
["学名","<i>Parajulis poecilepterus</i> (Temminck & Schlegel, 1845) [確]"],
["英名","Multicolorfin rainbowfish [確]"],
["分類","ベラ科 キュウセン属 [確]"],
["大きさ","体長30cm前後 [確]。最大全長34cm [確]"],
["寿命","備讃瀬戸で最高8歳 [確]"],
["旬","夏 [確]"],
["主な釣り方","投げ釣り・ちょい投げ・船 [確]"],
["性","雌から雄へ性転換する [確]"]
],
sections:[
{h:"分類と名前",html:`
<p>ベラ科キュウセン属 [確]。古い本ではホンベラ属（<i>Halichoeres</i>）に入れていた [確]。</p>
<p><b>名前。</b>体の点の列を「九本の線」に見立てたとされる [説]。</p>
<p><b>雌雄の呼び名。</b>雌は赤ベラ、雄は青ベラ [確]。</p>
<p><b>瀬戸内。</b>岡山・広島などでギザミ [確]。地方名はとても多い [確]。</p>
<p class="note">京都の丹後には「アカエイ」と呼ぶ地域もある [確]。エイとは別物。</p>`,src:["kyuBouz","kyuHakone","kyuFukui"]},
{h:"形態と見分け方",html:`
<figure class="fig" data-fig="kyu-body"></figure>
<p><b>体。</b>細長く、口が小さい [確]。</p>
<p><b>雌と若魚。</b>赤っぽく、黒い縦帯がある [確]。</p>
<p><b>雄。</b>緑色で黒い筋がある [確]。胸びれ後ろの黒斑が目印 [経]。</p>
<figure class="fig" data-fig="kyu-compare"></figure>
<p><b>色と性はずれる。</b>赤い型にも雄がいる [確]。色だけで性は決まらない。</p>
<p class="note">色の型は3つ。赤い型・中間・青い型 [確]。</p>`,src:["kyuBouz","kyuFukui","kyuYama"]},
{h:"分布と生息環境",html:`
<p><b>国内。</b>北海道〜九州 [確]。琉球列島にはいない [確]。</p>
<p><b>多い所。</b>西日本の浅場 [確]。瀬戸内海・有明海にもいる [確]。</p>
<p><b>海外。</b>朝鮮半島・台湾・中国南部 [確]。</p>
<p><b>すみか。</b>内湾の、岩と砂地が混じる浅い所 [確]。砂礫の底 [確]。</p>
<p><b>寝床。</b>休むときは砂に潜る [確]。</p>
<figure class="fig" data-fig="kyu-temp"></figure>
<p class="note">詳しい水深の範囲は知見乏しい（要確認）。</p>`,src:["kyuBouz","kyuFb","kyuYama","kyuHonda","kyuMaruha"]},
{h:"生活史",html:`
<p><b>産卵期。</b>備讃瀬戸では6〜8月 [確]。雌のGSIが6〜8月に高い [確]。</p>
<p><b>他の資料。</b>6〜9月頃 [確]。4〜7月頃とする図鑑もある [確]。</p>
<p><b>成長。</b>1歳6cm、3歳12cm、8歳19cm [確]。ゆっくり育つ。</p>
<figure class="fig" data-fig="kyu-growth"></figure>
<p><b>性転換。</b>多くの雌は体長10〜13cmで雄になる（瀬戸内海中央部）[確]。</p>
<p><b>2種類の雄。</b>初めから雄の「一次雄」と、雌から変わった「二次雄」 [確]。</p>
<p><b>備讃の内訳。</b>雌57.6%、一次雄8.6%、二次雄33.8% [確]。</p>
<figure class="fig" data-fig="kyu-male"></figure>
<p class="note">卵と仔魚の詳しい記録は知見乏しい（要確認）。</p>`,src:["kyuYama","kyuYamaTp","kyuHonda","kyuBouz","kyuFukui"]},
{h:"食性と行動",html:`
<p><b>食べ物。</b>甲殻類や多毛類（ゴカイの仲間）を食べる [確]。</p>
<p><b>昼の魚。</b>日没後は砂に潜って眠る [説]。朝に起きてエサを探す [説]。</p>
<p><b>冬。</b>砂の中で休眠する [確]。</p>
<figure class="fig" data-fig="kyu-season"></figure>
<p class="note">天然魚の胃の中身を割合で示した国内の研究は未確認（要確認）。</p>`,src:["kyuHonda","kyuMaruha","kyuHakone"]}
],
calSrc:["kyuHonda","kyuYama","kyuMaruha"],
calendar:{rows:[
["1","砂中で越冬","砂の中","—","×","—"],
["2","砂中で越冬","砂の中","—","×","—"],
["3","砂中で越冬","砂の中","—","×","—"],
["4","目覚め始め","浅い砂礫底","中","△","ちょい投げ"],
["5","活動期","浅い砂礫底","小〜中","○","投げ釣り"],
["6","産卵期・旬","岩混じりの砂地","中〜大","◎","投げ釣り・船"],
["7","産卵期・旬","岩混じりの砂地","中〜大","◎","投げ釣り・船"],
["8","産卵期・旬","岩混じりの砂地","中〜大","◎","投げ釣り・船"],
["9","索餌期","浅い砂礫底","小〜大","◎","投げ釣り・ちょい投げ"],
["10","索餌期","浅い砂礫底","小〜大","○","投げ釣り"],
["11","水温低下","やや深場","中","△","投げ釣り"],
["12","潜り始め","砂の中","—","×","—"]],
note:"釣期5〜12月はHonda [経]。産卵期は備讃瀬戸の値 [確]。越冬の月は解説からの目安 [説]。評価は経験則 [経]。"},
tactics:[
["投げ釣り","5〜11月","砂地に岩や海藻が混じる所","日中","底","投げ竿＋天秤＋2〜3本針","イシゴカイ・アオイソメ","キス釣りより根寄りを引く [経]"],
["ちょい投げ","6〜10月","堤防の際・漁港の砂地","日中","底","短い竿＋小型天秤","イシゴカイ","足元〜20m先で十分 [経]"],
["船の五目釣り","6〜9月","瀬戸内などの砂礫底","日中","底","胴突き仕掛け","ゴカイ類・エビ","瀬戸内ではギザミ狙い [経]"],
["探り釣り","夏","岩混じりの堤防","日中","底","軽いオモリの胴突き","ゴカイ類","止めずに小さく動かす [経]"]],
tacticsNote:"釣り方はHonda（投げ・沖釣り）[確]。仕掛けとエサの細部は一般的なベラ釣り [経]。地域の体長制限は要確認。",
logic:[
{q:"「ベラは夜は釣れない」",v:"裏付けあり",c:"k",a:"休むときは砂に潜る。夜は砂の中で眠るとする解説もある。",src:["kyuHonda","kyuMaruha"]},
{q:"「冬はベラが消える」",v:"裏付けあり",c:"k",a:"冬は砂の中で休眠する。釣期も5〜12月。",src:["kyuHonda","kyuHakone"]},
{q:"「大きいのは青ベラ」",v:"裏付けあり",c:"k",a:"赤い型は197mm以下だけ。青い型は125mm以上で現れる。",src:["kyuYama"]},
{q:"「青ベラは元は雌」",v:"一部あり",c:"s",a:"二次雄は元雌。ただし初めから雄の一次雄もいる。",src:["kyuYama","kyuFukui"]},
{q:"「荒れて濁ると釣れない」",v:"経験則のみ",c:"e",a:"そう書く解説はある。研究で確かめた例は未確認。",src:["kyuMaruha"]}],
fishery:`
<p><b>獲り方。</b>釣り・刺し網・底曳き網 [確]。主産地は香川・兵庫 [確]。</p>
<p><b>香川。</b>毎年約60万尾の稚魚を放流し、約40トンを獲る [確]。</p>
<p><b>明石。</b>年に約50トンとする解説がある [説]。</p>
<p><b>獲りすぎ注意。</b>備讃では漁獲死亡（0.45）が自然死亡（0.31）を上回る [確]。</p>
<p class="note">国の資源評価は見つからなかった（要確認）。IUCNは低懸念 [確]。</p>`,
fisherySrc:["kyuBouz","kyuYama","kyuMaruha","kyuFb"],
food:`
<p><b>旬。</b>夏 [確]。</p>
<p><b>値段。</b>関西では高値、関東ではほぼ値がつかない [確]。</p>
<p><b>料理。</b>塩焼き、煮つけ、焼霜造り、天ぷら、南蛮漬け [確]。</p>
<p><b>郷土の味。</b>明石の二杯酢、淡路島のこけらずし、広島のはぶて焼き [確]。</p>
<p class="note">小さいものは丸ごと唐揚げや南蛮漬けに [確]。</p>`,
foodSrc:["kyuBouz","kyuMaruha"],
stories:[
{h:"赤ベラの中にも雄",b:"備讃瀬戸では赤い型の6.7%が雄だった。初めから雄の一次雄だ。",f:"色だけで雌とは言えない。",src:["kyuYama"],c:"確"},
{h:"一次雄の割合が5倍違う",b:"一次雄は備讃瀬戸で8.6%、広島沿岸で44.2%。隣の海でも大きく違う。",f:"何が割合を決めるかは謎。",src:["kyuYama"],c:"確"},
{h:"20cmまで8年",b:"備讃瀬戸の最高年齢は8歳。8歳でも体長は約19cm。",f:"大きな青ベラはかなりの年寄り。",src:["kyuYama"],c:"確"},
{h:"60万尾の放流",b:"香川県は毎年約60万尾の稚魚を放流している。",f:"瀬戸内ではそれだけ大事な魚。",src:["kyuYama"],c:"確"},
{h:"東西で別の魚",b:"関東では雑魚扱い。西日本、特に瀬戸内では高級魚。",f:"同じ魚でも値段は地域しだい。",src:["kyuBouz","kyuHonda"],c:"確"},
{h:"布団は砂",b:"夜は砂に潜って眠り、冬は砂の中で休眠する。",f:"朝寝坊ならぬ朝起きの魚。",src:["kyuHonda","kyuMaruha"],c:"確"}],
mysteries:[
"一次雄の割合が海域で違う理由は知見乏しい [確]",
"越冬に入る水温を研究で確かめた例は要確認 [確]",
"卵と仔魚の育ち方は知見乏しい [確]",
"放流魚が漁獲にどれほど効いているかは要確認 [説]",
"本州中部の太平洋側の成長と産卵期は要確認 [確]"],
mysterySrc:["kyuYama","kyuMaruha","kyuFukui"],
allSrc:["kyuBouz","kyuYama","kyuYamaTp","kyuFukui","kyuHonda","kyuMaruha","kyuFb","kyuHakone"]
});
