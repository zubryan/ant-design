webpackJsonp([24,215],{1115:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u4e00\u4e2a\u7b80\u5355\u7684 loading \u72b6\u6001\u3002"]],"en-US":[["p","A simple loading status."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c\u7528\u6cd5","en-US":"basic Usage"},filename:"components/spin/demo/basic.md",id:"components-spin-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3));return n.createElement(a.Spin,null)}}},1116:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u5ef6\u8fdf\u663e\u793a loading \u6548\u679c\u3002\u5f53 spinning \u72b6\u6001\u5728 ",["code","delay"]," \u65f6\u95f4\u5185\u7ed3\u675f\uff0c\u5219\u4e0d\u663e\u793a loading \u72b6\u6001\u3002"]],"en-US":[["p","Specifies a delay for loading state. If ",["code","spinning"]," ends during delay, loading status won't appear."]]},meta:{order:5,title:{"zh-CN":"\u5ef6\u8fdf","en-US":"delay"},filename:"components/spin/demo/delayAndDebounce.md",id:"components-spin-demo-delayAndDebounce"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin<span class="token punctuation">,</span> Alert<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Card</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n  toggle <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>\n        <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Alert</span> <span class="token attr-name">message</span> <span class="token attr-name">title"</span>\n        <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Further</span> <span class="token attr-name">details</span> <span class="token attr-name">about</span> <span class="token attr-name">the</span> <span class="token attr-name">context</span> <span class="token attr-name">of</span> <span class="token attr-name">this</span> <span class="token attr-name">alert."</span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">spinning</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span></span> <span class="token attr-name">delay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span></span> <span class="token punctuation">></span></span><span class="token punctuation">{</span>container<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Spin</span><span class="token punctuation">></span></span>\n        Loading state\uff1a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggle<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function a(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function t(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(a,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);a.prototype=Object.create(s&&s.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(a,s):n(a,s))}var e=s(1),o=(s(2),s(3)),c=function(n){function s(){var p,e,o;a(this,s);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return p=e=t(this,n.call.apply(n,[this].concat(l))),e.state={loading:!1},e.toggle=function(n){e.setState({loading:n})},o=p,t(e,o)}return p(s,n),s.prototype.render=function(){var n=e.createElement(o.Alert,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"});return e.createElement("div",null,e.createElement(o.Spin,{spinning:this.state.loading,delay:500},n),"Loading state\uff1a",e.createElement(o.Switch,{checked:this.state.loading,onChange:this.toggle}))},s}(e.Component);return e.createElement(c,null)},style:".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>,<span class="token number">0</span>,<span class="token number">0</span>,<span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">4</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">50</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">20</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},1117:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u653e\u5165\u4e00\u4e2a\u5bb9\u5668\u4e2d\u3002"]],"en-US":[["p","Spin in a container."]]},meta:{order:2,title:{"zh-CN":"\u5bb9\u5668","en-US":"Inside a container"},filename:"components/spin/demo/inside.md",id:"components-spin-demo-inside"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3));return n.createElement("div",{className:"example"},n.createElement(a.Spin,null))},style:".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>,<span class="token number">0</span>,<span class="token number">0</span>,<span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">4</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">50</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">20</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},1118:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u76f4\u63a5\u628a\u5185\u5bb9\u5185\u5d4c\u5230 ",["code","Spin"]," \u4e2d\uff0c\u5c06\u73b0\u6709\u5bb9\u5668\u53d8\u4e3a\u52a0\u8f7d\u72b6\u6001\u3002"]],"en-US":[["p","Embedding content into ",["code","Spin"]," will alter it into loading state."]]},meta:{order:3,title:{"zh-CN":"\u5361\u7247\u52a0\u8f7d\u4e2d","en-US":"Embedded mode"},filename:"components/spin/demo/nested.md",id:"components-spin-demo-nested"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Card</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n  toggle <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">spinning</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>\n            <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Alert</span> <span class="token attr-name">message</span> <span class="token attr-name">title"</span>\n            <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Further</span> <span class="token attr-name">details</span> <span class="token attr-name">about</span> <span class="token attr-name">the</span> <span class="token attr-name">context</span> <span class="token attr-name">of</span> <span class="token attr-name">this</span> <span class="token attr-name">alert."</span>\n            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Spin</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          Loading state\uff1a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggle<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function a(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function t(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(a,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);a.prototype=Object.create(s&&s.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(a,s):n(a,s))}var e=s(1),o=(s(2),s(3)),c=function(n){function s(){var p,e,o;a(this,s);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return p=e=t(this,n.call.apply(n,[this].concat(l))),e.state={loading:!1},e.toggle=function(n){e.setState({loading:n})},o=p,t(e,o)}return p(s,n),s.prototype.render=function(){return e.createElement("div",null,e.createElement(o.Spin,{spinning:this.state.loading},e.createElement(o.Alert,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})),e.createElement("div",{style:{marginTop:16}},"Loading state\uff1a",e.createElement(o.Switch,{checked:this.state.loading,onChange:this.toggle})))},s}(e.Component);return e.createElement(c,null)}}},1119:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u5c0f\u7684\u7528\u4e8e\u6587\u672c\u52a0\u8f7d\uff0c\u9ed8\u8ba4\u7528\u4e8e\u5361\u7247\u5bb9\u5668\u7ea7\u52a0\u8f7d\uff0c\u5927\u7684\u7528\u4e8e",["strong","\u9875\u9762\u7ea7"],"\u52a0\u8f7d\u3002"]],"en-US":[["p","A small ",["code","Spin"]," use in loading text, default ",["code","Spin"]," use in loading card-level block, and large ",["code","Spin"]," use in loading ",["strong","page"],"."]]},meta:{order:1,title:{"zh-CN":"\u5404\u79cd\u5927\u5c0f","en-US":"Size"},filename:"components/spin/demo/size.md",id:"components-spin-demo-size"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3));return n.createElement("div",null,n.createElement(a.Spin,{size:"small"}),n.createElement(a.Spin,null),n.createElement(a.Spin,{size:"large"}))},style:"\n.ant-spin {\n  margin-right: 16px;\n}\n"}},1120:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848\u3002"]],"en-US":[["p","Customized description content."]]},meta:{order:4,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848","en-US":"Customized description"},filename:"components/spin/demo/tip.md",id:"components-spin-demo-tip"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Spin<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Loading...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>\n      <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Alert</span> <span class="token attr-name">message</span> <span class="token attr-name">title"</span>\n      <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Further</span> <span class="token attr-name">details</span> <span class="token attr-name">about</span> <span class="token attr-name">the</span> <span class="token attr-name">context</span> <span class="token attr-name">of</span> <span class="token attr-name">this</span> <span class="token attr-name">alert."</span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Spin</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3));return n.createElement(a.Spin,{tip:"Loading..."},n.createElement(a.Alert,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"}))}}},1336:function(n,a,s){n.exports={basic:s(1115),delayAndDebounce:s(1116),inside:s(1117),nested:s(1118),size:s(1119),tip:s(1120)}}});