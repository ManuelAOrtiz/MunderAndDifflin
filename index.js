var jim = document.getElementById('jim');
var jimUrl = 'images/jimHalpertLarger.png';
var pam = document.getElementById('pam');
var pamUrl = 'images/pamHalbertLarge.jpg';
var mike = document.getElementById('mike');
var mikeUrl = 'images/MichaelScottLarger.jpg'
var dwight = document.getElementById('dwight');
var dwightUrl = 'images/dwightSchrute2.jpg';
var employeeText = document.getElementById('employeeText');
var employeeImage = document.getElementById('employeeImage');
var employeeWrapper = document.getElementById('employeeWrapper');
employeeWrapper.style.backgroundImage= 'url("images/employeeTextBg.png")';
employeeWrapper.style.size = '100% 100%';
var employeeTextH1 = document.getElementById('employeeTextH1')

jim.addEventListener('click',function(){
	console.log('hi');
	jimClick();
})
pam.addEventListener('click',function(){console.log('one')})
mike.addEventListener('click',function(){
	console.log('welcome');
	mikeClick();
})
dwight.addEventListener('click',function(){console.log('konichiwa')})

function jimClick(){
	employeeImage.style.backgroundImage = 'url('+jimUrl+')';
	employeeImage.style.backgroundSize = '100% 100%';
	employeeImage.style.width = '100%';
	employeeImage.style.height = '100%';
	employeeImage.style.gridColumn = '2/3';
	employeeImage.style.gridRow = '1/2';
	

	employeeWrapper.style.backgroundSize = 0;
	employeeWrapper.style.display = 'grid';
	employeeWrapper.style.gridTemplateRows = '1fr 1fr'
	employeeWrapper.style.gridTemplateColumns = '1fr 1fr'

	employeeTextH1.innerHTML = "Jim Halpert";
	employeeTextH1.style.fontSize = '3em';
	employeeTextH1.style.gridRow = '2/3';
	employeeTextH1.style.gridColumn = '2/3';




	employeeText.innerHTML = "Jim Halpert was born on October 1, 1978, to Gerald and Betsy Halpert. He has two brothers, Pete and Tom, who share his general love of pranks but have come across as unpleasant and somewhat bullying towards their little brother. Jim's parents presumably live in Scranton as well, as well as his sister Larissa and best friend Alan Murphy, who are listed as his emergency contacts at Dunder Mifflin. While Pete and Tom have been seen on the show a few times, Larissa has not. He has a niece, Vanessa, and a nephew old enough to play T-ball. In 'Branch Wars', while he is not specific on which brother he is referring to, he states that his brother's wife just had another baby. Jim enjoys cycling, and, as he reveals in a deleted scene from 'Take Your Daughter to Work Day', at times, will babysit Toby Flenderson's daughter, Sasha. He also lists soft-shell crab as his favorite food. Jim has noted that basketball 'Was kind of [his] thing' in high school. Although no high school is specifically named by Jim, both Dunmore High School (as evidenced in a deleted scene from 'Product Recall' where, during a business visit, he asks a high school student about a former teacher) and West Scranton High School (as evidenced when, during 'Email Surveillance', Pam holds up his yearbook displaying their mascot name, Invaders, across the front) are referenced in separate episodes. He attended the University of Scranton, as seen in the episode 'Basketball.'' He is wearing a University of Scranton t-shirt during the game.";
	employeeText.style.fontSize = '1em';
	employeeText.style.gridColumn = '1/2';
	employeeText.style.gridRow  = '1/3';
	employeeText.style.fontWeight = 'bold'
}

function mikeClick(){
	employeeImage.style.backgroundImage = 'url('+mikeUrl+')';
	employeeImage.style.backgroundSize = '100% 100%';
	employeeImage.style.width = '100%';
	employeeImage.style.height = '100%';
	employeeImage.style.gridColumn = '1/2';
	employeeImage.style.gridRow = '1/2';
	

	employeeWrapper.style.backgroundSize = 0;
	employeeWrapper.style.display = 'grid';
	employeeWrapper.style.gridTemplateRows = '1fr .8fr';
	employeeWrapper.style.gridTemplateColumns = '1fr 1fr';

	employeeTextH1.innerHTML = "Michael Scott";
	employeeTextH1.style.fontSize = '3em';
	employeeTextH1.style.gridRow = '2/3';
	employeeTextH1.style.gridColumn = '1/2';
	employeeTextH1.style.textAlign = 'center';




	employeeText.innerHTML = 'Michael Gary Scott was born March 15, 1964 in Scranton, Pennsylvania. He came from a relatively difficult childhood of loneliness. In "Diversity Day", Michael claims to be of English, Irish, German and Scottish ancestry. He also claims to be two-fifteenths Native American. He has mentioned a stepfather, Jeff, whom he despises. In "Nepotism", it is revealed that Michael had a half-sister, from whom he was estranged for 15 years. As a consequence of their reunion, Michael hires his nephew Luke as an intern for the office, but eventually confronts the incompetent and rude Luke and ends up spanking him in front of the office, leading Luke to burst into tears and quit. In the episode "Take Your Daughter to Work Day", Michael makes the claim that he was a child star on a kids show called Fundle Bundle; however, it becomes clear that he simply appeared on the show as one of many guest children. In the old recording being played, he speaks touchingly about what he wanted when he grew up: get married, have "100 kids" so he could then have "100 friends" and none of them could say no to being his friend. Michael did not attend college, having lost all his tuition money in a pyramid scheme.'
	employeeText.style.fontSize = '1em';
	employeeText.style.gridColumn = '2/3';
	employeeText.style.gridRow  = '1/3';
	employeeText.style.fontWeight = 'bold';
}