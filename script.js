// window.onload = function() {

      // Show first session template
      document.querySelector("#first-session-btn").onclick = function() {
        document.querySelector("#first-session-sub-container").classList.remove("hidden");
        document.querySelector("#followup-session-sub-container").classList.add("hidden");
        document.querySelector("#escalation-template-sub-container").classList.add("hidden");
      }

      // Show follow up session template
      document.querySelector("#followup-session-btn").onclick = function() {
        document.querySelector("#first-session-sub-container").classList.add("hidden");
        document.querySelector("#followup-session-sub-container").classList.remove("hidden");
        document.querySelector("#escalation-template-sub-container").classList.add("hidden");
      }

      // Show escalation template
      document.querySelector("#escalation-template-btn").onclick = function() {
        document.querySelector("#first-session-sub-container").classList.add("hidden");
        document.querySelector("#followup-session-sub-container").classList.add("hidden");
        document.querySelector("#escalation-template-sub-container").classList.remove("hidden");
      }

    // Dark mode toggle
      document.querySelector(".dark-mode-toggle").onclick = function() {
        let darkDisabled = document.getElementsByTagName('link')[3].disabled
        if (darkDisabled) {
            document.getElementsByTagName('link')[3].disabled = false;
        }
        else if (!darkDisabled) {
            document.getElementsByTagName('link')[3].disabled = true;
        }
        else {
            console.log("Error toggling dark mode");
        }
      }

// }

// Download local version
// document.querySelector("#download-btn").onclick = function() {
//     alert("download");
//     $.ajax({
//     type: "GET",
//     url: "https://raw.githubusercontent.com/tjroca/sr_notes/main/darkmode.css",
//     success: function(data) {
//         console.log(data);
//         console.log("Download successful");
//     },
//     dataType: "html"
//     });
// }


// First remote session Email
document.querySelector("#frs-gen-email").onclick = function() {
    const outputField = document.querySelector("#output-field");
    let findings = document.querySelector("#frs-findings-field").value;
    const formattedFindings = formatText(findings);
    const outputString = `Hello, {{{Recipient.FirstName}}},\n\nThank you for your time on the remote session today. Below is a summary of that session as well as the next steps for this case. If you have any questions or you discover any new information, please let us know. Thank you again for your time and for choosing Check Point as your security partner.\n\nFindings\n════════\n${formattedFindings}\n\nNext Steps\n══════════\n${document.querySelector("#frs-next-steps-field").value}`;
    outputField.value = outputString;
}

// Follow up session Email
document.querySelector("#fo-gen-email").onclick = function() {
    const outputField = document.querySelector("#output-field");
    let findings = document.querySelector("#fo-findings-field").value;
    const formattedFindings = formatText(findings);
    const outputString = `Hello, {{{Recipient.FirstName}}},\n\nThank you for your time on the remote session today. Below is a summary of that session as well as the next steps for this case. If you have any questions or you discover any new information, please let us know. Thank you again for your time and for choosing Check Point as your security partner.\n\nFindings\n════════\n${formattedFindings}\n\nNext Steps\n══════════\n${document.querySelector("#fo-next-steps-field").value}`;
    outputField.value = outputString;
}


let HEADER_START = "❰❰";
let HEADER_END = "❱❱";


document.querySelector("#gen-first-session-notes").onclick = function() {
    const outputField = document.querySelector("#output-field");
    let frsIssueSummaryField = document.querySelector("#frs-issue-summary-field").value;
    const formattedIssueSummary = formatText(frsIssueSummaryField);
    let frsFindingsField = document.querySelector("#frs-findings-field").value;
    const formattedFindings = formatText(frsFindingsField);

    const outputString = `❰❰ 𝗥𝗘𝗠𝗢𝗧𝗘 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗡𝗢𝗧𝗘𝗦 ❱❱

╔═════════╗
║SR NUMBER
╚═════════╝
${document.querySelector("#frs-sr-number-field").value}

╔═════════════╗
║CUSTOMER NAME
╚═════════════╝
${document.querySelector("#frs-customer-name-field").value}

╔══════════════╗
║CONTACT NUMBER
╚══════════════╝
${document.querySelector("#frs-contact-number-field").value}

╔═════════════════════╗
║ENVIRONMENT & VERSION
╚═════════════════════╝
${document.querySelector("#frs-environment-field").value}

╔═══════════════╗
║BUSINESS IMPACT
╚═══════════════╝
${document.querySelector("#frs-business-impact-field").value}

╔════════════════╗
║SUMMARY OF ISSUE
╚════════════════╝
${formattedIssueSummary}
╔════════╗
║FINDINGS
╚════════╝
${formattedFindings}
╔════════════════╗
║FILES & LOCATION
╚════════════════╝
${document.querySelector("#frs-files-location-field").value}

╔══════════╗
║NEXT STEPS
╚══════════╝
${document.querySelector("#frs-next-steps-field").value}
`;


    outputField.value = outputString;
}




document.querySelector("#gen-followup-session-notes").onclick = function() {
    const outputField = document.querySelector("#output-field");
    let issueSummaryField = document.querySelector("#fo-issue-summary-field").value;
    const formattedIssueSummary = formatText(issueSummaryField);
    let foFindingsField = document.querySelector("#fo-findings-field").value;
    const formattedFindings = formatText(foFindingsField);    

    const outputString = `❰❰ 𝗥𝗘𝗠𝗢𝗧𝗘 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗡𝗢𝗧𝗘𝗦 ❱❱    

╔═════════╗
║SR NUMBER
╚═════════╝
${document.querySelector("#fo-sr-number-field").value}

╔═════════════╗
║CUSTOMER NAME
╚═════════════╝
${document.querySelector("#fo-customer-name-field").value}

╔════════════════╗
║SUMMARY OF ISSUE
╚════════════════╝
${formattedIssueSummary}
╔════════╗
║FINDINGS
╚════════╝
${formattedFindings}
╔════════════════╗
║FILES & LOCATION
╚════════════════╝
${document.querySelector("#fo-files-location-field").value}

╔══════════╗
║NEXT STEPS
╚══════════╝
${document.querySelector("#fo-next-steps-field").value}`;

    outputField.value = outputString;
}


document.querySelector("#gen-escalation-notes").onclick = function() {
    const outputField = document.querySelector("#output-field");
    let escIssueSummaryField = document.querySelector("#esc-issue-summary-field").value;
    const formattedIssueSummary = formatText(escIssueSummaryField);
    let escFindingsField = document.querySelector("#esc-findings-field").value;
    const formattedFindings = formatText(escFindingsField);

    const outputString = `❰❰ 𝗘𝗦𝗖𝗔𝗟𝗔𝗧𝗜𝗢𝗡 𝗡𝗢𝗧𝗘𝗦 ❱❱ 

╔═════════╗
║SR NUMBER
╚═════════╝
${document.querySelector("#sr-number-field").value}

╔═════════════╗
║CUSTOMER NAME
╚═════════════╝
${document.querySelector("#customer-name-field").value}

╔═════════════════════╗
║ENVIRONMENT & VERSION
╚═════════════════════╝
${document.querySelector("#environment-field").value}

╔═══════════════╗
║BUSINESS IMPACT
╚═══════════════╝
${document.querySelector("#business-impact-field").value}

╔════════════════╗
║SUMMARY OF ISSUE
╚════════════════╝
${formattedIssueSummary}
╔════════╗
║FINDINGS
╚════════╝
${formattedFindings}
╔════════════════╗
║FILES & LOCATION
╚════════════════╝
${document.querySelector("#files-location-field").value}

╔═══════════════╗
║LAB REPLICATION
╚═══════════════╝
${document.querySelector("#lab-replication-field").value}
`;


    outputField.value = outputString;
}

function formatText(findingsString) {
    var lines = findingsString.split("\n");
    var formattedLines = [];
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("- ")) {
            const newline = lines[i].replace(/- /gi, "        • ");          // bullet points
            // const newline1 = lines[i].replace(/->/gi, "➞");           // arrows
            formattedLines.push(newline + "\n");
        }else {
            formattedLines.push(lines[i] + "\n");
        }
    }
    let formattedFindings = formattedLines.join("");
    return formattedFindings;
}


// Copy to clipboard
async function copyToClipboard() {
    var outputText = document.querySelector("#output-field").value;
    try {
    await navigator.clipboard.writeText(outputText);
    console.log("copied text");
    } catch (err) {
    console.error("Failed to copy");
    }
}

// Download local version
function downloadLocal() {

}