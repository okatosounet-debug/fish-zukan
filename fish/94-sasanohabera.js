DRAW.sasa=function(o){const t=o.type||"hoshi",c="ss"+(++gid),P={hoshi:["#b59a5a","#efe3c4","#e2b93b"],aka:["#d0704a","#f3d2c0","#d0704a"]}[t]||["#b59a5a","#efe3c4","#e2b93b"];const B="M30,112 C44,90 90,76 170,72 C280,68 400,80 470,96 L500,100 L500,128 L470,134 C400,150 280,160 170,156 C90,152 44,134 30,118 Z",F=f=>`fill="${f}" fill-opacity=".6" stroke="var(--fish-line)" stroke-width="1"`;let s=`<defs><linearGradient id="${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P[0]}"/><stop offset=".6" stop-color="${P[0]}"/><stop offset="1" stop-color="${P[1]}"/></linearGradient><clipPath id="${c}c"><path d="${B}"/></clipPath></defs><path ${F(P[2])} d="M150,74 L158,56 L462,76 L474,96 Z"/><path ${F(P[2])} d="M290,156 L298,172 L462,142 L470,132 Z"/><path ${F(P[0])} d="M496,100 C520,88 548,82 566,80 C561,102 561,126 566,148 C548,146 520,140 496,128 Z"/><path d="${B}" fill="url(#${c})" stroke="var(--fish-line)" stroke-width="1.2"/><g clip-path="url(#${c}c)">`;if(t==="hoshi"){for(let k=0;k<9;k++)s+=`<circle cx="${190+k*32}" cy="${86+k*.8}" r="4" fill="#fbf6e6" opacity=".9"/>`;s+=`<path d="M76,108 L106,110" stroke="#4a3626" stroke-width="5" stroke-linecap="round"/>`;}else s+=`<path d="M76,108 C96,112 112,120 120,130" stroke="#5a2a1e" stroke-width="5" fill="none" stroke-linecap="round"/>`;s+=`</g><path ${F(P[2])} d="M118,122 C138,110 166,112 176,120 C166,130 138,134 118,126 Z"/><path d="M110,80 C100,100 100,130 112,148" fill="none" stroke="var(--fish-line)" opacity=".6"/><path d="M30,114 L46,117" stroke="var(--fish-line)" stroke-width="1.6"/><circle cx="66" cy="102" r="8" fill="var(--eye)" stroke="var(--fish-line)"/><circle cx="65" cy="102" r="3.8" fill="#13212b"/>`;(o.marks||[]).forEach(m=>{s+=mark(m);});return `<svg viewBox="${o.vbK||"10 50 570 130"}" role="img" aria-label="${o.label||"ササノハベラのイラスト"}">${s}</svg>`;};
Object.assign(SRC,{
ssnMatsu:{t:"Matsumoto K, Mabuchi K, Kohda M, Nakabo T（1997）Spawning behavior and reproductive isolation of two species of Pseudolabrus．Ichthyological Research 44(4):379-384",u:"https://link.springer.com/article/10.1007/BF02671989"},
ssnMabu03:{t:"馬渕浩司（2003）ササノハベラ属2種の南日本沿岸における地理的分布パターン．魚類学雑誌 50(2):103-113",u:"https://www.jstage.jst.go.jp/article/jji1950/50/2/50_2_103/_article/-char/ja"},
ssnKaryo:{t:"馬渕浩司・新井良一・西田睦（2002）南日本産ササノハベラ属2種の核型および核DNA量．魚類学雑誌 49(2):87-95",u:"https://www.jstage.jst.go.jp/article/jji1950/49/2/49_2_87/_article/-char/ja"},
ssnShige:{t:"重田利拓・渋野拓郎・橋本博明・具島健二（1995）ササノハベラ Pseudolabrus japonicus の生殖サイクル．南西海区水産研究所研究報告 28:43-54",u:"https://fra.repo.nii.ac.jp/records/2003205"},
ssnKyu:{t:"九州大学農学研究院 水産増殖環境学（松山倫也）研究紹介「ホシササノハベラ」",u:"https://www.agr.kyushu-u.ac.jp/lab/sui1/note.pdf"},
ssnOhta:{t:"Ohta K, Hirano M, Mine T ほか（2008）Body color change and serum steroid hormone levels throughout the process of sex change in the adult wrasse, Pseudolabrus sieboldi．Marine Biology 153:843-852",u:"https://link.springer.com/doi/10.1007/s00227-007-0856-0"},
ssnChak:{t:"Chakraborty T ほか（2022）Divulging the social sex change mechanism in ... Pseudolabrus sieboldi．Frontiers in Marine Science 9:1048506",u:"https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2022.1048506/full"},
ssnHonda:{t:"Honda釣り倶楽部 魚図鑑 ササノハベラ",u:"https://www.honda.co.jp/fishing/picture-book/sasanohabera/"},
ssnBouzH:{t:"市場魚貝類図鑑（ぼうずコンニャク）「ホシササノハベラ」",u:"https://www.zukan-bouz.com/syu/%E3%83%9B%E3%82%B7%E3%82%B5%E3%82%B5%E3%83%8E%E3%83%8F%E3%83%99%E3%83%A9"},
ssnBouzA:{t:"市場魚貝類図鑑（ぼうずコンニャク）「アカササノハベラ」",u:"https://www.zukan-bouz.com/syu/%E3%82%A2%E3%82%AB%E3%82%B5%E3%82%B5%E3%83%8E%E3%83%8F%E3%83%99%E3%83%A9"},
ssnFb:{t:"FishBase Pseudolabrus sieboldi",u:"https://fishbase.se/summary/Pseudolabrus-sieboldi.html"}
});
Object.assign(FIGS,{
"ssn-body":()=>figKeysK("ホシササノハベラの体（見分けのポイント）",{kind:"sasa",type:"hoshi",vbK:"0 26 600 190",label:"番号付きのホシササノハベラの図",marks:[[1,96,110,60,190],[2,254,88,250,36],[3,380,66,400,36],[4,148,122,170,196],[5,380,160,380,200]]},
["<b>目の下の黒い線</b>：まっすぐ後ろへ。胸びれまで届かない（ぼうずコンニャク）","<b>背の白い点</b>：名前の「ホシ」の由来（ぼうずコンニャク）","<b>背びれ</b>：雌は黄色っぽい（Honda）","<b>胸びれ</b>：線の行き先を見る所（模式図）","<b>しりびれ</b>：性転換で黄色→赤へ（Ohta ほか）"],"模式図。体色は黄褐色〜緑っぽく、やや赤いこともある。"),
"ssn-compare":()=>figPair("ササノハベラ2種とキュウセン",[["ホシササノハベラ","ベラ科 ササノハベラ属",{kind:"sasa",type:"hoshi",label:"ホシササノハベラの模式図"},"背に白点。線はまっすぐ。内湾・浅場"],["アカササノハベラ","ベラ科 ササノハベラ属",{kind:"sasa",type:"aka",label:"アカササノハベラの模式図"},"赤〜橙で白点なし。線は下へ曲がり胸びれへ。外洋・やや深場"],["キュウセン雌","ベラ科 キュウセン属",{kind:"bera",type:"aka",label:"キュウセン雌の模式図"},"細長く、体の中央に黒い縦帯"]],"見分けはHonda・ぼうずコンニャク。すみ分けは馬渕（2003）。形は模式図。"),
"ssn-spawn":()=>figGantt("産卵期（資料ごと）",[["ホシ・浜田",[[9,12,"var(--r2)"]]],["アカ・四国",[[11,12,"var(--r2)"]]],["図鑑の記述",[[7,10,"var(--ochre)"]]],["釣れる時期",[[4,12]]],["砂中で越冬",[[1,3,"var(--sea)"]]]],"浜田は重田ほか（1995、9月中旬〜12月上旬）。四国は松本ほか（1997）。図鑑は「夏〜秋」（Honda・ぼうずコンニャク）。釣期はHonda。越冬の月は目安 [説]。"),
"ssn-chrom":()=>figBarsH("染色体の数（2n）",[["アカササノハベラ",48,"var(--r2)"],["ホシササノハベラ",42,"var(--sea)"]],"本","馬渕ほか（2002）。見た目は似ていても、染色体の形はまるで違う。"),
"ssn-sex":()=>figBarsH("一番大きい雌が雄に変わった割合（飼育実験）",[["雌6尾を同居",94,"var(--ochre)"],["透明板ごしに見るだけ",50,"var(--sea)"],["雌2尾だけ",0,"var(--r2)"]],"%","Chakraborty ほか（2022）。透明板の50%は性転換の初期段階まで（30日）。")
});
FISH.push({
id:"sasanohabera",name:"ササノハベラ",kana:"ささのはべら 笹の葉ベラ ホシササノハベラ ほしささのはべら アカササノハベラ あかささのはべら イソベラ アカベラ ヒョウタンギザミ フクジ ヨメッコ クサビ",
sci:"Pseudolabrus sieboldi・P. eoethinus",author:"Mabuchi & Nakabo, 1997・(Richardson, 1846)",
en:"Bambooleaf wrasse",family:"ベラ科 ササノハベラ属",
base:"本州中部の太平洋側の岩礁（相模湾・伊豆・紀伊）と瀬戸内海。産卵の数字は島根県浜田と四国",
hero:{kind:"sasa",type:"hoshi"},heroCap:"実は2種。背に白い星があればホシ",
rating:[0,0,0,1,2,2,2,2,2,2,1,1],spawn:[9,10,11,12],
lead:"堤防や磯の小物釣りで必ず顔を出すベラ。1997年に2種に分けられ、今はホシとアカの2種になった。秋〜初冬に産卵し、大きな雌が雄に変わる。",
profileSrc:["ssnMatsu","ssnHonda","ssnBouzH","ssnBouzA"],
profile:[
["和名","ホシササノハベラ・アカササノハベラ（旧ササノハベラ）[確]"],
["学名","<i>Pseudolabrus sieboldi</i>・<i>P. eoethinus</i> [確]"],
["英名","Bambooleaf wrasse など [確]"],
["分類","ベラ科 ササノハベラ属 [確]"],
["大きさ","ホシは約20cm [確]。アカは最大29cm [確]"],
["寿命","知見乏しい（要確認）"],
["旬","春〜夏 [確]"],
["主な釣り方","ちょい投げ・ウキ釣り・胴突き [確]"],
["性","雌から雄へ性転換する [確]"]
],
sections:[
{h:"分類と名前",html:`
<p>ベラ科ササノハベラ属 [確]。</p>
<p><b>2種に分かれた。</b>1997年まで1種（<i>P. japonicus</i>）とされていた [確]。</p>
<p><b>新しい名前。</b>白点のあるホシ、赤いアカの2種になった [確]。</p>
<p><b>名前の由来。</b>細長い体を笹の葉に見立てたとされる [説]。</p>
<p><b>地方名。</b>イソベラ・アカベラ・ヒョウタンギザミなど [確]。2種を区別しない呼び名が多い [確]。</p>
<p class="note">釣り人の「ササノハベラ」は、多くの場合ホシとアカの両方を指す [経]。</p>`,src:["ssnKaryo","ssnHonda","ssnBouzH","ssnBouzA"]},
{h:"形態と見分け方",html:`
<figure class="fig" data-fig="ssn-body"></figure>
<p><b>決め手は目の下の線。</b>ホシはまっすぐで胸びれに届かない [確]。</p>
<p><b>アカの線。</b>下へ曲がって胸びれ近くまで届く [確]。</p>
<p><b>白い点。</b>ホシの背には白点がある [確]。アカははっきりしない [確]。</p>
<p><b>ひれの色。</b>ホシの雌は背びれ・しりびれが黄色 [確]。アカの雄は前が黄色、後ろが赤 [確]。</p>
<figure class="fig" data-fig="ssn-compare"></figure>
<p class="note">キュウセンは体が細長く、口がより小さい [経]。</p>`,src:["ssnHonda","ssnBouzH","ssnBouzA"]},
{h:"分布と生息環境",html:`
<p><b>ホシ。</b>津軽海峡〜九州、房総〜屋久島、瀬戸内海 [確]。済州島・台湾にも [確]。</p>
<p><b>アカ。</b>房総〜屋久島の太平洋側、伊豆・小笠原・沖縄島 [確]。</p>
<p><b>すみ分け。</b>53地点の調査で、アカは紀伊・伊豆など半島の先端に多い [確]。</p>
<p><b>ホシの場所。</b>相模湾や大阪湾の奥、瀬戸内海、日本海側 [確]。</p>
<p><b>理由。</b>アカは黒潮の暖かい海、ホシは影響の弱い海を好む [説]。</p>
<p><b>すみか。</b>水深50mより浅い岩礁 [確]。ホシは岩と砂の境目に多い [確]。</p>
<p class="note">同じ場所に2種がいる海岸もある（四国）[確]。</p>`,src:["ssnHonda","ssnBouzH","ssnBouzA","ssnMabu03","ssnMatsu"]},
{h:"生活史",html:`
<p><b>産卵期。</b>島根県浜田では9月中旬〜12月上旬 [確]。何回にも分けて産む [確]。</p>
<p><b>始まりと終わり。</b>日が短くなると成熟が進み、水温が下がると終わる [説]。</p>
<p><b>四国。</b>2種とも初冬の午後に産卵した [確]。</p>
<figure class="fig" data-fig="ssn-spawn"></figure>
<p><b>図鑑とのずれ。</b>図鑑は「夏〜秋」とする [確]。研究では秋〜初冬 [確]。</p>
<p><b>性転換。</b>小さいうちは全部雌。雄がいないと一番大きな雌が雄になる [確]。</p>
<figure class="fig" data-fig="ssn-sex"></figure>
<p><b>決め手は相対的な大きさ。</b>群れの中で一番かどうかが効く [確]。</p>
<p class="note">年齢と成長の研究は見つからなかった（要確認）。</p>`,src:["ssnShige","ssnMatsu","ssnHonda","ssnBouzH","ssnChak"]},
{h:"食性と行動",html:`
<p><b>食べ物。</b>小さな甲殻類・貝・ゴカイの仲間 [確]。</p>
<p><b>なわばり。</b>雄はなわばりを持ち、雌を集めてハーレムを作る [確]。</p>
<p><b>産卵の形。</b>なわばりの中で雄と雌が1対1で産む [確]。</p>
<p><b>他種とは産まない。</b>ペアは必ず同じ種どうしだった [確]。</p>
<p><b>昼の魚。</b>昼に動き、寒くなると砂に潜って越冬 [確]。</p>
<figure class="fig" data-fig="ssn-chrom"></figure>
<p class="note">胃の中身を割合で示した国内の研究は未確認（要確認）。</p>`,src:["ssnHonda","ssnBouzH","ssnMatsu","ssnKaryo"]}
],
calSrc:["ssnHonda","ssnShige","ssnBouzH"],
calendar:{rows:[
["1","砂中で越冬","砂の中","—","×","—"],
["2","砂中で越冬","砂の中","—","×","—"],
["3","砂中で越冬","砂の中","—","×","—"],
["4","目覚め始め","浅い岩礁","小〜中","△","ちょい投げ"],
["5","活動期","岩と砂の境目","小〜中","○","ちょい投げ・ウキ釣り"],
["6","活動期・旬","岩と砂の境目","中","○","ちょい投げ・胴突き"],
["7","活動期・旬","岩礁","中","○","ちょい投げ・胴突き"],
["8","活動期","岩礁","中","○","ちょい投げ・ウキ釣り"],
["9","産卵期の始まり","岩礁","中〜大","○","胴突き・ウキ釣り"],
["10","産卵期","岩礁","中〜大","○","胴突き・ちょい投げ"],
["11","産卵期","岩礁","中〜大","△","胴突き"],
["12","産卵期の終わり","岩礁","中","△","胴突き"]],
note:"釣期4〜12月はHonda [経]。産卵期は浜田と四国の研究 [確]。評価は経験則 [経]。"},
tactics:[
["ちょい投げ","5〜10月","堤防の先・岩と砂の境目","日中","底","短い竿＋小型天秤＋2本針","アオイソメ・アサリ","根のきわを引く [経]"],
["投げ釣り","6〜10月","岩混じりの砂浜","日中","底","投げ竿＋天秤","アオイソメ","キスの外道で多い [経]"],
["胴突き（足元）","5〜12月","堤防の際・磯","日中","底","小針の胴突き","オキアミ・アオイソメ","底をとって小さく誘う [経]"],
["ウキ釣り","5〜11月","磯・テトラ","日中","底近く","ウキ下を底ぎりぎりに","オキアミ","ウキ下を深めに [確]"],
["船の外道","6〜11月","岩礁まじりの砂地","日中","底","カワハギ・キス仕掛け","アサリ・ゴカイ","本命の前に掛かる [確]"]],
tacticsNote:"釣り方とエサはHonda [確]。狙うより外道で釣れる魚 [確]。仕掛けの細部は一般的なベラ釣り [経]。",
logic:[
{q:"「ベラは夜は釣れない」",v:"裏付けあり",c:"k",a:"昼に動く魚。ただし夜釣りの調査は未確認。",src:["ssnBouzH"]},
{q:"「冬はベラが消える」",v:"裏付けあり",c:"k",a:"寒くなると砂に潜って越冬する。",src:["ssnHonda","ssnBouzH"]},
{q:"「ベラの産卵は夏」",v:"否定的",c:"s",a:"研究では秋〜初冬。浜田は9〜12月、四国は初冬。",src:["ssnShige","ssnMatsu"]},
{q:"「赤いのが雄、黄色いのが雌」",v:"一部あり",c:"s",a:"アカとホシは別種。種の色と性の色を分けて見る。",src:["ssnHonda","ssnOhta"]},
{q:"「底ぎりぎりがコツ」",v:"経験則のみ",c:"e",a:"Hondaもそう書く。研究で確かめた例は未確認。",src:["ssnHonda"]}],
fishery:`
<p><b>獲り方。</b>刺し網・底曳き網・釣り・定置網 [確]。</p>
<p><b>扱い。</b>関東の市場にはほぼ来ない [確]。西日本では流通する [確]。</p>
<p><b>値段。</b>雑魚扱いで安い [確]。</p>
<p class="note">漁獲量の統計や資源評価は見つからなかった（要確認）。IUCN（ホシ）は低懸念 [確]。</p>`,
fisherySrc:["ssnBouzH","ssnBouzA","ssnFb"],
food:`
<p><b>旬。</b>春〜夏 [確]。</p>
<p><b>身。</b>白身で透明感がある。やや水っぽい [確]。</p>
<p><b>皮がうまい。</b>焼霜造りが向く [確]。</p>
<p><b>料理。</b>煮つけ・塩焼き・潮汁・フライ・天ぷら [確]。</p>
<p class="note">ぬめりと鱗を落としてから使う [経]。</p>`,
foodSrc:["ssnHonda","ssnBouzH","ssnBouzA"],
stories:[
{h:"見た目そっくり、染色体は別物",b:"アカは48本、ホシは42本。染色体の形も大きく違う。",f:"長く1種とされていたのが不思議なほど。",src:["ssnKaryo"],c:"確"},
{h:"雄から雌へ戻ることも",b:"性転換した雄だけを集めて飼うと、1尾が雌に戻った。",f:"性転換は一方通行ではない。",src:["ssnKyu"],c:"確"},
{h:"見るだけで雄になりかける",b:"透明板ごしに小さな雌を見せるだけで、半数が性転換を始めた。",f:"引き金は目から入る情報らしい。",src:["ssnChak"],c:"確"},
{h:"しりびれは性のメーター",b:"性転換が進むと、しりびれが黄色から赤へ変わる。雄のホルモンと連動する。",f:"釣った魚のしりびれを見てみよう。",src:["ssnOhta","ssnKyu"],c:"確"},
{h:"黒潮でわかれる2種",b:"アカは半島の先端、ホシは湾の奥。黒潮の影響で住み分ける。",f:"釣れた種で海の性格がわかる。",src:["ssnMabu03"],c:"説"},
{h:"5人で数時間100尾",b:"九州大学は研究用に釣りで集める。5人で数時間に約100尾。",f:"それだけ数の多い魚。",src:["ssnKyu"],c:"確"}],
mysteries:[
"本州中部での年齢と成長は知見乏しい [確]",
"図鑑の「夏〜秋」と研究の「秋〜初冬」のずれの理由は要確認 [説]",
"2種が交雑するかは要確認。ホシの雄がアカのペアに加わった例がある [確]",
"越冬に入る水温は知見乏しい [確]",
"ホシとアカの境目が温暖化で動くかは未解明 [説]"],
mysterySrc:["ssnMatsu","ssnShige","ssnMabu03"],
allSrc:["ssnMatsu","ssnMabu03","ssnKaryo","ssnShige","ssnKyu","ssnOhta","ssnChak","ssnHonda","ssnBouzH","ssnBouzA","ssnFb"]
});
