import e,{createContext as t,useState as n,useEffect as a,useRef as c,useContext as i,useCallback as l}from"react";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function o(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,c=!1,i=void 0;try{for(var l,r=e[Symbol.iterator]();!(a=(l=r.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return n}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const u={YYYY:"getFullYear",mm:"getMonth",dd:"getDate",EE:"getDay",MM:"getMonth",DD:"getDate"};class b extends Date{constructor(e){super(e?new Date(e):new Date)}getFormatPattern(e="YYYY/MM/DD"){const t=e.split("");return t.reduce((e,n,a)=>{const c=e.findIndex(e=>e.includes(n));return t[a-1]===n&&(i=n,Boolean(i&&i.match(/[A-Z, a-z]/)))?(e[c]+=n,e):(e.push(n),e);var i},[])}getFormatString(e,t,n=[],a=[]){const c={EE:()=>{const a=t&&n[this[t]()];return 2===e.length?a&&a.substr(0,3)||"":a},MM:()=>{const n=t&&a[this[t]()];return 2===e.length?n&&n.substr(0,3)||"":n}};return c[e]&&"function"==typeof c[e]?c[e]():e}format({dayNames:e=[],months:t=[],pattern:n="EE, MM YYYY"}){return this.getFormatPattern(n).map(n=>{const a=u[n];return n.match(/[A-Z]/)&&!n.includes("YYYY")?this.getFormatString(n,a,e,t):n.match(/[A-Z]/)&&!n.includes("mm")?Number(this[a]())+1:a?this[a]():n}).join("")}set(e,t){const n={month:e=>this.setMonth(e),date:e=>this.setDate(e)}[e];return n&&n(t),this}get(e){return{date:this.getDate(),day:this.getDay(),month:this.getMonth(),year:this.getFullYear()}[e]}reset(){return this.setHours(0,0,0,0),this}}const d=t({range:new Map([[(new b).reset().toJSON(),new b]])});function m(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css","top"===n&&a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}function g({currentYear:t,currentDate:n,dayNames:a,months:c,onClick:i}){const l=new b(n).format({dayNames:a,months:c});return e.createElement(e.Fragment,null,e.createElement("div",{className:"header"},e.createElement("div",{onClick:i,className:"header-container full-width margin-item"},t,e.createElement("div",{className:"header-item-grow-2"})),e.createElement("div",{className:"margin-item header-date"},l)))}m(".custom-calendar-app{font-family:sans-serif;text-align:center;box-sizing:border-box;width:fit-content;margin:0 auto;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media only screen and (max-width:600px){.App{width:auto}}@media only screen and (min-width:1300px){.calendar{width:28rem}}@media only screen and (min-width:650px) and (max-width:1299px){.calendar{width:25rem}}.calendar{height:auto;background-color:#fff;box-shadow:1px 4px 4px grey;box-sizing:border-box}.header{padding:1em;background:#306c34;color:#fafafa;flex-wrap:wrap}.header,.header-container{display:flex}.full-width{width:100%}.header-item{flex-grow:1}.header-item-grow-2{flex-grow:2}.header-item-align-left{text-align:left}.header-year{font-weight:500;font-size:1em}.header-date{font-size:2rem;font-family:Roboto}.margin-item{margin:.5rem}.flex-grow-1{flex-grow:1}.footer-buttons{display:flex;justify-content:flex-end;align-items:center;padding:1rem}.button{background:transparent;color:#306c34;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1jYWxlbmRhci1zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUNFLHNCQUF1QixDQUN2QixpQkFBa0IsQ0FDbEIscUJBQXNCLENBQ3RCLGlCQUFrQixDQUNsQixhQUFjLENBQ2QsMEJBQTJCLENBQzNCLHdCQUF5QixDQUN6Qix1QkFBd0IsQ0FDeEIscUJBQXNCLENBQ3RCLG9CQUFxQixDQUNyQixnQkFFRixDQUVBLHlDQUNFLEtBQ0UsVUFDRixDQUNGLENBRUEsMENBQ0UsVUFDRSxXQUNGLENBQ0YsQ0FFQSxnRUFDRSxVQUNFLFdBQ0YsQ0FDRixDQUVBLFVBQ0UsV0FBWSxDQUNaLHFCQUF1QixDQUN2QiwyQkFBNEIsQ0FDNUIscUJBQ0YsQ0FFQSxRQUVFLFdBQVksQ0FDWixrQkFBbUIsQ0FDbkIsYUFBYyxDQUNkLGNBQ0YsQ0FFQSwwQkFQRSxZQVNGLENBRUEsWUFDRSxVQUNGLENBRUEsYUFDRSxXQUNGLENBRUEsb0JBQ0UsV0FDRixDQUVBLHdCQUNFLGVBQ0YsQ0FFQSxhQUNFLGVBQWdCLENBQ2hCLGFBQ0YsQ0FFQSxhQUNFLGNBQWUsQ0FDZixrQkFDRixDQUVBLGFBQ0UsWUFDRixDQUVBLGFBQ0UsV0FDRixDQUVBLGdCQUNFLFlBQWEsQ0FDYix3QkFBeUIsQ0FDekIsa0JBQW1CLENBQ25CLFlBQ0YsQ0FFQSxRQUNFLHNCQUF1QixDQUN2QixhQUFjLENBQ2QsV0FDRiIsImZpbGUiOiJjdXN0b20tY2FsZW5kYXItc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2FsZW5kYXItYXBwIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIE9wZXJhIGFuZCBGaXJlZm94ICovXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLkFwcCB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmNhbGVuZGFyIHtcbiAgICB3aWR0aDogMjhyZW07XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkgYW5kIChtYXgtd2lkdGg6IDEyOTlweCkge1xuICAuY2FsZW5kYXIge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgfVxufVxuXG4uY2FsZW5kYXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggNHB4IDRweCBncmF5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMWVtO1xuICBiYWNrZ3JvdW5kOiAjMzA2YzM0O1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXItaXRlbSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmhlYWRlci1pdGVtLWdyb3ctMiB7XG4gIGZsZXgtZ3JvdzogMjtcbn1cblxuLmhlYWRlci1pdGVtLWFsaWduLWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVhZGVyLXllYXIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmhlYWRlci1kYXRlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4ubWFyZ2luLWl0ZW0ge1xuICBtYXJnaW46IDAuNXJlbSAwLjVyZW07XG59XG5cbi5mbGV4LWdyb3ctMSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZvb3Rlci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzMwNmMzNDtcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */");function x({currentYear:t,currentMonth:n,currentDate:a,weekDays:c=[],monthStructure:i,dates:l=new Map,onChange:r,type:o}){const s=c=>Object.keys(i).map(e=>e).map(s=>{let u="calendar-days-item-spacing-day";const d=i[s][c],m=(e=>{if(e){return new b("".concat(t,"-").concat(n+1,"-").concat(e," 00:00:00"))}return new b})(d).toJSON(),g={onlydate:()=>d===a.get("date"),range:()=>d&&l.get(m),selector:()=>d&&l.get(m)};return g[o]&&g[o]()&&(u+=" calendar-days-number-color-black"),e.createElement("div",{key:"current-day-".concat(i[s][c]),className:u,onClick:r(i[s][c])},i[s][c])});return e.createElement("div",{className:"calendar-days"},c.map((t,n)=>e.createElement("div",{key:"week-".concat(n+1),className:"calendar-days-item"},"".concat(t.substr(0,3)),e.createElement("div",null,s(n+1,t.substr(0,3))))))}m(".calendar-days{display:flex;box-sizing:border-box}.calendar-days-item{flex-grow:1;font-size:1rem;color:grey}.calendar-days-item-spacing-day{margin:2%;padding:.5rem;min-height:38px;max-height:38px;display:flex;justify-content:center;align-items:center}.calendar-days-numbers{padding:2rem;color:grey}.calendar-days-number-color-black{color:#f0f0f0;border-radius:5px;background-color:#306c34}.calendar-day-months{display:flex;width:100%;flex-flow:wrap}.calendar-days-numbers{flex-grow:1;min-width:3rem;font-size:1rem;color:#000}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyRGF5cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFDRSxZQUFhLENBQ2IscUJBQ0YsQ0FFQSxvQkFDRSxXQUFZLENBQ1osY0FBZSxDQUNmLFVBQ0YsQ0FFQSxnQ0FDRSxTQUF3QixDQUN4QixhQUFlLENBQ2YsZUFBZ0IsQ0FDaEIsZUFBZ0IsQ0FDaEIsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixrQkFDRixDQUVBLHVCQUNFLFlBQWEsQ0FHYixVQUNGLENBRUEsa0NBQ0UsYUFBYyxDQUNkLGlCQUFrQixDQUNsQix3QkFDRixDQUVBLHFCQUNFLFlBQWEsQ0FDYixVQUFXLENBQ1gsY0FDRixDQUVBLHVCQUNFLFdBQVksQ0FDWixjQUFlLENBQ2YsY0FBZSxDQUNmLFVBQ0YiLCJmaWxlIjoiQ2FsZW5kYXJEYXlzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRhci1kYXlzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNhbGVuZGFyLWRheXMtaXRlbSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmNhbGVuZGFyLWRheXMtaXRlbS1zcGFjaW5nLWRheSB7XG4gIG1hcmdpbjogY2FsYygxMDAlIC0gOTglKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBtYXgtaGVpZ2h0OiAzOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhbGVuZGFyLWRheXMtbnVtYmVycyB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmNhbGVuZGFyLWRheXMtbnVtYmVyLWNvbG9yLWJsYWNrIHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNmMzNDtcbn1cblxuLmNhbGVuZGFyLWRheS1tb250aHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1mbG93OiB3cmFwO1xufVxuXG4uY2FsZW5kYXItZGF5cy1udW1iZXJzIHtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4td2lkdGg6IDNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */");function Q(){return e.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},e.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},e.createElement("path",{fill:"currentColor",d:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"})))}function G(){return e.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},e.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},e.createElement("path",{fill:"currentColor",d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"})))}m(".calendar-months-container{width:100%;padding:1rem;justify-content:space-between;box-sizing:border-box}.calendar-arrows{display:flex;justify-content:space-around;align-items:center;font-weight:600;color:grey}.calendar-month-text{color:#333;text-align:center}.display-flex{display:flex;justify-content:center;align-items:center}.flex-end{display:flex;justify-content:flex-end}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyTW9udGguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUNFLFVBQVcsQ0FDWCxZQUFhLENBQ2IsNkJBQThCLENBQzlCLHFCQUNGLENBRUEsaUJBQ0UsWUFBYSxDQUNiLDRCQUE2QixDQUM3QixrQkFBbUIsQ0FDbkIsZUFBZ0IsQ0FDaEIsVUFDRixDQUVBLHFCQUNFLFVBQVcsQ0FDWCxpQkFDRixDQUVBLGNBQ0UsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixrQkFDRixDQUVBLFVBQ0UsWUFBYSxDQUNiLHdCQUNGIiwiZmlsZSI6IkNhbGVuZGFyTW9udGguY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGVuZGFyLW1vbnRocy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2FsZW5kYXItYXJyb3dzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uY2FsZW5kYXItbW9udGgtdGV4dCB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnMge1xufSAqL1xuXG4vKiBAa2V5ZnJhbWVzIGJ1dHRvbiB7XG4gIGZyb20ge31cbn0gKi9cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnM6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzk5OTtcbiAgYm9yZGVyOiA7XG59ICovXG4iXX0= */");function I(t){return e.createElement("button",Object.assign({type:"button"},t,{className:"custom-button ".concat(t.className?t.className:"")}),e.createElement("span",{className:"ripple"},t.label?t.label:t.children))}function F({currentDate:t,months:c,onChange:i}){const l=s(n((new b).get("month")),2),r=l[0],o=l[1],u=s(n(null),2),d=u[0],m=u[1];a(()=>{const e=t.get("month");r!==e&&o(e);const n=t.get("year"),a="".concat(c[e]," ").concat(n);m(a)},[t,r,c]);const g=e=>()=>{let t=r+e;t>=c.length||t<0||i(t)};return e.createElement("div",{className:"calendar-months-container"},e.createElement("div",{className:"calendar-arrows"},e.createElement("div",{className:"flex-grow-1"},e.createElement(I,{onClick:g(-1)},e.createElement(Q,null))),e.createElement("div",{className:"calendar-month-text flex-grow-1"},d),e.createElement("div",{className:"flex-grow-1 flex-end"},e.createElement(I,{onClick:g(1)},e.createElement(G,null)))))}m(".custom-button,.custom-circle-button{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.custom-circle-button{border-radius:50%}.custom-button:active,.custom-button:hover{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.ripple{width:100%;background-position:50%;transition:background .8s;border:none}.ripple:hover{border:none;background:transparent radial-gradient(circle,transparent 1%,#fff 0) 50%/15000%}.ripple:active{background-color:grey;background-size:100%;transition:background 0s;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEscUNBUEUsV0FBWSxDQUNaLHNCQUF1QixDQUN2QixZQUFhLENBQ2Isc0JBQXVCLENBQ3ZCLFlBVUYsQ0FQQSxzQkFFRSxpQkFLRixDQVVBLDJDQUNFLFdBQVksQ0FDWixzQkFBdUIsQ0FDdkIsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixZQUNGLENBR0EsUUFDRSxVQUFXLENBQ1gsdUJBQTJCLENBQzNCLHlCQUEyQixDQUMzQixXQUNGLENBQ0EsY0FDRSxXQUFZLENBQ1osK0VBQ0YsQ0FDQSxlQUNFLHFCQUFzQixDQUN0QixvQkFBcUIsQ0FDckIsd0JBQXlCLENBQ3pCLFdBQ0YiLCJmaWxlIjoic3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWNpcmNsZS1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLmN1c3RvbS1idXR0b246YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLyogUmlwcGxlIGVmZmVjdCAqL1xuLnJpcHBsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbiAgYm9yZGVyOiBub25lO1xufVxuLnJpcHBsZTpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICNmZmYgMSUpIGNlbnRlci8xNTAwMCU7XG59XG4ucmlwcGxlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */");const B=["January","February","March","April","May","June","July","August","September","October","November","December"],Z=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],h={onlydate:0,range:1,selector:2},N=new Date,p=N.getFullYear()-120,y=N.getFullYear()+120;function X({currentYear:t,onChange:n}){const i=c(),l=c();function r(e){n(e)}return a(()=>{i&&i.current&&l&&l.current&&l.current.scrollTo(0,i.current.offsetTop-300)},[i,l]),e.createElement("div",{style:{width:"100%",height:"350px"}},e.createElement("ul",{ref:l,style:{overflow:"auto",height:"100%"}},(()=>{const n=[];for(let a=p;a<=y;a++)t===a?n.push(e.createElement("li",{key:a,ref:i,className:"year selected",onClick:()=>r(a)},e.createElement("p",null,a))):n.push(e.createElement("li",{key:a,className:"year",onClick:()=>r(a)},e.createElement("p",null,a)));return n})()))}m("ul{list-style:none;display:flex;flex-direction:column;padding:0}.year>p,ul{align-items:center}.year>p{font-size:1rem;cursor:pointer;margin:10px;font-weight:400;transition:font-size .1s}.selected p{font-weight:500}.selected p,.year p:hover{font-size:1.5rem;color:#306c34}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUNFLGVBQWdCLENBQ2hCLFlBQWEsQ0FDYixxQkFBc0IsQ0FFdEIsU0FDRixDQUVBLFdBSkUsa0JBV0YsQ0FQQSxRQUNFLGNBQWUsQ0FDZixjQUFlLENBQ2YsV0FBWSxDQUVaLGVBQWdCLENBQ2hCLHdCQUNGLENBRUEsWUFHRSxlQUNGLENBRUEsMEJBTEUsZ0JBQWlCLENBQ2pCLGFBT0YiLCJmaWxlIjoic3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDAgMCAwO1xufVxuXG4ueWVhciA+IHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4xcztcbn1cblxuLnNlbGVjdGVkIHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICMzMDZjMzQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi55ZWFyIHA6aG92ZXIge1xuICBjb2xvcjogIzMwNmMzNDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4iXX0= */");const L=e=>e%4==0&&e%100!=0||e%400==0?29:28;var C=(e=new b)=>{const t=e.get("year"),n=e.get("month")+1;return{1:31,2:L(t),3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}[n]};function W({weekDayNames:t,monthNames:c,date:r,type:u="onlydate",value:m=[],footer:Q,onChange:G=(()=>{})}){const I=i(d),N=I.dates,p=I.setDates,y=s(n(new b),2),L=y[0],W=y[1],V=s(n(null),2),Y=V[0],U=V[1],D=s(n(!1),2),f=D[0],w=D[1],A=l(()=>{const e=C(L),t=new b(L);t.set("date",1);const n=t.get("day")+1,a=Math.ceil(e/7),c=[...new Array(a)].map((e,t)=>t+1),i=[...new Array(7)].map((e,t)=>t+1);let l=1,r=null;var s,u=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=o(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw c}}}}(c);try{for(u.s();!(s=u.n()).done;){const t=s.value,a=i.reduce((a,c)=>(c>=n&&!r&&(r={},r[t]||(r[t]={}),a[c]=l),l<=e&&r&&(r[t]||(r[t]={}),a[c]=l++),a),{});r[t]=a}}catch(e){u.e(e)}finally{u.f()}U(r)},[L]);function R(e){const t=new b(L);t.set("month",e),W(t),A()}a(()=>{r||A()},[r,W,L,A]),a(()=>{if(m&&m.length){const e=new b(m[0]),t=new b(m[m.length-1]),n=new Map,a=v(e,t);if(e&&!t&&a>=1){E(e,t).forEach(e=>J(n,e)),p(n)}}},[m]);const k=e=>()=>{if(e){const t=new b(L);if(t.set("date",e),h[u]===h.onlydate&&(W(t),G(t)),h[u]===h.selector){W(t);let e=new Map([...N]);e=J(e,t),p(e),G(e)}if(h[u]===h.range){let e=new Map,n=[...N];const a=s(n[0]?n[0]:[],2)[1],c=s(n.length-1>0?n[n.length-1]:[],2)[1];a&&c&&(e=J(e,t),p(e));const i=v(a,t);if(a&&!c&&t&&i>=1){E(a,t).forEach(t=>J(e,t)),p(e)}i<=0&&(e.get(t.reset().toJSON())||(e=J(e,t)),p(e)),G([...e])}W(t)}},E=(e,t)=>{let n=e.getUTCDate(),a=e.get("month")<12?e.get("month")+1:e.get("month"),c=e.get("year"),i=C(e);const l=v(e,t),r=[];let o=0;for(;o<[...new Array(l+1)].length;){const e=1===String(n).length?"0".concat(n):n,t=new b("".concat(c,"-").concat(a,"-").concat(e,"  00:00:00"));if(n>=i&&(n=0,a>=12&&(c++,a=0),a<12)){a++;const e=new b("".concat(c,"-").concat(a,"-0").concat(n+1));i=C(e)}n+=1,r.push(t),o++}return r},v=(e,t)=>{if(!e||!t)return 0;const n=Date.UTC(e.get("year"),e.get("month"),e.get("date")),a=Date.UTC(t.get("year"),t.get("month"),t.get("date"));return Math.floor((a-n)/864e5)},J=(e,t)=>(t&&(t.setHours(0,0,0,0),e.has(t.toJSON())?e.delete(t.toJSON()):e.set(t.toJSON(),t)),e);return e.createElement("div",{className:"App"},e.createElement("div",{className:"calendar"},e.createElement(g,{currentDate:L,currentYear:L.getFullYear(),dayNames:t||Z,months:c||B,onClick:()=>w(!0)}),f?e.createElement(X,{currentYear:L.getFullYear(),onChange:e=>{!function(e){const t=new b(L);t.setFullYear(e),W(t)}(e),w(!1)}}):e.createElement(e.Fragment,null,e.createElement(F,{currentDate:L,currentMonth:L.get("month"),months:c||B,onChange:R}),e.createElement(x,{type:u,currentMonth:L.get("month"),currentYear:L.getFullYear(),weekDays:t||Z,monthStructure:Y||{},currentDate:L,dates:N,onChange:k})),Q))}function V(){const e=s(n(new Map([[(new b).reset().toJSON(),new b]])),2);return[e[0],e[1]]}function Y({onCancel:t,onConfirm:n,buttonLabels:a}){const c=i(d).dates;return e.createElement("div",null,e.createElement("div",{className:"footer-buttons"},e.createElement("button",{type:"button",className:"button",onClick:t},a.cancel),e.createElement("button",{type:"button",className:"button",onClick:()=>n([...c])},a.confirm)))}function U(){return e.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},e.createElement("path",{fill:"currentColor",d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),e.createElement("path",{fill:"currentColor",d:"M0 0h24v24H0z",fill:"none"})))}m(".display-none{display:none}.backdrop{background:rgba(0,0,0,.5);-webkit-tap-highlight-color:transparent;z-index:9}.backdrop,.backdrop-content{display:flex;position:fixed;opacity:1;top:0;left:0;right:0;bottom:0}.backdrop-content{z-index:10;margin:5% auto 0}.input-content{display:flex;justify-content:space-between;align-items:center;padding:5px 15px;border-radius:8px}.input-content,input{width:100%;background:#f1f1f1}input{border:none}.icon-button{display:flex;background:transparent;border:none;color:#6a6c6e}.container{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%}.input-label{font:inherit;margin-bottom:.5rem}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0cGlja2VyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUNFLFlBQ0YsQ0FFQSxVQUdFLHlCQUE4QixDQUM5Qix1Q0FBd0MsQ0FFeEMsU0FLRixDQUVBLDRCQVpFLFlBQWEsQ0FDYixjQUFlLENBR2YsU0FBVSxDQUVWLEtBQU0sQ0FDTixNQUFPLENBQ1AsT0FBUSxDQUNSLFFBY0YsQ0FYQSxrQkFHRSxVQUFXLENBT1gsZ0JBQ0YsQ0FFQSxlQUVFLFlBQWEsQ0FDYiw2QkFBOEIsQ0FDOUIsa0JBQW1CLENBRW5CLGdCQUFpQixDQUNqQixpQkFDRixDQUVBLHFCQVRFLFVBQVcsQ0FJWCxrQkFTRixDQUpBLE1BRUUsV0FFRixDQUVBLGFBQ0UsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixXQUFZLENBQ1osYUFDRixDQUVBLFdBQ0UsWUFBYSxDQUNiLHFCQUFzQixDQUN0QiwwQkFBMkIsQ0FDM0Isc0JBQXVCLENBQ3ZCLFVBQ0YsQ0FFQSxhQUNFLFlBQWEsQ0FDYixtQkFDRiIsImZpbGUiOiJpbnB1dHBpY2tlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJhY2tkcm9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJhY2tkcm9wLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmlucHV0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi5pY29uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNmE2YzZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnB1dC1sYWJlbCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbiJdfQ== */");const D=function({onChange:t,type:n}){const a=s(V(),2),c=a[0],i=a[1];return e.createElement(d.Provider,{value:{dates:c,setDates:i}},e.createElement(W,{onChange:t,type:n}))},f=function({monthLabels:t,dayLabels:c,placeholder:i="",value:l,label:r,onChange:o=(()=>{}),onFinish:u=(()=>{}),format:m="dd/mm/YYYY",buttonLabels:g={cancel:"Cancel",confirm:"Ok"}}){const x=s(n(!1),2),Q=x[0],G=x[1],I=s(n(""),2),F=I[0],h=I[1],N=s(V(),2),p=N[0],y=N[1],X=e=>{if(e.length>1){return[e[0],e[e.length-1]].filter(e=>e).map(e=>e.format({dayNames:c||Z,months:t||B,pattern:m})).join(" - ")}return e[0]?e[0].format({pattern:m,dayNames:c||Z,months:t||B}):""};a(()=>{const e=JSON.stringify(F)===JSON.stringify(l);if(l&&!e&&l&&l instanceof Array){const e=l.map(e=>new b(e).reset()),t=X(e);h(t)}l||h("")},[l]);const L=e=>{e.preventDefault(),G(!0)};return e.createElement("div",{className:"container"},e.createElement("span",{className:"input-label"},r),e.createElement("div",{className:"input-content"},e.createElement("input",{type:"text",placeholder:i,value:F,onChange:e=>{},onClick:L}),e.createElement("button",{type:"button",className:"icon-button",onClick:L},e.createElement(U,null))),e.createElement("div",{className:Q?"backdrop":"display-none"}),e.createElement("div",{className:Q?"backdrop-content":"display-none"},e.createElement(d.Provider,{value:{dates:p,setDates:y}},e.createElement(W,{monthNames:t||B,weekDayNames:c||Z,type:"range",value:F,onChange:e=>{e instanceof Array&&o(e.map(([,e])=>e))},footer:e.createElement(Y,{buttonLabels:g,onConfirm:(e=[])=>{if(e&&e.length){const t=X(e.map(([,e])=>e));h(t),u(e.map(([,e])=>e))}G(!1)},onCancel:()=>G(!1)})}))))};var w={Calendar:D,RangePicker:f};export default w;export{D as Calendar,f as RangePicker};
//# sourceMappingURL=index.es.js.map
