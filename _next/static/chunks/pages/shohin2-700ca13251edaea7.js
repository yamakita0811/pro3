(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{2896:(i,s,e)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/shohin2",function(){return e(4132)}])},864:(i,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>t});var n=e(4848),c=e(4561),o=e.n(c);function t(i){return 0==i.stock?(0,n.jsxs)("div",{className:o().item,children:[(0,n.jsx)("img",{className:o().item2,src:i.img,onClick:i.onImageClick,style:{cursor:"pointer"}}),(0,n.jsxs)("p",{children:["商品名: ",i.name]}),(0,n.jsx)("p",{children:"在庫がなくなりました。"}),(0,n.jsx)("p",{children:"入荷をお待ちください"}),(0,n.jsxs)("p",{children:["値段: ",i.price]})]}):(0,n.jsxs)("div",{className:o().item,children:[(0,n.jsx)("img",{className:o().item2,src:i.img,onClick:i.onImageClick,style:{cursor:"pointer"}}),(0,n.jsxs)("p",{children:["商品名: ",i.name]}),(0,n.jsxs)("p",{children:["在庫: ",i.stock]}),(0,n.jsxs)("p",{children:["値段: ",i.price]}),(0,n.jsx)("button",{className:o().button,onClick:i.onBuy,children:"購入"})]})}},4132:(i,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var n=e(4848),c=e(864),o=e(4561),t=e.n(o),r=e(6540);function d(){let[i,s]=(0,r.useState)([{id:0,name:"GUCCI ピアス",stock:5,description:"カラー: シルバー",description1:"素材 SV925",description2:"グッチのピアスは、洗練されたデザインと高級感が魅力。ブランドの象徴的なモチーフがあしらわれ、上質な素材で作られたエレガントなアクセサリーです。",price:28200,img:"/img/guti.jpg"},{id:1,name:"WACKO MARIA \xd7 CAREERING",stock:5,description:"カラー: シルバー",description1:"素材 SV925",description2:"WACKO MARIAのピアスは、アートと音楽からインスパイアされた独自のデザインが特徴。ユニークなディテールと洗練された仕上がりで、個性を引き立てるアクセサリーです。",price:81500,img:"/img/waco.jpg"},{id:2,name:"オフホワイト ブランドロゴシングルピアス",stock:5,description:"カラー: グリーン",description1:"素材: 真鍮",description2:"Off-Whiteのピアスは、ストリートとラグジュアリーが融合した独創的なデザイン。大胆なロゴやモチーフが特徴で、個性を際立たせるアクセサリーです。",price:31800,img:"/img/off1.jpg"},{id:3,name:"オフホワイト ブランドロゴピアス",stock:5,description:"カラー: グリーン",description1:"素材: 真鍮",description2:"Off-Whiteのピアスは、モダンでアーバンな魅力を放つアイテム。遊び心あふれるデザインと洗練されたディテールが、スタイルに独自のアクセントを加えます。",price:35e3,img:"/img/off2.jpg"}]),e=i=>{s(s=>s.map(s=>s.id===i?{...s,stock:s.stock>0?s.stock-1:0}:s))},[o,d]=(0,r.useState)(null),l=()=>{d(null)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:t().daimei,children:[(0,n.jsx)("h1",{children:"pierce"}),(0,n.jsx)("br",{}),(0,n.jsx)("h2",{children:"❋おしゃれピアスを見つけよう❋"})]}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:t().container,children:i.map(i=>(0,n.jsx)(c.default,{name:i.name,stock:i.stock,price:i.price,img:i.img,onBuy:()=>e(i.id),onImageClick:()=>d(i)},i.id))}),o&&(0,n.jsx)("div",{className:t().modal,onClick:l,children:(0,n.jsxs)("div",{className:t().modalContent,onClick:i=>i.stopPropagation(),children:[(0,n.jsx)("img",{src:o.img,alt:o.name}),(0,n.jsxs)("div",{className:t().description,children:[(0,n.jsx)("h3",{children:o.name}),(0,n.jsx)("p",{children:o.description}),(0,n.jsx)("p",{children:o.description1}),(0,n.jsx)("p",{children:o.description2}),(0,n.jsx)("p",{children:o.description3}),(0,n.jsx)("p",{children:o.description4})]}),(0,n.jsx)("button",{className:t().closeButton,onClick:l,children:"閉じる"})]})}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{className:t().top,href:"/",children:"トップページへ戻る"})]})}},4561:i=>{i.exports={daimei:"shohin_daimei__hXlp6",container:"shohin_container__Qk676",item:"shohin_item__2ayd_",item2:"shohin_item2__bk6v_",button:"shohin_button__GsTiT",top:"shohin_top__TzRzO",modal:"shohin_modal__arb7S",modalContent:"shohin_modalContent__KogBB",description:"shohin_description__TQ5N_",closeButton:"shohin_closeButton__0BPoR"}}},i=>{var s=s=>i(i.s=s);i.O(0,[636,593,792],()=>s(2896)),_N_E=i.O()}]);