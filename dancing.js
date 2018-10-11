const heading= document.querySelector(".jump");
		heading.innerHTML= [...heading.textContent].map(letter=>`<span>${letter}</span>`).join('');
		const spans = document.querySelectorAll("span");
		
		looping(spans);
		setInterval(()=>{
			looping(spans);
		}, spans.length*200);
		

		function timer(ms) {
		 return new Promise(res => setTimeout(res, ms));
		}

		async function looping(words){
			for(let i of words){
				i.classList.add('jumping');
				await timer(200);
				i.classList.remove('jumping');
			}
		}
