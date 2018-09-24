var jogo=[];
		var tabuleiro=[];
		var quemJoga=0;// 0= jogador 1= cpu
		var verifica;
		var jogando=true;
		var nivel=2; 
		var jogadaCpu=1;
		var quemComeca=1;
		var jogada=0;
		var pontoJogador=0;
		var pontoCpu=0;
		//var placar_cpu=true;
		//var placar_amigo=false;

		function sleep(ms){
		return new Promise(resolve=>setTimeout(resolve,ms));
		}

		function cpuJoga(){
			if(jogando){
				var l,c;
				if(nivel==1){
					do{
						l=Math.round(Math.random()*2);
						c=Math.round(Math.random()*2);
					}while(jogo[l][c]!="");
					jogo[l][c]="O";
				}else if(nivel==2){
					//ATAQUE
					//jogadas linha 1
					if((jogo[0][0]=="O")&&(jogo[0][1]=="O")&&(jogo[0][2]=="")){
						jogo[0][2]="O";
					}else if((jogo[0][0]=="O")&&(jogo[0][2]=="O")&&(jogo[0][1]=="")){
						jogo[0][1]="O";
					}else if((jogo[0][1]=="O")&&(jogo[0][2]=="O")&&(jogo[0][0]=="")){
						jogo[0][0]="O";
					}else 
					//jogadas linha 2
					if((jogo[1][0]=="O")&&(jogo[1][1]=="O")&&(jogo[1][2]=="")){
						jogo[1][2]="O";
					}else if((jogo[1][0]=="O")&&(jogo[1][2]=="O")&&(jogo[1][1]=="")){
						jogo[1][1]="O";
					}else if((jogo[1][1]=="O")&&(jogo[1][2]=="O")&&(jogo[1][0]=="")){
						jogo[1][0]="O";
					}else 
					//jogadas linha 3
					if((jogo[2][0]=="O")&&(jogo[2][1]=="O")&&(jogo[2][2]=="")){
						jogo[2][2]="O";
					}else if((jogo[2][0]=="O")&&(jogo[2][2]=="O")&&(jogo[2][1]=="")){
						jogo[2][1]="O";
					}else if((jogo[2][1]=="O")&&(jogo[2][2]=="O")&&(jogo[2][0]=="")){
						jogo[2][0]="O";
					}else 
					//jogadas coluna 1
					if((jogo[0][0]=="O")&&(jogo[1][0]=="O")&&(jogo[2][0]=="")){
						jogo[2][0]="O";
					}else if((jogo[0][0]=="O")&&(jogo[2][0]=="O")&&(jogo[1][0]=="")){
						jogo[1][0]="O";
					}else if((jogo[1][0]=="O")&&(jogo[2][0]=="O")&&(jogo[0][0]=="")){
						jogo[0][0]="O";
					}else 
					//jogadas coluna 2
					if((jogo[0][1]=="O")&&(jogo[1][1]=="O")&&(jogo[2][1]=="")){
						jogo[2][1]="O";
					}else if((jogo[0][1]=="O")&&(jogo[2][1]=="O")&&(jogo[1][1]=="")){
						jogo[1][1]="O";
					}else if((jogo[1][1]=="O")&&(jogo[2][1]=="O")&&(jogo[0][1]=="")){
						jogo[0][1]="O";
					}else
					// jogadas coluna 3
					if((jogo[0][2]=="O")&&(jogo[1][2]=="O")&&(jogo[2][2]=="")){
						jogo[2][2]="O";
					}else if((jogo[0][2]=="O")&&(jogo[2][2]=="O")&&(jogo[1][2]=="")){
						jogo[1][2]="O";
					}else if((jogo[1][2]=="O")&&(jogo[2][2]=="O")&&(jogo[0][2]=="")){
						jogo[0][2]="O";
					}else 
					//jogadas diagonal  1
					if((jogo[0][0]=="O")&&(jogo[1][1]=="O")&&(jogo[2][2]=="")){
						jogo[2][2]="O";
					}else if((jogo[0][0]=="O")&&(jogo[2][2]=="O")&&(jogo[1][1]=="")){
						jogo[1][1]="O";
					}else if((jogo[1][1]=="O")&&(jogo[2][2]=="O")&&(jogo[0][0]=="")){
						jogo[0][0]="O";
					}else 
					// jogadas diagonal 2
			      	if((jogo[0][2]=="O")&&(jogo[1][1]=="O")&&(jogo[2][0]=="")){
						jogo[2][0]="O";
					}else if((jogo[0][2]=="O")&&(jogo[2][0]=="O")&&(jogo[1][1]=="")){
						jogo[1][1]="O";
					}else if((jogo[1][1]=="O")&&(jogo[2][0]=="O")&&(jogo[0][2]=="")){
						jogo[0][2]="O";
					}else 
					// DEFESA
					//jogadas linha 1
					if((jogo[0][0]=="X")&&(jogo[0][1]=="X")&&(jogo[0][2]=="")){
						jogo[0][2]="O";
					}else if((jogo[0][0]=="X")&&(jogo[0][2]=="X")&&(jogo[0][1]=="")){
						jogo[0][1]="O";
					}else if((jogo[0][1]=="X")&&(jogo[0][2]=="X")&&(jogo[0][0]=="")){
						jogo[0][0]="O";
					}else 
					//jogadas linha 2
					if((jogo[1][0]=="X")&&(jogo[1][1]=="X")&&(jogo[1][2]=="")){
						jogo[1][2]="O";
					}else if((jogo[1][0]=="X")&&(jogo[1][2]=="X")&&(jogo[1][1]=="")){
						jogo[1][1]="O";
					}else if((jogo[1][1]=="X")&&(jogo[1][2]=="X")&&(jogo[1][0]=="")){
						jogo[1][0]="O";
					}else 
					//jogadas linha 3
					if((jogo[2][0]=="X")&&(jogo[2][1]=="X")&&(jogo[2][2]=="")){
						jogo[2][2]="O";
					}else if((jogo[2][0]=="X")&&(jogo[2][2]=="X")&&(jogo[2][1]=="")){
						jogo[2][1]="O";
					}else if((jogo[2][1]=="X")&&(jogo[2][2]=="X")&&(jogo[2][0]=="")){
						jogo[2][0]="O";
					}else 
					//jogadas coluna 1
					if((jogo[0][0]=="X")&&(jogo[1][0]=="X")&&(jogo[2][0]=="")){
						jogo[2][0]="O";
					}else if((jogo[0][0]=="X")&&(jogo[2][0]=="X")&&(jogo[1][0]=="")){
						jogo[1][0]="O";
					}else if((jogo[1][0]=="X")&&(jogo[2][0]=="X")&&(jogo[0][0]=="")){
						jogo[0][0]="O";
					}else 
					//jogadas coluna 2
					if((jogo[0][1]=="X")&&(jogo[1][1]=="X")&&(jogo[2][1]=="")){
						jogo[2][1]="O";
					}else if((jogo[0][1]=="X")&&(jogo[2][1]=="X")&&(jogo[1][1]=="")){
						jogo[1][1]="O";
					}else if((jogo[1][1]=="X")&&(jogo[2][1]=="X")&&(jogo[0][1]=="")){
						jogo[0][1]="O";
					}else
					// jogadas coluna 3
					if((jogo[0][2]=="X")&&(jogo[1][2]=="X")&&(jogo[2][2]=="")){
						jogo[2][2]="O";
					}else if((jogo[0][2]=="X")&&(jogo[2][2]=="X")&&(jogo[1][2]=="")){
						jogo[1][2]="O";
					}else if((jogo[1][2]=="X")&&(jogo[2][2]=="X")&&(jogo[0][2]=="")){
						jogo[0][2]="O";
					}else 
					//jogadas diagonal  1
					if((jogo[0][0]=="X")&&(jogo[1][1]=="X")&&(jogo[2][2]=="")){
						jogo[2][2]="O";
					}else if((jogo[0][0]=="X")&&(jogo[2][2]=="X")&&(jogo[1][1]=="")){
						jogo[1][1]="O";
					}else if((jogo[1][1]=="X")&&(jogo[2][2]=="X")&&(jogo[0][0]=="")){
						jogo[0][0]="O";
					}else 
					// jogadas diagonal 2
			      	if((jogo[0][2]=="X")&&(jogo[1][1]=="X")&&(jogo[2][0]=="")){
						jogo[2][0]="O";
					}else if((jogo[0][2]=="X")&&(jogo[2][0]=="X")&&(jogo[1][1]=="")){
						jogo[1][1]="O";
					}else if((jogo[1][1]=="X")&&(jogo[2][0]=="X")&&(jogo[0][2]=="")){
						jogo[0][2]="O";
					}else 
						if(jogada<8){
							do{
								l=Math.round(Math.random()*2);
								c=Math.round(Math.random()*2);
							}while(jogo[l][c]!="");
								jogo[l][c]="O";
						}else{
							for(var l=0;l<3;l++){
								for(c=0;c<3;c++){
									if(jogo[l][c]==""){
										jogo[l][c]="O";
									}
								}
							}
						}
					}

				verifica=verificaVitoria();
				if(verifica!=""){
					//await sleep(50);
					//alert(verifica+" Venceu!!!");
				if(verifica=="X"){
					sleep(3000);
					document.getElementById("dvResultado").innerHTML="Vitória do Jogador";
					var u= 'imagens/jogador.png';
					var a_img='<img src="'+u+'">';
					document.getElementById("subpainel2").innerHTML=a_img;
					pontoJogador++;
					}else{
					sleep(3000);
					document.getElementById("dvResultado").innerHTML="Vitória do Computador";
					var c= 'imagens/cpu.png';
					var c_img='<img src="'+c+'">';
					document.getElementById("subpainel2").innerHTML=c_img;
					pontoCpu++;
					}
					
					jogando=false;
				}else if(jogada>8){
					document.getElementById("dvResultado").innerHTML="Empate";
					var e= 'imagens/empate.png';
					var e_img='<img src="'+e+'">';
					document.getElementById("subpainel2").innerHTML=e_img;
				}
				atualizaTabuleiro();
				jogada++;
				quemJoga=0;
			}
		}

		function verificaVitoria(){
			var l,c;
			//LINHAS
			for(l=0;l<3;l++){
					if((jogo[l][0])==jogo[l][1] && (jogo[l][1]==[jogo[l][2]])){
						return jogo[l][0];
					}
			}
			//COLUNAS
			for(c=0;c<3;c++){
					if((jogo[0][c])==jogo[1][c] && (jogo[0][c]==[jogo[2][c]])){
						return jogo[0][c];
					}
			}
			//DIAGONAIS
			if((jogo[0][0])==jogo[1][1] && (jogo[1][1]==[jogo[2][2]])){
						return jogo[0][0];
			}
			if((jogo[0][2])==jogo[1][1] && (jogo[1][1]==[jogo[2][0]])){
						return jogo[0][2];
			}
		
			
				return "";
			
			
		}
		function modoEscolhido() {	

					var form = document.formulario;	
					var Radio=null;	
					Radio= form.modo;	
					for(var i=0;i<Radio.length;i++) {		
					if(Radio[i].checked) {			
							return Radio[i].id;		
					}	
					}	
					;}
		
		
		function jogar(p){
			modoEscolhido();
			if((jogando)  && (quemJoga==0) &&(modoEscolhido()=="cpu")){
				switch(p){
					case 1:
						if (jogo[0][0]=="") {
							jogo[0][0]="X";
							quemJoga=1;
						}
						break;
					case 2:
						if (jogo[0][1]=="") {
							jogo[0][1]="X";
							quemJoga=1;
						}
						break;
					case 3:
						if (jogo[0][2]=="") {
							jogo[0][2]="X";
							quemJoga=1;
						}
						break;
					case 4:
						if (jogo[1][0]=="") {
							jogo[1][0]="X";
							quemJoga=1;
						}
						break;
					case 5:
						if (jogo[1][1]=="") {
							jogo[1][1]="X";
							quemJoga=1;
						}
						break;
					case 6:
						if (jogo[1][2]=="") {
							jogo[1][2]="X";
							quemJoga=1;
						}
						break;
					case 7:
						if (jogo[2][0]=="") {
							jogo[2][0]="X";
							quemJoga=1;
						}
						break;
					case 8:
						if (jogo[2][1]=="") {
							jogo[2][1]="X";
							quemJoga=1;
						}
						break;
					default://caso 9
					case 9:
						if (jogo[2][2]=="") {
							jogo[2][2]="X";
							quemJoga=1;
						}
						break;
				}
				if(quemJoga==1){
					atualizaTabuleiro();
				verifica=verificaVitoria();
				if(verifica!=""){
					//alert(verifica+" Venceu!!!");

					if(verifica=="X"){
					sleep(3000);
					document.getElementById("dvResultado").innerHTML="Vitória do Jogador";
					var u= 'imagens/jogador.png';
					var a_img='<img src="'+u+'">';
					document.getElementById("subpainel2").innerHTML=a_img;
					pontoJogador++;
					}else{
					sleep(3000);
					document.getElementById("dvResultado").innerHTML="Vitória do Computador";
					var c= 'imagens/cpu.png';
					var c_img='<img src="'+c+'">';
					document.getElementById("subpainel2").innerHTML=c_img;
					pontoCpu++;
					}
					jogando=false;

				}else{
					
					jogada++;
					
						
					modoEscolhido();
					if((jogando)&&(modoEscolhido()!="amigo")){
					cpuJoga();
					}
				
				}
				if(jogada>8 && verificaVitoria()==""){
					document.getElementById("dvResultado").innerHTML="Empate";
					var e= 'imagens/empate.png';
					var e_img='<img src="'+e+'">';
					document.getElementById("subpainel2").innerHTML=e_img;
				}
				
				}
				
			}else if((jogando) && (quemJoga==0) && (modoEscolhido()=="amigo") ){
				switch(p){
					case 1:
						if (jogo[0][0]=="") {
							jogo[0][0]="X";
							quemJoga=1;
						}
						break;
					case 2:
						if (jogo[0][1]=="") {
							jogo[0][1]="X";
							quemJoga=1;
						}
						break;
					case 3:
						if (jogo[0][2]=="") {
							jogo[0][2]="X";
							quemJoga=1;
						}
						break;
					case 4:
						if (jogo[1][0]=="") {
							jogo[1][0]="X";
							quemJoga=1;
						}
						break;
					case 5:
						if (jogo[1][1]=="") {
							jogo[1][1]="X";
							quemJoga=1;
						}
						break;
					case 6:
						if (jogo[1][2]=="") {
							jogo[1][2]="X";
							quemJoga=1;
						}
						break;
					case 7:
						if (jogo[2][0]=="") {
							jogo[2][0]="X";
							quemJoga=1;
						}
						break;
					case 8:
						if (jogo[2][1]=="") {
							jogo[2][1]="X";
							quemJoga=1;
						}
						break;
					default://caso 9
					case 9:
						if (jogo[2][2]=="") {
							jogo[2][2]="X";
							quemJoga=1;
						}
						break;
					}
					if(quemJoga==1){
					atualizaTabuleiro();
				verifica=verificaVitoria();
				if(verifica!=""){
					//alert(verifica+" Venceu!!!");

					if(verifica=="X"){
					sleep(3000);
					//document.getElementById("dvResultado").innerHTML="Vitória do Jogador";
					var u= 'imagens/jogadorx.png';
					var a_img='<img src="'+u+'">';
					document.getElementById("subpainel2").innerHTML=a_img;
					pontoJogador++;
					}else{
					sleep(3000);
					//document.getElementById("dvResultado").innerHTML="Vitória do Computador";
					var c= 'imagens/jogadoro.png';
					var c_img='<img src="'+c+'">';
					document.getElementById("subpainel2").innerHTML=c_img;
					pontoCpu++;
					}
					jogando=false;

				}else{
					
					jogada++;
					
						
					/*modoEscolhido();
					if((jogando)&&(modoEscolhido()!="amigo")){
					cpuJoga();
					}*/
				
				}
				if(jogada>8 && verificaVitoria()==""){
					document.getElementById("dvResultado").innerHTML="Empate";
					var e= 'imagens/empate.png';
					var e_img='<img src="'+e+'">';
					document.getElementById("subpainel2").innerHTML=e_img;
				}
				
				}
			}else if((jogando)&&(quemJoga==1)&&(modoEscolhido()=="amigo")){
				switch(p){
					case 1:
						if (jogo[0][0]=="") {
							jogo[0][0]="O";
							quemJoga=0;
						}
						break;
					case 2:
						if (jogo[0][1]=="") {
							jogo[0][1]="O";
							quemJoga=0;
						}
						break;
					case 3:
						if (jogo[0][2]=="") {
							jogo[0][2]="O";
							quemJoga=0;
						}
						break;
					case 4:
						if (jogo[1][0]=="") {
							jogo[1][0]="O";
							quemJoga=0;
						}
						break;
					case 5:
						if (jogo[1][1]=="") {
							jogo[1][1]="O";
							quemJoga=0;
						}
						break;
					case 6:
						if (jogo[1][2]=="") {
							jogo[1][2]="O";
							quemJoga=0;
						}
						break;
					case 7:
						if (jogo[2][0]=="") {
							jogo[2][0]="O";
							quemJoga=0;
						}
						break;
					case 8:
						if (jogo[2][1]=="") {
							jogo[2][1]="O";
							quemJoga=0;
						}
						break;
					default://caso 9
					case 9:
						if (jogo[2][2]=="") {
							jogo[2][2]="O";
							quemJoga=0;
						}
						break;
					}
					if(quemJoga==0){
					atualizaTabuleiro();
				verifica=verificaVitoria();
				if(verifica!=""){
					//alert(verifica+" Venceu!!!");

					if(verifica=="X"){
					sleep(3000);
					//document.getElementById("dvResultado").innerHTML="Vitória do Jogador";
					var u= 'imagens/jogadorx.png';
					var a_img='<img src="'+u+'">';
					document.getElementById("subpainel2").innerHTML=a_img;
					pontoJogador++;
					}else{
					sleep(3000);
					//document.getElementById("dvResultado").innerHTML="Vitória do Computador";
					var c= 'imagens/jogadoro.png';
					var c_img='<img src="'+c+'">';
					document.getElementById("subpainel2").innerHTML=c_img;
					pontoCpu++;
					}
					jogando=false;

				}else{
					
					jogada++;
					
						
					/*modoEscolhido();
					if((jogando)&&(modoEscolhido()!="amigo")){
					cpuJoga();
					}*/
				
				}
				if(jogada>8 && verificaVitoria()==""){
					document.getElementById("dvResultado").innerHTML="Empate";
					var e= 'imagens/empate.png';
					var e_img='<img src="'+e+'">';
					document.getElementById("subpainel2").innerHTML=e_img;
				}
				
				}
			}
		}

	

		function zerarPlacar(){
			pontoCpu=0;
			pontoJogador=0;
			//location.reload();
			inicia();

		}
		function atualizaTabuleiro(){
				for(var l=0;l<3;l++){
					for(var c=0;c<3;c++){
						if(jogo[l][c]=="X"){
							tabuleiro[l][c].innerHTML="X";
							tabuleiro[l][c].style.cursor="default";
						}else if(jogo[l][c]=="O"){
							tabuleiro[l][c].innerHTML="O";
							tabuleiro[l][c].style.cursor="default";
						}else{
							tabuleiro[l][c].innerHTML="";
							tabuleiro[l][c].style.cursor="pointer";
						}
					}
				}
		}
		function inicia(){
			document.getElementById("dvResultado").innerHTML="";
			jogando=true;
			jogada=0;
			jogadaCpu=1;
			jogo=[
			["","",""],
			["","",""],
			["","",""]

			];
			tabuleiro=[
				[document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3")],
				[document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")],
				[document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")]
			];
			atualizaTabuleiro();
			if(pontoJogador!=0 || pontoCpu!=0){

				document.getElementById("botaoZerar").disabled=false;
			}else{
				document.getElementById("botaoZerar").disabled=true;

			}
			var placar_cpu = document.getElementById('cpu').checked;
			var placar_amigo = document.getElementById('amigo').checked;
			//$("#amigo").click
			

			var escolha= true;

			
			 /*function modoEscolhido() {
			    var radios = document.getElementsByName("modo");
			    for (var i = 0; i < radios.length; i++) {
			        if (radios[i].checked ) {
			            return radios[i].value;
			            
			        }
			    }
			};*/
			function modoEscolhido() {	

			var form = document.formulario;	
			var Radio=null;	
			Radio= form.modo;	
			for(var i=0;i<Radio.length;i++) {		
				if(Radio[i].checked) {			
					return Radio[i].id;		
				}	}	;}
				modoEscolhido();
			
			/*function inicializarModo() {
			    var radios = document.getElementsByName("modo");

			    for (var i = 0; i < radios.length; i++) {
			        if (radios[i].value === modoEscolhido()) {
			            radios[i].checked = true;
			        }
			    }
			};
			inicializarModo();*/
			function desabilitarNivel(){
				var form = document.nivel;
				var Radio=null;
				Radio = form.nivel;
				for(var i=0;i<Radio.length;i++){
					if(Radio[i].id == "nivel"){
						Radio[i].disabled=true;
					}
				}
				
				
			}
			function habilitarNivel(){
				var form = document.nivel;
				var Radio=null;
				Radio = form.nivel;
				for(var i=0;i<Radio.length;i++){
					if(Radio[i].id == "nivel"){
						Radio[i].disabled=false;
					}
				}
				
				
			}
			if(modoEscolhido()=="cpu"){
				if(quemComeca==1){
				quemComeca=0;
				quemJoga=quemComeca;
				document.getElementById("dvQuemComeca").innerHTML="Quem Começa: Jogador";
			}else{
				quemComeca=1;
				quemJoga=quemComeca;
				document.getElementById("dvQuemComeca").innerHTML="Quem Começa: CPU";
				
				cpuJoga();
			}
				document.getElementById("placar").innerHTML="Jogador "+pontoJogador+" - "+pontoCpu+" CPU ";
				var placar= '<h1>Placar</h1> <h2>Jogador '+'<u>'+pontoJogador+'</u>'+' - '+'<u>'+pontoCpu+'</u>'+' CPU </h2> ';
				
				document.getElementById("subpainel2").innerHTML=placar;
				habilitarNivel();

			
			

			}else {
				if(quemComeca==1){
				quemComeca=0;
				quemJoga=quemComeca;
				document.getElementById("dvQuemComeca").innerHTML="Quem Começa: Jogador X";
			}else{
				quemComeca=1;
				quemJoga=quemComeca;
				document.getElementById("dvQuemComeca").innerHTML="Quem Começa: Jogador O";
				
				
			}
				//document.getElementById("placar").innerHTML="Jogador X: <br> Jogador O:";
				var placar= '<h1>Placar</h1> <h3>Jogador X '+'<u>'+pontoJogador+'</u>'+' - '+'<u>'+pontoCpu+'</u>'+' Jogador O </h3> ';
				document.getElementById("subpainel2").innerHTML=placar;
				desabilitarNivel();

			}
			
			

		}

		window.addEventListener("load",inicia);
				
