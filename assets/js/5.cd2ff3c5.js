(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{169:function(t,o,a){},199:function(t){t.exports=JSON.parse('[{"name":"NEAR Protocol","logo":"sponsors/nearprotocol.svg","link":"https://nearprotocol.com","amount":38000},{"name":"Fastly","logo":"sponsors/fastly.svg","link":"https://www.fastly.com","amount":38000},{"name":"Shopify","logo":"sponsors/shopify.svg","link":"https://www.shopify.com","amount":25000},{"name":"The Graph","logo":"sponsors/graphprotocol.svg","link":"https://thegraph.com","amount":4400},{"name":"ChainSafe Systems","logo":"sponsors/chainsafeth.svg","link":"https://chainsafe.io","amount":3200},{"name":"Ryan Zurrer","logo":"https://images.opencollective.com/rzurrer/avatar/72.jpg","link":"https://twitter.com/rzurrer","amount":800},{"name":"Triplebyte","logo":"https://images.opencollective.com/triplebyte/avatar/72.jpg","link":"https://triplebyte.com/os/opencollective","amount":425},{"name":"Aaron Turner","logo":"https://images.opencollective.com/torch2424/avatar/72.jpg","link":"https://aaronthedev.com","amount":420},{"name":"Alon Zakai","logo":"https://images.opencollective.com/kripken/avatar/72.jpg","link":"https://twitter.com/kripken","amount":230},{"name":"Sean Jensen Grey","logo":"https://images.opencollective.com/sean-jensen-grey/avatar/64.jpg","link":"https://opencollective.com/sean-jensen-grey","amount":190},{"name":"Kazuya Kawaguchi","logo":"https://images.opencollective.com/kawakazu80/avatar/64.jpg","link":"https://twitter.com/kazu_pon","amount":120},{"name":"Jordan Timmerman","logo":"https://images.opencollective.com/jordan-timmerman/avatar/64.jpg","link":"https://opencollective.com/jordan-timmerman","amount":100},{"name":"Forrest Moret","logo":"https://images.opencollective.com/forrest-moret/avatar/64.jpg","link":"https://opencollective.com/forrest-moret","amount":75},{"name":"Jacob Richards","logo":"https://images.opencollective.com/jacob-richards/avatar/64.jpg","link":"https://opencollective.com/jacob-richards","amount":75},{"name":"Charlie Arnold","logo":"https://images.opencollective.com/charlie-arnold/avatar/64.jpg","link":"https://opencollective.com/charlie-arnold","amount":75},{"name":"Stefanie Doll","logo":"https://images.opencollective.com/stefanie-doll/avatar/64.jpg","link":"https://opencollective.com/stefanie-doll","amount":65},{"name":"Surma","logo":"https://images.opencollective.com/surma/avatar/64.jpg","link":"https://opencollective.com/surma","amount":60},{"name":"Taylor Clark","logo":"https://images.opencollective.com/taylor-clark/avatar/64.jpg","link":"https://opencollective.com/taylor-clark","amount":50},{"name":"Duncan Dean","logo":"https://images.opencollective.com/duncan-dean/avatar/64.jpg","link":"https://opencollective.com/duncan-dean","amount":45},{"name":"Simon Cheng","logo":"https://images.opencollective.com/simon-cheng/avatar/64.jpg","link":"https://opencollective.com/simon-cheng","amount":30},{"name":"Baocasino","logo":"https://images.opencollective.com/baocasino/avatar/64.jpg","link":"https://www.baocasino.com/","amount":25},{"name":"Sanyo Digital","logo":"https://images.opencollective.com/sanyo-digital1/avatar/64.jpg","link":"https://sanyodigital.com/","amount":20},{"name":"takanori sugawara","logo":"https://images.opencollective.com/takanori-sugawara/avatar/64.jpg","link":"https://opencollective.com/takanori-sugawara","amount":20},{"name":"Kinemaster","logo":"https://images.opencollective.com/kinemaster/avatar/64.jpg","link":"https://kinemaster-apk.com/","amount":15},{"name":"Felix Leupold","logo":"https://images.opencollective.com/xiel/avatar/64.jpg","link":"https://xiel.dev","amount":15},{"name":"Jonathan Beri","logo":"https://images.opencollective.com/jonathanberi/avatar/64.jpg","link":"https://jonathanberi.com","amount":10},{"name":"Jack Arrington","logo":"https://images.opencollective.com/jack-arrington/avatar/64.jpg","link":"https://opencollective.com/jack-arrington","amount":10},{"name":"suominettikasinot24.com","logo":"https://images.opencollective.com/suominettikasinot24/avatar/64.jpg","link":"https://suominettikasinot24.com","amount":10},{"name":"RajBet","logo":"https://images.opencollective.com/rajbet/avatar/64.jpg","link":"https://raj.bet/","amount":10},{"name":"ATS.io","logo":"https://images.opencollective.com/io_ats/avatar/64.jpg","link":"https://ats.io","amount":10},{"name":"TierLists","logo":"https://images.opencollective.com/tierlists/avatar/64.jpg","link":"https://tierlists.com","amount":10},{"name":"ZipCodes.org","logo":"https://images.opencollective.com/zipcodes/avatar/64.jpg","link":"https://zipcodes.org","amount":10},{"name":"Ezra Savard","logo":"https://images.opencollective.com/ezra-savard/avatar/64.jpg","link":"https://opencollective.com/ezra-savard","amount":5},{"name":"incognito","logo":"https://images.opencollective.com/incognito-8bed03b8/avatar/64.jpg","link":"https://opencollective.com/incognito-8bed03b8","amount":5},{"name":"Julien Letellier","logo":"https://images.opencollective.com/jletellier/avatar/64.jpg","link":"https://opencollective.com/jletellier","amount":5},{"name":"日本カジノNET","logo":"https://images.opencollective.com/japancasino_net/avatar/64.jpg","link":"https://www.日本カジノ.net/","amount":5}]')},200:function(t){t.exports=JSON.parse('{"platinum":{"name":"Platinum Sponsors","minAmount":50000,"size":80},"gold":{"name":"Gold Sponsors","minAmount":10000,"size":64},"silver":{"name":"Silver Sponsors","minAmount":2000,"size":48},"bronze":{"name":"Bronze Sponsors","minAmount":200,"size":36},"backer":{"name":"Individual Backers","minAmount":1,"size":32}}')},201:function(t,o,a){"use strict";var e=a(169);a.n(e).a},215:function(t,o,a){"use strict";a.r(o);var e=a(199),n=a(200),l={name:"Sponsors",data(){const t={};return Object.keys(n).forEach(o=>{t[o]=this[o]}),t},beforeCreate(){let t=1/0;Object.keys(n).forEach(o=>{const a=n[o];this[o]=e.filter(o=>o.amount>=a.minAmount&&o.amount<t),t=a.minAmount})},methods:{formatAmount:t=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(t)}},i=(a(201),a(6)),s=Object(i.a)(l,(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"sponsors"},[t.platinum.length>0?a("div",{staticClass:"platinum"},[a("h3",[t._v("Platinum Sponsors")]),t._v(" "),a("div",{staticClass:"list"},t._l(t.platinum,(function(o){return a("a",{attrs:{href:o.link,title:t.formatAmount(o.amount)+" by "+o.name,target:"_blank",rel:"noopener"}},[a("img",{attrs:{src:o.logo,alt:o.name,loading:"lazy"}})])})),0)]):t._e(),t._v(" "),t.gold.length>0?a("div",{staticClass:"gold"},[a("h3",[t._v("Gold Sponsors")]),t._v(" "),a("div",{staticClass:"list"},t._l(t.gold,(function(o){return a("a",{attrs:{href:o.link,title:t.formatAmount(o.amount)+" by "+o.name,target:"_blank",rel:"noopener"}},[a("img",{attrs:{src:o.logo,alt:o.name,loading:"lazy"}})])})),0)]):t._e(),t._v(" "),t.silver.length>0?a("div",{staticClass:"silver"},[a("h3",[t._v("Silver Sponsors")]),t._v(" "),a("div",{staticClass:"list"},t._l(t.silver,(function(o){return a("a",{attrs:{href:o.link,title:t.formatAmount(o.amount)+" by "+o.name,target:"_blank",rel:"noopener"}},[a("img",{attrs:{src:o.logo,alt:o.name,loading:"lazy"}})])})),0)]):t._e(),t._v(" "),t.bronze.length>0?a("div",{staticClass:"bronze"},[a("h3",[t._v("Bronze Sponsors")]),t._v(" "),a("div",{staticClass:"list"},t._l(t.bronze,(function(o){return a("a",{attrs:{href:o.link,title:t.formatAmount(o.amount)+" by "+o.name,target:"_blank",rel:"noopener"}},[a("img",{attrs:{src:o.logo,alt:o.name,loading:"lazy"}})])})),0)]):t._e(),t._v(" "),t.backer.length>0?a("div",{staticClass:"backer"},[a("h3",[t._v("Individual Backers")]),t._v(" "),a("div",{staticClass:"list"},t._l(t.backer,(function(o){return a("a",{attrs:{href:o.link,title:t.formatAmount(o.amount)+" by "+o.name,target:"_blank",rel:"noopener"}},[a("img",{attrs:{src:o.logo,alt:o.name,loading:"lazy"}})])})),0)]):t._e()])}),[],!1,null,"bfe3254c",null);o.default=s.exports}}]);