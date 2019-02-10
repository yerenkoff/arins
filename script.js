document.getElementsByClassName("topHeader__img")[0].addEventListener("load", function() {
	setTimeout(function() {
		document.getElementsByClassName("topHeader__img")[0].style.opacity = 1;
	}, 1000);
});

document.getElementsByClassName("topHeader__imgLink")[0].addEventListener("mouseover", function() {
	[].forEach.call(document.getElementsByClassName("main__section"), function(el) {
		el.classList.add("activePart");
	});
});
document.getElementsByClassName("topHeader__imgLink")[0].addEventListener("mouseleave", function() {
	[].forEach.call(document.getElementsByClassName("main__section"), function(el) {
		el.classList.remove("activePart");
	});
});

[].forEach.call(document.getElementsByClassName("mainHeader__section"), function(el) {
	el.addEventListener("mouseover", function() {
		var getPartIndex = function() {
			var partIndex = 0;
			[].forEach.call(el.parentNode.children, function() {
				if (el.parentNode.children[partIndex] == el) {
					return partIndex;
				} else {
					partIndex++;
				}
				console.log(partIndex);
			});
			return partIndex;
		}
		var partInd = getPartIndex();
		console.log(partInd);
		document.getElementsByClassName("main__section")[getPartIndex()].classList.add("activePart");
	});
	el.addEventListener("mouseleave", function() {
		var getPartIndex = function() {
			var partIndex = 0;
			[].forEach.call(el.parentNode.children, function() {
				if (el.parentNode.children[partIndex] == el) {
					return partIndex;
				} else {
					partIndex++;
				}
				console.log(partIndex);
			});
			return partIndex;
		}
		var partInd = getPartIndex();
		console.log(partInd);
		document.getElementsByClassName("main__section")[getPartIndex()].classList.remove("activePart");
	});
});

function resized() {
	document.getElementsByClassName("main")[0].style.height = window.innerHeight - 150 + "px";
	document.getElementsByClassName("topHeader__imgLink")[0].style.left = window.innerWidth / 2 - document.getElementsByClassName("topHeader__img")[0].offsetWidth / 2 + "px";
	[].forEach.call(document.getElementsByClassName("main__section"), function(el) {
		el.style.height = window.innerHeight - 150 + "px";
	});
	[].forEach.call(document.getElementsByClassName("mainHeader__section"), function(el) {
		el.style.width = (document.getElementsByClassName("container")[0].offsetWidth - 120) / 4 + "px";
	});
	[].forEach.call(document.getElementsByClassName("main__section"), function(el) {
		el.style.width = (document.getElementsByClassName("container")[0].offsetWidth - 120) / 4 + "px";
	});
}
resized();

document.body.onresize = function() {
	resized();
}