import e,{useState as t,useEffect as n,useCallback as a}from"react";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,c=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==l.return||l.return()}finally{if(c)throw r}}return n}}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css","top"===n&&a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}function o({currentYear:t,classNames:n}){return e.createElement("div",{className:"header-year header-item-align-left ".concat(n)},t)}l(".App{font-family:sans-serif;text-align:center;box-sizing:border-box;width:fit-content;margin:0 auto;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media only screen and (max-width:600px){.App{width:auto}}.calendar{height:500px;background-color:#fff;box-shadow:1px 4px 4px grey;box-sizing:border-box}.header{padding:1em;background:#306c34;color:#fafafa;flex-wrap:wrap}.header,.header-container{display:flex}.full-width{width:100%}.header-item{flex-grow:1}.header-item-grow-2{flex-grow:2}.header-item-align-left{text-align:left}.header-year{font-weight:500;font-size:1em}.header-date{font-size:2rem;font-family:Roboto}.margin-item{margin:.5rem}.flex-grow-1{flex-grow:1}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FDRSxzQkFBdUIsQ0FDdkIsaUJBQWtCLENBQ2xCLHFCQUFzQixDQUN0QixpQkFBa0IsQ0FDbEIsYUFBYyxDQUNkLDBCQUEyQixDQUN6Qix3QkFBeUIsQ0FDdkIsdUJBQXdCLENBQ3RCLHFCQUFzQixDQUN0QixvQkFBcUIsQ0FDakIsZ0JBRVosQ0FFQSx5Q0FDRSxLQUNFLFVBQ0YsQ0FDRixDQUVBLFVBQ0UsWUFBYSxDQUNiLHFCQUF1QixDQUN2QiwyQkFBNEIsQ0FDNUIscUJBQ0YsQ0FFQSxRQUVFLFdBQVksQ0FDWixrQkFBbUIsQ0FDbkIsYUFBYyxDQUNkLGNBQ0YsQ0FFQSwwQkFQRSxZQVNGLENBRUEsWUFDRSxVQUNGLENBRUEsYUFDRSxXQUNGLENBRUEsb0JBQ0UsV0FDRixDQUVBLHdCQUNFLGVBQ0YsQ0FFQSxhQUNFLGVBQWdCLENBQ2hCLGFBQ0YsQ0FFQSxhQUNFLGNBQWUsQ0FDZixrQkFDRixDQUVBLGFBQ0UsWUFDRixDQUVBLGFBQ0UsV0FDRiIsImZpbGUiOiJzdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFwcCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuQXBwIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuXG4uY2FsZW5kYXIge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA0cHggZ3JheTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYmFja2dyb3VuZDogIzMwNmMzNDtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyLWl0ZW0ge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5oZWFkZXItaXRlbS1ncm93LTIge1xuICBmbGV4LWdyb3c6IDI7XG59XG5cbi5oZWFkZXItaXRlbS1hbGlnbi1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmhlYWRlci15ZWFyIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5oZWFkZXItZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLm1hcmdpbi1pdGVtIHtcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtO1xufVxuXG4uZmxleC1ncm93LTEge1xuICBmbGV4LWdyb3c6IDE7XG59XG4iXX0= */");class s extends Date{constructor(e){super(e?new Date(e):new Date)}format({dayNames:e=[],months:t=[]}){return"".concat(e[this.getDay()],", ").concat(t[this.getMonth()],"\n    ").concat(this.getDate())}set(e,t){const n={month:e=>this.setMonth(e),date:e=>this.setDate(e)}[e];return n&&n(t),this}get(e){return{date:this.getDate(),day:this.getDay(),month:this.getMonth(),year:this.getFullYear()}[e]}reset(){return this.setHours(0,0,0,0),this}}function b({currentYear:t,currentDate:n,dayNames:a,months:c}){const r=new s(n).format({dayNames:a,months:c});return e.createElement("div",{className:"header"},e.createElement("div",{className:"header-container full-width margin-item"},e.createElement(o,{classNames:"header-item",currentYear:t}),e.createElement("div",{className:"header-item-grow-2"})),e.createElement("div",{className:"margin-item header-date"},r))}function u({currentYear:t,currentMonth:n,currentDate:a,weekDays:c=[],monthStructure:r,dates:i=new Map,onChange:l,type:o}){const b=c=>Object.keys(r).map(e=>e).map(b=>{let u="calendar-days-item-spacing-day";const d=r[b][c],m=(e=>{if(e){return new s("".concat(t,"-").concat(n+1,"-").concat(e," 00:00:00"))}return new s})(d).toJSON(),g={onlydate:()=>d===a.get("date"),range:()=>d&&i.get(m),selector:()=>d&&i.get(m)};return g[o]&&g[o]()&&(u+=" calendar-days-number-color-black"),e.createElement("div",{key:"current-day-".concat(r[b][c]),className:u,onClick:l(r[b][c])},r[b][c])});return e.createElement("div",{className:"calendar-days"},c.map((t,n)=>e.createElement("div",{key:"week-".concat(n+1),className:"calendar-days-item"},"".concat(t.substr(0,3)),e.createElement("div",null,b(n+1,t.substr(0,3))))))}l(".calendar-days{display:flex;box-sizing:border-box}.calendar-days-item{flex-grow:1;font-size:1rem;color:grey}.calendar-days-item-spacing-day{margin:2%;padding:.5rem;min-height:20px}.calendar-days-numbers{padding:2rem;color:grey}.calendar-days-number-color-black{color:#f0f0f0;border-radius:5px;background-color:#306c34}.calendar-day-months{display:flex;width:100%;flex-flow:wrap}.calendar-days-numbers{flex-grow:1;min-width:3rem;font-size:1rem;color:#000}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyRGF5cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFDRSxZQUFhLENBRWIscUJBQ0YsQ0FFQSxvQkFDRSxXQUFZLENBQ1osY0FBZSxDQUNmLFVBQ0YsQ0FFQSxnQ0FDRSxTQUF3QixDQUN4QixhQUFlLENBQ2YsZUFDRixDQUVBLHVCQUNFLFlBQWEsQ0FHYixVQUNGLENBRUEsa0NBQ0UsYUFBYyxDQUNkLGlCQUFrQixDQUNsQix3QkFDRixDQUVBLHFCQUNFLFlBQWEsQ0FDYixVQUFXLENBQ1gsY0FDRixDQUVBLHVCQUNFLFdBQVksQ0FDWixjQUFlLENBQ2YsY0FBZSxDQUNmLFVBQ0YiLCJmaWxlIjoiQ2FsZW5kYXJEYXlzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRhci1kYXlzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogd2lkdGg6IDEwMCU7ICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jYWxlbmRhci1kYXlzLWl0ZW0ge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5jYWxlbmRhci1kYXlzLWl0ZW0tc3BhY2luZy1kYXkge1xuICBtYXJnaW46IGNhbGMoMTAwJSAtIDk4JSk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuLmNhbGVuZGFyLWRheXMtbnVtYmVycyB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmNhbGVuZGFyLWRheXMtbnVtYmVyLWNvbG9yLWJsYWNrIHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNmMzNDtcbn1cblxuLmNhbGVuZGFyLWRheS1tb250aHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1mbG93OiB3cmFwO1xufVxuXG4uY2FsZW5kYXItZGF5cy1udW1iZXJzIHtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4td2lkdGg6IDNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */");function d(){return e.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},e.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},e.createElement("path",{fill:"currentColor",d:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"})))}function m(){return e.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},e.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},e.createElement("path",{fill:"currentColor",d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"})))}l(".calendar-months-container{width:100%;padding:1rem;justify-content:space-between;box-sizing:border-box}.calendar-arrows{display:flex;justify-content:space-around;align-items:center;font-weight:600;color:grey}.calendar-month-text{color:#333;text-align:center}.display-flex{display:flex;justify-content:center;align-items:center}.flex-end{display:flex;justify-content:flex-end}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyTW9udGguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUNFLFVBQVcsQ0FDWCxZQUFhLENBQ2IsNkJBQThCLENBQzlCLHFCQUNGLENBRUEsaUJBQ0UsWUFBYSxDQUNiLDRCQUE2QixDQUM3QixrQkFBbUIsQ0FDbkIsZUFBZ0IsQ0FDaEIsVUFDRixDQUVBLHFCQUNFLFVBQVcsQ0FDWCxpQkFDRixDQUVBLGNBQ0UsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixrQkFDRixDQUVBLFVBQ0UsWUFBYSxDQUNiLHdCQUNGIiwiZmlsZSI6IkNhbGVuZGFyTW9udGguY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGVuZGFyLW1vbnRocy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2FsZW5kYXItYXJyb3dzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uY2FsZW5kYXItbW9udGgtdGV4dCB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnMge1xufSAqL1xuXG4vKiBAa2V5ZnJhbWVzIGJ1dHRvbiB7XG4gIGZyb20ge31cbn0gKi9cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnM6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzk5OTtcbiAgYm9yZGVyOiA7XG59ICovXG4iXX0= */");function g(t){return e.createElement("button",Object.assign({},t,{className:"custom-button ".concat(t.className?t.className:"")}),e.createElement("span",{className:"ripple"},t.label?t.label:t.children))}function I({currentDate:a,months:c,onChange:r}){const l=i(t((new s).get("month")),2),o=l[0],b=l[1],u=i(t(null),2),I=u[0],x=u[1];n(()=>{const e=a.get("month");o!==e&&b(e);const t=a.get("year"),n="".concat(c[e]," ").concat(t);x(n)},[a,o,c]);const G=e=>()=>{let t=o+e;t>=c.length||t<0||r(t)};return e.createElement("div",{className:"calendar-months-container"},e.createElement("div",{className:"calendar-arrows"},e.createElement("div",{className:"flex-grow-1"},e.createElement(g,{onClick:G(-1)},e.createElement(d,null))),e.createElement("div",{className:"calendar-month-text flex-grow-1"},I),e.createElement("div",{className:"flex-grow-1 flex-end"},e.createElement(g,{onClick:G(1)},e.createElement(m,null)))))}l(".custom-button,.custom-circle-button{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.custom-circle-button{border-radius:50%}.custom-button:active,.custom-button:hover{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.ripple{width:100%;background-position:50%;transition:background .8s;border:none}.ripple:hover{border:none;background:transparent radial-gradient(circle,transparent 1%,#fff 0) 50%/15000%}.ripple:active{background-color:grey;background-size:100%;transition:background 0s;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEscUNBUEUsV0FBWSxDQUNaLHNCQUF1QixDQUN2QixZQUFhLENBQ2Isc0JBQXVCLENBQ3ZCLFlBVUYsQ0FQQSxzQkFFRSxpQkFLRixDQVVBLDJDQUNFLFdBQVksQ0FDWixzQkFBdUIsQ0FDdkIsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixZQUNGLENBR0EsUUFDRSxVQUFXLENBQ1gsdUJBQTJCLENBQzNCLHlCQUEyQixDQUMzQixXQUNGLENBQ0EsY0FDRSxXQUFZLENBQ1osK0VBQ0YsQ0FDQSxlQUNFLHFCQUFzQixDQUN0QixvQkFBcUIsQ0FDckIsd0JBQXlCLENBQ3pCLFdBQ0YiLCJmaWxlIjoic3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWNpcmNsZS1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLmN1c3RvbS1idXR0b246YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLyogUmlwcGxlIGVmZmVjdCAqL1xuLnJpcHBsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbiAgYm9yZGVyOiBub25lO1xufVxuLnJpcHBsZTpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICNmZmYgMSUpIGNlbnRlci8xNTAwMCU7XG59XG4ucmlwcGxlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */");const x=e=>e%4==0&&e%100!=0||e%400==0?29:28;var G=(e=new s)=>{const t=e.get("year"),n=e.get("month")+1;return{1:31,2:x(t),3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}[n]};const Q=["January","February","March","April","May","June","July","August","September","October","November","December"],Z=["Sanday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],y={onlydate:0,range:1,selector:2};const F=function({weekDayNames:c,monthNames:l,date:o,type:d="onlydate"}){const m=i(t(new Map([[(new s).reset().toJSON(),new s]])),2),g=m[0],x=m[1],F=i(t(new s),2),h=F[0],N=F[1],B=i(t(null),2),X=B[0],W=B[1],L=a(()=>{const e=G(h),t=new s(h);t.set("date",1);const n=t.get("day")+1,a=Math.ceil(e/7),c=[...new Array(a)].map((e,t)=>t+1),i=[...new Array(7)].map((e,t)=>t+1);let l=1,o=null;var b,u=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw c}}}}(c);try{for(u.s();!(b=u.n()).done;){const t=b.value,a=i.reduce((a,c)=>(c>=n&&!o&&(o={},o[t]||(o[t]={}),a[c]=l),l<=e&&o&&(o[t]||(o[t]={}),a[c]=l++),a),{});o[t]=a}}catch(e){u.e(e)}finally{u.f()}W(o)},[h]);n(()=>{o||L()},[o,N,h,L]);const p=(e,t)=>{let n=e.getUTCDate(),a=e.get("month")<12?e.get("month")+1:e.get("month"),c=e.get("year"),r=G(e);const i=V(e,t),l=[];let o=0;for(;o<[...new Array(i+1)].length;){const e=1===String(n).length?"0".concat(n):n,t=new s("".concat(c,"-").concat(a,"-").concat(e,"  00:00:00"));if(n>=r&&(n=0,a>=12&&(c++,a=1),a<12)){a++;const e=new s("".concat(c,"-").concat(a,"-0").concat(n+1));r=G(e)}n+=1,l.push(t),o++}return l},V=(e,t)=>{if(!e||!t)return 0;const n=Date.UTC(e.get("year"),e.get("month"),e.get("date")),a=Date.UTC(t.get("year"),t.get("month"),t.get("date"));return Math.floor((a-n)/864e5)},D=(e,t)=>(t&&(t.setHours(0,0,0,0),e.has(t.toJSON())?e.delete(t.toJSON()):e.set(t.toJSON(),t)),e);return e.createElement("div",{className:"App"},e.createElement("div",{className:"calendar"},e.createElement(b,{currentDate:h,currentYear:h.getFullYear(),dayNames:c||Z,months:l||Q}),e.createElement(I,{currentDate:h,currentMonth:h.get("month"),months:l||Q,onChange:function(e){const t=new s(h);t.set("month",e),N(t),L()}}),e.createElement(u,{type:d,currentMonth:h.get("month"),currentYear:h.getFullYear(),weekDays:Z,monthStructure:X||{},currentDate:h,dates:g,onChange:e=>()=>{if(e){const t=new s(h);if(t.set("date",e),y[d]===y.onlydate&&N(t),y[d]===y.selector){N(t);let e=new Map([...g]);e=D(e,t),x(e)}if(y[d]===y.range){let e=new Map,n=[...g];const a=i(n[0]?n[0]:[],2)[1],c=i(n.length-1>0?n[n.length-1]:[],2)[1];a&&c&&(e=D(e,t),x(e));const r=V(a,t);if(a&&!c&&t&&r>=1){p(a,t).forEach(t=>D(e,t)),x(e)}r<=0&&(e.get(t.reset().toJSON())||(e=D(e,t)),x(e))}N(t)}}})))};export{F as AppCalendar};
//# sourceMappingURL=index.es.js.map
