(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0HMw":function(n,i,e){},Iog2:function(n,i,e){var t=e("mp5j");n.exports=(t.default||t).template({1:function(n,i,e,t,o){var a,l,r=null!=i?i:n.nullContext||{},s=n.lookupProperty||function(n,i){if(Object.prototype.hasOwnProperty.call(n,i))return n[i]};return"<h3>Using "+n.escapeExpression("function"==typeof(l=null!=(l=s(e,"name")||(null!=i?s(i,"name"):i))?l:n.hooks.helperMissing)?l.call(r,{name:"name",hash:{},data:o,loc:{start:{line:3,column:10},end:{line:3,column:18}}}):l)+"</h3>\r\n<ul>\r\n"+(null!=(a=s(e,"each").call(r,null!=i?s(i,"sites"):i,{name:"each",hash:{},fn:n.program(2,o,0),inverse:n.noop,data:o,loc:{start:{line:5,column:4},end:{line:11,column:13}}}))?a:"")+"</ul>\r\n"},2:function(n,i,e,t,o){var a,l=null!=i?i:n.nullContext||{},r=n.hooks.helperMissing,s=n.escapeExpression,c=n.lookupProperty||function(n,i){if(Object.prototype.hasOwnProperty.call(n,i))return n[i]};return"    <li id="+s("function"==typeof(a=null!=(a=c(e,"id")||(null!=i?c(i,"id"):i))?a:r)?a.call(l,{name:"id",hash:{},data:o,loc:{start:{line:6,column:11},end:{line:6,column:17}}}):a)+">\r\n        <h4>"+s("function"==typeof(a=null!=(a=c(e,"link")||(null!=i?c(i,"link"):i))?a:r)?a.call(l,{name:"link",hash:{},data:o,loc:{start:{line:7,column:12},end:{line:7,column:20}}}):a)+"</h4>\r\n        <p>"+s("function"==typeof(a=null!=(a=c(e,"description")||(null!=i?c(i,"description"):i))?a:r)?a.call(l,{name:"description",hash:{},data:o,loc:{start:{line:8,column:11},end:{line:8,column:26}}}):a)+"</p>\r\n        <span>GitHub:</span> <a href="+s("function"==typeof(a=null!=(a=c(e,"gitHub")||(null!=i?c(i,"gitHub"):i))?a:r)?a.call(l,{name:"gitHub",hash:{},data:o,loc:{start:{line:9,column:37},end:{line:9,column:47}}}):a)+"> </a>\r\n    </li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,i,e,t,o){var a;return"<h2>My projects</h2>\r\n"+(null!=(a=(n.lookupProperty||function(n,i){if(Object.prototype.hasOwnProperty.call(n,i))return n[i]})(e,"each").call(null!=i?i:n.nullContext||{},i,{name:"each",hash:{},fn:n.program(1,o,0),inverse:n.noop,data:o,loc:{start:{line:2,column:0},end:{line:13,column:9}}}))?a:"")},useData:!0})},JpPf:function(n){n.exports=JSON.parse('[{"name":"HTML","sites":[{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""}]},{"name":"JavaScript","sites":[{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""}]},{"name":"React","sites":[{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""},{"id":"","description":"","link":"","gitHub":""}]}]')},QfWi:function(n,i,e){"use strict";e.r(i);var t={homeBtn:document.querySelector(".homeBtn"),projectsBtn:document.querySelector(".projectsBtn"),contactsBtn:document.querySelector(".contactsBtn"),container:document.querySelector(".container")},o=e("b2w3"),a=e.n(o),l=e("o+Jm"),r=function(){var n=a()(l);t.container.innerHTML="",t.container.insertAdjacentHTML("beforeend",n),t.homeBtn.classList.add("activePage"),t.contactsBtn.classList.remove("activePage"),t.projectsBtn.classList.remove("activePage")},s=e("Iog2"),c=e.n(s),u=e("JpPf"),p=function(){var n=c()(u);t.container.innerHTML="",t.container.insertAdjacentHTML("beforeend",n),t.projectsBtn.classList.add("activePage"),t.homeBtn.classList.remove("activePage"),t.contactsBtn.classList.remove("activePage")},d=e("cnD9"),m=e.n(d),g=function(){t.container.innerHTML="",t.container.insertAdjacentHTML("beforeend",m()()),t.contactsBtn.classList.add("activePage"),t.homeBtn.classList.remove("activePage"),t.projectsBtn.classList.remove("activePage")};e("0HMw");r(),t.homeBtn.addEventListener("click",r),t.projectsBtn.addEventListener("click",p),t.contactsBtn.addEventListener("click",g)},b2w3:function(n,i,e){var t=e("mp5j");n.exports=(t.default||t).template({1:function(n,i,e,t,o){var a,l=null!=i?i:n.nullContext||{},r=n.hooks.helperMissing,s=n.escapeExpression,c=n.lookupProperty||function(n,i){if(Object.prototype.hasOwnProperty.call(n,i))return n[i]};return'        <li class="skills_item" id='+s("function"==typeof(a=null!=(a=c(e,"id")||(null!=i?c(i,"id"):i))?a:r)?a.call(l,{name:"id",hash:{},data:o,loc:{start:{line:17,column:35},end:{line:17,column:41}}}):a)+"><img src="+s("function"==typeof(a=null!=(a=c(e,"url")||(null!=i?c(i,"url"):i))?a:r)?a.call(l,{name:"url",hash:{},data:o,loc:{start:{line:17,column:51},end:{line:17,column:58}}}):a)+" alt="+s("function"==typeof(a=null!=(a=c(e,"name")||(null!=i?c(i,"name"):i))?a:r)?a.call(l,{name:"name",hash:{},data:o,loc:{start:{line:17,column:63},end:{line:17,column:71}}}):a)+' width="130"></li>\r\n'},compiler:[8,">= 4.3.0"],main:function(n,i,e,t,o){var a;return'<div class="mainInformation">\r\n    <img class="mainInformation_img" src="https://cdn.pixabay.com/photo/2021/05/16/17/48/17-48-22-502_960_720.jpg"\r\n        alt="my photo" width="250">\r\n    <div>\r\n        <h1 class="mainInformation_title"> Hello, I am Marina Permiakova </h1>\r\n        <h2 class="mainInformation_position"> Front-end developer</h2>\r\n        <p class="mainInformation_description"> This site is my portfolio. I am junior developer who looking for\r\n            interesting\r\n            job and a lot of new practice\r\n        </p>\r\n    </div>\r\n</div>\r\n<div class="skills">\r\n    <h3 class="skills_title">I have experience in:</h3>\r\n    <ul class="skills_list">\r\n'+(null!=(a=(n.lookupProperty||function(n,i){if(Object.prototype.hasOwnProperty.call(n,i))return n[i]})(e,"each").call(null!=i?i:n.nullContext||{},i,{name:"each",hash:{},fn:n.program(1,o,0),inverse:n.noop,data:o,loc:{start:{line:16,column:8},end:{line:18,column:17}}}))?a:"")+"    </ul>\r\n</div>"},useData:!0})},cnD9:function(n,i,e){var t=e("mp5j");n.exports=(t.default||t).template({compiler:[8,">= 4.3.0"],main:function(n,i,e,t,o){return'<h2>Contacts</h2>\r\n<ul>\r\n    <li>\r\n        <h3>GitHub:</h3>\r\n        <a href=""></a>\r\n    </li>\r\n</ul>'},useData:!0})},"o+Jm":function(n){n.exports=JSON.parse('[{"id":"001","name":"HTML","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"},{"id":"002","name":"CSS","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"},{"id":"003","name":"JavaScript","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"},{"id":"010","name":"React.js","url":"https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"},{"id":"011","name":"Redux","url":"https://redux.js.org/img/redux-logo-landscape.png"},{"id":"013","name":"WebPack","url":"https://guides.hexlet.io/images/webpack/webpack.png"},{"id":"006","name":"Sass","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png"},{"id":"007","name":"BEM","url":"https://miro.medium.com/max/638/1*xHJeNZlLtdFkjMMIL1z4Ag.jpeg"},{"id":"008","name":"CSS modules","url":"https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png"},{"id":"009","name":"JSS","url":"https://cssinjs.org/images/logo-og.png"},{"id":"014","name":"Babel","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1200px-Babel_Logo.svg.png"},{"id":"004","name":"Basic Usage of Git","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/800px-Git-logo.svg.png"},{"id":"005","name":"GitHub","url":"https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"},{"id":"012","name":"Material ua","url":"https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png"}]')}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.bab12eb2b2a02b463797.js.map