(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{537:function(e,t,r){"use strict";r.r(t);var i=r(43),o=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥  The FREE Azure Developer Guide eBook (Summer 2019 Edition) is now "),r("a",{attrs:{href:"http://aka.ms/azuredevebook",target:"_blank",rel:"noopener noreferrer"}},[e._v("available!"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/logic-apps/quickstart-create-first-logic-app-workflow?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create your first automated workflow with Azure Logic Apps"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=hB2F92IttL8&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=79",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use inline JavaScript code snippets in Azure Logic Apps"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"run-javascript-code-in-azure-logic-apps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-javascript-code-in-azure-logic-apps","aria-hidden":"true"}},[e._v("#")]),e._v(" Run JavaScript code in Azure logic Apps")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://azure.microsoft.com/services/logic-apps/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Logic Apps"),r("OutboundLink")],1),e._v(" are great. You can use them to create a process of multiple steps. Logic Apps can be triggered on a timer, or by an external event, like when a new email comes in. The process that you create with Logic Apps consists out of calls to connectors and data evaluations by conditions. There are a lot of "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/connectors/apis-list?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("built-in connectors"),r("OutboundLink")],1),e._v(", like the OneDrive and Office365 connector and you can also use your own API, Function App or Logic App as a connector.")]),e._v(" "),r("p",[e._v("And now, you can also run "),r("strong",[e._v("inline code")]),e._v(" as part of the process in a Logic App. You can create a JavaScript code snippet and run it, just like any other step. In this article, we'll take a look at the inline code capability of Azure Logic Apps.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[e._v("An "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/logic-apps/logic-apps-enterprise-integration-create-integration-account?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("integration account"),r("OutboundLink")],1),e._v(" that we need to link to our Logic App")]),e._v(" "),r("li",[e._v("A "),r("a",{attrs:{href:"https://onedrive.live.com/about/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OneDrive"),r("OutboundLink")],1),e._v(" account. We will use this in our Logic App process")])]),e._v(" "),r("h4",{attrs:{id:"create-the-azure-logic-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-the-azure-logic-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Create the Azure Logic App")]),e._v(" "),r("p",[e._v("Let's start by creating the Azure Logic App and connecting the integration account to it. We'll do that in the Azure portal.")]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),r("li",[e._v("Search for "),r("strong",[e._v("Logic App")]),e._v(" and click on the result to start creating one\n"),r("ol",[r("li",[e._v("Fill in a "),r("strong",[e._v("Name")]),e._v(" for the Logic App")]),e._v(" "),r("li",[e._v("Select an "),r("strong",[e._v("Azure subscription")])]),e._v(" "),r("li",[e._v("Select or create a "),r("strong",[e._v("Resource group")])]),e._v(" "),r("li",[e._v("Select the "),r("strong",[e._v("Location")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Create")])])])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/28createlogicapp.png")}}),e._v(" "),r("p",[e._v("(Creating the Azure Logic App in the Azure portal).")]),e._v(" "),r("p",[e._v("In the inline code that we are going to write, we will use values from other tasks in the Logic App. We can do that by calling the "),r("strong",[e._v("workflowContext")]),e._v(" object in the inline code. To be able to access that, we need to couple an "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/logic-apps/logic-apps-enterprise-integration-create-integration-account?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("integration account"),r("OutboundLink")],1),e._v(" to the Logic App. Let's do that:")]),e._v(" "),r("ol",[r("li",[e._v("Navigate to the Logic App in the Azure portal")]),e._v(" "),r("li",[e._v("Click on the "),r("strong",[e._v("Workflow settings")]),e._v(" menu-item")]),e._v(" "),r("li",[e._v("In the "),r("strong",[e._v("Workflow settings blade")]),e._v(", under "),r("strong",[e._v("Integration account")]),e._v(", select your integration account")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Save")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/28integrationaccount.png")}}),e._v(" "),r("p",[e._v("(Couple Integration Account to Logic App)")]),e._v(" "),r("p",[e._v("That's it! We can now create the Logic App process.")]),e._v(" "),r("h4",{attrs:{id:"creating-the-logic-app-process"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-logic-app-process","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating the Logic App process")]),e._v(" "),r("p",[e._v("We will create a simple process that uses inline code. The process will start when I upload a new file in a OneDrive folder and then it will manipulate the text in the file using inline code. Let's set it up.")]),e._v(" "),r("p",[e._v("First, create a new text file and save it on your local machine. With the inline code, we will search through the text in the file and replace the word "),r("strong",[e._v("Portal")]),e._v(" with "),r("strong",[e._v("portal")]),e._v(" (with a lower case  p). Put the following text in the file:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("The Azure Portal is great.\n\nSometimes, Azure Portal is written with a capital P, which is wrong.\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("img",{attrs:{src:e.$withBase("/files/28originaldocument.png")}}),e._v(" "),r("p",[e._v("(The original text file)")]),e._v(" "),r("p",[e._v("Next, we'll create the Logic App process:")]),e._v(" "),r("ol",[r("li",[e._v("Navigate to the Logic App in the Azure portal")]),e._v(" "),r("li",[e._v("Click on the "),r("strong",[e._v("Logic app designer")]),e._v(" menu-item to start designing the process\na. You might see the Logic App templates when you open the Logic App in the Azure portal. In that case, choose the template "),r("strong",[e._v("Blank Logic App")])])]),e._v(" "),r("p",[e._v("Next, we'll create the trigger for the logic app. This will start the Logic App and run the process. Search for "),r("strong",[e._v("OneDrive")]),e._v(" and choose the "),r("strong",[e._v("When a file is created")]),e._v(" trigger.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/28whenafileiscreated.png")}}),e._v(" "),r("p",[e._v("(When a file is created OneDrive trigger)")]),e._v(" "),r("p",[e._v("You will be asked to sign in to OneDrive and give Logic Apps permissions to your OneDrive. Once you have done that, fill in the fields of the trigger:")]),e._v(" "),r("ol",[r("li",[e._v("Select a "),r("strong",[e._v("Folder")]),e._v(" to monitor. This is a folder in your OneDrive that we'll use to put a new file in. Choose any folder in your OneDrive")]),e._v(" "),r("li",[e._v("Change the "),r("strong",[e._v("Interval")]),e._v(" to "),r("strong",[e._v("10 seconds")]),e._v(". This makes the Logic App check for new files in the Folder every 10 seconds")])]),e._v(" "),r("p",[e._v("Next, we'll create the inline code.")]),e._v(" "),r("ol",[r("li",[e._v("Click the "),r("strong",[e._v("New Step")]),e._v(" button to create a new step in the process")]),e._v(" "),r("li",[e._v("Search for "),r("strong",[e._v("Inline Code")]),e._v(" and select the "),r("strong",[e._v("Inline Code (JavaScript)")]),e._v(" action")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/28inlinecode.png")}}),e._v(" "),r("p",[e._v("(Inline Code action)")]),e._v(" "),r("p",[e._v("Let's configure the inline code action:")]),e._v(" "),r("ol",[r("li",[e._v("First, click the "),r("strong",[e._v("...")]),e._v(" in the top-right corner of the action and click "),r("strong",[e._v("Rename")])]),e._v(" "),r("li",[e._v("Rename the action to "),r("strong",[e._v("Clean File")])]),e._v(" "),r("li",[e._v("In the "),r("strong",[e._v("Code")]),e._v(" textbox, type the following JavaScript code:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('var text = workflowContext.trigger.outputs.body;\n\ntext = text.replace(/Portal/g, "portal");\n\nreturn text;\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br")])]),r("p",[e._v("The inline code uses the text from the trigger step and replaces the word "),r("strong",[e._v("Portal")]),e._v(" (with a capital P), with the word "),r("strong",[e._v("portal")]),e._v(" (with a lower case p). The "),r("strong",[e._v("/Portal/g")]),e._v(" syntax means that the code searches for all instances of 'Portal'. The g indicates that it needs to search globally, throughout the text.\nWhen you click in the Code textbox, you'll see that you can use all the values from the previous step.")]),e._v(" "),r("p",[e._v("Now, we need to create the final step:")]),e._v(" "),r("ol",[r("li",[e._v("Click the "),r("strong",[e._v("New Step")]),e._v(" button")]),e._v(" "),r("li",[e._v("Search for "),r("strong",[e._v("OneDrive")]),e._v(" and select the "),r("strong",[e._v("Update File")]),e._v(" action. This updates a file in OneDrive with new values")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/28updatefile.png")}}),e._v(" "),r("p",[e._v("(OneDrive Update File action)")]),e._v(" "),r("p",[e._v("Let's configure the Update File action:")]),e._v(" "),r("ol",[r("li",[e._v("For "),r("strong",[e._v("File")]),e._v(", click in the text box and select the "),r("strong",[e._v("File Identifier")]),e._v(" value from the OneDrive trigger step")]),e._v(" "),r("li",[e._v("For "),r("strong",[e._v("File Content")]),e._v(", click in the text box and select the "),r("strong",[e._v("Result")]),e._v(" from the inline code step\na. Sometimes, you can't select the result value from the dynamic content picker. In that case, you can also put the following as the File Content value:"),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("@body('Clean_File')\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),e._v("This represents the result from the "),r("strong",[e._v("Clean File")]),e._v(" action, which is the name of the inline action")])]),e._v(" "),r("p",[e._v("That's it! Now click "),r("strong",[e._v("Save")]),e._v(" to save the Logic App Process.")]),e._v(" "),r("h4",{attrs:{id:"test-the-logic-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-the-logic-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Test the Logic App")]),e._v(" "),r("p",[e._v("Now that the process is complete, we can test the Logic App.")]),e._v(" "),r("ol",[r("li",[e._v("In the Logic App Designer, click "),r("strong",[e._v("Run")]),e._v("\na. The Logic App will now wait to be triggered")]),e._v(" "),r("li",[e._v("Put the "),r("strong",[e._v("text file")]),e._v(" that we created earlier in the "),r("strong",[e._v("OneDrive folder")]),e._v(" that the trigger action is monitoring")]),e._v(" "),r("li",[e._v("After a while, the Logic App will be triggered and you'll see the results, like in the image below:")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/28result.png")}}),e._v(" "),r("p",[e._v("(The result of the Logic App run)")]),e._v(" "),r("p",[e._v("And if you now open the text file in OneDrive, you'll see that the content has changed.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/28cleandocument.png")}}),e._v(" "),r("p",[e._v("(Updated text file)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Logic Apps are really powerful and easy to use. The ability to use inline code in a Logic App process, creates endless possibilities. With inline code, you can enhance the process in any way you like. You can build custom conditions and data manipulations and whatever else you need. You can learn more by checking out the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/logic-apps/logic-apps-workflow-actions-triggers#run-javascript-code?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("reference to the inline code action"),r("OutboundLink")],1),e._v(". Go and check it out!")])])},[],!1,null,null,null);t.default=o.exports}}]);