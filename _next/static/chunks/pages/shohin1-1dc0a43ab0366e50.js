(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{2810:(i,s,e)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/shohin1",function(){return e(5549)}])},864:(i,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>t});var n=e(4848),c=e(4561),o=e.n(c);function t(i){return 0==i.stock?(0,n.jsxs)("div",{className:o().item,children:[(0,n.jsx)("img",{className:o().item2,src:i.img,onClick:i.onImageClick,style:{cursor:"pointer"}}),(0,n.jsxs)("p",{children:["商品名: ",i.name]}),(0,n.jsx)("p",{children:"在庫がなくなりました。"}),(0,n.jsx)("p",{children:"入荷をお待ちください"}),(0,n.jsxs)("p",{children:["値段: ",i.price]})]}):(0,n.jsxs)("div",{className:o().item,children:[(0,n.jsx)("img",{className:o().item2,src:i.img,onClick:i.onImageClick,style:{cursor:"pointer"}}),(0,n.jsxs)("p",{children:["商品名: ",i.name]}),(0,n.jsxs)("p",{children:["在庫: ",i.stock]}),(0,n.jsxs)("p",{children:["値段: ",i.price]}),(0,n.jsx)("button",{className:o().button,onClick:i.onBuy,children:"購入"})]})}},5549:(i,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>l});var n=e(4848),c=e(864),o=e(4561),t=e.n(o),r=e(6540);function l(){let[i,s]=(0,r.useState)([{id:0,name:"リブレ オーデパルファム",stock:5,description:"【トップ】ラベンダー、タンジェリン、ネロリオレンジブロッサムアプソリュと",description1:"そのエッセンスであるネロリを組み合わせ、ジューシーなタンジェリンと共にラベンダーとの対比を生み出します。",description2:"【ミドル】オレンジブロッサム、ジャスミンサンバックジャスミンがその官能性を強調し、",description3:"より多くの色と強さを与えます。",description4:"【ラスト】バニラ、トンカビーン、ホワイトムスクいぶされたバニラと艶やかなムスクが美しく燃え上がります。",price:12980,img:"/img/ysl1.jpg"},{id:1,name:"ブラック OP オーデパルファム",stock:5,description:"パワフルで中毒になるようなコーヒーとセンシュアルな透明感があるホワイトフラワーのコントラストが織りなす",description1:"コーヒーフローラルの媚薬。",price:12980,img:"/img/ysl2.jpg"},{id:2,name:"ディランパープル フェム オーデパルファム",stock:5,description:"Dylan Purple（ ディランパープル） は明るくエレガントな香り弾けるようなベルガモットが、 もぎたてのオレンジによる喜びあふれる香りに溶け合います。ジューシーなペアが、 もはや中毒性を感じるほどワクワクするアコードにモダンなタッチを加えます。パープルフリージアのリッチな香りが開花し、 その花びらの繊細な香りは、パワフルに拡散するPomarose（ ポマローズ） とMahonial（ マホニアル） によって昇華されます。Belambre（ ベランブレ） とAmbrofix（ アンブロフィックス） のエレガントで活き活きした香りを、柔らかいIso E Super（ イソイースーパー） とクリーミーなシダーウッドが引き立てながら、Silkolide（ シルコライド） がムスキーな香りとほんのりフルーティなアクセントをプラスします。",price:16720,img:"/img/vel.jpg"},{id:3,name:"ウッド セージ＆シー ソルト コロン",stock:5,description:"英国の海岸の爽やかな空気を吸いこんで。風が吹き抜ける海岸は、海の塩と険しい崖のミネラルの香りに満ちています。荒々しい海で、浸り砕ける波の音が、五感を刺激します。英国諸島の自然の美しさが、フレッシュなウッディ セントにインスピレーションを与えます。",price:11800,img:"/img/joma.jpg"}]),e=i=>{s(s=>s.map(s=>s.id===i?{...s,stock:s.stock>0?s.stock-1:0}:s))},[o,l]=(0,r.useState)(null),d=()=>{l(null)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:t().daimei,children:[(0,n.jsx)("h1",{children:"perfume"}),(0,n.jsx)("br",{}),(0,n.jsx)("h2",{children:"❋自分だけの香りを見つけよう❋"})]}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:t().container,children:i.map(i=>(0,n.jsx)(c.default,{name:i.name,stock:i.stock,price:i.price,img:i.img,onBuy:()=>e(i.id),onImageClick:()=>l(i)},i.id))}),o&&(0,n.jsx)("div",{className:t().modal,onClick:d,children:(0,n.jsxs)("div",{className:t().modalContent,onClick:i=>i.stopPropagation(),children:[(0,n.jsx)("img",{src:o.img,alt:o.name}),(0,n.jsxs)("div",{className:t().description,children:[(0,n.jsx)("h3",{children:o.name}),(0,n.jsx)("p",{children:o.description}),(0,n.jsx)("p",{children:o.description1}),(0,n.jsx)("p",{children:o.description2}),(0,n.jsx)("p",{children:o.description3}),(0,n.jsx)("p",{children:o.description4})]}),(0,n.jsx)("button",{className:t().closeButton,onClick:d,children:"閉じる"})]})}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{className:t().top,href:"/",children:"トップページへ戻る"})]})}},4561:i=>{i.exports={daimei:"shohin_daimei__hXlp6",container:"shohin_container__Qk676",item:"shohin_item__2ayd_",item2:"shohin_item2__bk6v_",button:"shohin_button__GsTiT",top:"shohin_top__TzRzO",modal:"shohin_modal__arb7S",modalContent:"shohin_modalContent__KogBB",description:"shohin_description__TQ5N_",closeButton:"shohin_closeButton__0BPoR"}}},i=>{var s=s=>i(i.s=s);i.O(0,[636,593,792],()=>s(2810)),_N_E=i.O()}]);