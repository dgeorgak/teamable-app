(()=>{"use strict";var e={368:(e,t,n)=>{var i=n(963),l=n(252),r=n(577);const a=(0,l._)("h1",null,"User profile",-1),s=["src"],o=(0,l._)("span",null,"Name: ",-1),u={id:"name"},p=(0,l._)("hr",null,null,-1),d=(0,l._)("span",null,"Email: ",-1),h={id:"email"},c=(0,l._)("hr",null,null,-1),f=(0,l._)("span",null,"Interests: ",-1),m={id:"interests"},_=(0,l._)("hr",null,null,-1),w=(0,l._)("h1",null,"User profile",-1),y=["src"],b=(0,l._)("span",null,"Name: ",-1),v=(0,l._)("hr",null,null,-1),g=(0,l._)("span",null,"Email: ",-1),P=(0,l._)("hr",null,null,-1),O=(0,l._)("span",null,"Interests: ",-1),U=(0,l._)("hr",null,null,-1);function E(e,t,n,E,j,k){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)((0,l._)("div",null,[a,(0,l._)("img",{src:j.image},null,8,s),o,(0,l._)("b",u,(0,r.zw)(j.name),1),p,d,(0,l._)("b",h,(0,r.zw)(j.email),1),c,f,(0,l._)("b",m,(0,r.zw)(j.interests),1),_,(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>k.handleEditProfile&&k.handleEditProfile(...e))},"Edit Profile")],512),[[i.F8,!j.isEditMode]]),(0,l.wy)((0,l._)("div",null,[w,(0,l._)("img",{src:j.image},null,8,y),b,(0,l.wy)((0,l._)("input",{type:"text",id:"input-name","onUpdate:modelValue":t[1]||(t[1]=e=>j.name=e)},null,512),[[i.nr,j.name]]),v,g,(0,l.wy)((0,l._)("input",{type:"text",id:"input-email","onUpdate:modelValue":t[2]||(t[2]=e=>j.email=e)},null,512),[[i.nr,j.email]]),P,O,(0,l.wy)((0,l._)("input",{type:"text",id:"input-interests","onUpdate:modelValue":t[3]||(t[3]=e=>j.interests=e)},null,512),[[i.nr,j.interests]]),U,(0,l._)("button",{onClick:t[4]||(t[4]=(...e)=>k.handleUpdateProfile&&k.handleUpdateProfile(...e))},"Update Profile")],512),[[i.F8,j.isEditMode]])],64)}const j=n.p+"img/profile.314fb5e3.jpeg",k={name:"App",data(){return{image:j,name:"",email:"",interests:"",isEditMode:!1}},async created(){const e=await this.fetchUserProfile();this.name=e.name,this.email=e.email,this.interests=e.interests},methods:{handleEditProfile(){this.isEditMode=!0},async handleUpdateProfile(){const e={name:this.name,email:this.email,interests:this.interests},t=await this.updateUserProfile(e);console.log(t),this.isEditMode=!1},async fetchUserProfile(){const e=await fetch("get-profile");return await e.json()},async updateUserProfile(e){const t=await fetch("update-profile",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)});return await t.json()}}};var x=n(744);const C=(0,x.Z)(k,[["render",E]]),M=C;(0,i.ri)(M).mount("#app")}},t={};function n(i){var l=t[i];if(void 0!==l)return l.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,(()=>{var e=[];n.O=(t,i,l,r)=>{if(!i){var a=1/0;for(p=0;p<e.length;p++){for(var[i,l,r]=e[p],s=!0,o=0;o<i.length;o++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](i[o])))?i.splice(o--,1):(s=!1,r<a&&(a=r));if(s){e.splice(p--,1);var u=l();void 0!==u&&(t=u)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[i,l,r]}})(),(()=>{n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.p="/"})(),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var l,r,[a,s,o]=i,u=0;if(a.some((t=>0!==e[t]))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(o)var p=o(n)}for(t&&t(i);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},i=self["webpackChunkteamable"]=self["webpackChunkteamable"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=n.O(void 0,[998],(()=>n(368)));i=n.O(i)})();
//# sourceMappingURL=app.f16399b6.js.map