"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("react"),n=(e=t)&&"object"==typeof e&&"default"in e?e.default:e;function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function c(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,c=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw i}}return n}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css","top"===n&&a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}l(".App{font-family:sans-serif;text-align:center;box-sizing:border-box;width:fit-content;margin:0 auto;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media only screen and (max-width:600px){.App{width:auto}}@media only screen and (min-width:1300px){.calendar{width:28rem}}@media only screen and (min-width:650px) and (max-width:1299px){.calendar{width:25rem}}.calendar{height:500px;background-color:#fff;box-shadow:1px 4px 4px grey;box-sizing:border-box}.header{padding:1em;background:#306c34;color:#fafafa;flex-wrap:wrap}.header,.header-container{display:flex}.full-width{width:100%}.header-item{flex-grow:1}.header-item-grow-2{flex-grow:2}.header-item-align-left{text-align:left}.header-year{font-weight:500;font-size:1em}.header-date{font-size:2rem;font-family:Roboto}.margin-item{margin:.5rem}.flex-grow-1{flex-grow:1}.footer-buttons{display:flex;justify-content:flex-end;align-items:center;padding:1rem}.button{background:transparent;color:#306c34;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FDRSxzQkFBdUIsQ0FDdkIsaUJBQWtCLENBQ2xCLHFCQUFzQixDQUN0QixpQkFBa0IsQ0FDbEIsYUFBYyxDQUNkLDBCQUEyQixDQUMzQix3QkFBeUIsQ0FDekIsdUJBQXdCLENBQ3hCLHFCQUFzQixDQUN0QixvQkFBcUIsQ0FDckIsZ0JBRUYsQ0FFQSx5Q0FDRSxLQUNFLFVBQ0YsQ0FDRixDQUVBLDBDQUNFLFVBQ0UsV0FDRixDQUNGLENBRUEsZ0VBQ0UsVUFDRSxXQUNGLENBQ0YsQ0FFQSxVQUNFLFlBQWEsQ0FDYixxQkFBdUIsQ0FDdkIsMkJBQTRCLENBQzVCLHFCQUNGLENBRUEsUUFFRSxXQUFZLENBQ1osa0JBQW1CLENBQ25CLGFBQWMsQ0FDZCxjQUNGLENBRUEsMEJBUEUsWUFTRixDQUVBLFlBQ0UsVUFDRixDQUVBLGFBQ0UsV0FDRixDQUVBLG9CQUNFLFdBQ0YsQ0FFQSx3QkFDRSxlQUNGLENBRUEsYUFDRSxlQUFnQixDQUNoQixhQUNGLENBRUEsYUFDRSxjQUFlLENBQ2Ysa0JBQ0YsQ0FFQSxhQUNFLFlBQ0YsQ0FFQSxhQUNFLFdBQ0YsQ0FFQSxnQkFDRSxZQUFhLENBQ2Isd0JBQXlCLENBQ3pCLGtCQUFtQixDQUNuQixZQUNGLENBRUEsUUFDRSxzQkFBdUIsQ0FDdkIsYUFBYyxDQUNkLFdBQ0YiLCJmaWxlIjoic3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5BcHAge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuQXBwIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMDBweCkge1xuICAuY2FsZW5kYXIge1xuICAgIHdpZHRoOiAyOHJlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSBhbmQgKG1heC13aWR0aDogMTI5OXB4KSB7XG4gIC5jYWxlbmRhciB7XG4gICAgd2lkdGg6IDI1cmVtO1xuICB9XG59XG5cbi5jYWxlbmRhciB7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggNHB4IDRweCBncmF5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMWVtO1xuICBiYWNrZ3JvdW5kOiAjMzA2YzM0O1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXItaXRlbSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmhlYWRlci1pdGVtLWdyb3ctMiB7XG4gIGZsZXgtZ3JvdzogMjtcbn1cblxuLmhlYWRlci1pdGVtLWFsaWduLWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVhZGVyLXllYXIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmhlYWRlci1kYXRlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4ubWFyZ2luLWl0ZW0ge1xuICBtYXJnaW46IDAuNXJlbSAwLjVyZW07XG59XG5cbi5mbGV4LWdyb3ctMSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZvb3Rlci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzMwNmMzNDtcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */");class o extends Date{constructor(e){super(e?new Date(e):new Date)}format({dayNames:e=[],months:t=[]}){return"".concat((e[this.getDay()]||"").substr(0,3),", ").concat(t[this.getMonth()],"\n    ").concat(this.getDate())}set(e,t){const n={month:e=>this.setMonth(e),date:e=>this.setDate(e)}[e];return n&&n(t),this}get(e){return{date:this.getDate(),day:this.getDay(),month:this.getMonth(),year:this.getFullYear()}[e]}reset(){return this.setHours(0,0,0,0),this}}function r({currentYear:e,currentDate:t,dayNames:a,months:c,onClick:i}){const l=new o(t).format({dayNames:a,months:c});return n.createElement(n.Fragment,null,n.createElement("div",{className:"header"},n.createElement("div",{onClick:i,className:"header-container full-width margin-item"},e,n.createElement("div",{className:"header-item-grow-2"})),n.createElement("div",{className:"margin-item header-date"},l)))}function s({currentYear:e,currentMonth:t,currentDate:a,weekDays:c=[],monthStructure:i,dates:l=new Map,onChange:r,type:s}){const u=c=>Object.keys(i).map(e=>e).map(u=>{let b="calendar-days-item-spacing-day";const d=i[u][c],g=(n=>{if(n){return new o("".concat(e,"-").concat(t+1,"-").concat(n," 00:00:00"))}return new o})(d).toJSON(),m={onlydate:()=>d===a.get("date"),range:()=>d&&l.get(g),selector:()=>d&&l.get(g)};return m[s]&&m[s]()&&(b+=" calendar-days-number-color-black"),n.createElement("div",{key:"current-day-".concat(i[u][c]),className:b,onClick:r(i[u][c])},i[u][c])});return n.createElement("div",{className:"calendar-days"},c.map((e,t)=>n.createElement("div",{key:"week-".concat(t+1),className:"calendar-days-item"},"".concat(e.substr(0,3)),n.createElement("div",null,u(t+1,e.substr(0,3))))))}l(".calendar-days{display:flex;box-sizing:border-box}.calendar-days-item{flex-grow:1;font-size:1rem;color:grey}.calendar-days-item-spacing-day{margin:2%;padding:.5rem;min-height:38px;max-height:38px;display:flex;justify-content:center;align-items:center}.calendar-days-numbers{padding:2rem;color:grey}.calendar-days-number-color-black{color:#f0f0f0;border-radius:5px;background-color:#306c34}.calendar-day-months{display:flex;width:100%;flex-flow:wrap}.calendar-days-numbers{flex-grow:1;min-width:3rem;font-size:1rem;color:#000}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyRGF5cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFDRSxZQUFhLENBQ2IscUJBQ0YsQ0FFQSxvQkFDRSxXQUFZLENBQ1osY0FBZSxDQUNmLFVBQ0YsQ0FFQSxnQ0FDRSxTQUF3QixDQUN4QixhQUFlLENBQ2YsZUFBZ0IsQ0FDaEIsZUFBZ0IsQ0FDaEIsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixrQkFDRixDQUVBLHVCQUNFLFlBQWEsQ0FHYixVQUNGLENBRUEsa0NBQ0UsYUFBYyxDQUNkLGlCQUFrQixDQUNsQix3QkFDRixDQUVBLHFCQUNFLFlBQWEsQ0FDYixVQUFXLENBQ1gsY0FDRixDQUVBLHVCQUNFLFdBQVksQ0FDWixjQUFlLENBQ2YsY0FBZSxDQUNmLFVBQ0YiLCJmaWxlIjoiQ2FsZW5kYXJEYXlzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRhci1kYXlzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNhbGVuZGFyLWRheXMtaXRlbSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmNhbGVuZGFyLWRheXMtaXRlbS1zcGFjaW5nLWRheSB7XG4gIG1hcmdpbjogY2FsYygxMDAlIC0gOTglKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBtYXgtaGVpZ2h0OiAzOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhbGVuZGFyLWRheXMtbnVtYmVycyB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmNhbGVuZGFyLWRheXMtbnVtYmVyLWNvbG9yLWJsYWNrIHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNmMzNDtcbn1cblxuLmNhbGVuZGFyLWRheS1tb250aHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1mbG93OiB3cmFwO1xufVxuXG4uY2FsZW5kYXItZGF5cy1udW1iZXJzIHtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4td2lkdGg6IDNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */");function u(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},n.createElement("path",{fill:"currentColor",d:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"})))}function b(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},n.createElement("path",{fill:"currentColor",d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"})))}l(".calendar-months-container{width:100%;padding:1rem;justify-content:space-between;box-sizing:border-box}.calendar-arrows{display:flex;justify-content:space-around;align-items:center;font-weight:600;color:grey}.calendar-month-text{color:#333;text-align:center}.display-flex{display:flex;justify-content:center;align-items:center}.flex-end{display:flex;justify-content:flex-end}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyTW9udGguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUNFLFVBQVcsQ0FDWCxZQUFhLENBQ2IsNkJBQThCLENBQzlCLHFCQUNGLENBRUEsaUJBQ0UsWUFBYSxDQUNiLDRCQUE2QixDQUM3QixrQkFBbUIsQ0FDbkIsZUFBZ0IsQ0FDaEIsVUFDRixDQUVBLHFCQUNFLFVBQVcsQ0FDWCxpQkFDRixDQUVBLGNBQ0UsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixrQkFDRixDQUVBLFVBQ0UsWUFBYSxDQUNiLHdCQUNGIiwiZmlsZSI6IkNhbGVuZGFyTW9udGguY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGVuZGFyLW1vbnRocy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2FsZW5kYXItYXJyb3dzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uY2FsZW5kYXItbW9udGgtdGV4dCB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnMge1xufSAqL1xuXG4vKiBAa2V5ZnJhbWVzIGJ1dHRvbiB7XG4gIGZyb20ge31cbn0gKi9cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnM6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzk5OTtcbiAgYm9yZGVyOiA7XG59ICovXG4iXX0= */");function d(e){return n.createElement("button",Object.assign({},e,{className:"custom-button ".concat(e.className?e.className:"")}),n.createElement("span",{className:"ripple"},e.label?e.label:e.children))}function g({currentDate:e,months:a,onChange:c}){const l=i(t.useState((new o).get("month")),2),r=l[0],s=l[1],g=i(t.useState(null),2),m=g[0],x=g[1];t.useEffect(()=>{const t=e.get("month");r!==t&&s(t);const n=e.get("year"),c="".concat(a[t]," ").concat(n);x(c)},[e,r,a]);const Q=e=>()=>{let t=r+e;t>=a.length||t<0||c(t)};return n.createElement("div",{className:"calendar-months-container"},n.createElement("div",{className:"calendar-arrows"},n.createElement("div",{className:"flex-grow-1"},n.createElement(d,{onClick:Q(-1)},n.createElement(u,null))),n.createElement("div",{className:"calendar-month-text flex-grow-1"},m),n.createElement("div",{className:"flex-grow-1 flex-end"},n.createElement(d,{onClick:Q(1)},n.createElement(b,null)))))}l(".custom-button,.custom-circle-button{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.custom-circle-button{border-radius:50%}.custom-button:active,.custom-button:hover{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.ripple{width:100%;background-position:50%;transition:background .8s;border:none}.ripple:hover{border:none;background:transparent radial-gradient(circle,transparent 1%,#fff 0) 50%/15000%}.ripple:active{background-color:grey;background-size:100%;transition:background 0s;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEscUNBUEUsV0FBWSxDQUNaLHNCQUF1QixDQUN2QixZQUFhLENBQ2Isc0JBQXVCLENBQ3ZCLFlBVUYsQ0FQQSxzQkFFRSxpQkFLRixDQVVBLDJDQUNFLFdBQVksQ0FDWixzQkFBdUIsQ0FDdkIsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixZQUNGLENBR0EsUUFDRSxVQUFXLENBQ1gsdUJBQTJCLENBQzNCLHlCQUEyQixDQUMzQixXQUNGLENBQ0EsY0FDRSxXQUFZLENBQ1osK0VBQ0YsQ0FDQSxlQUNFLHFCQUFzQixDQUN0QixvQkFBcUIsQ0FDckIsd0JBQXlCLENBQ3pCLFdBQ0YiLCJmaWxlIjoic3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWNpcmNsZS1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLmN1c3RvbS1idXR0b246YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLyogUmlwcGxlIGVmZmVjdCAqL1xuLnJpcHBsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbiAgYm9yZGVyOiBub25lO1xufVxuLnJpcHBsZTpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICNmZmYgMSUpIGNlbnRlci8xNTAwMCU7XG59XG4ucmlwcGxlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */");const m=["January","February","March","April","May","June","July","August","September","October","November","December"],x=["Sanday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Q={onlydate:0,range:1,selector:2},G=new Date,I=G.getFullYear()-120,B=G.getFullYear()+120;function F({currentYear:e,onChange:a}){const c=t.useRef(),i=t.useRef();function l(e){a(e)}return t.useEffect(()=>{c&&c.current&&i&&i.current&&i.current.scrollTo(0,c.current.offsetTop-300)},[c,i]),n.createElement("div",{style:{width:"100%",height:"350px"}},n.createElement("ul",{ref:i,style:{overflow:"auto",height:"100%"}},(()=>{const t=[];for(let a=I;a<=B;a++)e===a?t.push(n.createElement("li",{key:a,ref:c,className:"year selected",onClick:()=>l(a)},n.createElement("p",null,a))):t.push(n.createElement("li",{key:a,className:"year",onClick:()=>l(a)},n.createElement("p",null,a)));return t})()))}l("ul{list-style:none;display:flex;flex-direction:column;padding:0}.year p,ul{align-items:center}.year p{font-size:1rem;cursor:pointer;margin:10px;font-weight:400;transition:font-size .1s}.selected p{font-weight:500}.selected p,.year p:hover{font-size:1.5rem;color:#306c34}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUNFLGVBQWdCLENBQ2hCLFlBQWEsQ0FDYixxQkFBc0IsQ0FFdEIsU0FDRixDQUVBLFdBSkUsa0JBV0YsQ0FQQSxRQUNFLGNBQWUsQ0FDZixjQUFlLENBQ2YsV0FBWSxDQUVaLGVBQWdCLENBQ2hCLHdCQUNGLENBRUEsWUFHRSxlQUNGLENBRUEsMEJBTEUsZ0JBQWlCLENBQ2pCLGFBT0YiLCJmaWxlIjoic3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDAgMCAwO1xufVxuXG4ueWVhciBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuMXM7XG59XG5cbi5zZWxlY3RlZCBwIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMzA2YzM0O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ueWVhciBwOmhvdmVyIHtcbiAgY29sb3I6ICMzMDZjMzQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuIl19 */");const h=e=>e%4==0&&e%100!=0||e%400==0?29:28;var Z=(e=new o)=>{const t=e.get("year"),n=e.get("month")+1;return{1:31,2:h(t),3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}[n]};function y({onCancel:e,onFinish:a,weekDayNames:l,monthNames:u,date:b,type:d="onlydate",value:G=[]}){const I=i(t.useState(new Map([[(new o).reset().toJSON(),new o]])),2),B=I[0],h=I[1],y=i(t.useState(new o),2),p=y[0],N=y[1],X=i(t.useState(null),2),L=X[0],W=X[1],V=i(t.useState(!1),2),C=V[0],U=V[1],f=t.useCallback(()=>{const e=Z(p),t=new o(p);t.set("date",1);const n=t.get("day")+1,a=Math.ceil(e/7),i=[...new Array(a)].map((e,t)=>t+1),l=[...new Array(7)].map((e,t)=>t+1);let r=1,s=null;var u,b=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=c(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,l=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){o=!0,i=e},f:function(){try{l||null==a.return||a.return()}finally{if(o)throw i}}}}(i);try{for(b.s();!(u=b.n()).done;){const t=u.value,a=l.reduce((a,c)=>(c>=n&&!s&&(s={},s[t]||(s[t]={}),a[c]=r),r<=e&&s&&(s[t]||(s[t]={}),a[c]=r++),a),{});s[t]=a}}catch(e){b.e(e)}finally{b.f()}W(s)},[p]);function D(e){const t=new o(p);t.set("month",e),N(t),f()}t.useEffect(()=>{b||f()},[b,N,p,f]),t.useEffect(()=>{if(G&&G.length){const e=new o(G[0]),t=new o(G[G.length-1]),n=new Map,a=R(e,t);if(e&&!t&&a>=1){w(e,t).forEach(e=>A(n,e)),h(n)}}},[G]);const Y=e=>()=>{if(e){const t=new o(p);if(t.set("date",e),Q[d]===Q.onlydate&&N(t),Q[d]===Q.selector){N(t);let e=new Map([...B]);e=A(e,t),h(e)}if(Q[d]===Q.range){let e=new Map,n=[...B];const a=i(n[0]?n[0]:[],2)[1],c=i(n.length-1>0?n[n.length-1]:[],2)[1];a&&c&&(e=A(e,t),h(e));const l=R(a,t);if(a&&!c&&t&&l>=1){w(a,t).forEach(t=>A(e,t)),h(e)}l<=0&&(e.get(t.reset().toJSON())||(e=A(e,t)),h(e))}N(t)}},w=(e,t)=>{let n=e.getUTCDate(),a=e.get("month")<12?e.get("month")+1:e.get("month"),c=e.get("year"),i=Z(e);const l=R(e,t),r=[];let s=0;for(;s<[...new Array(l+1)].length;){const e=1===String(n).length?"0".concat(n):n,t=new o("".concat(c,"-").concat(a,"-").concat(e,"  00:00:00"));if(n>=i&&(n=0,a>=12&&(c++,a=0),a<12)){a++;const e=new o("".concat(c,"-").concat(a,"-0").concat(n+1));i=Z(e)}n+=1,r.push(t),s++}return r},R=(e,t)=>{if(!e||!t)return 0;const n=Date.UTC(e.get("year"),e.get("month"),e.get("date")),a=Date.UTC(t.get("year"),t.get("month"),t.get("date"));return Math.floor((a-n)/864e5)},A=(e,t)=>(t&&(t.setHours(0,0,0,0),e.has(t.toJSON())?e.delete(t.toJSON()):e.set(t.toJSON(),t)),e);return n.createElement("div",{className:"App"},n.createElement("div",{className:"calendar"},n.createElement(r,{currentDate:p,currentYear:p.getFullYear(),dayNames:l||x,months:u||m,onClick:()=>U(!0)}),C?n.createElement(F,{currentYear:p.getFullYear(),onChange:e=>{!function(e){const t=new o(p);t.setFullYear(e),N(t)}(e),U(!1)}}):n.createElement(n.Fragment,null,n.createElement(g,{currentDate:p,currentMonth:p.get("month"),months:u||m,onChange:D}),n.createElement(s,{type:d,currentMonth:p.get("month"),currentYear:p.getFullYear(),weekDays:x,monthStructure:L||{},currentDate:p,dates:B,onChange:Y}),n.createElement("div",{className:"footer-buttons"},n.createElement("button",{type:"button",className:"button",onClick:e},"Cancel"),n.createElement("button",{type:"button",className:"button",onClick:()=>a([...B])},"OK")))))}function p(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},n.createElement("path",{fill:"currentColor",d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),n.createElement("path",{fill:"currentColor",d:"M0 0h24v24H0z",fill:"none"})))}l(".display-none{display:none}.backdrop{background:rgba(0,0,0,.5);-webkit-tap-highlight-color:transparent;z-index:9}.backdrop,.backdrop-content{display:flex;position:fixed;opacity:1;top:0;left:0;right:0;bottom:0}.backdrop-content{z-index:10;margin:5% auto 0}.input-content{display:flex;justify-content:space-between;align-items:center;padding:5px 15px;border-radius:8px}.input-content,input{width:100%;background:#f1f1f1}input{border:none}.icon-button{display:flex;background:transparent;border:none;color:#6a6c6e}.container{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%}.input-label{font:inherit;margin-bottom:.5rem}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0cGlja2VyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUNFLFlBQ0YsQ0FFQSxVQUdFLHlCQUE4QixDQUM5Qix1Q0FBd0MsQ0FFeEMsU0FLRixDQUVBLDRCQVpFLFlBQWEsQ0FDYixjQUFlLENBR2YsU0FBVSxDQUVWLEtBQU0sQ0FDTixNQUFPLENBQ1AsT0FBUSxDQUNSLFFBY0YsQ0FYQSxrQkFHRSxVQUFXLENBT1gsZ0JBQ0YsQ0FFQSxlQUVFLFlBQWEsQ0FDYiw2QkFBOEIsQ0FDOUIsa0JBQW1CLENBRW5CLGdCQUFpQixDQUNqQixpQkFDRixDQUVBLHFCQVRFLFVBQVcsQ0FJWCxrQkFTRixDQUpBLE1BRUUsV0FFRixDQUVBLGFBQ0UsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixXQUFZLENBQ1osYUFDRixDQUVBLFdBQ0UsWUFBYSxDQUNiLHFCQUFzQixDQUN0QiwwQkFBMkIsQ0FDM0Isc0JBQXVCLENBQ3ZCLFVBQ0YsQ0FFQSxhQUNFLFlBQWEsQ0FDYixtQkFDRiIsImZpbGUiOiJpbnB1dHBpY2tlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJhY2tkcm9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJhY2tkcm9wLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmlucHV0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi5pY29uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNmE2YzZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnB1dC1sYWJlbCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbiJdfQ== */");const N=y,X=function({monthLabels:e=[],dayLabels:a=[],placeholder:c="",value:l,label:r,onChange:s=(()=>{})}){const u=i(t.useState(!1),2),b=u[0],d=u[1],g=i(t.useState(""),2),Q=g[0],G=g[1];return t.useEffect(()=>{const t=JSON.stringify(Q)===JSON.stringify(l);if(l&&!t&&l&&l instanceof Array){const t=[l[0]&&new o(l[0]),l[l.length-1]&&new o(l[l.length-1])].filter(e=>e).map(t=>t.format({dayNames:a||x,months:e||m})).join(" - ");G(t)}l||G("")},[l]),n.createElement("div",{className:"container"},n.createElement("span",{className:"input-label"},r),n.createElement("div",{className:"input-content"},n.createElement("input",{type:"text",placeholder:c,value:Q,onChange:e=>{}}),n.createElement("button",{type:"button",className:"icon-button",onClick:e=>{e.preventDefault(),d(!0)}},n.createElement(p,null))),n.createElement("div",{className:b?"backdrop":"display-none"}),n.createElement("div",{className:b?"backdrop-content":"display-none"},n.createElement(y,{monthNames:e,weekDayNames:a,type:"range",value:Q,onCancel:()=>d(!1),onFinish:(e=[])=>{if(e&&e.length){const t=i(e[0],2)[1],n=i(e[e.length-1],2)[1],a="".concat(new o(t).format({dayNames:x,months:m})," - ").concat(new o(n).format({dayNames:x,months:m}));G(a),s(e.map(([,e])=>e))}d(!1)}})))};var L={Calendar:N,RangePicker:X};exports.Calendar=N,exports.RangePicker=X,exports.default=L;
//# sourceMappingURL=index.js.map
