(window.webpackJsonp=window.webpackJsonp||[]).push([[51,3,4,6],{233:function(e,t,n){"use strict";n.r(t);n(30);var o={data:function(){return{enquiry:"",name:"",mobile:"",email:"",message:"",isAppointment:"",errors:"",success:!1,policyIsAgree:"",send_brochure:"",email_2:"sales@theliliumofficial.com.sg",email_3:"james@limousinetransport.com",new:""}},methods:{send:function(){var e=this;(this.errors=[],this.mobile)&&(("65"!==this.mobile.substring(0,2)||this.mobile.length<=7)&&this.errors.push({mobile:"The mobile field contains an invalid number."}));this.isAppointment||this.errors.push({isAppointment:"The make appt field is required."}),0!=this.send_brochure&&(this.new="Yes",1!=this.send_brochure&&(this.new="No")),this.errors.length||Email.send({Host:"smtp.gmail.com",Username:"gdpropertysg@gmail.com",Password:"igijvzbvkstusyph",To:"gdpropertysg@gmail.com",From:this.email,Subject:"The Lilium & The Gazania - New Appointment Submission ["+this.name+"]",Body:"<h3>Dear Dave, </h3><h4>Below are the details for the New Appointment Submission, do check it out: </h4><h4>Enquiry: "+this.enquiry+"</h4><h4>Name: "+this.name+"</h4><h4>Mobile: "+this.mobile+"</h4><h4>Email: "+this.email+"</h4><h4> Message: "+this.message+"</h4><h4>Appointment: "+this.isAppointment+"</h4><h4>Send Brochure: "+this.new+"</h4><br><h4>Thanks,</h4><h4>The Lilium & The Gazania</h4>"}).then((function(){Email.send({Host:"smtp.gmail.com",Username:"gdpropertysg@gmail.com",Password:"igijvzbvkstusyph",To:e.email,From:e.email_2,Subject:"The Lilium & The Gazania - Receipt Acknowledgement",Body:"<h3>Dear "+e.name+'<h3><h4>Thank you for your interest in The Lilium & The Gazania. You will be posted on all latest updates for the new upcoming condominium.</h4><h4>If you have left an inquiry, our staff will be in touch with you as soon as we can. </h4><h4>If you would like to view the show flat and get direct developer price with discounts, you need to Book an Appointment here before coming down. </h4><h4>Please check back our website for The Lilium & The Gazania as updates are uploaded regulary: <a href="https://theliliumofficial.com.sg/"> <b>theliliumofficial.com.sg</b></a></h4><h4>Should you have any queries, simply call us at <a href="tel:+65 6100 3337"><b>+65 6100 3337</b></a> or reply to this email: <a href="mailto:dave@singhaiyi.com"><b>dave@singhaiyi.com</b></a></h4><h4>Have a nice day ahead!</h4><br><h4>Thanks,</h4><h4>The Lilium & The Gazania</h4>'}),e.success=!0,e.reset()}))},reset:function(){this.enquiry="",this.name="",this.mobile="",this.email="",this.message="",this.isAppointment="",this.errors="",this.policyIsAgree="",this.send_brochure=""}}},r=n(13),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"space-y-6"},[n("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.send.apply(null,arguments)}}},[n("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},[n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"\n            inline-flex\n            items-center\n            w-full\n            p-4\n            font-medium\n            text-gray-600\n            border\n            rounded-lg\n            border-theme-100\n            bg-theme-50\n          ",attrs:{for:"send_brochure"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.send_brochure,expression:"send_brochure"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{id:"send_brochure",type:"checkbox"},domProps:{checked:Array.isArray(e.send_brochure)?e._i(e.send_brochure,null)>-1:e.send_brochure},on:{change:function(t){var n=e.send_brochure,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,null);o.checked?l<0&&(e.send_brochure=n.concat([null])):l>-1&&(e.send_brochure=n.slice(0,l).concat(n.slice(l+1)))}else e.send_brochure=r}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("Send me E-Brochure, Floor Plan & Pricing now")])])]),e._v(" "),n("div",[e._m(0),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.enquiry,expression:"enquiry"}],staticClass:"form-input",attrs:{id:"enquiry",required:"required"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.enquiry=t.target.multiple?n:n[0]}}},[n("option",[e._v("Financing")]),e._v(" "),n("option",[e._v("Purchase")]),e._v(" "),n("option",[e._v("View Showflat")]),e._v(" "),n("option",[e._v("I want to purchase, but I have an existing property to sell")]),e._v(" "),n("option",[e._v("Decoupling")]),e._v(" "),n("option",[e._v("CPF Fund Usage")]),e._v(" "),n("option",[e._v("Loan Eligibility (LTV)")]),e._v(" "),n("option",[e._v("Total Debt Servicing Ratio (TDSR)")]),e._v(" "),n("option",[e._v("Additional Buyer Stamp Duty (ABSD)")]),e._v(" "),n("option",[e._v("I want updates only")]),e._v(" "),n("option",[e._v("Others")])])]),e._v(" "),n("div",[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-input",attrs:{id:"name",type:"text",required:"required"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"lowercase form-input",attrs:{id:"mobile",type:"number",required:"required"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),e._v(" "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},["mobile"===o?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n              "+e._s(t)+"\n            ")]):e._e()])})),0)}))],2),e._v(" "),n("div",[e._m(3),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input",attrs:{id:"email",type:"email",required:"required"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Message")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-input",domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(4),e._v(" "),n("div",{staticClass:"space-y-2"},[n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"Would like to make an appointment."},domProps:{checked:e._q(e.isAppointment,"Would like to make an appointment.")},on:{change:function(t){e.isAppointment="Would like to make an appointment."}}}),e._v("\n            I have some questions and I would like to make an appointment to\n            discuss in details.\n          ")]),e._v(" "),n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"No appointment required."},domProps:{checked:e._q(e.isAppointment,"No appointment required.")},on:{change:function(t){e.isAppointment="No appointment required."}}}),e._v("\n            No appointment required for now.\n          ")]),e._v(" "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},["isAppointment"===o?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n                "+e._s(t)+"\n              ")]):e._e()])})),0)}))],2)]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(5),e._v(" "),n("label",{staticClass:"inline-flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.policyIsAgree,expression:"policyIsAgree"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{type:"checkbox",value:"1",required:"required"},domProps:{checked:Array.isArray(e.policyIsAgree)?e._i(e.policyIsAgree,"1")>-1:e.policyIsAgree},on:{change:function(t){var n=e.policyIsAgree,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,"1");o.checked?l<0&&(e.policyIsAgree=n.concat(["1"])):l>-1&&(e.policyIsAgree=n.slice(0,l).concat(n.slice(l+1)))}else e.policyIsAgree=r}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("I have read and agree to the\n            "),n("NuxtLink",{staticClass:"font-medium underline text-theme-600",attrs:{to:"/privacy-policy"}},[e._v("Privacy Policy")])],1)])])]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        text-white\n        uppercase\n        transition\n        bg-gray-800\n        border border-transparent\n        rounded-md\n        hover:bg-gray-700\n        active:bg-gray-900\n        focus:outline-none focus:border-gray-900 focus:shadow-outline-gray\n        disabled:opacity-25\n      "},[e._v("\n      Submit\n    ")]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        uppercase\n        transition\n        border border-transparent border-gray-800\n        rounded-md\n        hover:border-theme-700 hover:text-theme-700\n        focus:outline-none focus:shadow-outline-gray\n        disabled:opacity-25\n      ",on:{click:function(t){return t.preventDefault(),e.reset.apply(null,arguments)}}},[e._v("\n      Reset\n    ")])]),e._v(" "),n("div",[e.errors.length?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-red-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-red-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"}})]),e._v(" "),n("div",{staticClass:"select-none"},[e._v("\n        The given data was invalid.\n        "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},[n("p",[e._v(e._s(t))])])})),0)}))],2)]):e.success?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-green-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-green-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"}}),e._v(" "),n("path",{attrs:{d:"M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"}})]),e._v(" "),e._m(6)]):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"enquiry"}},[e._v("Enquiry"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"name"}},[e._v("Name"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"mobile"}},[e._v("Mobile"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"email"}},[e._v("Email"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"make_appt"}},[e._v("Make an Appointment?"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Acceptance of Privacy Policy"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-none"},[e._v("\n        Thank you for your enquiry, we will respond to your request soon.\n        "),n("div")])}],!1,null,null,null);t.default=component.exports},234:function(e,t,n){var content=n(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(40).default)("3284173e",content,!0,{sourceMap:!1})},235:function(e,t,n){e.exports=n.p+"img/book-an-appointment.02f0f96.jpg"},236:function(e,t,n){"use strict";n(234)},237:function(e,t,n){var o=n(39)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},238:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"p-4 prose bg-gray-200 sm:order-2 md:w-1/2"},[o("img",{staticClass:"w-full",attrs:{src:n(235),alt:"Book An Appointment"}}),e._v(" "),o("p",[e._v("\n            Book An Appointment to view ShowFlat & get VVIP Discounts\n            (Limited Time), Direct Developer Price, & Hardcopy E-Brochure.\n            Guaranteed with Best Price Possible.\n          ")]),e._v(" "),o("p",[e._v("OR")]),e._v(" "),o("p",[e._v("\n            Fill up the form on the left and get a copy of Price, E-Brochure,\n            and Latest Updates!\n          ")]),e._v(" "),o("p",[e._v("Strictly no spam policy.")])])}],r={components:{FormBookAppoinment:n(233).default}},l=(n(236),n(13)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pb-12"},[n("div",{staticClass:"bg-theme-300 pb-96"}),e._v(" "),n("div",{staticClass:"max-w-6xl px-4 mx-auto -mt-80"},[n("div",{staticClass:"overflow-hidden bg-white rounded-md shadow-lg"},[n("div",{staticClass:"flex flex-wrap"},[e._m(0),e._v(" "),n("div",{staticClass:"p-4 md:order-1 md:w-1/2"},[n("section",{staticClass:"space-y-6"},[n("form-book-appoinment")],1)])])])])])}),o,!1,null,"2a89c52a",null);t.default=component.exports;installComponents(component,{FormBookAppoinment:n(233).default})},257:function(e,t,n){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,n=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var t=e.event,n=e.handler;(0,e.middleware)(t)&&n(t)}function o(e,t){var o=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||n,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(t.value),r=o.handler,l=o.middleware,a=o.detectIframe;if(o.isActive){if(e["__v-click-outside"]=o.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(e){var t=e.el,n=e.event,o=e.handler,r=e.middleware,l=n.path||n.composedPath&&n.composedPath();(l?l.indexOf(t)<0:!t.contains(n.target))&&i({event:n,handler:o,middleware:r})}({el:e,event:t,handler:r,middleware:l})}}})),a){var c={event:"blur",srcTarget:window,handler:function(t){return function(e){var t=e.el,n=e.event,o=e.handler,r=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&i({event:n,handler:o,middleware:r})}),0)}({el:e,event:t,handler:r,middleware:l})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[c])}e["__v-click-outside"].forEach((function(t){var n=t.event,i=t.srcTarget,o=t.handler;return setTimeout((function(){e["__v-click-outside"]&&i.addEventListener(n,o,!1)}),0)}))}}function r(e){(e["__v-click-outside"]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)})),delete e["__v-click-outside"]}var l=e?{bind:o,update:function(e,t){var n=t.value,i=t.oldValue;JSON.stringify(n)!==JSON.stringify(i)&&(r(e),o(e,{value:n}))},unbind:r}:{};return{install:function(e){e.directive("click-outside",l)},directive:l}}()},258:function(e,t,n){e.exports=n.p+"img/Gazania_50m_Lap_Pool-1024x576.5713926.jpg"},259:function(e,t,n){e.exports=n.p+"img/Gazania_50m_Lap_Pool_Water_Wall-1024x576.eeefc78.jpg"},260:function(e,t,n){e.exports=n.p+"img/Gazania_Grand_Arrival_Plaza-1-1024x576.c3436a5.jpg"},261:function(e,t,n){e.exports=n.p+"img/Gazania_Hero_Shot-1-1024x576.32fe018.jpg"},262:function(e,t,n){e.exports=n.p+"img/Gazania_Water_Wall-1024x576.60f7ca1.jpg"},263:function(e,t,n){e.exports=n.p+"img/Gazania__Clubhouse-1024x576.e113695.jpg"},264:function(e,t,n){e.exports=n.p+"img/Gazania_outdoor_Fitness_area_Kids_Playground_and_pavilion-1024x576.9a7f3b1.jpg"},265:function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-1-1024x504.cd9f5df.jpg"},266:function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-2-1024x456.1f4db8c.jpg"},267:function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-3-1024x366.a9e1d00.jpg"},268:function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-4-1024x456.8205cb8.jpg"},269:function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-5-1024x456.66bbcfe.jpg"},270:function(e,t,n){e.exports=n.p+"img/The-Lilium-Perspective-6-1024x456.02d8077.jpg"},271:function(e,t,n){e.exports=n.p+"img/the-gazania-condo-playground-singapore-1024x576.a5a5b17.jpeg"},272:function(e,t,n){e.exports=n.p+"img/the-gazania-singapore-spa-pool-1024x576.e59d41b.jpg"},376:function(e,t,n){var map={"./Gazania_50m_Lap_Pool-1024x576.jpg":258,"./Gazania_50m_Lap_Pool_Water_Wall-1024x576.jpg":259,"./Gazania_Grand_Arrival_Plaza-1-1024x576.jpg":260,"./Gazania_Hero_Shot-1-1024x576.jpg":261,"./Gazania_Water_Wall-1024x576.jpg":262,"./Gazania__Clubhouse-1024x576.jpg":263,"./Gazania_outdoor_Fitness_area_Kids_Playground_and_pavilion-1024x576.jpg":264,"./The-Lilium-Perspective-1-1024x504.jpg":265,"./The-Lilium-Perspective-2-1024x456.jpg":266,"./The-Lilium-Perspective-3-1024x366.jpg":267,"./The-Lilium-Perspective-4-1024x456.jpg":268,"./The-Lilium-Perspective-5-1024x456.jpg":269,"./The-Lilium-Perspective-6-1024x456.jpg":270,"./the-gazania-condo-playground-singapore-1024x576.jpeg":271,"./the-gazania-singapore-spa-pool-1024x576.jpg":272};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=376},400:function(e,t,n){"use strict";n.r(t);var o=n(257),r={name:"LargeModal",directives:{clickOutside:n.n(o).a.directive},props:{imagesProp:{type:Array,default:function(){return[]}}},data:function(){return{showModal:!1,images:this.imagesProp,imageUrl:""}},computed:{},methods:{toggleModal:function(e){this.imageUrl=e,this.showModal=!this.showModal,this.Modal=!this.$emit("isModal",this.Modal)},externalClick:function(){this.showModal=!1},imageSource:function(e){return n(376)("./".concat(e))}}},l=n(13),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-6"},[e._l(e.imagesProp,(function(image,t){return n("div",{key:t,staticClass:"space-y-1 cursor-pointer",on:{click:function(t){return e.toggleModal(image.url)}}},[n("img",{staticClass:"object-cover w-full h-full mx-auto rounded cursor-pointer",attrs:{src:e.imageSource(image.url),alt:""}})])})),e._v(" "),e.showModal?n("div",{staticClass:"\n      fixed\n      inset-0\n      z-50\n      outline-none\n      focus:outline-none\n      justify-center\n      items-center\n      flex\n      overscroll-y-contain\n      overflow-auto\n    "},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.externalClick,expression:"externalClick"}],staticClass:"relative w-auto my-auto mx-auto max-w-6xl"},[n("div",{staticClass:"\n          border-0\n          rounded-lg\n          shadow-lg\n          relative\n          flex flex-col\n          w-full\n          bg-white\n          outline-none\n          focus:outline-none\n        "},[n("div",{staticClass:"relative p-6 flex-auto"},[n("img",{staticClass:"mx-auto rounded",attrs:{src:e.imageSource(e.imageUrl),alt:""}})])])])]):e._e(),e._v(" "),e.showModal?n("div",{staticClass:"opacity-25 fixed inset-0 z-40 bg-black"}):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},524:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{imageUrl:[{url:"Gazania__Clubhouse-1024x576.jpg"},{url:"Gazania_50m_Lap_Pool_Water_Wall-1024x576.jpg"},{url:"Gazania_50m_Lap_Pool-1024x576.jpg"},{url:"Gazania_Grand_Arrival_Plaza-1-1024x576.jpg"},{url:"Gazania_Hero_Shot-1-1024x576.jpg"},{url:"Gazania_outdoor_Fitness_area_Kids_Playground_and_pavilion-1024x576.jpg"},{url:"Gazania_Water_Wall-1024x576.jpg"},{url:"the-gazania-singapore-spa-pool-1024x576.jpg"},{url:"the-gazania-condo-playground-singapore-1024x576.jpeg"}]}}},r=n(13),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("section",[n("div",{staticClass:"max-w-6xl px-4 py-12 mx-auto space-y-6"},[n("ImageModal",{attrs:{"images-prop":e.imageUrl}}),e._v(" "),n("section",{staticClass:"py-6"},[n("NuxtLink",{staticClass:"\n            inline-flex\n            items-center\n            justify-center\n            w-full\n            px-3\n            py-3\n            text-white\n            transition\n            rounded\n            sm:px-0\n            hover:bg-brown-900\n            bg-brown-700\n          ",attrs:{to:"/gazania/video"}},[e._v("\n          Continue To The Gazania Video\n          "),n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M13 6l6 6-6 6M5 6l6 6-6 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)],1)]),e._v(" "),n("BookAppointment")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-12 select-none bg-theme-700"},[n("div",{staticClass:"text-xl font-semibold text-center text-white sm:text-4xl"},[e._v("\n      Gallery\n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ImageModal:n(400).default,BookAppointment:n(238).default})}}]);