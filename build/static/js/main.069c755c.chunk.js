(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{243:function(e,t,n){e.exports=n(441)},248:function(e,t,n){},441:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),l=n(60),i=n(50),d=n(51),s=n(122),u=n(53),f=n(52),m=(n(248),n(36)),h=n(153),p=n(65),b=n.n(p),g=n(444),v=(n(102),{border:"0.5px solid grey",margin:"20px auto",width:"90%",align:"center"}),y=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).sort=function(e){for(var t,n=0;n<e.length;n++)for(var a=0;a<e.length;a++)e[n].userid<e[a].userid&&(t=e[n],e[n]=e[a],e[a]=t);return e},e.state={data1:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://140.143.168.77:8080/users",{method:"GET",mode:"cors",headers:{Accept:"application/json,text/plain,*/*"}}).then((function(e){return e.json()})).then((function(t){e.setState({data1:e.sort(t.rows)})}))}},{key:"render",value:function(){console.log(this.state.data1);var e=this.state.data1;return o.a.createElement(g.a,{style:v,dataSource:e,columns:[{title:"\u6635\u79f0",dataIndex:"username",key:"username"},{title:"ID",dataIndex:"userid",key:"userid",sorter:function(e,t){return e.userid-t.userid}},{title:"OPENID",dataIndex:"openid",key:"openid"},{title:"\u4e2a\u7b7e",dataIndex:"signal",key:"signal"},{title:"\u751f\u65e5",dataIndex:"birth",key:"\u751f\u65e5"},{title:"\u6027\u522b",dataIndex:"usersex",key:"\u6027\u522b"}],pagination:!1,bordered:!0})}}]),n}(o.a.Component),E=n(447),O={border:"0.5px solid grey",margin:"20px auto",width:"90%",align:"center"},_=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).sort=function(e){for(var t,n=0;n<e.length;n++)for(var a=0;a<e.length;a++)e[n].l_id<e[a].l_id&&(t=e[n],e[n]=e[a],e[a]=t);return e},e.del=function(t){var n,a=e.state.data;console.log(t);for(var o=0;o<a.length;o++)a[o].l_id===t.l_id&&(n=a[o],console.log(n),delete a[o]);fetch("http://140.143.168.77:8080/deleteletter",{method:"POST",mode:"cors",body:n.l_id}).then((function(e){if(e.ok)return e.text();throw new Error("status:".concat(e.status))}),(function(e){})).then((function(e){void 0!==e&&""!==e&&console.log(e)})).catch((function(e){console.log(e)})),e.setState({data:a.filter((function(e){return e.v!==t}))})},e.state={data1:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://140.143.168.77:8080/letter",{method:"GET",mode:"cors",headers:{Accept:"application/json,text/plain,*/*"}}).then((function(e){return e.json()})).then((function(t){e.setState({data:e.sort(t.rows)})}))}},{key:"render",value:function(){var e=this,t=this.state.data,n=[{title:"\u4fe1\u4ef6\u7f16\u53f7",dataIndex:"l_id",key:"l_id",sorter:function(e,t){return e.l_id-t.l_id}},{title:"\u4fe1\u4ef6\u64b0\u5199\u4eba",dataIndex:"userid",key:"userid"},{title:"\u4fe1\u4ef6\u5185\u5bb9",dataIndex:"l_content",key:"l_content"},{title:"Action",key:"action",render:function(t){return o.a.createElement(E.b,null,o.a.createElement("a",{onClick:function(){return e.del(t)}},"Delete"))}}];return o.a.createElement(g.a,{style:O,dataSource:t,columns:n,pagination:!1,bordered:!0})}}]),n}(o.a.Component),j=n(77),x=n(75),k=n.n(x),w=n(38),S=n(110),I=n(87),C=n(78),P=n(79),T=n(445),A=n(446),F=n(76),N={border:"0.5px solid grey",margin:"20px auto",width:"90%",align:"center"},D=o.a.createContext(),B=function(e){e.index;var t=Object(P.a)(e,["index"]),n=T.a.useForm(),a=Object(C.a)(n,1)[0];return o.a.createElement(T.a,{form:a,component:!1},o.a.createElement(D.Provider,{value:a},o.a.createElement("tr",t)))},L=function(e){var t=e.title,n=e.editable,r=e.children,c=e.dataIndex,l=e.record,i=e.handleSave,d=Object(P.a)(e,["title","editable","children","dataIndex","record","handleSave"]),s=Object(a.useState)(!1),u=Object(C.a)(s,2),f=u[0],m=u[1],h=Object(a.useRef)(),p=Object(a.useContext)(D);Object(a.useEffect)((function(){f&&h.current.focus()}),[f]);var b=function(){m(!f),p.setFieldsValue(Object(I.a)({},c,l[c]))},g=function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.validateFields();case 3:n=e.sent,b(),i(Object(w.a)(Object(w.a)({},l),n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=r;return n&&(v=f?o.a.createElement(T.a.Item,{style:{margin:0},name:c,rules:[{required:!0,message:"".concat(t," is required.")}]},o.a.createElement(A.a,{ref:h,onPressEnter:g,onBlur:g})):o.a.createElement("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:b},r)),o.a.createElement("td",d,v)},J=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).update=function(e){var t,n=a.state.data;console.log(e);for(var o=0;o<n.length;o++)n[o].e_id===e.e_id&&(t=n[o],console.log(t),delete n[o]);fetch("http://140.143.168.77:8080/updateenvelope",{method:"POST",mode:"cors",body:JSON.stringify(t)}).then((function(e){if(e.ok)return console.log(t),e;throw new Error("status:".concat(e.status))}),(function(e){})).then((function(e){void 0!==e&&""!==e&&(console.log(t),console.log(e))})).catch((function(e){console.log(e)}))},a.del=function(e){var t,n=a.state.data;console.log(e);for(var o=0;o<n.length;o++)n[o].e_id===e.e_id&&(t=n[o],console.log(t),delete n[o]);fetch("http://140.143.168.77:8080/deleteenvelope",{method:"POST",mode:"cors",body:t.e_id}).then((function(e){if(e.ok)return e.text();throw new Error("status:".concat(e.status))}),(function(e){})).then((function(e){void 0!==e&&""!==e&&console.log(e)})).catch((function(e){console.log(e)})),a.setState({data:n.filter((function(t){return t.v!==e}))})},a.handleAdd=function(){var e=a.state,t=e.count,n=e.data,o={e_name:"\u5c0f\u738b\u5b50_06",e_id:t,e_price:"0.5",e_date:30,e_img:"https://s3.ax1x.com/2020/11/30/DgOb9I.jpg"};fetch("http://140.143.168.77:8080/postenvelope",{method:"POST",mode:"cors",body:JSON.stringify(o)}).then((function(e){if(e.ok)return console.log(o),e;throw new Error("status:".concat(e.status))}),(function(e){})).then((function(e){void 0!==e&&""!==e&&(console.log(o),console.log(e))})).catch((function(e){console.log(e)})),a.setState({data:[].concat(Object(j.a)(n),[o]),count:t+1})},a.handleSave=function(e){var t=Object(j.a)(a.state.data),n=t.findIndex((function(t){return e===t})),o=t[n];t.splice(n,1,Object(w.a)(Object(w.a)({},o),e)),a.setState({data:t})},a.state={data:[]},a.columns=[{title:"\u4fe1\u5c01\u540d\u79f0",dataIndex:"e_name",key:"e_name",editable:!0},{title:"\u4fe1\u5c01\u7f16\u53f7",dataIndex:"e_id",key:"e_id",sorter:function(e,t){return e.e_id-t.e_id}},{title:"\u4fe1\u5c01\u4ef7\u683c",dataIndex:"e_price",key:"e_price",editable:!0},{title:"\u4fe1\u5c01\u65e5\u671f",dataIndex:"e_date",key:"e_date",editable:!0},{title:"\u4fe1\u5c01\u56fe\u7247",dataIndex:"e_img",key:"e_img",editable:!0},{title:"Action",key:"action",render:function(e){return o.a.createElement(E.b,null,o.a.createElement("a",{onClick:function(){return a.del(e)}},"Delete"),o.a.createElement("a",{onClick:function(){return a.update(e)}},"Update"))}}],a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://140.143.168.77:8080/envelope",{method:"GET",mode:"cors",headers:{Accept:"application/json,text/plain,*/*"}}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.rows,count:t.rows.length+1})}))}},{key:"render",value:function(){var e=this,t=this.state.data,n={body:{row:B,cell:L}},a=this.columns.map((function(t){return t.editable?Object(w.a)(Object(w.a)({},t),{},{onCell:function(n){return{record:n,editable:t.editable,dataIndex:t.dataIndex,title:t.title,handleSave:e.handleSave}}}):t}));return o.a.createElement("div",null,o.a.createElement(F.a,{onClick:this.handleAdd,type:"primary",style:{float:"left",marginBottom:16,marginTop:20,marginLeft:54}},"Add a row"),o.a.createElement(g.a,{components:n,rowClassName:function(){return"editable-row"},style:N,dataSource:t,columns:a,pagination:!1,bordered:!0}))}}]),n}(o.a.Component),q={border:"0.5px solid grey",margin:"20px auto",width:"90%",align:"center"},G=o.a.createContext(),M=function(e){e.index;var t=Object(P.a)(e,["index"]),n=T.a.useForm(),a=Object(C.a)(n,1)[0];return o.a.createElement(T.a,{form:a,component:!1},o.a.createElement(G.Provider,{value:a},o.a.createElement("tr",t)))},R=function(e){var t=e.title,n=e.editable,r=e.children,c=e.dataIndex,l=e.record,i=e.handleSave,d=Object(P.a)(e,["title","editable","children","dataIndex","record","handleSave"]),s=Object(a.useState)(!1),u=Object(C.a)(s,2),f=u[0],m=u[1],h=Object(a.useRef)(),p=Object(a.useContext)(G);Object(a.useEffect)((function(){f&&h.current.focus()}),[f]);var b=function(){m(!f),p.setFieldsValue(Object(I.a)({},c,l[c]))},g=function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.validateFields();case 3:n=e.sent,b(),i(Object(w.a)(Object(w.a)({},l),n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=r;return n&&(v=f?o.a.createElement(T.a.Item,{style:{margin:0},name:c,rules:[{required:!0,message:"".concat(t," is required.")}]},o.a.createElement(A.a,{ref:h,onPressEnter:g,onBlur:g})):o.a.createElement("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:b},r)),o.a.createElement("td",d,v)},U=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).sort=function(e){for(var t,n=0;n<e.length;n++)for(var a=0;a<e.length;a++)e[n].p_id<e[a].p_id&&(t=e[n],e[n]=e[a],e[a]=t);return console.log(e),e[e.length-1].p_id+1},a.update=function(e){var t,n=a.state.data;console.log(e);for(var o=0;o<n.length;o++)n[o].p_id===e.p_id&&(t=n[o],console.log(t),delete n[o]);fetch("http://140.143.168.77:8080/updatepaper",{method:"POST",mode:"cors",body:JSON.stringify(t)}).then((function(e){if(e.ok)return console.log(t),e;throw new Error("status:".concat(e.status))}),(function(e){})).then((function(e){void 0!==e&&""!==e&&(console.log(t),console.log(e))})).catch((function(e){console.log(e)}))},a.del=function(e){var t,n=a.state.data;console.log(e);for(var o=0;o<n.length;o++)n[o].p_id===e.p_id&&(t=n[o],console.log(t),delete n[o]);fetch("http://140.143.168.77:8080/deletepaper",{method:"POST",mode:"cors",body:t.p_id}).then((function(e){if(e.ok)return e.text();throw new Error("status:".concat(e.status))}),(function(e){})).then((function(e){void 0!==e&&""!==e&&console.log(e)})).catch((function(e){console.log(e)})),a.setState({data:n.filter((function(t){return t.v!==e}))})},a.handleAdd=function(){var e=a.state,t=e.count,n=e.data,o={p_name:"\u8bf7\u8f93\u5165\u540d\u79f0",p_id:t,p_price:"0.5",p_date:30,p_img:"https://s3.ax1x.com/2020/11/30/DgOb9I.jpg"};fetch("http://140.143.168.77:8080/postpaper",{method:"POST",mode:"cors",body:JSON.stringify(o)}).then((function(e){if(e.ok)return console.log(o),e;throw new Error("status:".concat(e.status))}),(function(e){})).then((function(e){void 0!==e&&""!==e&&(console.log(o),console.log(e))})).catch((function(e){console.log(e)})),a.setState({data:[].concat(Object(j.a)(n),[o]),count:t+1})},a.handleSave=function(e){var t=Object(j.a)(a.state.data),n=t.findIndex((function(t){return e===t})),o=t[n];t.splice(n,1,Object(w.a)(Object(w.a)({},o),e)),a.setState({data:t})},a.state={data:[]},a.columns=[{title:"\u4fe1\u7eb8\u540d\u79f0",dataIndex:"p_name",key:"p_name",editable:!0},{title:"\u4fe1\u7eb8\u7f16\u53f7",dataIndex:"p_id",key:"p_id",sorter:function(e,t){return e.p_id-t.p_id}},{title:"\u4fe1\u7eb8\u4ef7\u683c",dataIndex:"p_price",key:"p_price",editable:!0},{title:"\u4fe1\u7eb8\u65e5\u671f",dataIndex:"p_date",key:"p_date",editable:!0},{title:"\u4fe1\u7eb8\u56fe\u7247",dataIndex:"p_img",key:"p_img",editable:!0},{title:"Action",key:"action",render:function(e){return o.a.createElement(E.b,null,o.a.createElement("a",{onClick:function(){return a.del(e)}},"Delete"),o.a.createElement("a",{onClick:function(){return a.update(e)}},"Update"))}}],a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://140.143.168.77:8080/paper",{method:"GET",mode:"cors",headers:{Accept:"application/json,text/plain,*/*"}}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.rows,count:e.sort(t.rows)})}))}},{key:"render",value:function(){var e=this,t=this.state.data,n={body:{row:M,cell:R}},a=this.columns.map((function(t){return t.editable?Object(w.a)(Object(w.a)({},t),{},{onCell:function(n){return{record:n,editable:t.editable,dataIndex:t.dataIndex,title:t.title,handleSave:e.handleSave}}}):t}));return o.a.createElement("div",null,o.a.createElement(F.a,{onClick:this.handleAdd,type:"primary",style:{float:"left",marginBottom:16,marginTop:20,marginLeft:54}},"Add a row"),o.a.createElement(g.a,{components:n,rowClassName:function(){return"editable-row"},style:q,dataSource:t,columns:a,pagination:!1,bordered:!0}))}}]),n}(o.a.Component),W={border:"0.5px solid grey",margin:"20px auto",width:"90%",align:"center"},V=o.a.createContext(),z=function(e){e.index;var t=Object(P.a)(e,["index"]),n=T.a.useForm(),a=Object(C.a)(n,1)[0];return o.a.createElement(T.a,{form:a,component:!1},o.a.createElement(V.Provider,{value:a},o.a.createElement("tr",t)))},H=function(e){var t=e.title,n=e.editable,r=e.children,c=e.dataIndex,l=e.record,i=e.handleSave,d=Object(P.a)(e,["title","editable","children","dataIndex","record","handleSave"]),s=Object(a.useState)(!1),u=Object(C.a)(s,2),f=u[0],m=u[1],h=Object(a.useRef)(),p=Object(a.useContext)(V);Object(a.useEffect)((function(){f&&h.current.focus()}),[f]);var b=function(){m(!f),p.setFieldsValue(Object(I.a)({},c,l[c]))},g=function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.validateFields();case 3:n=e.sent,b(),i(Object(w.a)(Object(w.a)({},l),n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=r;return n&&(v=f?o.a.createElement(T.a.Item,{style:{margin:0},name:c,rules:[{required:!0,message:"".concat(t," is required.")}]},o.a.createElement(A.a,{ref:h,onPressEnter:g,onBlur:g})):o.a.createElement("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:b},r)),o.a.createElement("td",d,v)},K=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).sort=function(e){for(var t,n=0;n<e.length;n++)for(var a=0;a<e.length;a++)e[n].s_id<e[a].s_id&&(t=e[n],e[n]=e[a],e[a]=t);return console.log(e),e[e.length-1].s_id+1},a.update=function(e){var t,n=a.state.data;console.log(e);for(var o=0;o<n.length;o++)n[o].s_id===e.s_id&&(t=n[o],console.log(t),delete n[o]);fetch("http://140.143.168.77:8080/updatestamp",{method:"POST",mode:"cors",body:JSON.stringify(t)}).then((function(e){if(e.ok)return console.log(t),e;throw new Error("status:".concat(e.status))}),(function(e){})).then((function(e){void 0!==e&&""!==e&&(console.log(t),console.log(e))})).catch((function(e){console.log(e)}))},a.del=function(e){var t,n=a.state.data;console.log(e);for(var o=0;o<n.length;o++)n[o].s_id===e.s_id&&(t=n[o],console.log(t),delete n[o]);fetch("http://140.143.168.77:8080/deletestamp",{method:"POST",mode:"cors",body:t.s_id}).then((function(e){if(e.ok)return e.text();throw new Error("status:".concat(e.status))}),(function(e){})).then((function(e){void 0!==e&&""!==e&&console.log(e)})).catch((function(e){console.log(e)})),a.setState({data:n.filter((function(t){return t.v!==e}))})},a.handleAdd=function(){var e=a.state,t=e.count,n=e.data,o={s_name:"\u8bf7\u8f93\u5165\u540d\u79f0",s_id:t,s_price:"0.5",s_date:30,s_img:"https://s3.ax1x.com/2020/11/30/DgOb9I.jpg"};fetch("http://140.143.168.77:8080/poststamp",{method:"POST",mode:"cors",body:JSON.stringify(o)}).then((function(e){if(e.ok)return console.log(o),e;throw new Error("status:".concat(e.status))}),(function(e){})).then((function(e){void 0!==e&&""!==e&&(console.log(o),console.log(e))})).catch((function(e){console.log(e)})),a.setState({data:[].concat(Object(j.a)(n),[o]),count:t+1})},a.handleSave=function(e){var t=Object(j.a)(a.state.data),n=t.findIndex((function(t){return e===t})),o=t[n];t.splice(n,1,Object(w.a)(Object(w.a)({},o),e)),a.setState({data:t})},a.state={data:[]},a.columns=[{title:"\u90ae\u7968\u540d\u79f0",dataIndex:"s_name",key:"s_name",editable:!0},{title:"\u90ae\u7968\u7f16\u53f7",dataIndex:"s_id",key:"s_id",sorter:function(e,t){return e.s_id-t.s_id}},{title:"\u90ae\u7968\u4ef7\u683c",dataIndex:"s_price",key:"s_price",editable:!0},{title:"\u90ae\u7968\u65e5\u671f",dataIndex:"s_date",key:"s_date",editable:!0},{title:"\u90ae\u7968\u56fe\u7247",dataIndex:"s_img",key:"s_img",editable:!0},{title:"Action",key:"action",render:function(e){return o.a.createElement(E.b,null,o.a.createElement("a",{onClick:function(){return a.del(e)}},"Delete"),o.a.createElement("a",{onClick:function(){return a.update(e)}},"Update"))}}],a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://140.143.168.77:8080/stamp",{method:"GET",mode:"cors",headers:{Accept:"application/json,text/plain,*/*"}}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.rows,count:e.sort(t.rows)})}))}},{key:"render",value:function(){var e=this,t=this.state.data,n={body:{row:z,cell:H}},a=this.columns.map((function(t){return t.editable?Object(w.a)(Object(w.a)({},t),{},{onCell:function(n){return{record:n,editable:t.editable,dataIndex:t.dataIndex,title:t.title,handleSave:e.handleSave}}}):t}));return o.a.createElement("div",null,o.a.createElement(F.a,{onClick:this.handleAdd,type:"primary",style:{float:"left",marginBottom:16,marginTop:20,marginLeft:54}},"Add a row"),o.a.createElement(g.a,{components:n,rowClassName:function(){return"editable-row"},style:W,dataSource:t,columns:a,pagination:!1,bordered:!0}))}}]),n}(o.a.Component),Q={border:"0.5px solid grey",margin:"20px auto",width:"90%",align:"center"},X=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={data1:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://140.143.168.77:8080/fontfamily",{method:"GET",mode:"cors",headers:{Accept:"application/json,text/plain,*/*"}}).then((function(e){return e.json()})).then((function(t){e.setState({data1:t.rows})}))}},{key:"render",value:function(){console.log(this.state.data1);var e=this.state.data1;return o.a.createElement(g.a,{style:Q,dataSource:e,columns:[{title:"\u5b57\u4f53\u540d\u79f0",dataIndex:"f_name",key:"f_name"},{title:"\u5b57\u4f53\u7f16\u53f7",dataIndex:"f_id",key:"f_id",sorter:function(e,t){return e.f_id-t.f_id}},{title:"\u5b57\u4f53\u4ef7\u683c",dataIndex:"f_price",key:"f_price"},{title:"\u5b57\u4f53\u65e5\u671f",dataIndex:"f_date",key:"f_date"},{title:"\u5b57\u4f53\u56fe\u7247",dataIndex:"f_img",key:"f_img"}],pagination:!1,bordered:!0})}}]),n}(o.a.Component),Y=function(){return o.a.createElement("div",null,"Purchased_Envelope")},Z=function(){return o.a.createElement("div",null,"Purchased_Paper")},$=function(){return o.a.createElement("div",null,"Purchased_Stamp")},ee=function(){return o.a.createElement("div",null,"Purchased_FontFamily")};function te(e){return e.warn?o.a.createElement(h.a,null,o.a.createElement(b.a,{onClick:function(){},style:{marginLeft:"30px"},platform:"android"},o.a.createElement(l.b,{to:"/Envelope",style:{color:"black"}},"\u4fe1\u5c01")),o.a.createElement(b.a,{onClick:function(){},style:{marginLeft:"30px"},platform:"android"},o.a.createElement(l.b,{to:"/Paper",style:{color:"black"}},"\u4fe1\u7eb8")),o.a.createElement(b.a,{onClick:function(){},style:{marginLeft:"30px"},platform:"android"},o.a.createElement(l.b,{to:"/Stamp",style:{color:"black"}},"\u90ae\u7968")),o.a.createElement(b.a,{onClick:function(){},style:{marginLeft:"30px"},platform:"android"},o.a.createElement(l.b,{to:"/FontFamily",style:{color:"black"}},"\u5b57\u4f53"))):null}var ne=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={showWarning:!1,bought:!1},a.handleToggleClick=a.handleToggleClick.bind(Object(s.a)(a)),a.handleBought=a.handleBought.bind(Object(s.a)(a)),a}return Object(d.a)(n,[{key:"handleToggleClick",value:function(){this.setState((function(e){return{showWarning:!e.showWarning}}))}},{key:"handleBought",value:function(){this.setState((function(e){return{bought:!e.bought}}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",{className:"header"},o.a.createElement("p",null,"\u4fe1\u4e2d\u65e5\u6708\u957f\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf")),o.a.createElement("div",{className:"choose"},o.a.createElement(h.a,null,o.a.createElement(b.a,{onClick:function(){},platform:"android"},o.a.createElement(l.b,{to:"/Users",style:{color:"black"}},"\u7528\u6237")),o.a.createElement(b.a,{onClick:function(){},platform:"android"},o.a.createElement(l.b,{to:"/Letter",style:{color:"black"}},"\u4fe1\u4ef6")),o.a.createElement(b.a,{onClick:this.handleToggleClick,arrow:this.state.showWarning?"down":"horizontal",platform:"android"},"\u5546\u57ce"),o.a.createElement(te,{warn:this.state.showWarning}))),o.a.createElement("div",{className:"content"},o.a.createElement(m.a,{path:"/Users",component:y}),o.a.createElement(m.a,{path:"/Letter",component:_}),o.a.createElement(m.a,{path:"/Envelope",component:J}),o.a.createElement(m.a,{path:"/Paper",component:U}),o.a.createElement(m.a,{path:"/Stamp",component:K}),o.a.createElement(m.a,{path:"/FontFamily",component:X}),o.a.createElement(m.a,{path:"/Purchased_Envelope",component:Y}),o.a.createElement(m.a,{path:"/Purchased_Paper",component:Z}),o.a.createElement(m.a,{path:"/Purchased_Stamp",component:$}),o.a.createElement(m.a,{path:"/Purchased_FontFamily",component:ee})))}}]),n}(o.a.Component),ae=function(){return o.a.createElement(l.a,null,o.a.createElement(ne,null))};n(440);c.a.render(o.a.createElement(ae,null),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.069c755c.chunk.js.map