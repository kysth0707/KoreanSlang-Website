ButtonPossible = true;

function onSubmit()
{
	var val = document.getElementById("inputBox").value;

	if(val == ""){return;}

	var url = "http://nojam.easylab.kr:7979/convert/"+val;
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", url, true);
	ButtonPossible = false

	xmlHttp.onreadystatechange = function(){
		if(this.status == 200 && this.readyState == this.DONE)
		{
			ButtonPossible = true;
			var data = JSON.parse(xmlHttp.responseText);
			console.log(data);
			setValues(
				data.canSend,
				data.originalWord,
				data.joinedJamo,
				data.convertedWord,
				data.changedWordCount,
				data.time
			);
		}
	}

	xmlHttp.send( null );
	setTimeout(function(){
		if(!ButtonPossible)
		{
			alert('나중에 다시 시도해주세요\n서버 상태가 나쁩니다');
			ButtonPossible = true;
		}
	}, 5000);
}

function setValues(a,b,c,d,e,f)
{
	document.getElementById("canSendText").innerText = "출력 가능 여부 : "+a;
	document.getElementById("inputText").innerText = "입력 : "+b;
	document.getElementById("jamoText").innerText = "조합된 자모 : "+c;
	document.getElementById("outputText").innerText = "출력 : "+d;
	document.getElementById("changedWordCountText").innerText = "수정된 문자 개수 : "+e;
	document.getElementById("timeText").innerText = "처리시간 : "+f;
}