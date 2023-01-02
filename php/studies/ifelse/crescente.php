<?php
$a = 3;
$b = 4;
$c = 16;

if($a > $b){
	if($a > $c){
		if($b > $c){
			echo ("ordem crescente :".$a.$b.$c);
		}
	}
}
if($b > $a){
	if($b > $c){
		if($a > $c){
			echo ("ordem crescente :".$b.$a.$c);
		}
	}
}
if($c > $a){
	if($c > $b){
		if($a > $b){
			echo ("ordem crescente :".$c.$a.$b);
		}
	}
}
if($a > $b){
	if($a > $c){
		if($c > $b){
			echo ("ordem crescente :".$a.$c.$b);
		}
	}
}
if($b > $a){
	if($b > $c){
		if($c > $a){
			echo ("ordem crescente :".$b.$c.$a);
		}
	}
}
if($c > $a){
	if($c > $b){
		if($b > $a){
			echo ("ordem crescente :".$c.$b.$a);
		}
	}
}
?>