var m_rand, val;
$(function(){
	
	var split_element = ".split";
	var split_contents = $(split_element).text().split("");
	var split_length = split_contents.length;
	var split_text="";
	
	for (i in split_contents){ // FOR LOOP TO SPLIT THE TEXT
		
		if((split_contents[i]) == " "){ //CHECK IF THERE IS SPACE
			split_text = split_text + '<span>&nbsp;</span>';
		} else {
			split_text = split_text + '<span>' + split_contents[i] + '</span>';
		};
	}; //END FOR LOOP TO SPLIT THE TEXT
	$(split_element).html(split_text);
	
	// LOOP EVERY MILLISECONDS
	setInterval(function() {
	
		// LOOP FOR THE STRING LENGTH
		for (i in split_contents){
			
			var rand_values = []; //CREATE ARRAY
			// GENERATE RANDOM NUMBERS
			for (n=0; n<split_length; n++){ 
				var m_rand = Math.random();
				
				//Multipy by the least number to get very jittery. Here its 2
				var rand_num = Math.floor((Math.random()*1.2)+1); 
				
				// Decide if the generated number is negative or positive.
				var m_rand = m_rand < 0.5 ? -1*rand_num : rand_num;
				
				//Create the array
				rand_values.push(m_rand);
				
				if (m_rand%2 == 0) {
					//ADD n+1 because loop starts from 0 and there is no slector which is nth-child(0);
					$(".split span:nth-child("+(n+1)+")").css({ 
						top: rand_values[n]
					});
				} else {
					//ADD n+1 because loop starts from 0 and there is no slector which is nth-child(0);
					$(".split span:nth-child("+(n+1)+")").css({ 
						left: rand_values[n]
					});
				}
				
			} //END FOR LOOP RANDOM NUMBERS

		}; //END FOR LOOP TO SPLIT THE TEXT
		
	}, 	10
	); // every n milliseconds
	
});