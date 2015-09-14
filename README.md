# Percent Card [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/o-percentcard.svg)](https://travis-ci.org/Pearson-Higher-Ed/o-percentcard)

A simple card which displays a header, a percent, and a footer.

## Use

To use, create a new instance of the card with a JSON configuration payload.
Next, use webpack to pull in the CSS and js. Simply calling the card directly with vanilla JS will not work.  See the demo for more info.

The JSON paramaters are as follows:

	 data (required): The number to be displayed as a percent. Example: data:45 will display as 45%
     header (optional): Allows you to set header text
     footer (optional): Allows you to set footer text
     classes (optional): Allows you to specify classes for the card. Used to override styles
     headerClass (optional): Allows you to set a class for the header text. Used to override header text style.
     percentClass (optional): Allows you to set a class for the percent text. Used to override percent text style.
     footerClass (optional): Allows you to set a class for the footer text.  Used to override footer text style.

This card works by building the card in a DOM node and then returning that node when .getDomNode() is called.

### Example HTML
    <style>
        #cardDiv {height:90px; width:80px;}
    </style>
	<div id="cardDiv"></div>
	<script>
	    var json = {
	        "data":100,
	        "header":"Average Grade to Date",
	        "footer":"Class Avg 79%"
        };
        var cardInstance = new PercentCard(json);
        var targetElement = document.querySelector("#cardDiv");
        targetElement.appendChild(cardInstance.getDomNode());
	</script>

## To Run Tests
From the repository root:

    npm install
	./node_modules/karma/bin/karma start
