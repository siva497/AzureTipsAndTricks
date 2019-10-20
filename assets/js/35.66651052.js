(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{341:function(t,e,a){"use strict";a.r(e);var s=a(43),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-hub/about-iot-hub?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure IoT Hub Overview"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"the-series-so-far"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-series-so-far","aria-hidden":"true"}},[t._v("#")]),t._v(" The Series so Far")]),t._v(" "),a("p",[t._v("At Build 2018, we first saw the "),a("a",{attrs:{href:"http://aka.ms/button?WT.mc_id=akams-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT Button"),a("OutboundLink")],1),t._v(". I started "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=OdGHWwRBf_c?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("exploring the device"),a("OutboundLink")],1),t._v(" with the very first unboxing and decided to create a mini-series to walk you how to use the device from start to finish. The series (so far) is located below")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip122.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating an IoT for the IoT Button"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip123.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuring and Setting up the IoT Button"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip124.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating the Azure Logic App for our IoT Button"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip125.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Azure Function to call our Logic App with the IoT Button"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"creating-the-azure-logic-app-for-our-iot-button"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-azure-logic-app-for-our-iot-button","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating the Azure Logic App for our IoT Button")]),t._v(" "),a("p",[t._v("Now that we know how to setup an IoT Hub and configure out device to get on the network and use said IoT Hub, now we need to actually get to what we are going to build:")]),t._v(" "),a("blockquote",[a("p",[t._v("An app that automatically add a row to an excel sheet that includes a time along with a status (such as start or stop).")])]),t._v(" "),a("p",[t._v("Add an "),a("strong",[t._v("Azure Logic App")]),t._v(" and provide the details for Name, Description, Resource Group and more and click Add.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton16.png")}}),t._v(" "),a("p",[t._v("Click on "),a("strong",[t._v("When a HTTP request is received")]),t._v(", to use as our template")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton17.png")}}),t._v(" "),a("p",[t._v("Since we're going to pass a field into this Logic App that writes if the status is "),a("strong",[t._v("Started")]),t._v(" or "),a("strong",[t._v("Stop")]),t._v(" in the excel sheet. This means that we need to add a field into the "),a("strong",[t._v("Request Body JSON Schema")]),t._v(" as shown below:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("We'll also want to make sure that this is a "),a("strong",[t._v("POST")]),t._v(" method.")]),t._v(" "),a("p",[t._v("Before we proceed to add an action, we need to open a tab and login to OneDrive to create an Excel book and a table we can use in the next connector. I created one in the following location in my OneDrive "),a("code",[t._v("/Excel/Book1.xlsx")]),t._v(". Go ahead and create some data as shown below, with at least a "),a("strong",[t._v("StartTime")]),t._v(" and a "),a("strong",[t._v("Text")]),t._v(" in your OneDrive account.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton21.png")}}),t._v(" "),a("p",[t._v("You'll also need to create a table inside of it. Just open the Excel file add some data and then click the "),a("strong",[t._v("Table")]),t._v(" button.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton20.png")}}),t._v(" "),a("p",[t._v("Now we'll add an action and use the "),a("strong",[t._v("Add a row into a table (OneDrive)")]),t._v(" connector.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton18.png")}}),t._v(" "),a("p",[t._v("And we'll provide our "),a("strong",[t._v("File")]),t._v(", "),a("strong",[t._v("Table")]),t._v(" as indicated above.")]),t._v(" "),a("p",[t._v("For the "),a("strong",[t._v("StartTime")]),t._v(", we'll want to use an "),a("strong",[t._v("Expression")]),t._v(" with the code "),a("code",[t._v("utcNow('M/d/yyyy h:mm')")]),t._v(". This will give us a nicely formatted Date that we can easily work with.")]),t._v(" "),a("p",[t._v("For the "),a("strong",[t._v("Text")]),t._v(", just use the "),a("strong",[t._v("Dynamic content")]),t._v(" called "),a("strong",[t._v("status")]),t._v(" that we are passing in.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton19.png")}})])},[],!1,null,null,null);e.default=r.exports}}]);