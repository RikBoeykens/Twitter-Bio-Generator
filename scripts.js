var getRandomFromList = function(list){
	
	var position = Math.round(Math.random()* list.length)%list.length;
	return list[position];
}

var capitalisationReplace = function(input, placeholder, replacement){
	var toReplaceIndex = input.toLowerCase().indexOf(placeholder);
	
	var toReplace = input.substr(toReplaceIndex, placeholder.length);
	
	if(toReplace[2]==toReplace[2].toUpperCase()){
		replacement = replacement[0].toUpperCase() + replacement.substr(1);
	}
	
	return input.replace(toReplace, replacement);
}
		
var replacePlaceholder = function(input, placeholder, replacements){
	
	var replacement = getRandomFromList(replacements);
	
	return capitalisationReplace(input, placeholder, replacement);
	
}

var replacePlaceholders = function(input, placeholder, replacements){

	while(input.toLowerCase().indexOf(placeholder)>-1){
		input = replacePlaceholder(input, placeholder, replacements);
	}
	
	return input;
}

var getDescription = function(){
	return getRandomFromList($(this).data.descriptions);
}

var generateNew = function(){

	var result = $(this).data.intro + ' ' + getDescription();
	
	for(var i=0; i<$(this).data.replacementData.length; i++){
		result = replacePlaceholders(result, $(this).data.replacementData[i].placeholder, $(this).data.replacementData[i].replacements);
	}
	
	$("#result").html(result);
}

$(document).ready(function(){
	
	$("#generate-new-btn").click(generateNew);
	
	generateNew();
});