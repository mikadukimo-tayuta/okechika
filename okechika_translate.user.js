// ==UserScript==
// @name         okechika_translate
// @match        https://*.qtes9gu0k.xyz/*
// @grant        none
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/mikadukimo-tayuta/okechika/main/okechika_translate.user.js
// @downloadURL  https://raw.githubusercontent.com/mikadukimo-tayuta/okechika/main/okechika_translate.user.js
// @version      1.0.20
// ==/UserScript==

(function () {
    'use strict';

    const map = {
  // ひらがな・記号
  "东":"あ","代":"い","乱":"う","仃":"え","僌":"お",
  "丌":"か","丄":"き","乇":"く","丟":"け","一":"こ",
  "乡":"さ","丣":"し","丆":"す","乐":"せ","亃":"そ",
  "世":"た","亝":"ち","佄":"つ","伸":"て","乛":"と",
  "不":"な","丂":"に","劏":"ね","三":"の","万":"は",
  "伕":"ひ","仁":"へ","临":"ほ","乌":"ま","乹":"み",
  "倈":"む","丗":"め","乢":"も","举":"や","伥":"よ",
  "乏":"ら","丝":"り","丕":"る","丢":"れ","买":"ろ",
  "兰":"わ","乖":"を","侕":"ん",
  "両":"が","亇":"ぎ","俥":"ぐ","义":"げ","兡":"ご",
  "冯":"ざ","亏":"じ","争":"ず","亼":"ぜ",
  "乯":"だ","冟":"づ","丐":"で","亠":"ど",
  "仝":"っ","乥":"ば","别":"ぶ","刬":"べ",
  "傫":"ぱ","傰":"ぷ","倨":"ぺ",
  "伖":"ゅ","亞":"ょ","傯":"ー","俬":"ゃ","侔":"ぇ",
  "凋":"ぴ","亩":"ふ",
  "。":"。","之":"々",

  // 数字
  "ア":"1","ィ":"2","イ":"3","ゥ":"4","ウ":"5","ェ":"6","エ":"7","ォ":"8","オ":"9",
  "カ":"10","ガ":"11","キ":"12","ギ":"13","ク":"14","グ":"15","ケ":"16","ゲ":"17",
  "コ":"18","ゴ":"19","サ":"20","ザ":"21","シ":"22","ジ":"23","ス":"24","ズ":"25",
  "セ":"26","ゼ":"27","ソ":"28","ゾ":"29","タ":"30","ダ":"31","チ":"32","ヂ":"33",
  "ッ":"34","ツ":"35","ヅ":"36","テ":"37","デ":"38","ト":"39","ド":"40",
  "ナ":"41","ニ":"42","ヌ":"43","ネ":"44","ノ":"45",
  "ハ":"46","バ":"47","パ":"48","ヒ":"49","ビ":"50","ピ":"51",
  "フ":"52","ブ":"53","プ":"54","ヘ":"55","ベ":"56","ペ":"57",
  "ホ":"58","ボ":"59","ポ":"60",
  "マ":"61","ミ":"62","ム":"63","メ":"64","モ":"65",
  "ャ":"66","ヤ":"67","ュ":"68","ユ":"69","五":"四",

  // その他
  "刘":"時","劉":"報","佫":"本","倏":"店","俊":"ぽ","剷":"定","佲":"食",
  "什":"地","下":"確","侫":"知","丑":"生","丮":"活","假":"客",
  "侂":"様","倯":"歩","候":"小","儹":"上","偊":"重","僭":"最",
  "剬":"初","偄":"明","儺":"下","侚":"越","儿":"存",
  "傠":"手","乄":"常","們":"見","勓":"開","丩":"第","凃":"封",
  "儌":"祭","丙":"言","业":"葉","凾":"交","伙":"響","偺":"行",
  "伞":"儀","刄":"録","准":"収","仾":"色","佋":"自","刋":"年",
  "乵":"日","侸":"祈","冡":"命","仒":"形","冤":"切","剙":"味",
  "侀":"死","倾":"人","凩":"不","勲":"吉","仪":"墓","剣":"忘",
  "佒":"物","卖":"還","傐":"暴","僄":"払","侏":"闇","刾":"永",
  "仸":"禁","僢":"呼","僤":"寄","刳":"犯","刱":"罪","凗":"過",
  "凘":"去","冓":"熟","凲":"存","兀":"在","卤":"明","乳":"三",
  "儴":"忌","勚":"屍","侤":"先","匂":"頭","匱":"別","亣":"世",
  "儫":"界","匦":"集","儵":"屋","个":"一","与":"場","剑":"流",
  "偢":"多","剎":"月",
  "佮":"向","備":"新","仢":"ぞ","割":"加","倽":"対","匵":"備","伅":"心",
  "勜":"訪","仩":"親","侦":"待","伛":"合","舗":"ポ","丏":"所","亳":"間",
  "儛":"入","冣":"大","伈":"落","仲":"着","倠":"養","乩":"取","乸":"営",
  "借":"休","偉":"丁","傍":"内","俜":"香","劆":"ゆ",
  "了":"急","伳":"名","倚":"楽","佳":"事","勁":"化","俹":"道",
  "仮":"彩","傚":"祝","冞":"息","划":"置","云":"出","乎":"照",
  "佤":"無","佃":"持",
  "匄":"選","係":"込","似":"ぬ","伀":"目","仡":"終",
  "佘":"作","傟":"相","兛":"性","佟":"空","僮":"中","凭":"力",
  "关":"軽","刿":"花","勮":"必",
  "仚":"覗","卋":"像","且":"び","処":"我","丞":"受",
  "伊":"導","亷":"音","勍":"思","兎":"広","冦":"扱",
  "剃":"清","勇":"保","偮":"求","偬":"価","传":"早",
  "俳":"塞","刌":"以",
  "仰":"身","剠":"決","仫":"色","乻":"変","俻":"迷",
  "剪":"子","仑":"異","仂":"消","主":"影","乧":"来",
  "創":"際","剺":"印","儏":"関",
  "俞":"感","勿":"次","俯":"指","勵":"限","剸":"文","伏":"街",
  "劈":"情","丅":"記","剼":"集","减":"閉","匤":"再","儼":"村",
  "书":"未","儳":"恐","匰":"特","儽":"別","凇":"容","凳":"続",
    "乫":"残","匙":"散","勻":"守","两":"掟","劚":"正",
};
    let enabled = false;

    const keys = Object.keys(map);
    function replaceText(node) {
        if (node.nodeType !== 3) return;

        if (
            node.parentNode &&
            node.parentNode.classList &&
            node.parentNode.classList.contains('translated-text')
        ) return;

        let text = node.nodeValue;
        let replaced = false;

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (text.includes(key)) {
                text = text.split(key).join(map[key]);
                replaced = true;
            }
        }

        if (replaced) {
            const span = document.createElement('span');
            span.className = 'translated-text';
            span.textContent = text;
            node.replaceWith(span);
        }
    }
    const style = document.createElement('style');
    style.textContent = `
  .translated-text {
    font-family: "Yu Gothic", "Yu Gothic UI", sans-serif !important;
  }
`;
    document.head.appendChild(style);

    function walk(node) {
        for (let i = 0; i < node.childNodes.length; i++) {
            walk(node.childNodes[i]);
        }
        replaceText(node);
    }

    function run() {
        walk(document.body);
    }

    const btn = document.createElement('button');
    btn.textContent = 'おふ';

    Object.assign(btn.style, {
        position: 'fixed',
        top: '50px',
        right: '20px',
        zIndex: '9999',
        padding: '8px 12px',
        background: '#006432',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        'font-size': '18px',
        'border-radius': '5px',
        'font-family': '"Yu Gothic", "Yu Gothic UI", sans-serif'
    });

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (
                    node.nodeType === 1 &&
                    node.classList &&
                    node.classList.contains('translated-text')
                ) return;

                if (
                    node.parentNode &&
                    node.parentNode.classList &&
                    node.parentNode.classList.contains('translated-text')
                ) return;

                walk(node);
            });
        });
    });

    function startObserver() {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    function stopObserver() {
        observer.disconnect();
    }

    btn.onclick = () => {
        enabled = !enabled;
        btn.textContent = enabled ? 'おん' : 'おふ';

        if (enabled) {
            run();
            startObserver();
        } else {
            stopObserver();
            location.reload();
        }
    };

    document.body.appendChild(btn);
})();
