import{L as _}from"./auto.79026103.js";import{h}from"./moment.9709ab41.js";import{_ as m,C as d,h as f,n as b,o,c as r,a as e,F as u,t as n,k as g,i as y,l as v,p as k,f as C}from"./index.e5775ca1.js";const S={components:{Line:_},data(){return{firebaseData:null,rawData:null,user:null,chartData:{labels:[],datasets:[{label:"Ripe",backgroundColor:"#75EFA6",borderColor:"#75EFA6",data:[]},{label:"Under ripe",backgroundColor:"#FB896B",borderColor:"#FB896B",data:[]},{label:"Over ripe",backgroundColor:"#6956E5",borderColor:"#6956E5",data:[]}]},chartOptions:{responsive:!0,lineTension:.4,radius:6,elements:{point:{radius:0}},scales:{x:{grid:{display:!1}},y:{grid:{display:!0},ticks:{callback:function(s,t,p){return s+"%"}}}},maintainAspectRatio:!1},countryStats:[],ripenessStats:{ripe:0,underripe:0,overripe:0},periodStats:{},filterCounty:null,total_artifacts:0}},created(){d.onAuthStateChanged(s=>{s&&(f(b(v,"predictions")).catch(t=>{this.signOut(),console.log(JSON.stringify(t)),alert(`There is an issue, ${t}
Check if you have access or request access to the admin`)}),this.user=s)})},watch:{},mounted(){},methods:{signOut(s){s==null||s.stopPropagation(),d.signOut(),this.$router.push({name:"login"})},formatMonthYear(s){return h(new Date(s)).format("MMM YYYY")}}},O=s=>(k("data-v-af1065ae"),s=s(),C(),s),x={class:"contsdainer-fluid"},B={class:"row mt-5 mx-3"},w={class:"col-12"},F={class:"col-md-3 sidebar-sum"},D={class:"card-body"},E={class:"mb-4"},Y=O(()=>e("div",{class:"table-responsive"},null,-1));function A(s,t,p,I,a,l){return o(),r("main",x,[e("div",B,[e("div",w,[a.user?(o(),r(u,{key:0},[e("h3",null,n(a.user.displayName),1),e("p",null,n(a.user.email),1),e("button",{class:"btn btn-danger",onClick:t[0]||(t[0]=(...i)=>l.signOut&&l.signOut(...i))},"Logout")],64)):g("",!0)]),e("div",F,[(o(!0),r(u,null,y(a.countryStats,(i,c)=>(o(),r("div",{class:"card country-summary-card mb-3 shadow border-0",key:c},[e("div",D,[e("h4",E,n(c)+" ("+n(i.artifacts)+")",1),Y])]))),128))])])])}const P=m(S,[["render",A],["__scopeId","data-v-af1065ae"]]);export{P as default};