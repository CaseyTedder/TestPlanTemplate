function createDiv() {
    var div = document.createElement('div');
    div.innerHTML = document.getElementById('getDevice').innerHTML;
    document.getElementById("deviceContainer").appendChild(div);
  } 

function removeLastChild() {
	var select = document.getElementById("deviceContainer");
	select.removeChild(select.lastChild);
}

document.getElementById("btnSaveToClipboard").addEventListener("click", generateForm);

function selectText(objId) {
    clearSelection();
    
    if (document.selection)
    {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(objId));
        range.select();
    }
    else if (window.getSelection)
    {
        var range = document.createRange();
        range.selectNode(document.getElementById(objId));
        window.getSelection().addRange(range);
    }
}
 
function clearSelection()
{
    if (document.selection)
    {
        document.selection.empty();
    } 
    else if (window.getSelection)
    {
        window.getSelection().removeAllRanges();
    }
}


function addRow(fieldLabel, fieldValue)
{
    var row = "<tr>";
    
    row += "<td valign='top' width='200px' style='padding-left: 0; padding-bottom: 5px;'>" + "<b>" + fieldLabel + ": </b>" + "</td>";
    row += "<td valign='top' width='auto' style='padding: 0; padding-bottom: 5px;'>" + document.getElementById(fieldValue).value + "</td>";

    return row;
}

function generateForm(e) {
    var result = "<html>";
    
    result += "Hi team,<br><br>";
    result += "The following is a test plan for " + document.getElementById("testPlanTitle").value + "<br><br>";
    result += "New features added:" + document.getElementById("featuresAdded").value;
    result += "<br><br>";
    result += 
    	addRow("DEVICE INFO", "deviceType"); 
    result += "<table>" 
    result +=
        addRow("Device Firmware", "firmwareVersion") +
        addRow("Current Production App Version", "currentAppVersion");
    result += "</table>"
    result += "<br><br>"
    result += "TEST PASS INFO" 
    result += "<table>"
    result +=
        addRow("Test Pass URL", "testPassURL") +
        addRow("Build Version", "appBuildVersion") +
        addRow("Test Environment", "testEnvironment") +
        addRow("Dog Food Flavor", "dogFoodFlavor") +
        addRow("Features To Test", "featuresToTest") +
        addRow("Due By Date", "dueBy") +
        addRow("Tracking Jira Ticket", "trackingTicket") +
        addRow("Useful Links", "usefulLinks") +
        addRow("Notes", "notes");
	result += "</table>";
	result += "<br><br>"
    result += "Prepared by: " + document.getElementById("preparedBy").value;
    result += "</html>";
    
    document.getElementById("generatedForm").innerHTML = result;

    selectText("generatedForm");

    document.execCommand('copy');
    
    clearSelection();
}