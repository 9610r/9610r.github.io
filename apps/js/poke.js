var pokename = ["ザシアン",  "ザマゼンタ",  "ムゲンダイナ",  "ザシアン",  "ザマゼンタ",  "ミュウ",  "ドラパルト",  "バンギラス",  "サザンドラ",  "ヌメルゴン",  "ジャラランガ",  "シルヴァディ",  "ウインディ",  "トゲキッス",  "ギャラドス",  "オノノクス",  "カビゴン",  "ミロカロス",  "ラプラス",  "ドサイドン",  "ジュラルドン",  "バイバニラ",  "オンバーン",  "リザードン",  "タイプ：ヌル",  "エースバーン",  "インテレオン",  "グソクムシャ",  "マンムー",  "ゴリランダー",  "マルヤクデ",  "パルシェン",  "シャワーズ",  "サンダース",  "ブースター",  "エーフィ",  "ブラッキー",  "ルカリオ",  "ニンフィア",  "カバルドン",  "リーフィア",  "グレイシア",  "ヨノワール",  "ギギギアル",  "シャンデラ",  "タチフサグマ",  "バリコオル",  "フライゴン",  "サーナイト",  "エルレイド",  "ダダリン",  "ギガイアス",  "ロズレイド",  "クレベース",  "セキタンザン",  "サダイジャ",  "ブリムオン",  "オーロンゲ",  "サニゴーン",  "ウォーグル",  "バルジーナ",  "ハガネール",  "マニューラ",  "アマージョ",  "ガマゲロゲ",  "ポットデス",  "ドリュウズ",  "ネギガナイト",  "イオルブ",  "キュウコン",  "カイリキー",  "ツンベアー",  "パッチラゴン",  "パッチルドン",  "ウオノラゴン",  "ウオチルドン",  "ツボツボ",  "ローブシン",  "ストリンダー",  "クワガノン",  "バンバドロ",  "キテルグマ",  "ギャロップ",  "ゲンガー",  "ダイオウドウ",  "ホエルオー",  "ネンドール",  "ドータクン",  "ギルガルド",  "ガメノデス",  "ルチャブル",  "ドラピオン",  "フワライド",  "アーマーガア",  "ドヒドイデ",  "マホイップ",  "アギルダー",  "シュバルゴ",  "ゴロンダ",  "ユキノオー",  "パンプジン",  "バイウールー",  "パルスワン",  "ラフレシア",  "カマスジョー",  "マタドガス",  "キリキザン",  "キレイハナ",  "ドクロッグ",  "シンボラー",  "ゴチルゼル",  "ランクルス",  "ヤレユータン",  "ナゲツケサル",  "ナットレイ",  "ケンホロウ",  "ズルズキン",  "ムシャーナ",  "ライチュウ",  "カジリガメ",  "アップリュー",  "タルップル",  "オーベム",  "サイドン",  "マンタイン",  "イワパレス",  "バクガメス",  "ジジーロン",  "クイタラン",  "アイアント",  "ピクシー",  "デスバーン",  "ゴルーグ",  "デスカーン",  "カラマネロ",  "エレザード",  "エンニュート",  "オトスパス",  "オクタン",  "ルンパッパ",  "ダーテング",  "オニゴーリ",  "エルフーン",  "ヒヒダルマ",  "ブルンゲル",  "ペロリーム",  "ユキメノコ",  "スカタンク",  "ミミッキュ",  "ウッウ",  "キングラー",  "モスノウ",  "イエッサン",  "ライボルト",  "トリトドン",  "ビークイン",  "ダストダス",  "オーロット",  "デンチュラ",  "マッギョ",  "タイレーツ",  "イシヘンジン",  "コオリッポ",  "ネイティオ",  "コータス",  "チラチーノ",  "ナマズン",  "シザリガー",  "ニャオニクス",  "ナゲキ",  "ダゲキ",  "アブリボン",  "フレフワン",  "マラカッチ",  "ヨクバリス",  "ワタシラガ",  "バリヤード",  "バリヤード",  "ランターン",  "ルナトーン",  "ソルロック",  "バスラオ",  "テッカニン",  "フォクスライ",  "サワムラー",  "エビワラー",  "カポエラー",  "サマヨール",  "オニシズクモ",  "ヨルノズク",  "ヌメイル",  "アズマオウ",  "チェリム",  "ニダンギル",  "レパルダス",  "ペルシアン",  "ギギアル",  "ニャイキング",  "ハリーセン",  "ペリッパー",  "ロトム",  "モルペコ",  "バチンウニ",  "トゲデマル",  "ヌオー",  "ニューラ",  "ダグトリオ",  "ココロモリ",  "ホルード",  "ジメレオン",  "ジヘッド",  "マッスグマ",  "ジャランゴ",  "バチンキー",  "ラビフット",  "サニーゴ",  "トロッゴン",  "ポニータ",  "オノンド",  "ウソッキー",  "ドロンチ",  "サナギラス",  "ナマコブシ",  "マシェード",  "ゴーリキー",  "ゴースト",  "トゲチック",  "ソーナンス",  "イノムー",  "ドテッコツ",  "リザード",  "デンヂムシ",  "ロゼリア",  "ホエルコ",  "バタフリー",  "クサイハナ",  "バニリッチ",  "ガントル",  "ゴチミル",  "ゴンベ",  "ドロバンコ",  "イワーク",  "ガマガル",  "ヤミラミ",  "クチート",  "カモネギ",  "ランプラー",  "テブリム",  "ギモー",  "バルチャイ",  "ダブラン",  "アオガラス",  "ハトーボー",  "ニャスパー",  "ガーディ",  "ワシボン",  "フワンテ",  "ズルッグ",  "ヤンチャム",  "サイホーン",  "タマンタ",  "シュシュプ",  "ペロッパフ",  "ヌイコグマ",  "ドガース",  "コマタナ",  "ハスブレロ",  "コノハナ",  "ビブラーバ",  "レドームシ",  "リグレー",  "プルリル",  "バケッチャ",  "ユキカブリ",  "チョンチー",  "ゾウドウ",  "デリバード",  "ヒポポタス",  "スコルピ",  "スカンプー",  "ヤブクロン",  "モグリュー",  "クラブ",  "イーブイ",  "カラナクシ",  "イシズマイ",  "ヒトツキ",  "ピッピ",  "コロモリ",  "ピカチュウ",  "ヤトウモリ",  "ナゾノクサ",  "キバゴ",  "トサキント",  "ネイティ",  "バチュル",  "スナヘビ",  "ダルマッカ",  "カブルモ",  "メッソン",  "タタッコ",  "ゴース",  "マネネ",  "サルノリ",  "ヒバニー",  "ヒトカゲ",  "ボクレー",  "ヤバチャ",  "ヘイガニ",  "カメテテ",  "テッシード",  "ヒドイデ",  "ワンリキー",  "ヤクデ",  "シェルダー",  "クマシュン",  "チョボマキ",  "ドッコラー",  "バニプッチ",  "アブリー",  "カチコール",  "ゴビット",  "デスマス",  "デスマス",  "ギアル",  "アゴジムシ",  "モノズ",  "テッポウオ",  "ヨーギラス",  "ジャラコ",  "グレッグル",  "ヤジロン",  "ユキワラシ",  "チラーミィ",  "ドーミラー",  "ヌメラ",  "ロコン",  "ラクライ",  "ヨマワル",  "オタマロ",  "ムンナ",  "ニャース",  "ニャース",  "ナックラー",  "ゴチム",  "ユニラン",  "ウソハチ",  "アママイコ",  "エリキテル",  "メタモン",  "ドジョッチ",  "マーイーカ",  "ネマシュ",  "リオル",  "カムカメ",  "チョロネコ",  "サシカマス",  "ダンゴロ",  "スボミー",  "モンメン",  "キルリア",  "ホシガリス",  "ヒトモシ",  "チェリンボ",  "ウールー",  "ワンパチ",  "マホミル",  "ドラメシヤ",  "キャモメ",  "シズクモ",  "ツチニン",  "ディグダ",  "ミブリム",  "ベロバー",  "マメパト",  "ホーホー",  "カジッチュ",  "ソーナノ",  "ヒメンカ",  "ウリムー",  "ココガラ",  "クスネ",  "トゲピー",  "オンバット",  "ミツハニー",  "エレズン",  "タンドン",  "ジグザグマ",  "ホルビー",  "ヌケニン",  "コソクムシ",  "バルキー",  "ハスボー",  "タネボー",  "ピィ",  "ウパー",  "アマカジ",  "トランセル",  "ピチュー",  "コイキング",  "ヒンバス",  "ラルトス",  "キャタピー",  "ユキハミ",  "サッチムシ",  "ヨワシ"];

function CheckName(){
  const target = document.forms.id_form1.id_textBox1.value;
  const result = pokename.indexOf(target);
  var pname = document.getElementById("pname");
  var ptype = document.getElementById("type");
  var pability = document.getElementById("ability");

  if (result != -1) {
    pokemondata = typedata[pokename[result]];
    pokemonst = pokemonstate[pokename[result]];
    pname.innerHTML = pokename[result];
    ptype.innerHTML = pokemondata.type;
    pability.innerHTML = pokemondata.ability;
    TBL.rows[1].cells[0].innerText = pokemonst.H;
    TBL.rows[1].cells[1].innerText = pokemonst.A;
    TBL.rows[1].cells[2].innerText = pokemonst.B;
    TBL.rows[1].cells[3].innerText = pokemonst.C;
    TBL.rows[1].cells[4].innerText = pokemonst.D;
    TBL.rows[1].cells[5].innerText = pokemonst.S;
    console.log(pokemondata);
    console.log(pokemonst);
  }
  else {
    console.log("null")
    }
  }


function CheckType(){
  //console.log(RandInt(12));
    const valp = document.myform.selectInt;
    buki = pokename[RandInt(pokename.length)];
    document.getElementById("message").innerHTML = buki;
    var target2 = document.getElementById("message").value;
    console.log(buki);
    setTweetButton(buki);
  }
