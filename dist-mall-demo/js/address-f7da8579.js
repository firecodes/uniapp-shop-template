import{V as s}from"./index-b6baaa43.js";function t(e){return s.post("/address",e)}function r(e){return s.put("/address",e)}function a(e){return s.delete(`/address/${e}`)}function n(){return s.get("/address/default")}function u(){return s.get("/address",{pageNumber:1,pageSize:1e3})}function i(e){return s.get(`/address/${e}`)}export{a as D,r as E,n as a,u as b,t as c,i as g};
