var screenWidth = screen.width;

var jim = document.getElementById('jim');
var jimUrl = 'images/jimHalpertLarger.jpg';


var pam = document.getElementById('pam');
var pamUrl = 'images/pamHalbertLarge.jpg';


var mike = document.getElementById('mike');
var mikeUrl = 'images/MichaelScottLarger.jpg'


var dwight = document.getElementById('dwight');
var dwightUrl = 'images/dwightSchrute2.jpg';


var employeeText = document.getElementById('employeeText');
var employeeImage = document.getElementById('employeeImage');
var employeeTextH1 = document.getElementById('employeeTextH1');

var galleryTarget = document.getElementById('galleryTarget');
var galleryTargetUrl = 'url("images/munderDifflinLogo2.jpg")';
galleryTarget.style.backgroundImage = 'url("images/munderDifflinLogo2.jpg")';
galleryTarget.style.backgroundSize = '100% 100%';


var companyGalleryOne = document.getElementById('smallCompanyImage1');
var companyGalleryOneUrl = 'url("images/company1.jpg")';
companyGalleryOne.style.backgroundImage = 'url("images/company1.jpg")';
companyGalleryOne.style.backgroundSize = '100% 100%';


var companyGalleryTwo = document.getElementById('smallCompanyImage2');
var companyGalleryTwoUrl = 'url("images/company2.jpg")';
companyGalleryTwo.style.backgroundImage = 'url("images/company2.jpg")';
companyGalleryTwo.style.backgroundSize = '100% 100%';


var companyGalleryThree = document.getElementById('smallCompanyImage3');
var companyGalleryThreeUrl = 'url("images/company3.jpg")';
companyGalleryThree.style.backgroundImage = 'url("images/company3.jpg")';
companyGalleryThree.style.backgroundSize = '100% 100%';


var companyGalleryFour = document.getElementById('smallCompanyImage4');
var companyGalleryFourUrl = 'url("images/company4.jpg")';
companyGalleryFour.style.backgroundImage = 'url("images/company4.jpg")';
companyGalleryFour.style.backgroundSize = '100% 100%';

var employeeWrapper = document.getElementById('employeeWrapper');
employeeWrapper.style.backgroundImage= 'url("images/companyTextBg.png")';
employeeWrapper.style.backgroundSize = '100% 100%';



companyGalleryOne.addEventListener('mouseover', function(){
	photoGallerySwap(companyGalleryOneUrl);
})
companyGalleryOne.addEventListener('mouseout', function(){
	photoGallerySwap(galleryTargetUrl);
})

companyGalleryTwo.addEventListener('mouseover', function(){
	photoGallerySwap(companyGalleryTwoUrl);
})
companyGalleryTwo.addEventListener('mouseout', function(){
	photoGallerySwap(galleryTargetUrl);
})

companyGalleryThree.addEventListener('mouseover', function(){
	photoGallerySwap(companyGalleryThreeUrl);
})
companyGalleryThree.addEventListener('mouseout', function(){
	photoGallerySwap(galleryTargetUrl);
})

companyGalleryFour.addEventListener('mouseover', function(){
	photoGallerySwap(companyGalleryFourUrl);
})
companyGalleryFour.addEventListener('mouseout', function(){
	photoGallerySwap(galleryTargetUrl);
})




jim.addEventListener('mouseover',function(){
	jimClick(screenWidth);
})
pam.addEventListener('mouseover',function(){
	pamClick(screenWidth);
})
mike.addEventListener('mouseover',function(){
	mikeClick(screenWidth);
})
dwight.addEventListener('mouseover',function(){
	dwightClick(screenWidth);
})



function jimClick(screenWidth){
	if(screenWidth >= 426 ||screenWidth <= 768){
	employeeImage.style.width = '422px';
	employeeImage.style.height = '300px';
	employeeTextH1.style.fontSize = '2em';
	employeeText.style.fontSize = '1em';
	employeeText.innerHTML = "Jim Halpert was born on October 1, 1978, to Gerald and Betsy Halpert. He has two brothers, Pete and Tom, who share his general love of pranks but have come across as unpleasant and somewhat bullying towards their little brother. Jim's parents presumably live in Scranton as well, as well as his sister Larissa and best friend Alan Murphy, who are listed as his emergency contacts at Dunder Mifflin. While Pete and Tom have been seen on the show a few times,"
	console.log(screenWidth);
	}else if(screenWidth < 425){
	employeeImage.style.width = '422px';
	employeeImage.style.height = '300px';
	employeeTextH1.style.fontSize = '3em';
	}
	else{
	employeeImage.style.width = '622px';
	employeeImage.style.height = '500px';
	// employeeTextH1.style.fontSize = '3em';
	employeeText.innerHTML = "Jim Halpert was born on October 1, 1978, to Gerald and Betsy Halpert. He has two brothers, Pete and Tom, who share his general love of pranks but have come across as unpleasant and somewhat bullying towards their little brother. Jim's parents presumably live in Scranton as well, as well as his sister Larissa and best friend Alan Murphy, who are listed as his emergency contacts at Dunder Mifflin. While Pete and Tom have been seen on the show a few times,"	
	employeeText.style.fontSize = '0.9em';

	}
	employeeImage.style.backgroundImage = 'url('+jimUrl+')';
	employeeImage.style.backgroundSize = '100% 100%';
	// employeeImage.style.width = '622px';
	// employeeImage.style.height = '500px';
	employeeImage.style.gridColumn = '2/3';
	employeeImage.style.gridRow = '2/3';
	
	employeeWrapper.style.backgroundSize = 0;
	employeeWrapper.style.display = 'grid';
	employeeWrapper.style.gridTemplateRows = '13vh .8fr 15vh'
	employeeWrapper.style.gridTemplateColumns = '1fr .7fr'

	employeeTextH1.innerHTML = "Jim Halpert";
	employeeTextH1.style.textAlign = 'center';
	// employeeTextH1.style.fontSize = '3em';
	employeeTextH1.style.gridRow = '3/4';
	employeeTextH1.style.gridColumn = '2/3';

	// employeeText.innerHTML = "Jim Halpert was born on October 1, 1978, to Gerald and Betsy Halpert. He has two brothers, Pete and Tom, who share his general love of pranks but have come across as unpleasant and somewhat bullying towards their little brother. Jim's parents presumably live in Scranton as well, as well as his sister Larissa and best friend Alan Murphy, who are listed as his emergency contacts at Dunder Mifflin. While Pete and Tom have been seen on the show a few times,	employeeText.style.fontSize = '0.9em';"
	employeeText.style.gridColumn = '1/2';
	employeeText.style.gridRow  = '1/3';
	employeeText.style.fontWeight = 'bold';
	employeeText.style.marginTop = '30%';
	
}

function mikeClick(screenWidth){
	if(screenWidth >= 426 ||screenWidth <= 768){
	employeeImage.style.width = '322px';
	employeeImage.style.height = '270px';
	employeeTextH1.style.fontSize = '2em';
	employeeText.style.fontSize = '1em';
	employeeText.style.marginTop = '60%';
	employeeWrapper.style.gridTemplateRows = '20vh .6fr 15vh'
	employeeText.innerHTML = 'Michael Gary Scott was born March 15, 1964 in Scranton, Pennsylvania. He came from a relatively difficult childhood of loneliness. In "Diversity Day", Michael claims to be of English, Irish, German and Scottish ancestry. He also claims to be two-fifteenths Native American. He has mentioned a stepfather, Jeff, whom he despises. In "Nepotism", it is revealed that Michael had a half-sister, from whom he was estranged for 15 years.'	
	}else if(screenWidth < 426){

	}
	else{
	employeeImage.style.width = '622px';
	employeeImage.style.height = '500px';
	employeeTextH1.style.fontSize = '2em';
	employeeText.style.fontSize = '1em';
	employeeText.style.marginTop = '30%';
	employeeWrapper.style.gridTemplateRows = '13vh .8fr 15vh'
	employeeText.innerHTML = 'Michael Gary Scott was born March 15, 1964 in Scranton, Pennsylvania. He came from a relatively difficult childhood of loneliness. In "Diversity Day", Michael claims to be of English, Irish, German and Scottish ancestry. He also claims to be two-fifteenths Native American. He has mentioned a stepfather, Jeff, whom he despises. In "Nepotism", it is revealed that Michael had a half-sister, from whom he was estranged for 15 years. As a consequence of their reunion, Michael hires his nephew Luke as an intern for the office, but eventually confronts the incompetent and rude Luke and ends up spanking him in front of the office, leading Luke to burst into tears and quit. In the episode "Take Your Daughter to Work Day", Michael makes the claim that he was a child star on a kids show called Fundle Bundle; however, it becomes clear that he simply appeared on the show as one of many guest children. In the old recording being played, he speaks touchingly about what he wanted when he grew up: get married, have "100 kids" so he could then have "100 friends" and none of them could say no to being his friend. Michael did not attend college, having lost all his tuition money in a pyramid scheme.'

	}
	employeeImage.style.backgroundImage = 'url('+mikeUrl+')';
	employeeImage.style.backgroundSize = '100% 100%';

	employeeImage.style.gridColumn = '1/2';
	employeeImage.style.gridRow = '2/3';

	employeeWrapper.style.backgroundSize = 0;
	employeeWrapper.style.display = 'grid';
	employeeWrapper.style.gridTemplateColumns = '.7fr 1fr'

	employeeTextH1.innerHTML = "Michael Scott";
	employeeTextH1.style.textAlign = 'center';
	employeeTextH1.style.gridRow = '3/4';
	employeeTextH1.style.gridColumn = '1/2';

	// employeeText.innerHTML = 'Michael Gary Scott was born March 15, 1964 in Scranton, Pennsylvania. He came from a relatively difficult childhood of loneliness. In "Diversity Day", Michael claims to be of English, Irish, German and Scottish ancestry. He also claims to be two-fifteenths Native American. He has mentioned a stepfather, Jeff, whom he despises. In "Nepotism", it is revealed that Michael had a half-sister, from whom he was estranged for 15 years. As a consequence of their reunion, Michael hires his nephew Luke as an intern for the office, but eventually confronts the incompetent and rude Luke and ends up spanking him in front of the office, leading Luke to burst into tears and quit. In the episode "Take Your Daughter to Work Day", Michael makes the claim that he was a child star on a kids show called Fundle Bundle; however, it becomes clear that he simply appeared on the show as one of many guest children. In the old recording being played, he speaks touchingly about what he wanted when he grew up: get married, have "100 kids" so he could then have "100 friends" and none of them could say no to being his friend. Michael did not attend college, having lost all his tuition money in a pyramid scheme.'
	employeeText.style.fontSize = '0.9em';
	employeeText.style.gridColumn = '2/3';
	employeeText.style.gridRow  = '1/3';
	employeeText.style.fontWeight = 'bold';
	// employeeText.style.marginTop = '30%';
}

function pamClick(screenWidth){
	if(screenWidth >= 426 ||screenWidth <= 768){
	employeeImage.style.width = '322px';
	employeeImage.style.height = '280px';
	employeeWrapper.style.gridTemplateRows = '13vh .6fr 15vh'

	}else if(screenWidth < 426){

	}
	else{
	employeeImage.style.width = '622px';
	employeeImage.style.height = '500px';
	employeeWrapper.style.gridTemplateRows = '13vh .8fr 15vh'
	}
	employeeImage.style.backgroundImage = 'url('+pamUrl+')';
	employeeImage.style.backgroundSize = '100% 100%';
	// employeeImage.style.width = '622px';
	// employeeImage.style.height = '500px';
	employeeImage.style.gridColumn = '2/3';
	employeeImage.style.gridRow = '2/3';
	
	employeeWrapper.style.backgroundSize = 0;
	employeeWrapper.style.display = 'grid';
	employeeWrapper.style.gridTemplateRows = '13vh .8fr 15vh'
	employeeWrapper.style.gridTemplateColumns = '1fr .7fr'

	employeeTextH1.innerHTML = "Pam Halpert";
	employeeTextH1.style.fontSize = '3em';
	employeeTextH1.style.gridRow = '3/4';
	employeeTextH1.style.gridColumn = '2/3';
	employeeTextH1.textAlign = 'center'

	employeeText.innerHTML = 'In the season 4 premiere, "Fun Run", Jim and Pam confess that they have started dating after the camera crew catches them kissing. The office ultimately learns of their relationship in "Dunder Mifflin Infinity". In "Chair Model", after teasing Pam about his impending proposal, Jim tells the documentary crew he is not kidding around about an engagement and shows them a ring he bought a week after he and Pam started dating. In the next few episodes, Jim fake-proposes to Pam multiple times. In "Goodbye, Toby", Pam discovers shes been accepted at Pratt Institute, an art and design school in Brooklyn . In an interview later in the episode, Jim announces that he will propose to Pam that evening. Just as Jim is preparing to propose, however, Andy Bernard stands up and makes his own impromptu proposal to Angela.';
	employeeText.style.fontSize = '1em';
	employeeText.style.gridColumn = '1/2';
	employeeText.style.gridRow  = '1/4';
	employeeText.style.fontWeight = 'bold';
	employeeText.style.margin = '30% 1%';
}
function dwightClick(screenWidth){
	if(screenWidth >= 426 ||screenWidth <= 768){
	employeeImage.style.width = '322px';
	employeeImage.style.height = '300px';
	}else if(screenWidth < 426){

	}else{
	employeeImage.style.width = '622px';
	employeeImage.style.height = '500px';
	}
	employeeImage.style.backgroundImage = 'url('+dwightUrl+')';
	employeeImage.style.backgroundSize = '100% 100%';
	employeeImage.style.gridColumn = '1/2';
	employeeImage.style.gridRow = '2/3';
	
	employeeWrapper.style.backgroundSize = 0;
	employeeWrapper.style.display = 'grid';
	employeeWrapper.style.gridTemplateRows = '13vh .8fr 15vh'
	employeeWrapper.style.gridTemplateColumns = '.7fr 1fr'

	employeeTextH1.innerHTML = "Dwight Schrute";
	employeeTextH1.style.textAlign = 'center';
	employeeTextH1.style.fontSize = '3em';
	employeeTextH1.style.gridRow = '3/4';
	employeeTextH1.style.gridColumn = '1/2';

	employeeText.innerHTML = 'When the series begins, Dwight Schrute is a competent salesman, despite lacking general knowledge, at the Scranton branch of the paper distribution company, Dunder Mifflin. Dwight formally held the title of "Assistant to the Regional Manager",[4] but constantly refers to himself as "Assistant Regional Manager", attempting to elevate himself to second-in-command to branch Manager, Michael Scott. (Michael privately makes him Assistant Manager in "The Fight", tells him that no record/mention will be kept of the "title change only", then never acknowledges it again.) Dwight craves authority over his co-workers, and relishes any minor task that Michael or anyone else will give him.[2] Although Dwight acts superior to many individuals and is often resourceful in crises, he is shown to actually be quite gullible, ignorant, and naïve.[2] For this reason, he is easily tricked and pranked by his desk-mate and fellow salesman, Jim Halpert. Dwight often speaks in a halting, intense manner, even in casual conversations.[2] At the office, his most recurring formal wear is a mustard-colored, short-sleeved collared shirt, with a dark necktie and, usually, a brown suit jacket. He often uses one-upmanship to better himself over his peers, such as boasting about how he trains specific parts of his body.'
	employeeText.style.fontSize = '0.9em';
	employeeText.style.gridColumn = '2/3';
	employeeText.style.gridRow  = '1/3';
	employeeText.style.fontWeight = 'bold';
	employeeText.style.marginTop = '30%';
}

function photoGallerySwap(pictureUrl){
	galleryTarget.style.backgroundImage = pictureUrl;
}


// var beingRevealed = document.getElementById('revealOnScroll')
// beingRevealed.addEventListener('scroll', moveOnScroll)
// function moveOnScroll(){
//  	var scroll = window.scrollY;
//  	console.log(scroll);
// }