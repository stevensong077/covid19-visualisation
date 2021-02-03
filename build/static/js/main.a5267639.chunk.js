(this["webpackJsonpcovid19-visualisation"]=this["webpackJsonpcovid19-visualisation"]||[]).push([[0],{503:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(0),c=a(21),s=a.n(c),i=a(47),o=a(42),u=a.n(o),l=a(116),d=a(44),j=a(511),p=a(508),b=a(513),O=a(515),h=a(64),f=a(268),x=a(514),v=a(109),g=a(59),y=a(510),w=a(512),S=a(509),m=a(258),T=a.n(m),C=a(158),A=a(152),E={GET_DATA:"GET_DATA",GET_DATA_SUCCESS:"GET_DATA_SUCCESS",GET_DATA_FAIL:"GET_DATA_FAIL",fetchData:function(){return{type:E.GET_DATA}}},k=E,_=(a(291),a(56)),D=j.a.Title,I=function(e){var t=e.data,a=Object(r.useState)([]),c=Object(d.a)(a,2),s=c[0],i=c[1];Object(r.useEffect)((function(){var e=function(){for(var e=[],a=0;a<t.length;a++)0!==t[a].new&&e.push({post:JSON.stringify(t[a].postcode),cases:parseInt(t[a].new)});return e}();i(e)}),[t]);return Object(n.jsxs)(y.a,{bordered:!1,style:{padding:"0 80px"},children:[Object(n.jsx)(D,{level:4,children:"New cases"}),Object(n.jsx)(S.a,{dataSource:s,columns:[{title:"Postcode",dataIndex:"post",key:"postcode"},{title:"New Cases",dataIndex:"cases",key:"new",sorter:{compare:function(e,t){return e.new-t.new}}}],rowKey:function(e){return e.post},style:{padding:"20px 0 80px"}}),Object(n.jsx)(_.Chart,{height:320,width:600,autoFit:!0,data:s,children:Object(n.jsx)(_.Interval,{position:"post*cases",color:"post",size:80})})]})},F=j.a.Title,G=function(e){var t=e.data,a=Object(r.useState)([]),c=Object(d.a)(a,2),s=c[0],o=c[1],u=Object(r.useState)([]),l=Object(d.a)(u,2);l[0],l[1];Object(r.useEffect)((function(){var e=function(){for(var e=0,a=0;a<t.length;a++)0!==t[a].active&&(e+=parseInt(t[a].active));for(var n=[],r=0;r<t.length;r++)0!==t[r].active&&n.push({post:JSON.stringify(t[r].postcode),cases:parseInt(t[r].active),percentage:parseFloat(t[r].active/e)});return n}();o(e)}),[t]);return Object(n.jsxs)(y.a,{bordered:!1,style:{padding:"0, 50px"},children:[Object(n.jsx)(F,{level:4,children:"Active cases"}),Object(n.jsx)(y.a,{bordered:!1,style:{padding:"20px 0 40px"},children:Object(n.jsxs)(_.Chart,{height:320,width:600,autoFit:!0,data:s,children:[Object(n.jsx)(_.Legend,{visible:!1}),Object(n.jsx)(_.Interval,{position:"post*cases",color:"post"})]})}),Object(n.jsxs)(_.Chart,{height:320,width:600,scale:{percentage:{formatter:function(e){return e=100*e+"%"}}},autoFit:!0,data:s,children:[Object(n.jsx)(_.Coordinate,{type:"theta",radius:.75}),Object(n.jsx)(_.Axis,{visible:!1}),Object(n.jsx)(_.Interval,{position:"percentage",color:"post",X:!0,adjust:"stack",style:{lineWidth:1,stroke:"#fff"},label:["*",{content:function(e){return"".concat(e.post,": ").concat(100*e.percentage.toFixed(4),"%")}}],state:{selected:{style:function(e){var t=Object(_.getTheme)().geometries.interval.rect.selected.style(e);return Object(i.a)(Object(i.a)({},t),{},{fill:"red"})}}}})]})]})},N=a(108),L=a(115),J=Object(L.compose)(Object(L.withStateHandlers)((function(){return{isOpen:!1}}),{onToggleOpen:function(e){var t=e.isOpen;return function(){return{isOpen:!t}}}}),N.withScriptjs,N.withGoogleMap)((function(e){var t=e.dataset,a=Object(r.useState)(""),c=Object(d.a)(a,2),s=c[0],i=c[1],o=function(e){var t=[],a=0,n=0;if("9998"===e.post)return{sub:" Overseas",lat:-37.8247282,lng:144.9496289};if("9999"===e.post)return{sub:" Interstate",lat:-37.8118235,lng:144.9614356};for(var r=0;r<e.suburbs.length;r++)t.push(" "+e.suburbs[r].name),a+=e.suburbs[r].lat,n+=e.suburbs[r].lng;return{sub:t,lat:a/e.suburbs.length,lng:n/e.suburbs.length}};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(N.GoogleMap,{defaultZoom:11,defaultCenter:{lat:-37.8136,lng:144.9631},gestureHandling:"greedy",children:t.map((function(e){return Object(n.jsx)(N.Marker,{position:{lat:o(e).lat,lng:o(e).lng},onClick:function(){return i(e.post)},children:s===e.post&&Object(n.jsx)(N.InfoWindow,{onCloseClick:function(){return i("")},children:Object(n.jsx)(n.Fragment,{children:e.post+" : "+o(e).sub+" : "+e.cases})})},e.post)}))})})})),M="http://covid19monitorvic.tk/api",U=a(193),X=a.n(U);function P(){return R.apply(this,arguments)}function R(){return(R=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.a.get("".concat(M,"/all"));case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",{success:!0,data:t.data});case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function z(e){return H.apply(this,arguments)}function H(){return(H=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.a.post("".concat(M,"/postcode"),{postcode:t});case 3:if(200!==(a=e.sent).status){e.next=6;break}return e.abrupt("return",{success:!0,data:a.data});case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var K=j.a.Text,V=j.a.Title,W=p.a.Footer,q=k.fetchData,B=Object(A.b)((function(e){var t=e.dataReducer;return{datalist:t.datalist,isFetchingData:t.isFetchingData}}),{fetchData:q})((function(e){var t=e.datalist,a=e.isFetchingData,c=e.fetchData;Object(r.useEffect)((function(){c()}),[]),Object(r.useEffect)((function(){ce(),function(){for(var e=0,a=0,n=0,r=0;r<t.length;r++)e+=parseInt(t[r].new),a+=parseInt(t[r].active),n+=parseInt(t[r].cases),0===r&&$(t[r].data_date);L(e),P(a),B(n)}()}),[t]);var s,o=Object(r.useState)(""),j=Object(d.a)(o,2),p=j[0],m=j[1],A=Object(r.useState)(""),E=Object(d.a)(A,2),k=E[0],_=E[1],D=Object(r.useState)(0),F=Object(d.a)(D,2),N=F[0],L=F[1],M=Object(r.useState)(0),U=Object(d.a)(M,2),X=U[0],P=U[1],R=Object(r.useState)(0),H=Object(d.a)(R,2),q=H[0],B=H[1],Z=Object(r.useState)(""),Q=Object(d.a)(Z,2),Y=Q[0],$=Q[1],ee=Object(r.useState)([]),te=Object(d.a)(ee,2),ae=te[0],ne=te[1],re="",ce=function(){var e=Object(l.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n=0;case 2:if(!(n<t.length)){e.next=15;break}if(0===t[n].active){e.next=12;break}return e.t0=a,e.t1=JSON.stringify(t[n].postcode),e.next=8,z(t[n].postcode);case 8:e.t2=e.sent.data,e.t3=parseInt(t[n].active),e.t4={post:e.t1,suburbs:e.t2,cases:e.t3},e.t0.push.call(e.t0,e.t4);case 12:n++,e.next=2;break;case 15:ne(a);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(e,t,a){t(),m(e[0]),_(a)},ie=function(e){e(),m("")},oe=[Object(i.a)({title:"Postcode",dataIndex:"postcode",key:"postcode"},(s="postcode",{filterDropdown:function(e){var t=e.setSelectedKeys,a=e.selectedKeys,r=e.confirm,c=e.clearFilters;return Object(n.jsxs)("div",{style:{padding:8},children:[Object(n.jsx)(b.a,{ref:function(e){re=e},placeholder:"Search ".concat(s),value:a[0],onChange:function(e){return t(e.target.value?[e.target.value]:[])},onPressEnter:function(){return se(a,r,s)},style:{width:188,marginBottom:8,display:"block"}}),Object(n.jsxs)(O.b,{children:[Object(n.jsx)(h.a,{type:"primary",onClick:function(){return se(a,r,s)},icon:Object(n.jsx)(C.a,{}),size:"small",style:{width:90},children:"Search"}),Object(n.jsx)(h.a,{onClick:function(){return ie(c)},size:"small",style:{width:90},children:"Reset"})]})]})},filterIcon:function(e){return Object(n.jsx)(C.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,t){return t[s]?t[s].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return re.select()}),100)},render:function(e){return k===s?Object(n.jsx)(T.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[p],autoEscape:!0,textToHighlight:e?e.toString():""}):e}})),{title:"New Cases",dataIndex:"new",key:"new",sorter:{compare:function(e,t){return e.new-t.new}},render:function(e){return Object(n.jsx)(K,{type:0!==parseInt(e)?"danger":"success",children:e})}},{title:"Active Cases",dataIndex:"active",key:"active",sorter:{compare:function(e,t){return e.active-t.active}},render:function(e){return Object(n.jsx)(K,{type:0!==parseInt(e)?"danger":"success",children:e})}},{title:"Total Cases",dataIndex:"cases",key:"cases",sorter:{compare:function(e,t){return e.cases-t.cases}},render:function(e){return Object(n.jsx)(K,{type:0!==parseInt(e)?"danger":"success",children:e})}},{title:"Population",dataIndex:"population"}];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(f.a,{spinning:a,children:[Object(n.jsx)(x.a,{icon:Object(n.jsx)(n.Fragment,{}),title:"Covid-19 in Victoria",subTitle:"Covid-19 information of the past 24 hours statewide.  Data date: ".concat(Y)}),Object(n.jsxs)(v.a,{gutter:16,style:{padding:"0 300px 40px"},children:[Object(n.jsx)(g.a,{span:8,children:Object(n.jsx)(y.a,{children:Object(n.jsx)(w.a,{title:"New Cases",value:N,valueStyle:0===N?{color:"#3f8600"}:{color:"#cf1322"}})})}),Object(n.jsx)(g.a,{span:8,children:Object(n.jsx)(y.a,{children:Object(n.jsx)(w.a,{title:"Active Cases",value:X,valueStyle:0===X?{color:"#3f8600"}:{color:"#cf1322"}})})}),Object(n.jsx)(g.a,{span:8,children:Object(n.jsx)(y.a,{children:Object(n.jsx)(w.a,{title:"Total Cases",value:q,valueStyle:{color:"#cf1322"}})})}),Object(n.jsx)(K,{type:"secondary",style:{padding:"30px 10px"},children:"Note: 9998 represent cases acquired overseas . 9999 represent cases acquired interstate."})]}),Object(n.jsxs)(v.a,{style:{padding:"0 200px 40px"},children:[Object(n.jsx)(g.a,{span:12,children:Object(n.jsx)(I,{data:t})}),Object(n.jsx)(g.a,{span:12,children:Object(n.jsx)(G,{data:t})})]}),Object(n.jsx)(S.a,{dataSource:t,columns:oe,style:{padding:"0  200px"},title:function(){return"Search by postcode; Sort by cases"},bordered:!0,rowKey:function(e){return e.postcode}}),Object(n.jsxs)(y.a,{bordered:!1,style:{padding:"20px 100px 0"},children:[Object(n.jsx)(V,{level:4,children:"Active Cases Distribution"}),Object(n.jsx)(J,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyCXXn7SJ9ecHFrWFJQxZJ9988gTl7koixs","&v=3.exp&libraries=geometry,drawing,places"),loadingElement:Object(n.jsx)("div",{style:{height:"80vh"}}),containerElement:Object(n.jsx)("div",{style:{height:"100vh"}}),mapElement:Object(n.jsx)("div",{style:{height:"96vh"}}),dataset:ae})]}),Object(n.jsx)(W,{style:{textAlign:"center"},children:" 2021 Created by Steven"})]})})})),Z=a(62),Q=a(276),Y=a(279),$={datalist:[],isFetchingData:!1};var ee={dataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=Object(Y.a)(t,["type"]);switch(a){case k.GET_DATA:return Object(i.a)(Object(i.a)({},e),{},{isFetchingData:!0});case k.GET_DATA_SUCCESS:return Object(i.a)(Object(i.a)({},e),{},{isFetchingData:!1,datalist:n.payload});case k.GET_DATA_FAIL:return Object(i.a)(Object(i.a)({},e),{},{isFetchingData:!1});default:return e}}},te=a(90),ae=a(275),ne=u.a.mark(ce),re=u.a.mark(se);function ce(){var e,t,a,n;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P();case 2:if(e=r.sent,t=e.success,a=e.data,n=e.error,!t){r.next=11;break}return r.next=9,Object(te.b)({type:k.GET_DATA_SUCCESS,payload:a});case 9:r.next=14;break;case 11:return r.next=13,Object(te.b)({type:k.GET_DATA_FAIL});case 13:ae.a.error(n.message,{autoClose:3e3});case 14:case"end":return r.stop()}}),ne)}function se(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.a)([Object(te.c)(k.GET_DATA,ce)]);case 2:case"end":return e.stop()}}),re)}var ie=u.a.mark(oe);function oe(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.a)([se()]);case 2:case"end":return e.stop()}}),ie)}var ue=Object(Q.a)(),le=[ue],de="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0}):Z.d,je=Object(Z.e)(Object(Z.c)(Object(i.a)({},ee)),de(Z.a.apply(void 0,le)));ue.run(oe);var pe=je;s.a.render(Object(n.jsx)(A.a,{store:pe,children:Object(n.jsx)(B,{})}),document.getElementById("root"))}},[[503,1,2]]]);
//# sourceMappingURL=main.a5267639.chunk.js.map