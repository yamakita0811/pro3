(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[976],{62:(i,s,e)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/shohin3",function(){return e(7483)}])},864:(i,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>t});var n=e(4848),c=e(4561),o=e.n(c);function t(i){return 0==i.stock?(0,n.jsxs)("div",{className:o().item,children:[(0,n.jsx)("img",{className:o().item2,src:i.img,onClick:i.onImageClick,style:{cursor:"pointer"}}),(0,n.jsxs)("p",{children:["商品名: ",i.name]}),(0,n.jsx)("p",{children:"在庫がなくなりました。"}),(0,n.jsx)("p",{children:"入荷をお待ちください"}),(0,n.jsxs)("p",{children:["値段: ",i.price]})]}):(0,n.jsxs)("div",{className:o().item,children:[(0,n.jsx)("img",{className:o().item2,src:i.img,onClick:i.onImageClick,style:{cursor:"pointer"}}),(0,n.jsxs)("p",{children:["商品名: ",i.name]}),(0,n.jsxs)("p",{children:["在庫: ",i.stock]}),(0,n.jsxs)("p",{children:["値段: ",i.price]}),(0,n.jsx)("button",{className:o().button,onClick:i.onBuy,children:"購入"})]})}},7483:(i,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>a});var n=e(4848),c=e(864),o=e(4561),t=e.n(o),r=e(6540);function a(){let[i,s]=(0,r.useState)([{id:0,name:"1017 ALYX 9SM",stock:5,description:"カラー: シルバー",description1:"素材: SILVER",description2:"アリクスのHero Chain\xd7NIKEのコラボ商品です。 ",price:92e3,img:"/img/alyx1.jpg"},{id:1,name:"1017 ALYX 9SM(ALYX)",stock:5,description:"カラー: シルバー",description1:"素材: SILVER",description2:"アリクスのネックレスであなたのファッションに一癖加える素晴らしいアイテムです。",price:3e4,img:"/img/alyx2.jpg"},{id:2,name:"VERSACE メデューサビーズネックレス",stock:5,description:"ヴェルサーチェのネックレスは、ブランドの象徴であるメデューサモチーフや大胆なデザインが特徴。上質な素材と精巧なディテールが際立つ、ラグジュアリーでエレガントなアクセサリーです。",price:6e4,img:"/img/vel2.jpg"},{id:3,name:"YSL ツイストネックレス",stock:5,description:"「YSLのネックレスは、タイムレスなエレガンスとモダンな魅力を融合。アイコニックなロゴや洗練されたデザインが、スタイルに上品なアクセントを加えます。",price:79800,img:"/img/ysl3.jpg"}]),e=i=>{s(s=>s.map(s=>s.id===i?{...s,stock:s.stock>0?s.stock-1:0}:s))},[o,a]=(0,r.useState)(null),l=()=>{a(null)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:t().daimei,children:[(0,n.jsx)("h1",{className:t().daimei,children:"necklace"}),(0,n.jsx)("br",{}),(0,n.jsx)("h2",{className:t().daimei,children:"❋首元の輝きでファッションにアクセントを❋"})]}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:t().container,children:i.map(i=>(0,n.jsx)(c.default,{name:i.name,stock:i.stock,price:i.price,img:i.img,onBuy:()=>e(i.id),onImageClick:()=>a(i)},i.id))}),o&&(0,n.jsx)("div",{className:t().modal,onClick:l,children:(0,n.jsxs)("div",{className:t().modalContent,onClick:i=>i.stopPropagation(),children:[(0,n.jsx)("img",{src:o.img,alt:o.name}),(0,n.jsxs)("div",{className:t().description,children:[(0,n.jsx)("h3",{children:o.name}),(0,n.jsx)("p",{children:o.description}),(0,n.jsx)("p",{children:o.description1}),(0,n.jsx)("p",{children:o.description2}),(0,n.jsx)("p",{children:o.description3}),(0,n.jsx)("p",{children:o.description4})]}),(0,n.jsx)("button",{className:t().closeButton,onClick:l,children:"閉じる"})]})}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{className:t().top,href:"/",children:"トップページへ戻る"})]})}},4561:i=>{i.exports={daimei:"shohin_daimei__hXlp6",container:"shohin_container__Qk676",item:"shohin_item__2ayd_",item2:"shohin_item2__bk6v_",button:"shohin_button__GsTiT",top:"shohin_top__TzRzO",modal:"shohin_modal__arb7S",modalContent:"shohin_modalContent__KogBB",description:"shohin_description__TQ5N_",closeButton:"shohin_closeButton__0BPoR"}}},i=>{var s=s=>i(i.s=s);i.O(0,[636,593,792],()=>s(62)),_N_E=i.O()}]);