"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("react"),n=(e=t)&&"object"==typeof e&&"default"in e?e.default:e;function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function c(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,c=!1,i=void 0;try{for(var l,r=e[Symbol.iterator]();!(a=(l=r.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return n}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}class l extends Date{constructor(e){super(e?new Date(e):new Date)}format({dayNames:e=[],months:t=[]}){return"".concat((e[this.getDay()]||"").substr(0,3),", ").concat(t[this.getMonth()],"\n    ").concat(this.getDate())}set(e,t){const n={month:e=>this.setMonth(e),date:e=>this.setDate(e)}[e];return n&&n(t),this}get(e){return{date:this.getDate(),day:this.getDay(),month:this.getMonth(),year:this.getFullYear()}[e]}reset(){return this.setHours(0,0,0,0),this}}const r=t.createContext({range:new Map([[(new l).reset().toJSON(),new l]])});function o(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css","top"===n&&a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}function s({currentYear:e,currentDate:t,dayNames:a,months:c,onClick:i}){const r=new l(t).format({dayNames:a,months:c});return n.createElement(n.Fragment,null,n.createElement("div",{className:"header"},n.createElement("div",{onClick:i,className:"header-container full-width margin-item"},e,n.createElement("div",{className:"header-item-grow-2"})),n.createElement("div",{className:"margin-item header-date"},r)))}o(".App{font-family:sans-serif;text-align:center;box-sizing:border-box;width:fit-content;margin:0 auto;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media only screen and (max-width:600px){.App{width:auto}}@media only screen and (min-width:1300px){.calendar{width:28rem}}@media only screen and (min-width:650px) and (max-width:1299px){.calendar{width:25rem}}.calendar{height:auto;background-color:#fff;box-shadow:1px 4px 4px grey;box-sizing:border-box}.header{padding:1em;background:#306c34;color:#fafafa;flex-wrap:wrap}.header,.header-container{display:flex}.full-width{width:100%}.header-item{flex-grow:1}.header-item-grow-2{flex-grow:2}.header-item-align-left{text-align:left}.header-year{font-weight:500;font-size:1em}.header-date{font-size:2rem;font-family:Roboto}.margin-item{margin:.5rem}.flex-grow-1{flex-grow:1}.footer-buttons{display:flex;justify-content:flex-end;align-items:center;padding:1rem}.button{background:transparent;color:#306c34;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FDRSxzQkFBdUIsQ0FDdkIsaUJBQWtCLENBQ2xCLHFCQUFzQixDQUN0QixpQkFBa0IsQ0FDbEIsYUFBYyxDQUNkLDBCQUEyQixDQUMzQix3QkFBeUIsQ0FDekIsdUJBQXdCLENBQ3hCLHFCQUFzQixDQUN0QixvQkFBcUIsQ0FDckIsZ0JBRUYsQ0FFQSx5Q0FDRSxLQUNFLFVBQ0YsQ0FDRixDQUVBLDBDQUNFLFVBQ0UsV0FDRixDQUNGLENBRUEsZ0VBQ0UsVUFDRSxXQUNGLENBQ0YsQ0FFQSxVQUNFLFdBQVksQ0FDWixxQkFBdUIsQ0FDdkIsMkJBQTRCLENBQzVCLHFCQUNGLENBRUEsUUFFRSxXQUFZLENBQ1osa0JBQW1CLENBQ25CLGFBQWMsQ0FDZCxjQUNGLENBRUEsMEJBUEUsWUFTRixDQUVBLFlBQ0UsVUFDRixDQUVBLGFBQ0UsV0FDRixDQUVBLG9CQUNFLFdBQ0YsQ0FFQSx3QkFDRSxlQUNGLENBRUEsYUFDRSxlQUFnQixDQUNoQixhQUNGLENBRUEsYUFDRSxjQUFlLENBQ2Ysa0JBQ0YsQ0FFQSxhQUNFLFlBQ0YsQ0FFQSxhQUNFLFdBQ0YsQ0FFQSxnQkFDRSxZQUFhLENBQ2Isd0JBQXlCLENBQ3pCLGtCQUFtQixDQUNuQixZQUNGLENBRUEsUUFDRSxzQkFBdUIsQ0FDdkIsYUFBYyxDQUNkLFdBQ0YiLCJmaWxlIjoic3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5BcHAge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuQXBwIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAuY2FsZW5kYXIge1xuICAgIHdpZHRoOiAyOHJlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSBhbmQgKG1heC13aWR0aDogMTI5OXB4KSB7XG4gIC5jYWxlbmRhciB7XG4gICAgd2lkdGg6IDI1cmVtO1xuICB9XG59XG5cbi5jYWxlbmRhciB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCA0cHggNHB4IGdyYXk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxZW07XG4gIGJhY2tncm91bmQ6ICMzMDZjMzQ7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlci1pdGVtIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uaGVhZGVyLWl0ZW0tZ3Jvdy0yIHtcbiAgZmxleC1ncm93OiAyO1xufVxuXG4uaGVhZGVyLWl0ZW0tYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5oZWFkZXIteWVhciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uaGVhZGVyLWRhdGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi5tYXJnaW4taXRlbSB7XG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbTtcbn1cblxuLmZsZXgtZ3Jvdy0xIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZm9vdGVyLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMzA2YzM0O1xuICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */");function u({currentYear:e,currentMonth:t,currentDate:a,weekDays:c=[],monthStructure:i,dates:r=new Map,onChange:o,type:s}){const u=c=>Object.keys(i).map(e=>e).map(u=>{let b="calendar-days-item-spacing-day";const d=i[u][c],m=(n=>{if(n){return new l("".concat(e,"-").concat(t+1,"-").concat(n," 00:00:00"))}return new l})(d).toJSON(),g={onlydate:()=>d===a.get("date"),range:()=>d&&r.get(m),selector:()=>d&&r.get(m)};return g[s]&&g[s]()&&(b+=" calendar-days-number-color-black"),n.createElement("div",{key:"current-day-".concat(i[u][c]),className:b,onClick:o(i[u][c])},i[u][c])});return n.createElement("div",{className:"calendar-days"},c.map((e,t)=>n.createElement("div",{key:"week-".concat(t+1),className:"calendar-days-item"},"".concat(e.substr(0,3)),n.createElement("div",null,u(t+1,e.substr(0,3))))))}o(".calendar-days{display:flex;box-sizing:border-box}.calendar-days-item{flex-grow:1;font-size:1rem;color:grey}.calendar-days-item-spacing-day{margin:2%;padding:.5rem;min-height:38px;max-height:38px;display:flex;justify-content:center;align-items:center}.calendar-days-numbers{padding:2rem;color:grey}.calendar-days-number-color-black{color:#f0f0f0;border-radius:5px;background-color:#306c34}.calendar-day-months{display:flex;width:100%;flex-flow:wrap}.calendar-days-numbers{flex-grow:1;min-width:3rem;font-size:1rem;color:#000}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyRGF5cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFDRSxZQUFhLENBQ2IscUJBQ0YsQ0FFQSxvQkFDRSxXQUFZLENBQ1osY0FBZSxDQUNmLFVBQ0YsQ0FFQSxnQ0FDRSxTQUF3QixDQUN4QixhQUFlLENBQ2YsZUFBZ0IsQ0FDaEIsZUFBZ0IsQ0FDaEIsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixrQkFDRixDQUVBLHVCQUNFLFlBQWEsQ0FHYixVQUNGLENBRUEsa0NBQ0UsYUFBYyxDQUNkLGlCQUFrQixDQUNsQix3QkFDRixDQUVBLHFCQUNFLFlBQWEsQ0FDYixVQUFXLENBQ1gsY0FDRixDQUVBLHVCQUNFLFdBQVksQ0FDWixjQUFlLENBQ2YsY0FBZSxDQUNmLFVBQ0YiLCJmaWxlIjoiQ2FsZW5kYXJEYXlzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRhci1kYXlzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNhbGVuZGFyLWRheXMtaXRlbSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmNhbGVuZGFyLWRheXMtaXRlbS1zcGFjaW5nLWRheSB7XG4gIG1hcmdpbjogY2FsYygxMDAlIC0gOTglKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBtYXgtaGVpZ2h0OiAzOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhbGVuZGFyLWRheXMtbnVtYmVycyB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmNhbGVuZGFyLWRheXMtbnVtYmVyLWNvbG9yLWJsYWNrIHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNmMzNDtcbn1cblxuLmNhbGVuZGFyLWRheS1tb250aHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1mbG93OiB3cmFwO1xufVxuXG4uY2FsZW5kYXItZGF5cy1udW1iZXJzIHtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4td2lkdGg6IDNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */");function b(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},n.createElement("path",{fill:"currentColor",d:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"})))}function d(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},n.createElement("path",{fill:"currentColor",d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"})))}o(".calendar-months-container{width:100%;padding:1rem;justify-content:space-between;box-sizing:border-box}.calendar-arrows{display:flex;justify-content:space-around;align-items:center;font-weight:600;color:grey}.calendar-month-text{color:#333;text-align:center}.display-flex{display:flex;justify-content:center;align-items:center}.flex-end{display:flex;justify-content:flex-end}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyTW9udGguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUNFLFVBQVcsQ0FDWCxZQUFhLENBQ2IsNkJBQThCLENBQzlCLHFCQUNGLENBRUEsaUJBQ0UsWUFBYSxDQUNiLDRCQUE2QixDQUM3QixrQkFBbUIsQ0FDbkIsZUFBZ0IsQ0FDaEIsVUFDRixDQUVBLHFCQUNFLFVBQVcsQ0FDWCxpQkFDRixDQUVBLGNBQ0UsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixrQkFDRixDQUVBLFVBQ0UsWUFBYSxDQUNiLHdCQUNGIiwiZmlsZSI6IkNhbGVuZGFyTW9udGguY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGVuZGFyLW1vbnRocy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2FsZW5kYXItYXJyb3dzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uY2FsZW5kYXItbW9udGgtdGV4dCB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnMge1xufSAqL1xuXG4vKiBAa2V5ZnJhbWVzIGJ1dHRvbiB7XG4gIGZyb20ge31cbn0gKi9cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnM6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzk5OTtcbiAgYm9yZGVyOiA7XG59ICovXG4iXX0= */");function m(e){return n.createElement("button",Object.assign({},e,{className:"custom-button ".concat(e.className?e.className:"")}),n.createElement("span",{className:"ripple"},e.label?e.label:e.children))}function g({currentDate:e,months:a,onChange:c}){const r=i(t.useState((new l).get("month")),2),o=r[0],s=r[1],u=i(t.useState(null),2),g=u[0],x=u[1];t.useEffect(()=>{const t=e.get("month");o!==t&&s(t);const n=e.get("year"),c="".concat(a[t]," ").concat(n);x(c)},[e,o,a]);const G=e=>()=>{let t=o+e;t>=a.length||t<0||c(t)};return n.createElement("div",{className:"calendar-months-container"},n.createElement("div",{className:"calendar-arrows"},n.createElement("div",{className:"flex-grow-1"},n.createElement(m,{onClick:G(-1)},n.createElement(b,null))),n.createElement("div",{className:"calendar-month-text flex-grow-1"},g),n.createElement("div",{className:"flex-grow-1 flex-end"},n.createElement(m,{onClick:G(1)},n.createElement(d,null)))))}o(".custom-button,.custom-circle-button{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.custom-circle-button{border-radius:50%}.custom-button:active,.custom-button:hover{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.ripple{width:100%;background-position:50%;transition:background .8s;border:none}.ripple:hover{border:none;background:transparent radial-gradient(circle,transparent 1%,#fff 0) 50%/15000%}.ripple:active{background-color:grey;background-size:100%;transition:background 0s;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEscUNBUEUsV0FBWSxDQUNaLHNCQUF1QixDQUN2QixZQUFhLENBQ2Isc0JBQXVCLENBQ3ZCLFlBVUYsQ0FQQSxzQkFFRSxpQkFLRixDQVVBLDJDQUNFLFdBQVksQ0FDWixzQkFBdUIsQ0FDdkIsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixZQUNGLENBR0EsUUFDRSxVQUFXLENBQ1gsdUJBQTJCLENBQzNCLHlCQUEyQixDQUMzQixXQUNGLENBQ0EsY0FDRSxXQUFZLENBQ1osK0VBQ0YsQ0FDQSxlQUNFLHFCQUFzQixDQUN0QixvQkFBcUIsQ0FDckIsd0JBQXlCLENBQ3pCLFdBQ0YiLCJmaWxlIjoic3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWNpcmNsZS1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLmN1c3RvbS1idXR0b246YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLyogUmlwcGxlIGVmZmVjdCAqL1xuLnJpcHBsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbiAgYm9yZGVyOiBub25lO1xufVxuLnJpcHBsZTpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICNmZmYgMSUpIGNlbnRlci8xNTAwMCU7XG59XG4ucmlwcGxlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */");const x=["January","February","March","April","May","June","July","August","September","October","November","December"],G=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Q={onlydate:0,range:1,selector:2},I=new Date,B=I.getFullYear()-120,F=I.getFullYear()+120;function h({currentYear:e,onChange:a}){const c=t.useRef(),i=t.useRef();function l(e){a(e)}return t.useEffect(()=>{c&&c.current&&i&&i.current&&i.current.scrollTo(0,c.current.offsetTop-300)},[c,i]),n.createElement("div",{style:{width:"100%",height:"350px"}},n.createElement("ul",{ref:i,style:{overflow:"auto",height:"100%"}},(()=>{const t=[];for(let a=B;a<=F;a++)e===a?t.push(n.createElement("li",{key:a,ref:c,className:"year selected",onClick:()=>l(a)},n.createElement("p",null,a))):t.push(n.createElement("li",{key:a,className:"year",onClick:()=>l(a)},n.createElement("p",null,a)));return t})()))}o("ul{list-style:none;display:flex;flex-direction:column;padding:0}.year p,ul{align-items:center}.year p{font-size:1rem;cursor:pointer;margin:10px;font-weight:400;transition:font-size .1s}.selected p{font-weight:500}.selected p,.year p:hover{font-size:1.5rem;color:#306c34}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUNFLGVBQWdCLENBQ2hCLFlBQWEsQ0FDYixxQkFBc0IsQ0FFdEIsU0FDRixDQUVBLFdBSkUsa0JBV0YsQ0FQQSxRQUNFLGNBQWUsQ0FDZixjQUFlLENBQ2YsV0FBWSxDQUVaLGVBQWdCLENBQ2hCLHdCQUNGLENBRUEsWUFHRSxlQUNGLENBRUEsMEJBTEUsZ0JBQWlCLENBQ2pCLGFBT0YiLCJmaWxlIjoic3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDAgMCAwO1xufVxuXG4ueWVhciBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuMXM7XG59XG5cbi5zZWxlY3RlZCBwIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMzA2YzM0O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ueWVhciBwOmhvdmVyIHtcbiAgY29sb3I6ICMzMDZjMzQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuIl19 */");const y=e=>e%4==0&&e%100!=0||e%400==0?29:28;var Z=(e=new l)=>{const t=e.get("year"),n=e.get("month")+1;return{1:31,2:y(t),3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}[n]};function p({weekDayNames:e,monthNames:a,date:o,type:b="onlydate",value:d=[],footer:m,onChange:I=(()=>{})}){const B=t.useContext(r),F=B.dates,y=B.setDates,p=i(t.useState(new l),2),N=p[0],X=p[1],C=i(t.useState(null),2),V=C[0],W=C[1],L=i(t.useState(!1),2),f=L[0],U=L[1],D=t.useCallback(()=>{const e=Z(N),t=new l(N);t.set("date",1);const n=t.get("day")+1,a=Math.ceil(e/7),i=[...new Array(a)].map((e,t)=>t+1),r=[...new Array(7)].map((e,t)=>t+1);let o=1,s=null;var u,b=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=c(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,l=!0,r=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){r=!0,i=e},f:function(){try{l||null==a.return||a.return()}finally{if(r)throw i}}}}(i);try{for(b.s();!(u=b.n()).done;){const t=u.value,a=r.reduce((a,c)=>(c>=n&&!s&&(s={},s[t]||(s[t]={}),a[c]=o),o<=e&&s&&(s[t]||(s[t]={}),a[c]=o++),a),{});s[t]=a}}catch(e){b.e(e)}finally{b.f()}W(s)},[N]);function Y(e){const t=new l(N);t.set("month",e),X(t),D()}t.useEffect(()=>{o||D()},[o,X,N,D]),t.useEffect(()=>{if(d&&d.length){const e=new l(d[0]),t=new l(d[d.length-1]),n=new Map,a=A(e,t);if(e&&!t&&a>=1){k(e,t).forEach(e=>v(n,e)),y(n)}}},[d]);const w=e=>()=>{if(e){const t=new l(N);if(t.set("date",e),Q[b]===Q.onlydate&&(X(t),I(t)),Q[b]===Q.selector){X(t);let e=new Map([...F]);e=v(e,t),y(e),I(e)}if(Q[b]===Q.range){let e=new Map,n=[...F];const a=i(n[0]?n[0]:[],2)[1],c=i(n.length-1>0?n[n.length-1]:[],2)[1];a&&c&&(e=v(e,t),y(e));const l=A(a,t);if(a&&!c&&t&&l>=1){k(a,t).forEach(t=>v(e,t)),y(e)}l<=0&&(e.get(t.reset().toJSON())||(e=v(e,t)),y(e)),I([...e])}X(t)}},k=(e,t)=>{let n=e.getUTCDate(),a=e.get("month")<12?e.get("month")+1:e.get("month"),c=e.get("year"),i=Z(e);const r=A(e,t),o=[];let s=0;for(;s<[...new Array(r+1)].length;){const e=1===String(n).length?"0".concat(n):n,t=new l("".concat(c,"-").concat(a,"-").concat(e,"  00:00:00"));if(n>=i&&(n=0,a>=12&&(c++,a=0),a<12)){a++;const e=new l("".concat(c,"-").concat(a,"-0").concat(n+1));i=Z(e)}n+=1,o.push(t),s++}return o},A=(e,t)=>{if(!e||!t)return 0;const n=Date.UTC(e.get("year"),e.get("month"),e.get("date")),a=Date.UTC(t.get("year"),t.get("month"),t.get("date"));return Math.floor((a-n)/864e5)},v=(e,t)=>(t&&(t.setHours(0,0,0,0),e.has(t.toJSON())?e.delete(t.toJSON()):e.set(t.toJSON(),t)),e);return n.createElement("div",{className:"App"},n.createElement("div",{className:"calendar"},n.createElement(s,{currentDate:N,currentYear:N.getFullYear(),dayNames:e||G,months:a||x,onClick:()=>U(!0)}),f?n.createElement(h,{currentYear:N.getFullYear(),onChange:e=>{!function(e){const t=new l(N);t.setFullYear(e),X(t)}(e),U(!1)}}):n.createElement(n.Fragment,null,n.createElement(g,{currentDate:N,currentMonth:N.get("month"),months:a||x,onChange:Y}),n.createElement(u,{type:b,currentMonth:N.get("month"),currentYear:N.getFullYear(),weekDays:e||G,monthStructure:V||{},currentDate:N,dates:F,onChange:w})),m))}function N(){const e=i(t.useState(new Map([[(new l).reset().toJSON(),new l]])),2);return[e[0],e[1]]}function X({onCancel:e,onConfirm:a}){const c=t.useContext(r).dates;return n.createElement("div",null,n.createElement("div",{className:"footer-buttons"},n.createElement("button",{type:"button",className:"button",onClick:e},"Cancel"),n.createElement("button",{type:"button",className:"button",onClick:()=>a([...c])},"OK")))}function C(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},n.createElement("path",{fill:"currentColor",d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),n.createElement("path",{fill:"currentColor",d:"M0 0h24v24H0z",fill:"none"})))}o(".display-none{display:none}.backdrop{background:rgba(0,0,0,.5);-webkit-tap-highlight-color:transparent;z-index:9}.backdrop,.backdrop-content{display:flex;position:fixed;opacity:1;top:0;left:0;right:0;bottom:0}.backdrop-content{z-index:10;margin:5% auto 0}.input-content{display:flex;justify-content:space-between;align-items:center;padding:5px 15px;border-radius:8px}.input-content,input{width:100%;background:#f1f1f1}input{border:none}.icon-button{display:flex;background:transparent;border:none;color:#6a6c6e}.container{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%}.input-label{font:inherit;margin-bottom:.5rem}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0cGlja2VyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUNFLFlBQ0YsQ0FFQSxVQUdFLHlCQUE4QixDQUM5Qix1Q0FBd0MsQ0FFeEMsU0FLRixDQUVBLDRCQVpFLFlBQWEsQ0FDYixjQUFlLENBR2YsU0FBVSxDQUVWLEtBQU0sQ0FDTixNQUFPLENBQ1AsT0FBUSxDQUNSLFFBY0YsQ0FYQSxrQkFHRSxVQUFXLENBT1gsZ0JBQ0YsQ0FFQSxlQUVFLFlBQWEsQ0FDYiw2QkFBOEIsQ0FDOUIsa0JBQW1CLENBRW5CLGdCQUFpQixDQUNqQixpQkFDRixDQUVBLHFCQVRFLFVBQVcsQ0FJWCxrQkFTRixDQUpBLE1BRUUsV0FFRixDQUVBLGFBQ0UsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixXQUFZLENBQ1osYUFDRixDQUVBLFdBQ0UsWUFBYSxDQUNiLHFCQUFzQixDQUN0QiwwQkFBMkIsQ0FDM0Isc0JBQXVCLENBQ3ZCLFVBQ0YsQ0FFQSxhQUNFLFlBQWEsQ0FDYixtQkFDRiIsImZpbGUiOiJpbnB1dHBpY2tlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJhY2tkcm9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJhY2tkcm9wLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmlucHV0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi5pY29uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNmE2YzZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnB1dC1sYWJlbCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbiJdfQ== */");const V=function({onChange:e,type:t}){const a=i(N(),2),c=a[0],l=a[1];return n.createElement(r.Provider,{value:{dates:c,setDates:l}},n.createElement(p,{onChange:e,type:t}))},W=function({monthLabels:e,dayLabels:a,placeholder:c="",value:o,label:s,onChange:u=(()=>{}),onFinish:b=(()=>{})}){const d=i(t.useState(!1),2),m=d[0],g=d[1],Q=i(t.useState(""),2),I=Q[0],B=Q[1],F=i(N(),2),h=F[0],y=F[1],Z=t=>{if(t.length>1){return[t[0],t[t.length-1]].filter(e=>e).map(t=>t.format({dayNames:a||G,months:e||x})).join(" - ")}return t[0]?t[0].format({dayNames:a||G,months:e||x}):""};t.useEffect(()=>{const e=JSON.stringify(I)===JSON.stringify(o);if(o&&!e&&o&&o instanceof Array){const e=o.map(e=>new l(e).reset()),t=Z(e);B(t)}o||B("")},[o]);const V=e=>{e.preventDefault(),g(!0)};return n.createElement("div",{className:"container"},n.createElement("span",{className:"input-label"},s),n.createElement("div",{className:"input-content"},n.createElement("input",{type:"text",placeholder:c,value:I,onChange:e=>{},onClick:V}),n.createElement("button",{type:"button",className:"icon-button",onClick:V},n.createElement(C,null))),n.createElement("div",{className:m?"backdrop":"display-none"}),n.createElement("div",{className:m?"backdrop-content":"display-none"},n.createElement(r.Provider,{value:{dates:h,setDates:y}},n.createElement(p,{monthNames:e||x,weekDayNames:a||G,type:"range",value:I,onChange:e=>{e instanceof Array&&u(e.map(([,e])=>e))},footer:n.createElement(X,{onConfirm:(e=[])=>{if(e&&e.length){const t=Z(e.map(([,e])=>e));B(t),b(e.map(([,e])=>e))}g(!1)},onCancel:()=>g(!1)})}))))};var L={Calendar:V,RangePicker:W};exports.Calendar=V,exports.RangePicker=W,exports.default=L;
//# sourceMappingURL=index.js.map
