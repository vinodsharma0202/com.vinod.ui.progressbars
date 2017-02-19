/**
 * @author Vinod Kumar The purpose of this class is to intialize and control
 *         scrollbars as per given requirement.
 */

function onLoad() {

	var endPointJSON = {
		"endpoints" : {
			"buttons" : [ 10, 38, -13, -18, 20 ],
			"bars" : [ 62, 45, 62 ],
			"limit" : [ 230 ]
		}
	}
	var ePoints = endPointJSON["endpoints"];
	var buttonsCount = Object.keys(ePoints["buttons"]).length;
	var container = document.getElementById('buttons'); // reference to
														// containing elm
	for (var i = 0; i < buttonsCount; i++) {
		var obj = ePoints["buttons"][i];
		var button = "<input type='button' value=" + obj + " onclick='changeProgressBar(this.value)'></input>"
		container.innerHTML += button;
	}
	
	var barsContainer = document.getElementById('bars');
	var barsCount = Object.keys(ePoints["bars"]).length;
	var limit = ePoints["limit"][0];
	var selector = document.getElementById('selectBar');
	for (var i = 0; i < barsCount; i++) {
		var obj = ePoints["bars"][i];
		var progressName="#progress" + (i +1);
		var bar = "<progress  id="+progressName+" value=" + obj + " max=" + limit + " class='progressbar'></progress>";
		barsContainer.innerHTML += bar;
		var opt = document.createElement('option');
	    opt.value = progressName;
	    opt.innerHTML = progressName;
	    selector.appendChild(opt);
	}
}

/**
 * Method to return 
 * @param changedValue
 */
function changeProgressBar(changedValue) {
	var selectedProgressId = getSelectedText('selectBar');
	var selectedProgressBar = document.getElementById(selectedProgressId);
	var valueAfterupdate = selectedProgressBar.value + parseInt(changedValue);
	if (valueAfterupdate < 0) {
		valueAfterupdate = 0;
		selectedProgressBar.style.color = "blue";
	} else if (valueAfterupdate > 230) {
		selectedProgressBar.style.color = "red";
	} else if (valueAfterupdate <= 230) {
		selectedProgressBar.style.color = "blue";
	}
	selectedProgressBar.value = valueAfterupdate;
}

/**
 *  Utility Method to return the selecetd element text
 * @param elementId
 * @returns
 */
function getSelectedText(elementId) {
	var elt = document.getElementById(elementId);
	if (elt.selectedIndex == -1)
		return null;
	return elt.options[elt.selectedIndex].text;
}