(window.webpackJsonp=window.webpackJsonp||[]).push([[72,3,4],{236:function(e,t,n){"use strict";n.r(t);n(30);var r={data:function(){return{enquiry:"",name:"",mobile:"",email:"",message:"",isAppointment:"",errors:"",success:!1,policyIsAgree:"",send_brochure:"",email_2:"sales@theliliumofficial.com.sg",email_3:"james@limousinetransport.com",new:""}},methods:{send:function(){var e=this;(this.errors=[],this.mobile)&&(("65"!==this.mobile.substring(0,2)||this.mobile.length<=7)&&this.errors.push({mobile:"The mobile field contains an invalid number."}));this.isAppointment||this.errors.push({isAppointment:"The make appt field is required."}),0!=this.send_brochure&&(this.new="Yes",1!=this.send_brochure&&(this.new="No")),this.errors.length||Email.send({Host:"smtp.gmail.com",Username:"gdpropertysg@gmail.com",Password:"igijvzbvkstusyph",To:"gdpropertysg@gmail.com",From:this.email,Subject:"The Lilium & The Gazania - New Appointment Submission ["+this.name+"]",Body:"<h3>Dear Dave, </h3><h4>Below are the details for the New Appointment Submission, do check it out: </h4><h4>Enquiry: "+this.enquiry+"</h4><h4>Name: "+this.name+"</h4><h4>Mobile: "+this.mobile+"</h4><h4>Email: "+this.email+"</h4><h4> Message: "+this.message+"</h4><h4>Appointment: "+this.isAppointment+"</h4><h4>Send Brochure: "+this.new+"</h4><br><h4>Thanks,</h4><h4>The Lilium & The Gazania</h4>"}).then((function(){Email.send({Host:"smtp.gmail.com",Username:"gdpropertysg@gmail.com",Password:"igijvzbvkstusyph",To:e.email,From:e.email_2,Subject:"The Lilium & The Gazania - Receipt Acknowledgement",Body:"<h3>Dear "+e.name+'<h3><h4>Thank you for your interest in The Lilium & The Gazania. You will be posted on all latest updates for the new upcoming condominium.</h4><h4>If you have left an inquiry, our staff will be in touch with you as soon as we can. </h4><h4>If you would like to view the show flat and get direct developer price with discounts, you need to Book an Appointment here before coming down. </h4><h4>Please check back our website for The Lilium & The Gazania as updates are uploaded regulary: <a href="https://theliliumofficial.com.sg/"> <b>theliliumofficial.com.sg</b></a></h4><h4>Should you have any queries, simply call us at <a href="tel:+65 6100 3337"><b>+65 6100 3337</b></a> or reply to this email: <a href="mailto:dave@singhaiyi.com"><b>dave@singhaiyi.com</b></a></h4><h4>Have a nice day ahead!</h4><br><h4>Thanks,</h4><h4>The Lilium & The Gazania</h4>'}),e.success=!0,e.reset()}))},reset:function(){this.enquiry="",this.name="",this.mobile="",this.email="",this.message="",this.isAppointment="",this.errors="",this.policyIsAgree="",this.send_brochure=""}}},o=n(13),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"space-y-6"},[n("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.send.apply(null,arguments)}}},[n("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},[n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"\n            inline-flex\n            items-center\n            w-full\n            p-4\n            font-medium\n            text-gray-600\n            border\n            rounded-lg\n            border-theme-100\n            bg-theme-50\n          ",attrs:{for:"send_brochure"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.send_brochure,expression:"send_brochure"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{id:"send_brochure",type:"checkbox"},domProps:{checked:Array.isArray(e.send_brochure)?e._i(e.send_brochure,null)>-1:e.send_brochure},on:{change:function(t){var n=e.send_brochure,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e._i(n,null);r.checked?l<0&&(e.send_brochure=n.concat([null])):l>-1&&(e.send_brochure=n.slice(0,l).concat(n.slice(l+1)))}else e.send_brochure=o}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("Send me E-Brochure, Floor Plan & Pricing now")])])]),e._v(" "),n("div",[e._m(0),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.enquiry,expression:"enquiry"}],staticClass:"form-input",attrs:{id:"enquiry",required:"required"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.enquiry=t.target.multiple?n:n[0]}}},[n("option",[e._v("Financing")]),e._v(" "),n("option",[e._v("Purchase")]),e._v(" "),n("option",[e._v("View Showflat")]),e._v(" "),n("option",[e._v("I want to purchase, but I have an existing property to sell")]),e._v(" "),n("option",[e._v("Decoupling")]),e._v(" "),n("option",[e._v("CPF Fund Usage")]),e._v(" "),n("option",[e._v("Loan Eligibility (LTV)")]),e._v(" "),n("option",[e._v("Total Debt Servicing Ratio (TDSR)")]),e._v(" "),n("option",[e._v("Additional Buyer Stamp Duty (ABSD)")]),e._v(" "),n("option",[e._v("I want updates only")]),e._v(" "),n("option",[e._v("Others")])])]),e._v(" "),n("div",[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-input",attrs:{id:"name",type:"text",required:"required"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"lowercase form-input",attrs:{id:"mobile",type:"number",required:"required"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),e._v(" "),e._l(e.errors,(function(t,r){return n("div",{key:r},e._l(t,(function(t,r){return n("div",{key:r},["mobile"===r?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n              "+e._s(t)+"\n            ")]):e._e()])})),0)}))],2),e._v(" "),n("div",[e._m(3),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input",attrs:{id:"email",type:"email",required:"required"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Message")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-input",domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(4),e._v(" "),n("div",{staticClass:"space-y-2"},[n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"Would like to make an appointment."},domProps:{checked:e._q(e.isAppointment,"Would like to make an appointment.")},on:{change:function(t){e.isAppointment="Would like to make an appointment."}}}),e._v("\n            I have some questions and I would like to make an appointment to\n            discuss in details.\n          ")]),e._v(" "),n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"No appointment required."},domProps:{checked:e._q(e.isAppointment,"No appointment required.")},on:{change:function(t){e.isAppointment="No appointment required."}}}),e._v("\n            No appointment required for now.\n          ")]),e._v(" "),e._l(e.errors,(function(t,r){return n("div",{key:r},e._l(t,(function(t,r){return n("div",{key:r},["isAppointment"===r?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n                "+e._s(t)+"\n              ")]):e._e()])})),0)}))],2)]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(5),e._v(" "),n("label",{staticClass:"inline-flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.policyIsAgree,expression:"policyIsAgree"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{type:"checkbox",value:"1",required:"required"},domProps:{checked:Array.isArray(e.policyIsAgree)?e._i(e.policyIsAgree,"1")>-1:e.policyIsAgree},on:{change:function(t){var n=e.policyIsAgree,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e._i(n,"1");r.checked?l<0&&(e.policyIsAgree=n.concat(["1"])):l>-1&&(e.policyIsAgree=n.slice(0,l).concat(n.slice(l+1)))}else e.policyIsAgree=o}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("I have read and agree to the\n            "),n("NuxtLink",{staticClass:"font-medium underline text-theme-600",attrs:{to:"/privacy-policy"}},[e._v("Privacy Policy")])],1)])])]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        text-white\n        uppercase\n        transition\n        bg-gray-800\n        border border-transparent\n        rounded-md\n        hover:bg-gray-700\n        active:bg-gray-900\n        focus:outline-none focus:border-gray-900 focus:shadow-outline-gray\n        disabled:opacity-25\n      "},[e._v("\n      Submit\n    ")]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        uppercase\n        transition\n        border border-transparent border-gray-800\n        rounded-md\n        hover:border-theme-700 hover:text-theme-700\n        focus:outline-none focus:shadow-outline-gray\n        disabled:opacity-25\n      ",on:{click:function(t){return t.preventDefault(),e.reset.apply(null,arguments)}}},[e._v("\n      Reset\n    ")])]),e._v(" "),n("div",[e.errors.length?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-red-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-red-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"}})]),e._v(" "),n("div",{staticClass:"select-none"},[e._v("\n        The given data was invalid.\n        "),e._l(e.errors,(function(t,r){return n("div",{key:r},e._l(t,(function(t,r){return n("div",{key:r},[n("p",[e._v(e._s(t))])])})),0)}))],2)]):e.success?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-green-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-green-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"}}),e._v(" "),n("path",{attrs:{d:"M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"}})]),e._v(" "),e._m(6)]):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"enquiry"}},[e._v("Enquiry"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"name"}},[e._v("Name"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"mobile"}},[e._v("Mobile"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"email"}},[e._v("Email"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"make_appt"}},[e._v("Make an Appointment?"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Acceptance of Privacy Policy"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-none"},[e._v("\n        Thank you for your enquiry, we will respond to your request soon.\n        "),n("div")])}],!1,null,null,null);t.default=component.exports},237:function(e,t,n){var content=n(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(40).default)("3284173e",content,!0,{sourceMap:!1})},238:function(e,t,n){e.exports=n.p+"img/book-an-appointment.02f0f96.jpg"},239:function(e,t,n){"use strict";n(237)},240:function(e,t,n){var r=n(39)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},241:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-4 prose bg-gray-200 sm:order-2 md:w-1/2"},[r("img",{staticClass:"w-full",attrs:{src:n(238),alt:"Book An Appointment"}}),e._v(" "),r("p",[e._v("\n            Book An Appointment to view ShowFlat & get VVIP Discounts\n            (Limited Time), Direct Developer Price, & Hardcopy E-Brochure.\n            Guaranteed with Best Price Possible.\n          ")]),e._v(" "),r("p",[e._v("OR")]),e._v(" "),r("p",[e._v("\n            Fill up the form on the left and get a copy of Price, E-Brochure,\n            and Latest Updates!\n          ")]),e._v(" "),r("p",[e._v("Strictly no spam policy.")])])}],o={components:{FormBookAppoinment:n(236).default}},l=(n(239),n(13)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pb-12"},[n("div",{staticClass:"bg-theme-300 pb-96"}),e._v(" "),n("div",{staticClass:"max-w-6xl px-4 mx-auto -mt-80"},[n("div",{staticClass:"overflow-hidden bg-white rounded-md shadow-lg"},[n("div",{staticClass:"flex flex-wrap"},[e._m(0),e._v(" "),n("div",{staticClass:"p-4 md:order-1 md:w-1/2"},[n("section",{staticClass:"space-y-6"},[n("form-book-appoinment")],1)])])])])])}),r,!1,null,"2a89c52a",null);t.default=component.exports;installComponents(component,{FormBookAppoinment:n(236).default})},677:function(e,t,n){"use strict";n.r(t);var r=n(13),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("section",[n("div",{staticClass:"max-w-6xl px-4 py-12 mx-auto space-y-6"},[n("h3",{staticClass:"text-xl text-center font-semibold sm:text-2xl"},[e._v("1 Bedroom Virtual Tour")]),e._v(" "),n("iframe",{staticClass:"mx-auto",attrs:{width:"1100",height:"600",src:"https://client.audax.com.sg/Gazania/A1/",title:"The Gazania Virtual Tour",frameborder:"0",allowfullscreen:""}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h3",{staticClass:"text-xl text-center font-semibold sm:text-2xl"},[e._v("2 Bedroom Virtual Tour")]),e._v(" "),n("iframe",{staticClass:"mx-auto",attrs:{width:"1100",height:"600",src:"https://client.audax.com.sg/Gazania/B7/",title:"The Gazania Virtual Tour",frameborder:"0",allowfullscreen:""}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h3",{staticClass:"text-xl text-center font-semibold sm:text-2xl"},[e._v("3 Bedroom Virtual Tour")]),e._v(" "),n("iframe",{staticClass:"mx-auto",attrs:{width:"1100",height:"600",src:"https://client.audax.com.sg/Gazania/C4A/",title:"The Gazania Virtual Tour",frameborder:"0",allowfullscreen:""}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h3",{staticClass:"text-xl text-center font-semibold sm:text-2xl"},[e._v("4 Bedroom Virtual Tour")]),e._v(" "),n("iframe",{staticClass:"mx-auto",attrs:{width:"1100",height:"600",src:"https://client.audax.com.sg/Gazania/D1A/",title:"The Gazania Virtual Tour",frameborder:"0",allowfullscreen:""}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h3",{staticClass:"text-xl text-center font-semibold sm:text-2xl"},[e._v("4 Bedroom Mezzanine Virtual Tour")]),e._v(" "),n("iframe",{staticClass:"mx-auto",attrs:{width:"1100",height:"600",src:"https://client.audax.com.sg/Gazania/D3BM/",title:"The Gazania Virtual Tour",frameborder:"0",allowfullscreen:""}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h3",{staticClass:"text-xl text-center font-semibold sm:text-2xl"},[e._v("Penthouse Virtual Tour")]),e._v(" "),n("iframe",{staticClass:"mx-auto",attrs:{width:"1100",height:"600",src:"https://client.audax.com.sg/Gazania/PH7/",title:"The Gazania Virtual Tour",frameborder:"0",allowfullscreen:""}}),e._v(" "),n("br"),e._v(" "),n("h3",{staticClass:"text-center sm:text-xl"},[e._v("Powered by Audax Virtuals")]),e._v(" "),n("section",{staticClass:"py-6"},[n("NuxtLink",{staticClass:"\n            inline-flex\n            items-center\n            justify-center\n            w-full\n            px-3\n            py-3\n            text-white\n            transition\n            rounded\n            sm:px-0\n            hover:bg-theme-900\n            bg-theme-700\n          ",attrs:{to:"/gazania/floor-plan"}},[e._v("\n          Continue To Floor Plan\n          "),n("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M13 6l6 6-6 6M5 6l6 6-6 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)])]),e._v(" "),n("BookAppointment")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-12 select-none bg-theme-700"},[n("div",{staticClass:"text-xl font-semibold text-center text-white sm:text-4xl"},[e._v("\n      Virtual Tour \n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{BookAppointment:n(241).default})}}]);