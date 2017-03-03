$(document).ready(function(){
	initializePage();
	
});

//var chat = require('../chat.json');

var num;
var pic = "<img src=images/" + num + ".png"
var picarray = [];
var k = 0;

function initializePage() {

	$("#messagecontainer").animate({ scrollTop: '100000000' }, "slow");
	$("#inputMessage").keyup(function(event){
    	if(event.keyCode == 13){

        	$("#sendBtn").click();
        }
    });


$("#addQuestion").click(function(event) {
	//	var questionList = JSON.parse(qlist);
		var arry = ["How is your family?",
					"How were your meals?",
					"Did you accomplish anything?",
					"What did you dream of?",
					"Did you exercise today?",
					"Are you in good health today?",
					"What worked really well today?",
					"Did you reach your goal today?",
					"Do you have any good news to celebrate with me?",
					"Do you have any questions for me?",
					"Do you like chicken?",
					"YOLO?",
					"What are a few things you can live up to today?",
					"What are your plans?",
					"Did anything interesting happen?",
					"What did you improve on today?",
					"How is your health?",
					"Find a true love?",
					"How hard was your homework?" ];

		var rand = Math.floor(Math.random() * (18 - 0 + 1)) + 0;

		var input = arry[rand];

		var htmlElement = '<div class = "chatbox" > ' +
  				'<div class="question chat"><span>' + input +' </span> ' +
       				'<div id="yolo">' + "<img src=images/3.png" +'  name="saveForm" class="btTxt submit" id="saveForm" /></div> ' +
       			'</div> ' +
  			'</div>'; 

  			//var element = document.getElementById("messagecontainer");
			//$("#messagecontainer").animate({ scrollTop: '1000000000' }, "slow");

		$('#messagecontainer').append(htmlElement);

		$.post("/addQuestion", {message:input} , function(data){
			console.log(data);  //** TA , INSTEAD of push or put we used post **//
		} );
});



$("#sendBtn").click(function(event) {
		event.preventDefault();
		var input = $('#inputMessage').val();
		var listy = input.toUpperCase();
		var words = listy.split(" ");
		var word = input.split(" ");
		var commas = input.split(",");
		var list = " fantastic cool great awesome Absolutely Abundant Accept Acclaimed Accomplishment Achievement Action Active Activist Acumen Adjust Admire Adopt Adorable Adored Adventure Affirmation Affirmative Affluent Agree Airy Alive Alliance Ally Alter Amaze Amity Animated Answer Appreciation Approve Aptitude Artistic Assertive Astonish Astounding Astute Attractive Authentic Basic Beaming Beautiful Believe Benefactor Benefit Bighearted Blessed Bliss Bloom Bountiful Bounty Brave Bright Brilliant Bubbly Bunch Burgeon Calm Care Celebrate Certain Change Character Charitable Charming Cheer Cherish Clarity Classy Clean Clever Closeness Commend Companionship Complete Comradeship Confident Connect Connected Constant Content Conviction Copious Core Coupled Courageous Creative Cuddle Cultivate Cure Curious Cute Dazzling Delight Direct Discover Distinguished Divine Donate Each Day Eager Earnest Easy Ecstasy Effervescent Efficient Effortless Electrifying Elegance Embrace Encompassing Encourage Endorse Energized Energy Enjoy Enormous Enthuse Enthusiastic Entirely Essence Established Esteem Everyday Everyone Excited Exciting Exhilarating Expand Explore Express Exquisite Exultant Faith Familiar Family Famous Feat Fit Flourish Fortunate Fortune Freedom Fresh Friendship Full Funny Gather Generous Genius Genuine Give Glad Glow Gorgeous Grace Graceful Gratitude Green Grin Group Grow Handsome Happy Harmony Healed Healing Healthful Healthy Heart Hearty Heavenly Helpful Here Highest Good Hold Holy Honest Honor Hug affirm allow willing Can choose create follow know make realize action trust Idea Ideal Imaginative Increase Incredible Independent Ingenious Innate Innovate Inspire Instantaneous Instinct Intellectual Intelligence Intuitive Inventive Joined Jovial Joy Jubilation Keen Key Kind Kiss Knowledge Laugh Leader Learn Legendary Go Light Lively Love Loveliness Lucidity Lucrative Luminous Maintain Marvelous Master Meaningful Meditate Mend Metamorphosis Mind-Blowing Miracle Mission Modify Motivate Moving Natural Nature Nourish Nourished Novel Now Nurture Nutritious Open Openhanded Optimistic Paradise Party Peace Perfect Phenomenon Pleasure Plenteous Plentiful Plenty Plethora Poise Polish Popular Positive Powerful Prepared Pretty Principle Productive Project Prominent Prosperous Protect Proud Purpose Quest Quick Quiet Ready Recognize Refinement Refresh Rejoice Rejuvenate Relax Reliance Rely Remarkable Renew Renowned Replenish Resolution Resound Resources Respect Restore Revere Revolutionize Rewarding Rich Robust Rousing Safe Secure See Sensation Serenity Shift Shine Show Simple Sincerity Smart Smile Smooth Solution Soul Sparkling Spirit Spirited Spiritual Splendid Spontaneous Still Stir Strong Style Success Sunny Support Sure Surprise Sustain Synchronized Team Thankful Therapeutic Thorough Thrilled Thrive Today Together Tranquil Transform Triumph Trust Truth Unity Unusual Unwavering Upbeat Value Vary Venerate Venture Very Vibrant Victory Vigorous Vision Visualize Vital Vivacious Voyage Wealthy Welcome Well Whole Wholesome Willing Wonder Wonderful Wondrous Xanadu Yes Yippee Young Youth Youthful Zeal Zest Zing Zip";
		var listofpositivewords = list.toUpperCase();
		var poswords = listofpositivewords.split(" ");
		var numb = 0;
		var pos = 0;

		picarray.push(pic);

		//var words = listerine.toUpperCase();
		for (numb; numb< words.length; numb++){
			var number = 0;		
			for(number; number<poswords.length; number++){
				if (words[numb] ==  poswords[number]){
					pos++;
				} 
				}
			
		}

		if (pos == 0){
			num = 1;
		} else if (pos==1){
			num = 2;
		} else if (pos==2){
			num = 3;
		} else if (pos==3){
			num = 4;
		} else if (pos>=4){
			num = 5;
		}
		
		//var picarray.length-1
		//var picarray[]
		
		if (k>0){
		$('#messagecontainer img').last().remove();
		$('#messagecontainer').append(picarray[picarray.length-1] + ">");
		$('chatbox:last').before('<li>New item</li>');
		}k++
		pic = "<img src=images/" + num + ".png"

		
		var htmlElement = '<div class = "chatbox" > ' +
  				'<div class="answer chat"><span>' + input +' </span> ' +
       				'<div id="breathingMarimon">' + pic +'  name="saveForm" class="btTxt submit" id="saveForm" /></div> ' +
       			'</div> ' +
  			'</div>'; 
  			var element = document.getElementById("messagecontainer");
			$("#messagecontainer").animate({ scrollTop: '1000000000' }, "slow");


		$('#messagecontainer').append(htmlElement);

		var numbness  = num.toString();

				if(words[0] == "TO"  && (words[1] == "DO"|| words[1] =="DO:")){
			var todoarray = [];
			//var minuscomm = word[2].substring(0, word[2].length - 1);
		
			//todoarray.push(minuscomma);
			for (numero = 0; numero<commas.length; numero++){
				todoarray.push(commas[numero]);
			}
			//todoarray.substring(5);
			var rando = Math.floor((Math.random() * todoarray.length) + 0);
			todoarray[0] = todoarray[0].substring(5);
			var todo = todoarray[rando];
			//$('#messagecontainer').append("todo[rando]");
			$('#messagecontainer').append("I'll help you decide:" + todo);
			//$('#messagecontainer').append(picarray[picarray.length-1] + ">");			
		}

$.post("/addMessage", {message:input, num:numbness} , function(data){
console.log(data);  //** TA , INSTEAD of push or put we used post **//
		} );

		}); 
		 picarray.push(pic);
}


