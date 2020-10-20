"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("react"),n=(e=t)&&"object"==typeof e&&"default"in e?e.default:e;function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function c(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,c=!1,i=void 0;try{for(var l,r=e[Symbol.iterator]();!(a=(l=r.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return n}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const l={YYYY:"getFullYear",mm:"getMonth",dd:"getDate",EE:"getDay",MM:"getMonth",DD:"getDate"};class r extends Date{constructor(e){super(e?new Date(e):new Date)}getFormatPattern(e="YYYY/MM/DD"){const t=e.split("");return t.reduce((e,n,a)=>{const c=e.findIndex(e=>e.includes(n));return t[a-1]===n&&(i=n,Boolean(i&&i.match(/[A-Z, a-z]/)))?(e[c]+=n,e):(e.push(n),e);var i},[])}getFormatString(e,t,n=[],a=[]){const c={EE:()=>{const a=t&&n[this[t]()];return 2===e.length?a&&a.substr(0,3)||"":a},MM:()=>{const n=t&&a[this[t]()];return 2===e.length?n&&n.substr(0,3)||"":n}};return c[e]&&"function"==typeof c[e]?c[e]():e}format({dayNames:e=[],months:t=[],pattern:n="EE, MM YYYY"}){return this.getFormatPattern(n).map(n=>{const a=l[n];return n.includes("mm")?Number(this[a]())+1:n.match(/[A-Z]/)&&!n.includes("YYYY")?this.getFormatString(n,a,e,t):a?this[a]():n}).join("")}set(e,t){const n={month:e=>this.setMonth(e),date:e=>this.setDate(e)}[e];return n&&n(t),this}get(e){return{date:this.getDate(),day:this.getDay(),month:this.getMonth(),year:this.getFullYear()}[e]}reset(){return this.setHours(0,0,0,0),this}}const o=t.createContext({range:new Map([[(new r).reset().toJSON(),new r]])});function s(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css","top"===n&&a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}function u({showYear:e,currentDate:t,dayNames:a,months:c,onClick:i}){const l=new r(t).format({dayNames:a,months:c,pattern:"EE, MM YYYY"});return n.createElement(n.Fragment,null,n.createElement("div",{className:"header"},n.createElement("div",{onClick:i,className:"header-container full-width margin-item"},e,n.createElement("div",{className:"header-item-grow-2"})),n.createElement("div",{className:"margin-item header-date"},l)))}s(".custom-calendar-app{font-family:sans-serif;text-align:center;box-sizing:border-box;width:fit-content;margin:0 auto;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media only screen and (max-width:600px){.App{width:auto}}@media only screen and (min-width:1300px){.calendar{width:28rem}}@media only screen and (min-width:650px) and (max-width:1299px){.calendar{width:25rem}}.calendar{height:auto;background-color:#fff;box-shadow:1px 4px 4px grey;box-sizing:border-box;border-radius:3px}.header{padding:1em;background:#306c34;color:#fafafa;flex-wrap:wrap;border-top-left-radius:3px;border-top-right-radius:3px}.header,.header-container{display:flex}.full-width{width:100%}.header-item{flex-grow:1}.header-item-grow-2{flex-grow:2}.header-item-align-left{text-align:left}.header-year{font-weight:500;font-size:1em}.header-date{font-size:2rem;font-family:Roboto}.margin-item{margin:.5rem}.flex-grow-1{flex-grow:1}.footer-buttons{display:flex;justify-content:flex-end;align-items:center;padding:1rem}.button{background:transparent;color:#306c34;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1jYWxlbmRhci1zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUNFLHNCQUF1QixDQUN2QixpQkFBa0IsQ0FDbEIscUJBQXNCLENBQ3RCLGlCQUFrQixDQUNsQixhQUFjLENBQ2QsMEJBQTJCLENBQzNCLHdCQUF5QixDQUN6Qix1QkFBd0IsQ0FDeEIscUJBQXNCLENBQ3RCLG9CQUFxQixDQUNyQixnQkFFRixDQUVBLHlDQUNFLEtBQ0UsVUFDRixDQUNGLENBRUEsMENBQ0UsVUFDRSxXQUNGLENBQ0YsQ0FFQSxnRUFDRSxVQUNFLFdBQ0YsQ0FDRixDQUVBLFVBQ0UsV0FBWSxDQUNaLHFCQUF1QixDQUN2QiwyQkFBNEIsQ0FDNUIscUJBQXNCLENBQ3RCLGlCQUNGLENBRUEsUUFFRSxXQUFZLENBQ1osa0JBQW1CLENBQ25CLGFBQWMsQ0FDZCxjQUFlLENBQ2YsMEJBQTJCLENBQzNCLDJCQUNGLENBRUEsMEJBVEUsWUFXRixDQUVBLFlBQ0UsVUFDRixDQUVBLGFBQ0UsV0FDRixDQUVBLG9CQUNFLFdBQ0YsQ0FFQSx3QkFDRSxlQUNGLENBRUEsYUFDRSxlQUFnQixDQUNoQixhQUNGLENBRUEsYUFDRSxjQUFlLENBQ2Ysa0JBQ0YsQ0FFQSxhQUNFLFlBQ0YsQ0FFQSxhQUNFLFdBQ0YsQ0FFQSxnQkFDRSxZQUFhLENBQ2Isd0JBQXlCLENBQ3pCLGtCQUFtQixDQUNuQixZQUNGLENBRUEsUUFDRSxzQkFBdUIsQ0FDdkIsYUFBYyxDQUNkLFdBQ0YiLCJmaWxlIjoiY3VzdG9tLWNhbGVuZGFyLXN0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWNhbGVuZGFyLWFwcCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5BcHAge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gIC5jYWxlbmRhciB7XG4gICAgd2lkdGg6IDI4cmVtO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjk5cHgpIHtcbiAgLmNhbGVuZGFyIHtcbiAgICB3aWR0aDogMjVyZW07XG4gIH1cbn1cblxuLmNhbGVuZGFyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA0cHggZ3JheTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMWVtO1xuICBiYWNrZ3JvdW5kOiAjMzA2YzM0O1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlci1pdGVtIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uaGVhZGVyLWl0ZW0tZ3Jvdy0yIHtcbiAgZmxleC1ncm93OiAyO1xufVxuXG4uaGVhZGVyLWl0ZW0tYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5oZWFkZXIteWVhciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uaGVhZGVyLWRhdGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi5tYXJnaW4taXRlbSB7XG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbTtcbn1cblxuLmZsZXgtZ3Jvdy0xIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZm9vdGVyLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMzA2YzM0O1xuICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */");function b({currentYear:e,currentMonth:t,currentDate:a,showDate:c,weekDays:i=[],monthStructure:l={},dates:o=new Map,onChange:s,type:u}){const b=i=>{if(!l)return n.createElement("span",null);return Object.keys(l).map(e=>e).map(b=>{let d="calendar-days-item-spacing-day";const m=l[b][i],g=(n=>{if(n&&t===c.get("month")&&e===c.getFullYear()){return new r("".concat(e,"-").concat(t+1,"-").concat(n," 00:00:00:00"))}return new r})(m).toJSON(),x={onlydate:()=>m===a.get("date")&&t===c.get("month")&&e==c.getFullYear(),range:()=>m&&o.get(g),selector:()=>m&&o.get(g)};return x[u]&&x[u]()&&(d+=" calendar-days-number-color-black"),n.createElement("div",{key:"current-day-".concat(b,"-").concat(i),className:d,onClick:s(m)},m)})};return n.createElement("div",{className:"calendar-days"},i.map((e,t)=>n.createElement("div",{key:"week-".concat(t+1),className:"calendar-days-item"},"".concat(e.substr(0,3)),n.createElement("div",null,b(t+1)))))}s(".calendar-days{display:flex;box-sizing:border-box}.calendar-days-item{flex-grow:1;font-size:1rem;color:grey;text-align:center}.calendar-days-item-spacing-day{margin:2%;padding:.5rem;min-height:38px;max-height:38px;display:flex;justify-content:center;align-items:center}.calendar-days-numbers{padding:2rem;color:grey}.calendar-days-number-color-black{color:#f0f0f0;border-radius:5px;background-color:#306c34}.calendar-day-months{display:flex;width:100%;flex-flow:wrap}.calendar-days-numbers{flex-grow:1;min-width:3rem;font-size:1rem;color:#000}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyRGF5cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFDRSxZQUFhLENBQ2IscUJBQ0YsQ0FFQSxvQkFDRSxXQUFZLENBQ1osY0FBZSxDQUNmLFVBQVcsQ0FDWCxpQkFDRixDQUVBLGdDQUNFLFNBQXdCLENBQ3hCLGFBQWUsQ0FDZixlQUFnQixDQUNoQixlQUFnQixDQUNoQixZQUFhLENBQ2Isc0JBQXVCLENBQ3ZCLGtCQUNGLENBRUEsdUJBQ0UsWUFBYSxDQUdiLFVBQ0YsQ0FFQSxrQ0FDRSxhQUFjLENBQ2QsaUJBQWtCLENBQ2xCLHdCQUNGLENBRUEscUJBQ0UsWUFBYSxDQUNiLFVBQVcsQ0FDWCxjQUNGLENBRUEsdUJBQ0UsV0FBWSxDQUNaLGNBQWUsQ0FDZixjQUFlLENBQ2YsVUFDRiIsImZpbGUiOiJDYWxlbmRhckRheXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGVuZGFyLWRheXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2FsZW5kYXItZGF5cy1pdGVtIHtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYWxlbmRhci1kYXlzLWl0ZW0tc3BhY2luZy1kYXkge1xuICBtYXJnaW46IGNhbGMoMTAwJSAtIDk4JSk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgbWF4LWhlaWdodDogMzhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYWxlbmRhci1kYXlzLW51bWJlcnMge1xuICBwYWRkaW5nOiAycmVtO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5jYWxlbmRhci1kYXlzLW51bWJlci1jb2xvci1ibGFjayB7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDZjMzQ7XG59XG5cbi5jYWxlbmRhci1kYXktbW9udGhzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZmxvdzogd3JhcDtcbn1cblxuLmNhbGVuZGFyLWRheXMtbnVtYmVycyB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWluLXdpZHRoOiAzcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */");function d(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},n.createElement("path",{fill:"currentColor",d:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"})))}function m(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},n.createElement("path",{fill:"currentColor",d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"})))}s(".calendar-months-container{width:100%;padding:1rem;justify-content:space-between;box-sizing:border-box}.calendar-arrows{display:flex;justify-content:space-around;align-items:center;font-weight:600;color:grey}.calendar-month-text{color:#333;text-align:center}.display-flex{display:flex;justify-content:center;align-items:center}.flex-end{display:flex;justify-content:flex-end}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyTW9udGguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUNFLFVBQVcsQ0FDWCxZQUFhLENBQ2IsNkJBQThCLENBQzlCLHFCQUNGLENBRUEsaUJBQ0UsWUFBYSxDQUNiLDRCQUE2QixDQUM3QixrQkFBbUIsQ0FDbkIsZUFBZ0IsQ0FDaEIsVUFDRixDQUVBLHFCQUNFLFVBQVcsQ0FDWCxpQkFDRixDQUVBLGNBQ0UsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixrQkFDRixDQUVBLFVBQ0UsWUFBYSxDQUNiLHdCQUNGIiwiZmlsZSI6IkNhbGVuZGFyTW9udGguY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGVuZGFyLW1vbnRocy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2FsZW5kYXItYXJyb3dzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uY2FsZW5kYXItbW9udGgtdGV4dCB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnMge1xufSAqL1xuXG4vKiBAa2V5ZnJhbWVzIGJ1dHRvbiB7XG4gIGZyb20ge31cbn0gKi9cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnM6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzk5OTtcbiAgYm9yZGVyOiA7XG59ICovXG4iXX0= */");function g(e){return n.createElement("button",Object.assign({type:"button"},e,{className:"custom-button ".concat(e.className?e.className:"")}),n.createElement("span",{className:"ripple"},e.label?e.label:e.children))}function x({currentDate:e,months:a,onChange:c}){const l=i(t.useState((new r).get("month")),2),o=l[0],s=l[1],u=i(t.useState(null),2),b=u[0],x=u[1];t.useEffect(()=>{const t=e.get("month");o!==t&&s(t);const n=e.get("year"),c="".concat(a[t]," ").concat(n);x(c)},[e,o,a]);const Q=e=>()=>{c(o+e)};return n.createElement("div",{className:"calendar-months-container"},n.createElement("div",{className:"calendar-arrows"},n.createElement("div",{className:"flex-grow-1"},n.createElement(g,{onClick:Q(-1)},n.createElement(d,null))),n.createElement("div",{className:"calendar-month-text flex-grow-1"},b),n.createElement("div",{className:"flex-grow-1 flex-end"},n.createElement(g,{onClick:Q(1)},n.createElement(m,null)))))}s(".custom-button,.custom-circle-button{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.custom-circle-button{border-radius:50%}.custom-button:active,.custom-button:hover{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.ripple{width:100%;background-position:50%;transition:background .8s;border:none}.ripple:hover{border:none;background:transparent radial-gradient(circle,transparent 1%,#fff 0) 50%/15000%}.ripple:active{background-color:grey;background-size:100%;transition:background 0s;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEscUNBUEUsV0FBWSxDQUNaLHNCQUF1QixDQUN2QixZQUFhLENBQ2Isc0JBQXVCLENBQ3ZCLFlBVUYsQ0FQQSxzQkFFRSxpQkFLRixDQVVBLDJDQUNFLFdBQVksQ0FDWixzQkFBdUIsQ0FDdkIsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixZQUNGLENBR0EsUUFDRSxVQUFXLENBQ1gsdUJBQTJCLENBQzNCLHlCQUEyQixDQUMzQixXQUNGLENBQ0EsY0FDRSxXQUFZLENBQ1osK0VBQ0YsQ0FDQSxlQUNFLHFCQUFzQixDQUN0QixvQkFBcUIsQ0FDckIsd0JBQXlCLENBQ3pCLFdBQ0YiLCJmaWxlIjoic3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWNpcmNsZS1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLmN1c3RvbS1idXR0b246YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLyogUmlwcGxlIGVmZmVjdCAqL1xuLnJpcHBsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbiAgYm9yZGVyOiBub25lO1xufVxuLnJpcHBsZTpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICNmZmYgMSUpIGNlbnRlci8xNTAwMCU7XG59XG4ucmlwcGxlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */");const Q=["January","February","March","April","May","June","July","August","September","October","November","December"],G=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],I={onlydate:0,range:1,selector:2},B=new Date,Z=B.getFullYear()-120,F=B.getFullYear()+120;function h({currentYear:e,onChange:a}){const c=t.useRef(),i=t.useRef();function l(e){a(e)}return t.useEffect(()=>{c&&c.current&&i&&i.current&&i.current.scrollTo(0,c.current.offsetTop-300)},[c,i]),n.createElement("div",{style:{width:"100%",height:"350px"}},n.createElement("ul",{ref:i,style:{overflow:"auto",height:"100%"}},(()=>{const t=[];for(let a=Z;a<=F;a++)e===a?t.push(n.createElement("li",{key:a,ref:c,className:"year selected",onClick:()=>l(a)},n.createElement("p",null,a))):t.push(n.createElement("li",{key:a,className:"year",onClick:()=>l(a)},n.createElement("p",null,a)));return t})()))}s("ul{list-style:none;display:flex;flex-direction:column;padding:0}.year>p,.year>ul{align-items:center}.year>p{font-size:1rem;cursor:pointer;margin:10px;font-weight:400;transition:font-size .1s}.selected p{font-weight:500}.selected p,.year p:hover{font-size:1.5rem;color:#306c34}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUNFLGVBQWdCLENBQ2hCLFlBQWEsQ0FDYixxQkFBc0IsQ0FDdEIsU0FDRixDQUNBLGlCQUNFLGtCQUNGLENBQ0EsUUFDRSxjQUFlLENBQ2YsY0FBZSxDQUNmLFdBQVksQ0FDWixlQUFnQixDQUNoQix3QkFDRixDQUVBLFlBR0UsZUFDRixDQUVBLDBCQUxFLGdCQUFpQixDQUNqQixhQU9GIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAwIDAgMDtcbn1cbi55ZWFyID4gcCwgLnllYXIgPiB1bCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ueWVhciA+IHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4xcztcbn1cblxuLnNlbGVjdGVkIHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICMzMDZjMzQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi55ZWFyIHA6aG92ZXIge1xuICBjb2xvcjogIzMwNmMzNDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4iXX0= */");const p=e=>e%4==0&&e%100!=0||e%400==0?29:28;var y=(e=new r)=>{const t=e.get("year"),n=e.get("month")+1;return{1:31,2:p(t),3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}[n]};function N({weekDayNames:e,monthNames:a,date:l,type:s="onlydate",value:d=[],footer:m,onChange:g=(()=>{})}){const B=t.useContext(o),Z=B.dates,F=B.setDates,p=i(t.useState(new r),2),N=p[0],X=p[1],W=i(t.useState(new r),2),L=W[0],U=W[1],C=i(t.useState(null),2),D=C[0],V=C[1],f=i(t.useState(!1),2),Y=f[0],w=f[1],A=t.useCallback(()=>{const e=y(L),t=new r(L);t.set("date",1);const n=t.get("day")+1,a=7-(7-n);t.set("date",e);const i=7-(7-(t.get("day")+1)),l=e-(i+a),o=Math.ceil(l/7)+((a>0?1:0)+(i>0?1:0)),s=[...new Array(o)].map((e,t)=>t+1),u=[...new Array(7)].map((e,t)=>t+1);let b=1,d=null;var m,g=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=c(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,l=!0,r=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){r=!0,i=e},f:function(){try{l||null==a.return||a.return()}finally{if(r)throw i}}}}(s);try{for(g.s();!(m=g.n()).done;){const t=m.value,a=u.reduce((a,c)=>c!==n||d?(b<=e&&d&&(d[t]||(d[t]={}),a[c]=b++),a):(d={},d[t]||(d[t]={}),a[c]=b,b++,a),{});d[t]=a}}catch(e){g.e(e)}finally{g.f()}V(d)},[L]);function E(e){const t=new r(L);t.set("month",e),U(t)}t.useEffect(()=>{l||A()},[l,X,N,A]),t.useEffect(()=>{if(d&&d.length){const e=new r(d[0]),t=new r(d[d.length-1]),n=new Map,a=R(e,t);if(e&&!t&&a>=1){v(e,t).forEach(e=>J(n,e)),F(n)}}},[d]);const k=e=>()=>{if(e){const t=new r(L);if(t.set("date",e),I[s]===I.onlydate&&(X(t),U(t),g(t)),I[s]===I.selector){X(t),U(t);let e=new Map([...Z]);e=J(e,t),F(e),U(e),g(e)}if(I[s]===I.range){let e=new Map,n=[...Z];const a=i(n[0]?n[0]:[],2)[1],c=i(n.length-1>0?n[n.length-1]:[],2)[1];a&&c&&(e=J(e,t),F(e),U(e));const l=R(a,t);if(a&&!c&&t&&l>=1){v(a,t).forEach(t=>J(e,t)),F(e),U(e)}l<=0&&(e.get(t.reset().toJSON())||(e=J(e,t)),F(e),U(e)),g([...e])}X(t),U(t)}},v=(e,t)=>{let n=e.getUTCDate(),a=e.get("month")<12?e.get("month")+1:e.get("month"),c=e.get("year"),i=y(e);const l=R(e,t),o=[];let s=0;for(;s<[...new Array(l+1)].length;){const e=1===String(n).length?"0".concat(n):n,t=new r("".concat(c,"-").concat(a,"-").concat(e,"  00:00:00:00"));if(n>=i&&(n=0,a>=12&&(c++,a=0),a<12)){a++;const e=new r("".concat(c,"-").concat(a,"-0").concat(n+1));i=y(e)}n+=1,o.push(t),s++}return o},R=(e,t)=>{if(!e||!t)return 0;const n=Date.UTC(e.get("year"),e.get("month"),e.get("date")),a=Date.UTC(t.get("year"),t.get("month"),t.get("date"));return Math.floor((a-n)/864e5)},J=(e,t)=>(t&&(t.setHours(0,0,0,0),e.has(t.toJSON())?e.delete(t.toJSON()):e.set(t.toJSON(),t)),e);return n.createElement("div",{className:"App"},n.createElement("div",{className:"calendar"},n.createElement(u,{currentDate:N,showYear:L.getFullYear(),dayNames:e||G,months:a||Q,onClick:()=>w(!0)}),Y?n.createElement(h,{currentYear:L.getFullYear(),onChange:e=>{!function(e){const t=new r(L);t.setFullYear(e),U(t)}(e),w(!1)}}):n.createElement(n.Fragment,null,n.createElement(x,{currentDate:L,currentMonth:L.get("month"),months:a||Q,onChange:E}),n.createElement(b,{type:s,currentMonth:N.get("month"),currentYear:N.getFullYear(),weekDays:e||G,monthStructure:D,currentDate:N,showDate:L,dates:Z,onChange:k})),m))}function X(){const e=i(t.useState(new Map([[(new r).reset().toJSON(),new r]])),2);return[e[0],e[1]]}function W({onCancel:e,onConfirm:a,buttonLabels:c}){const i=t.useContext(o).dates;return n.createElement("div",null,n.createElement("div",{className:"footer-buttons"},n.createElement("button",{type:"button",className:"button",onClick:e},c.cancel),n.createElement("button",{type:"button",className:"button",onClick:()=>a([...i])},c.confirm)))}function L(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},n.createElement("path",{fill:"currentColor",d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),n.createElement("path",{fill:"currentColor",d:"M0 0h24v24H0z",fill:"none"})))}s(".display-none{display:none}.backdrop{background:rgba(0,0,0,.5);-webkit-tap-highlight-color:transparent;z-index:9}.backdrop,.backdrop-content{display:flex;position:fixed;opacity:1;top:0;left:0;right:0;bottom:0}.backdrop-content{align-items:center;justify-content:center;z-index:10;margin:5% auto 0}.input-content{display:flex;justify-content:space-between;align-items:center;padding:5px 15px;border-radius:8px}.input-content,input{width:100%;background:#f1f1f1}input{border:none}.icon-button{display:flex;background:transparent;border:none;color:#6a6c6e}.container{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%}.input-label{font:inherit;margin-bottom:.5rem}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0cGlja2VyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUNFLFlBQ0YsQ0FFQSxVQUdFLHlCQUE4QixDQUM5Qix1Q0FBd0MsQ0FFeEMsU0FLRixDQUVBLDRCQVpFLFlBQWEsQ0FDYixjQUFlLENBR2YsU0FBVSxDQUVWLEtBQU0sQ0FDTixNQUFPLENBQ1AsT0FBUSxDQUNSLFFBZ0JGLENBYkEsa0JBR0Usa0JBQW1CLENBQ25CLHNCQUF1QixDQUN2QixVQUFXLENBT1gsZ0JBQ0YsQ0FFQSxlQUVFLFlBQWEsQ0FDYiw2QkFBOEIsQ0FDOUIsa0JBQW1CLENBRW5CLGdCQUFpQixDQUNqQixpQkFDRixDQUVBLHFCQVRFLFVBQVcsQ0FJWCxrQkFTRixDQUpBLE1BRUUsV0FFRixDQUVBLGFBQ0UsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixXQUFZLENBQ1osYUFDRixDQUVBLFdBQ0UsWUFBYSxDQUNiLHFCQUFzQixDQUN0QiwwQkFBMkIsQ0FDM0Isc0JBQXVCLENBQ3ZCLFVBQ0YsQ0FFQSxhQUNFLFlBQWEsQ0FDYixtQkFDRiIsImZpbGUiOiJpbnB1dHBpY2tlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJhY2tkcm9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJhY2tkcm9wLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbiAgb3BhY2l0eTogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5pbnB1dC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4uaWNvbi1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzZhNmM2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXQtbGFiZWwge1xuICBmb250OiBpbmhlcml0O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4iXX0= */");const U=function({onChange:e,type:t}){const a=i(X(),2),c=a[0],l=a[1];return n.createElement(o.Provider,{value:{dates:c,setDates:l}},n.createElement(N,{onChange:e,type:t}))},C=function({monthLabels:e,dayLabels:a,placeholder:c="",value:l,label:s,onChange:u=(()=>{}),onFinish:b=(()=>{}),format:d="dd/mm/YYYY",buttonLabels:m={cancel:"Cancel",confirm:"Ok"}}){const g=i(t.useState(!1),2),x=g[0],I=g[1],B=i(t.useState(""),2),Z=B[0],F=B[1],h=i(X(),2),p=h[0],y=h[1],U=t=>{if(t.length>1){return[t[0],t[t.length-1]].filter(e=>e).map(t=>t.format({dayNames:a||G,months:e||Q,pattern:d})).join(" - ")}return t[0]?t[0].format({pattern:d,dayNames:a||G,months:e||Q}):""};t.useEffect(()=>{const e=JSON.stringify(Z)===JSON.stringify(l);if(l&&!e&&l&&l instanceof Array){const e=l.map(e=>new r(e).reset()),t=U(e);F(t)}l||F("")},[l]);const C=e=>{e.preventDefault(),I(!0)};return n.createElement("div",{className:"container"},n.createElement("span",{className:"input-label"},s),n.createElement("div",{className:"input-content"},n.createElement("input",{type:"text",placeholder:c,value:Z,onChange:e=>{},onClick:C}),n.createElement("button",{type:"button",className:"icon-button",onClick:C},n.createElement(L,null))),n.createElement("div",{className:x?"backdrop":"display-none"}),n.createElement("div",{className:x?"backdrop-content":"display-none"},n.createElement(o.Provider,{value:{dates:p,setDates:y}},n.createElement(N,{monthNames:e||Q,weekDayNames:a||G,type:"range",value:Z,onChange:e=>{e instanceof Array&&u(e.map(([,e])=>e))},footer:n.createElement(W,{buttonLabels:m,onConfirm:(e=[])=>{if(e&&e.length){const t=U(e.map(([,e])=>e));F(t),b(e.map(([,e])=>e))}I(!1)},onCancel:()=>I(!1)})}))))};var D={Calendar:U,RangePicker:C};exports.Calendar=U,exports.RangePicker=C,exports.default=D;
//# sourceMappingURL=index.js.map
