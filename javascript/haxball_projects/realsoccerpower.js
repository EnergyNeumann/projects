//Real Soccer Variables
var throwTimeOut = 420; // 7 seconds (var is in game ticks)
var gkTimeOut = 600; // 10 seconds (var is in game ticks)
var ckTimeOut = 600; // 10 seconds (var is in game ticks)
var throwinDistance = 270; // distance players can move the ball during throw in
var mapBGColor = "86A578"; // default 718C5A
var superAdminCode = "311209"; // !admin 311209
var allowPublicAdmin = true; // if true then !admin command is enabled
var powerShotMode = false;


/*-------------------------------- STADIUMS ---------------------------------*/
function getRealSoccerMap() {
	var realSoccerMap = `{"name":"Real Soccer Revolution","width":1300,"height":670,"spawnDistance":560,"bg":{"type":"grass","width":1150,"height":600,"kickOffRadius":180,"cornerRadius":0,"color":"`+mapBGColor+`"},"playerPhysics":{"bCoef":0.3,"invMass":0.5,"damping":0.96,"acceleration":0.12,"kickingAcceleration":0.07,"kickingDamping":0.96,"kickStrength":5.65},"ballPhysics":{"radius":9,"bCoef":0.5,"invMass":1.05,"damping":0.99,"color":"FFFFFF","cMask":["all"],"cGroup":["ball"]},"vertexes":[{"x":0,"y":675,"trait":"kickOffBarrier"},{"x":0,"y":180,"trait":"kickOffBarrier"},{"x":0,"y":-180,"trait":"kickOffBarrier"},{"x":0,"y":-675,"trait":"kickOffBarrier"},{"x":1150,"y":320,"trait":"line"},{"x":840,"y":320,"trait":"line"},{"x":1150,"y":-320,"trait":"line"},{"x":840,"y":-320,"trait":"line"},{"x":1150,"y":180,"trait":"line"},{"x":1030,"y":180,"trait":"line"},{"x":1150,"y":-180,"trait":"line"},{"x":1030,"y":-180,"trait":"line"},{"x":840,"y":-130,"trait":"line","curve":-130},{"x":840,"y":130,"trait":"line","curve":-130},{"x":-1150,"y":-320,"trait":"line"},{"x":-840,"y":-320,"trait":"line"},{"x":-1150,"y":320,"trait":"line"},{"x":-840,"y":320,"trait":"line"},{"x":-1150,"y":-175,"trait":"line"},{"x":-1030,"y":-175,"trait":"line"},{"x":-1150,"y":175,"trait":"line"},{"x":-1030,"y":175,"trait":"line"},{"x":-840,"y":130,"trait":"line","curve":-130},{"x":-840,"y":-130,"trait":"line","curve":-130},{"x":935,"y":3,"trait":"line"},{"x":935,"y":-3,"trait":"line"},{"x":-935,"y":3,"trait":"line"},{"x":-935,"y":-3,"trait":"line"},{"x":-1150,"y":570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":-600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1150,"y":-570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":-570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":-600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":-180},{"x":0,"y":-180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":-1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":-1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":-40,"trait":"line","color":"576C46"},{"x":1030,"y":40,"trait":"line","color":"576C46"},{"x":-1030,"y":-40,"trait":"line","color":"576C46"},{"x":-1030,"y":40,"trait":"line","color":"576C46"},{"x":0,"y":3,"trait":"line"},{"x":0,"y":-3,"trait":"line"},{"x":-1300,"y":-460,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":-460,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1300,"y":460,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":460,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-840,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-840,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":840,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":840,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1150,"y":-124,"bCoef":0.1,"cMask":["ball","red","blue"]},{"x":-1210,"y":-124,"bCoef":0.1,"cMask":["red","blue"],"bias":0,"curve":5},{"x":-1150,"y":124,"bCoef":0.1,"cMask":["ball","red","blue"]},{"x":-1210,"y":124,"bCoef":0.1,"cMask":["red","blue"],"bias":0,"curve":5},{"x":-1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":-1250,"y":158,"bCoef":0,"cMask":["ball"]},{"x":1150,"y":124,"bCoef":0.1,"cMask":["ball","red","blue"]},{"x":1210,"y":124,"bCoef":0.1,"cMask":["red","blue"],"curve":-5},{"x":1150,"y":-124,"bCoef":0.1,"cMask":["ball","red","blue"]},{"x":1210,"y":-124,"bCoef":0.1,"cMask":["red","blue"],"curve":-5},{"x":1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":1250,"y":158,"bCoef":0,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"trait":"kickOffBarrier"},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"line","y":320},{"v0":5,"v1":7,"trait":"line","x":840},{"v0":6,"v1":7,"trait":"line","y":-320},{"v0":8,"v1":9,"trait":"line","y":180},{"v0":9,"v1":11,"trait":"line","x":1030},{"v0":10,"v1":11,"trait":"line","y":-180},{"v0":12,"v1":13,"curve":-130,"trait":"line","x":840},{"v0":14,"v1":15,"trait":"line","y":-320},{"v0":15,"v1":17,"trait":"line","x":-840},{"v0":16,"v1":17,"trait":"line","y":320},{"v0":18,"v1":19,"trait":"line","y":-175},{"v0":19,"v1":21,"trait":"line","x":-1030},{"v0":20,"v1":21,"trait":"line","y":175},{"v0":22,"v1":23,"curve":-130,"trait":"line","x":-840},{"v0":24,"v1":25,"curve":-180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":90,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":-90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-90,"trait":"line","x":-935},{"v0":24,"v1":25,"trait":"line","x":935},{"v0":26,"v1":27,"trait":"line","x":-935},{"v0":28,"v1":29,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":30,"v1":31,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":32,"v1":33,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":34,"v1":35,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":37,"v1":36,"curve":-180,"vis":false,"bCoef":0.1,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":39,"v1":40,"curve":70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":-1030},{"v0":41,"v1":42,"curve":-70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":1030},{"v0":37,"v1":38,"curve":180,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":43,"v1":44,"vis":true,"color":"576C46","trait":"line","x":1030},{"v0":45,"v1":46,"vis":true,"color":"576C46","trait":"line","x":-1030},{"v0":47,"v1":48,"curve":-180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":90,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":-90,"trait":"line","x":-935},{"v0":47,"v1":48,"trait":"line","x":-935},{"v0":49,"v1":50,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":-460},{"v0":51,"v1":52,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":460},{"v0":53,"v1":54,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":54,"v1":55,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":55,"v1":56,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":57,"v1":58,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":58,"v1":59,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":59,"v1":60,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":61,"v1":62,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"],"y":-124},{"v0":63,"v1":64,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"],"y":124},{"v0":64,"v1":62,"curve":5,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"],"bias":0},{"v0":62,"v1":65,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":64,"v1":66,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":67,"v1":68,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"],"y":124},{"v0":69,"v1":70,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"],"y":-124},{"v0":68,"v1":70,"curve":-5,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"]},{"v0":70,"v1":71,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":68,"v1":72,"color":"FFFFFF","bCoef":0,"cMask":["ball"]}],"goals":[{"p0":[-1161.45,124],"p1":[-1161.45,-124],"team":"red"},{"p0":[1161.45,124],"p1":[1161.45,-124],"team":"blue","radius":0,"invMass":1}],"discs":[{"radius":0,"invMass":0,"pos":[-1311,-19],"color":"ffffffff","bCoef":0,"cMask":["red"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1310,29],"color":"ffffffff","bCoef":0,"cMask":["blue"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1308,62],"color":"ffffffff","bCoef":0,"cMask":["red","blue"],"cGroup":["ball"]},{"radius":2.7,"pos":[-1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,600],"cGroup":["ball"],"trait":"cornerflag","_data":{"mirror":{}}},{"radius":5,"invMass":0,"pos":[-1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[-1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2.7,"pos":[-1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":0,"pos":[-1149,-460],"cMask":["none"]},{"radius":0,"pos":[1149,-460],"cMask":["none"]},{"radius":0,"pos":[-1149,-460],"cMask":["none"]},{"radius":0,"pos":[1149,-460],"cMask":["none"]},{"radius":0,"pos":[-1149,460],"cMask":["none"]},{"radius":0,"pos":[1149,460],"cMask":["none"]},{"radius":0,"pos":[-1149,460],"cMask":["none"]},{"radius":0,"pos":[1149,460],"cMask":["none"]}],"planes":[{"normal":[0,1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-627,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,-627],"b":[1300,-627]}}},{"normal":[0,-1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-627,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,627],"b":[1300,627]}}},{"normal":[0,1],"dist":-670,"bCoef":0,"_data":{"extremes":{"normal":[0,1],"dist":-670,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,-670],"b":[1300,-670]}}},{"normal":[0,-1],"dist":-670,"bCoef":0,"_data":{"extremes":{"normal":[0,-1],"dist":-670,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,670],"b":[1300,670]}}},{"normal":[1,0],"dist":-1300,"bCoef":0,"_data":{"extremes":{"normal":[1,0],"dist":-1300,"canvas_rect":[-1311,-675,1300,675],"a":[-1300,-675],"b":[-1300,675]}}},{"normal":[-1,0],"dist":-1300,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1300,"canvas_rect":[-1311,-675,1300,675],"a":[1300,-675],"b":[1300,675]}}},{"normal":[1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-1230,"canvas_rect":[-1311,-675,1300,675],"a":[-1230,-675],"b":[-1230,675]}}},{"normal":[-1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-1230,"canvas_rect":[-1311,-675,1300,675],"a":[1230,-675],"b":[1230,675]}}}],"traits":{"ballArea":{"vis":false,"bCoef":0,"cMask":["ball"],"cGroup":["ball"]},"goalPost":{"radius":5,"invMass":0,"bCoef":1,"cGroup":["ball"]},"rightNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c3"]},"leftNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c2"]},"stanchion":{"radius":3,"invMass":0,"bCoef":3,"cMask":["none"]},"cornerflag":{"radius":3,"invMass":0,"bCoef":0.2,"color":"FFFF00","cMask":["ball"]},"reargoalNetleft":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":10,"color":"C7E6BD"},"reargoalNetright":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-10,"color":"C7E6BD"},"sidegoalNet":{"vis":true,"bCoef":1,"cMask":["ball","red","blue"],"color":"C7E6BD"},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":[],"color":"C7E6BD"}},"joints":[{"d0":16,"d1":17,"strength":"rigid","color":"ec7458","length":null},{"d0":18,"d1":19,"strength":"rigid","color":"48bef9","length":null},{"d0":20,"d1":21,"strength":"rigid","color":"ec7458","length":null},{"d0":22,"d1":23,"strength":"rigid","color":"48bef9","length":null}],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}`;
	return realSoccerMap;
}

var penalti = `{"name":"Penalti [RSR]","width":500,"height":320,"bg":{"type":"grass","width":500,"height":320},"vertexes":[{"x":126,"y":-219,"cMask":[]},{"x":124,"y":221,"cMask":[]},{"x":0,"y":-5,"cMask":[]},{"x":0,"y":5,"cMask":[]},{"x":306,"y":118,"bCoef":0,"cMask":["wall"]},{"x":308,"y":-117,"bCoef":0,"cMask":["wall"]},{"x":346.3986284568,"y":143.49133453726,"bCoef":0,"cMask":["wall"]},{"x":341.1330183340999,"y":-142.3758942437,"bCoef":0,"cMask":["wall"]},{"x":240.51933259909993,"y":117,"cMask":["blue","ball"]},{"x":308,"y":117,"bCoef":0,"cMask":["ball"]},{"x":241.51403068390005,"y":-117.91461989892,"cMask":["blue","ball"]},{"x":308,"y":-117,"bCoef":0,"cMask":["ball"]},{"x":242,"y":-321,"cMask":[]},{"x":241,"y":320,"cMask":[]},{"x":-113,"y":-200,"cMask":[]},{"x":-113,"y":201,"cMask":[]},{"x":0,"y":-320,"cMask":[]},{"x":0,"y":320,"cMask":[]},{"x":-401,"y":-187,"cMask":["red"]},{"x":-401,"y":-23,"cMask":["red"]},{"x":-362,"y":-15,"cMask":[]},{"x":-402,"y":-15,"cMask":[]},{"x":228.5,"y":-151,"cMask":["blue"]},{"x":228.5,"y":154,"cMask":["blue"]},{"x":-362,"y":15,"cMask":[]},{"x":-403,"y":15,"cMask":[]},{"x":-402,"y":18,"cMask":["red"]},{"x":-402,"y":188,"cMask":["red"]},{"x":-493,"y":187,"cMask":["red"]},{"x":-402,"y":188,"cMask":["red"]},{"x":-493,"y":-188,"cMask":["red"]},{"x":-402,"y":-187,"cMask":["red"]},{"x":-493,"y":-188,"cMask":["red"]},{"x":-493,"y":187,"cMask":["red"]},{"x":-402,"y":-17,"cMask":["red"]},{"x":-402,"y":-17,"cMask":["red"]},{"x":-402,"y":-15,"cMask":["red"]},{"x":-358,"y":-15,"cMask":["red"]},{"x":-113,"y":-322,"cMask":[]},{"x":-114,"y":319,"cMask":[]},{"x":241,"y":220,"cMask":[]},{"x":123,"y":220,"cMask":[]},{"x":242,"y":-220,"cMask":[]},{"x":124,"y":-220,"cMask":[]},{"x":-2,"y":-218,"cMask":["red"]},{"x":-360,"y":-20,"cMask":["red"]},{"x":0,"y":211,"cMask":["red"]},{"x":-361,"y":18,"cMask":["red"]},{"x":-24,"y":-319,"cMask":["red"]},{"x":-27,"y":316,"cMask":["red"]},{"x":-404,"y":15,"cMask":["red"]},{"x":-360,"y":15,"cMask":["red"]},{"x":408,"y":-103,"cMask":["blue"]},{"x":500,"y":-105,"cMask":["blue"]},{"x":499,"y":98,"cMask":["blue"]},{"x":500,"y":-105,"cMask":["blue"]},{"x":405,"y":95,"cMask":["blue"]},{"x":499,"y":98,"cMask":["blue"]},{"x":408,"y":-104,"cMask":["blue"]},{"x":407,"y":-26,"cMask":["blue"]},{"x":407,"y":22,"cMask":["blue"]},{"x":405,"y":95,"cMask":["blue"]},{"x":402,"y":21,"cMask":["blue"]},{"x":311,"y":20,"cMask":["blue"]},{"x":312,"y":-27,"cMask":["blue"]},{"x":407,"y":-26,"cMask":["blue"]}],"segments":[{"v0":0,"v1":1,"cMask":[],"color":"C7E6BD"},{"v0":2,"v1":3,"cMask":[],"color":"C7E6BD"},{"v0":2,"v1":3,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":3,"v1":2,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"C7E6BD"},{"v0":2,"v1":3,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":[],"color":"C7E6BD"},{"v0":3,"v1":2,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":[],"color":"C7E6BD"},{"v0":4,"v1":6,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":5,"v1":7,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":11,"v1":9,"bCoef":0,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"cMask":["blue","ball"],"color":"FFFFFF"},{"v0":10,"v1":11,"cMask":["blue","ball"],"color":"FFFFFF"},{"v0":12,"v1":13,"cMask":[],"color":"C7E6BD"},{"v0":15,"v1":14,"curve":126.11501125673479,"curveF":0.5082618656610506,"cMask":[],"color":"C7E6BD"},{"v0":16,"v1":17,"cMask":[],"color":"5E844D"},{"v0":18,"v1":19,"vis":false,"cMask":["red"],"color":"C7E6BD"},{"v0":20,"v1":21,"cMask":[],"color":"B2E09D"},{"v0":22,"v1":23,"vis":false,"cMask":["blue"],"color":"C7E6BD"},{"v0":24,"v1":25,"cMask":[],"color":"B2E09D"},{"v0":26,"v1":27,"vis":false,"cMask":["red"],"color":"C7E6BD"},{"v0":28,"v1":29,"vis":false,"cMask":["red"],"color":"C7E6BD"},{"v0":30,"v1":31,"vis":false,"cMask":["red"],"color":"C7E6BD"},{"v0":32,"v1":33,"vis":false,"cMask":["red"],"color":"C7E6BD"},{"v0":34,"v1":35,"vis":false,"cMask":["red"],"color":"C7E6BD"},{"v0":36,"v1":37,"vis":false,"cMask":["red"],"color":"C7E6BD"},{"v0":38,"v1":39,"cMask":[],"color":"C7E6BD"},{"v0":40,"v1":41,"cMask":[],"color":"C7E6BD"},{"v0":42,"v1":43,"cMask":[],"color":"C7E6BD"},{"v0":44,"v1":45,"vis":false,"cMask":["red"],"color":"C7E6BD"},{"v0":46,"v1":47,"vis":false,"cMask":["red"],"color":"C7E6BD"},{"v0":48,"v1":49,"curve":24.704844481170856,"curveF":4.566337478945061,"vis":false,"cMask":["red"],"color":"C7E6BD"},{"v0":50,"v1":51,"vis":false,"cMask":["red"],"color":"C7E6BD"},{"v0":52,"v1":53,"vis":false,"cMask":["blue"],"color":"C7E6BD"},{"v0":54,"v1":55,"vis":false,"cMask":["blue"],"color":"C7E6BD"},{"v0":57,"v1":56,"vis":false,"cMask":["blue"],"color":"C7E6BD"},{"v0":59,"v1":58,"vis":false,"cMask":["blue"],"color":"C7E6BD"},{"v0":61,"v1":60,"vis":false,"cMask":["blue"],"color":"C7E6BD"},{"v0":63,"v1":62,"vis":false,"cMask":["blue"],"color":"C7E6BD"},{"v0":65,"v1":64,"vis":false,"cMask":["blue"],"color":"C7E6BD"}],"planes":[{"normal":[1,0],"dist":-505,"bCoef":0},{"normal":[-1,0],"dist":-505,"bCoef":0},{"normal":[1,0],"dist":-505,"bCoef":0,"cMask":["ball"]},{"normal":[-1,0],"dist":-505,"bCoef":0,"cMask":["ball"]}],"goals":[{"p0":[258.5,-119],"p1":[258.5,115],"team":"blue"},{"p0":[243.5,121],"p1":[243.5,158],"team":"red"},{"p0":[243.5,158],"p1":[-21.5,22],"team":"red"},{"p0":[241.5,-123],"p1":[240.5,-164],"team":"red"},{"p0":[240.5,-164],"p1":[-22.5,-35],"team":"red"}],"discs":[{"radius":9,"invMass":0.8,"damping":0.989,"cGroup":["ball","kick","score"]},{"pos":[242,117],"radius":7,"bCoef":1.4,"invMass":0},{"pos":[242,-117],"radius":7,"bCoef":1.4,"invMass":0},{"pos":[340.13302721650007,-141.38010906609],"radius":3,"invMass":0,"color":"FF"},{"pos":[343.90229019520007,143.62151209452],"radius":3,"invMass":0,"color":"FF"}],"playerPhysics":{"bCoef":0.2,"invMass":0.3,"acceleration":0.12,"kickStrength":9.3},"ballPhysics":"disc0","spawnDistance":473,"redSpawnPoints":[[-464,-80],[-465,-40],[-465,0],[-465,40],[-464,80]],"blueSpawnPoints":[[470,-80],[470,-30],[470,20],[470,70],[253,-4]]}`;

/*------------------------------ END OF STADIUMS ----------------------------*/

// ------------------------------------------------
// Global Variables
// ------------------------------------------------
var roomName = "⚽ Real Soccer|Curvas e Powershot [LNRS]";
var maxPlayers = 20;
var roomPublic = true;
var token = "";
var roomLink = "";
var gameTime = 7; //default game time if 0 is selected
var map = "RSR";
var geo = [{code: "br", lat: -23.5483896, lon: -46.6388893}];
var superAdmins = [];
var gameStopped = false;

var room = HBInit({
	roomName: roomName,
	maxPlayers: maxPlayers,
	public: roomPublic,
	geo: geo[0],
	noPlayer: true,
	token: token
});


// -------------------------------------------------
// Classes
// -------------------------------------------------
class Game {
	constructor() {
		this.time = 0;
		this.paused = false;
		this.ballRadius;
		this.rsTouchTeam = 0;
		this.rsActive = true;
		this.rsReady = false;
		this.rsCorner = false;
		this.rsGoalKick = false;
		this.rsSwingTimer = 1000;
		this.rsTimer;
		this.ballOutPositionX;
		this.ballOutPositionY;
		this.throwInPosY;
		this.outStatus = "";
		this.warningCount = 0;
		this.bringThrowBack = false;
		this.extraTime = false;
		this.extraTimeCount = 0;
		this.extraTimeEnd;
		this.extraTimeAnnounced = false;
		this.lastPlayAnnounced = false;
		this.boosterState;
		this.throwinKicked = false;
		this.pushedOut;
		this.lastKickerId;
		this.lastKickerName;
		this.lastKickerTeam;
		this.secondLastKickerId;
		this.secondLastKickerName;
		this.secondLastKickerTeam;
		this.redScore = 0;
		this.blueScore = 0;
		this.powershotCounter = 0;
		this.powershotID = 0;
		this.powershotTrigger = false;
	}
	
	updateLastKicker(id, name, team) {
		this.secondLastKickerId = this.lastKickerId;
		this.secondLastKickerName = this.lastKickerName;
		this.secondLastKickerTeam = this.lastKickerTeam;
		
		this.lastKickerId = id;
		this.lastKickerName = name;
		this.lastKickerTeam = team;
	}
}

room.setCustomStadium(getRealSoccerMap());
room.setScoreLimit(0);
room.setTimeLimit(7);

room.onRoomLink = function(url) {
	roomLink = url;
	console.log(roomLink);
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
	if (byPlayer != null) {
		map = "custom";
	}
	else {
		map = "RSR";
	}
	if (newStadiumName === "Penalti [RSR]") {
		map = "custom";
	}
}

room.onPlayerJoin = function(player) {	
	console.log(player.name + " joined the room");
	whisper("Bem vindo para a sala Real Soccer X5 da LNRS, aqui temos curvas e chutes potentes. ", player.id, 0x61ddff, "bold", 0);
	whisper("Digite !help para ver os comandos.", player.id, 0x61e7ff, "bold", 0);
                              
	displayAdminMessage();
}

room.onPlayerLeave = function(player) {
	displayAdminMessage();
	console.log(player.name + " saiu da sala");

	let index = superAdmins.indexOf(player.id);
	if (index > -1) {
		sleep(100).then(() => {
			superAdmins.splice(index, 1);
		});
	}
}

room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
	if (byPlayer != null) {
		if (changedPlayer.id != byPlayer.id) {
			if (superAdmins.indexOf(changedPlayer.id) > -1) {
				room.kickPlayer(byPlayer.id, "Você não pode remover o Super Admin.", false);
				room.setPlayerAdmin(changedPlayer.id, true);
			}
		}
		else {
			if (changedPlayer.admin == false) {
				let index = superAdmins.indexOf(changedPlayer.id);
				if (index > -1) {
				  superAdmins.splice(index, 1);
				}
			}
		}
	}
}

room.onGameStart = function(byPlayer) {
	if (map == "RSR") {
		room.setDiscProperties(0, {invMass: 1.05});
		if (byPlayer == null) {
			game = new Game();	
			announce("Duração de jogo setada em " + gameTime + " minutos");
		}
		else {
			if (room.getScores().timeLimit != 0) {
				gameTime = room.getScores().timeLimit / 60;
			}
			else {
				gameTime = 7;
			}
			room.stopGame();
			room.setTimeLimit(0);			
			room.startGame();
		}
	}
}

room.onGameStop = function(byPlayer) {
	gameStopped = false;
	if (map == "RSR") {
		if (byPlayer != null) {
			room.setTimeLimit(gameTime);
		}
	}}

room.onPlayerBallKick = function(player) {	
	if (map == "RSR") {
		game.rsTouchTeam = player.team;
		game.updateLastKicker(player.id, player.name, player.team);
		
		//=========== POWERSHOT CODE ===========
		if (powerShotMode == true) {
			if (game.powershotCounter > 50) {
				room.setDiscProperties(0, {xgravity: -room.getPlayerDiscProperties(player.id).yspeed/30, ygravity: -room.getPlayerDiscProperties(player.id).yspeed/30, color: 0xffffff});
				game.rsSwingTimer = 50;
				room.sendAnnouncement("POWERSHOT APLICADO!", player.pm, 0x33dddd, "bold", 1);
			}
			game.powershotCounter = 0;
			game.powershotID = 0;
			game.powershotTrigger = false;
			if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) != 1.05) {
				room.setDiscProperties(0, {invMass: 1.05});
			}
		}
		//=========== POWERSHOT CODE ===========
		
		if (game.rsReady == true) {
			var players = room.getPlayerList().filter((player) => player.team != 0);
			players.forEach(function(player) {			
				if (room.getPlayerDiscProperties(player.id).invMass.toFixed(1) != 0.3) {
					room.setPlayerDiscProperties(player.id, {invMass: 0.3});
				}
			});
		}
			
		if (game.rsActive == false && game.rsReady == true && (game.rsCorner == true || game.rsGoalKick == true)) { // make game active on kick from CK/GK
			game.boosterState = true;
			
			game.rsActive = true;
			game.rsReady = false;
			room.setDiscProperties(1, {x: 2000, y: 2000 });
			room.setDiscProperties(2, {x: 2000, y: 2000 });
			room.setDiscProperties(0, {color: "0xffffff"});
			game.rsTimer = 1000000;
			game.warningCount++;	
			
			// set gravity for real soccer corners/goalkicks
			if (game.rsCorner == true) {
				room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/16*-1, ygravity: room.getPlayerDiscProperties(player.id).yspeed/16*-1});
			}	
			if (game.rsGoalKick == true) {			
				room.setDiscProperties(0, {xgravity: 0, ygravity: room.getPlayerDiscProperties(player.id).yspeed/20*-1});		
			}
			
			game.rsCorner = false;
			game.rsGoalKick = false;
			game.outStatus = "";		
		}		
		
		if (game.rsActive == false && (game.outStatus == "redThrow" || game.outStatus == "blueThrow")) { 		
			game.outStatus = "";
			game.rsActive = true;
			game.rsReady = false;
			room.setDiscProperties(0, {color: "0xffffff"});
			game.rsTimer = 1000000;
			game.warningCount++;			
		}	
	}
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {	
	if (superAdmins.indexOf(kickedPlayer.id) > -1 && byPlayer != null) {
		room.kickPlayer(byPlayer.id, "Você não pode kickar um Super Admin", false);
		room.clearBans();
	}
}

room.onPlayerChat = function(player, message, byPlayer) {
	console.log(player.name + ": " + message);
	if (message.startsWith("!")) {
		message = message.substr(1);
		let args = message.split(" ");
		
		if (args[0] == "admin" && args.length == 1 && allowPublicAdmin == true) {
			if (isAdminPresent() == false) {
				room.setPlayerAdmin(player.id, true);
			}
			else {
				whisper("Um ADM já está presente ou o comando está desabilitado.", player.id);
			}
		}
		else if (args[0] == "admin" && args.length == 2) {
			if (args[1] == superAdminCode) {
				room.setPlayerAdmin(player.id, true);
				if (superAdmins.indexOf(player.id) === -1) {
					superAdmins.push(player.id);
				}
				announce(player.name + " ganhou Super Admin");
			}
		}
		else if (args[0] == "clearbans") {
			if (player.admin) {
				room.clearBans();
				announce("Os banimentos foram limpos por " + player.name);
			}
			else {
				whisper("Apenas Admins podem o usar.", player.id);
			}
		}
		else if (args[0] == "court" && args.length == 1) {
			whisper("O background atual é " + mapBGColor);
		}
		else if (args[0] == "court" && args.length == 2 && player.admin) {
			if (room.getScores() == null) {
				if (args[1] == "reset") {
					mapBGColor = "86A578";
					announce("O background foi resetado por " + player.name);
				}
				else {
					mapBGColor = args[1];
					announce("A cor do background agora é " + args[1] + " por " + player.name);
				}
				room.setCustomStadium(getRealSoccerMap());				
			}
			else {
				whisper("Você não pode alterar o background enquanto um jogo está ocorrendo.", player.id);
			}
		}
		else if (args[0] == "swap") {
			if (player.admin) {
				if (args.length == 1) {
					var players = room.getPlayerList().filter((player) => player.id != 0 );
					if ( players.length == 0 ) return false;
					players.forEach(function(player) {	
						if (player.team == 1) {
							room.setPlayerTeam(player.id, 2);
						}
						if (player.team == 2) {
							room.setPlayerTeam(player.id, 1);
						}
					});
					announce("Os times foram invertidos");
				}
			}
			else {
				whisper("Apenas admin pode usar.", player.id);
			}
		}
		else if (args[0] == "setpassword" && player.admin) {
			if (superAdmins.indexOf(player.id) > -1) {
				room.setPassword(args[1]);
				roomPassword = args[1];
				announce("A senha foi trocada por " + player.name);
			}
			else {
				whisper("Apenas Super Admins podem mudar a senha", player.id);
			}
		}
		else if (args[0] == "clearpassword" && player.admin) {
			if (superAdmins.indexOf(player.id) > -1) {
				room.setPassword(null);
				roomPassword = null;
				announce("A senha foi limpa por " + player.name);
			}
			else {
				whisper("Apenas Super Admins podem limpar a senha", player.id);
			}
		}
		else if (args[0] == "rs" && player.admin) {
			if (room.getScores() == null) {
				room.setCustomStadium(getRealSoccerMap());
			}
			else {
				whisper("Não pode mudar o mapa enquanto um jogo está em progresso.", player.id);
			}
		}
		else if (args[0] == "rr" && player.admin) {
			room.stopGame();
			room.startGame();
		}
		else if (args[0] == "penalti") {
			room.setCustomStadium(penalti);
		}
		else if (args[0] == "ajuda") {
			whisper("Para usar o Powershot, segure a bola por 2 segundos; há curva apenas no escanteio, powershot e tiro de meta", player.id);
		}
		else if (args[0] == "bb") {
			room.kickPlayer(player.id, "Adeus", false);
		}	
		else if ((args[0] == "powershot" || args[0] == "ps") && player.admin) {
			if (powerShotMode == false) {
				powerShotMode = true;
				announce("POWERSHOT MODE ATIVADO POR " + player.name, null, 0x00FF00);
			}
			else {
				powerShotMode = false;
				announce("POWERSHOT MODE DESATIVADO POR " + player.name, null, 0xFF0000);
			}
		}		
		else if (args[0] == "help") {
			displayHelp(player.id, args[1]);
		}
		else if (args[0] == "super") {
			let superMsg = "Super Admins: ";
			superAdmins.forEach(function(id) {
				if (room.getPlayer(id) != null || room.getPlayer(id) != undefined) {
					superMsg = superMsg + room.getPlayer(id).name + ", ";
				}
			});
			if (superAdmins.length > 0) {
				superMsg = superMsg.slice(0, -2); 
			}
			else {
				superMsg = "Não há Super Admins presentes.";
			}
			whisper(superMsg, player.id);
		}
		return false;
	}
	if (message.startsWith("t ")) {
		teamMsg = message.substring(1).trim();
		if (player.team == 1) {
			var players = room.getPlayerList().filter((player) => player.team == 1);
			players.forEach(function(teamPlayer) {
				room.sendAnnouncement("[Team] " + player.name + ": " + teamMsg, teamPlayer.id, 0xED6A5A, "normal", 1);
			});
		}
		if (player.team == 2) {
			var players = room.getPlayerList().filter((player) => player.team == 2);
			players.forEach(function(teamPlayer) {
				room.sendAnnouncement("[Team] " + player.name + ": " + teamMsg, teamPlayer.id, 0x5995ED, "normal", 1);
			});
		}
		if (player.team == 0) {
			var players = room.getPlayerList().filter((player) => player.team == 0);
			players.forEach(function(teamPlayer) {
				room.sendAnnouncement("[Spec] " + player.name + ": " + teamMsg, teamPlayer.id, 0xdee7fa, "normal", 1);
			});
		}
		return false;
	}
	if (message.startsWith("@@")) {
		message = message.substr(2).trim();
		if (message.indexOf(' ') !== -1) {
			let args = message.match(/^(\S+)\s(.*)/).slice(1);
			
			if (args.length > 1) {
				var pmMsg = args[1];
				var players = room.getPlayerList();
				var pmSent = false;
				players.forEach(function(pmPlayer) {
					if (pmPlayer.name === args[0] || pmPlayer.name === args[0].replace(/_/g, ' ')) {
						whisper("[PM > " + pmPlayer.name + "] " + player.name + ": " + pmMsg, player.id, 0xff20ff, "normal", 1);	
						whisper("[PM] " + player.name + ": " + pmMsg, pmPlayer.id, 0xff20ff, "normal", 1);
						pmSent = true;					
					}
				});
				if (pmSent == false) {
					whisper("O usuário não foi encontrado '" + args[0] + "'", player.id, 0xff20ff, "normal", 1);
				}
				return false;
			}
		}			
	}
}

function displayHelp(id, selection) {
	if (selection == null) {
		whisper("Comandos: !rs, !rr, !bb, !powershot, !ajuda, !discord, !admin, !setpassword, !clearpassword, !super, !clearbans, !swap, t [team chat msg], !court, !court [hexcolor], !court reset", id, null, "small");
	}
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
	if (map == "RSR") {
		if (room.getScores() != null) {
			if (game.rsActive == false) {
				room.getPlayerList().forEach(function(player) {
					if (player != undefined) {
						if (game.rsGoalKick == true || game.rsCorner == true) {
							room.setPlayerDiscProperties(player.id, {invMass: 9999999});
						}
					}
				});
			}
		}
	}
}

room.onTeamGoal = function(team) {
	if (map == "RSR") {
		game.rsActive = false;
		
		let goalTime = secondsToMinutes(Math.floor(room.getScores().time));
		let scorer;
		let assister = "";
		let goalType;
		if (team == 1) {
			if (game.lastKickerTeam == 1) { //if goal type is goal
				goalType = "GOL!";
				scorer = game.lastKickerName;
				avatarCelebration(game.lastKickerId, "O");
				if (game.secondLastKickerTeam == 1 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
					assister = " (Assistência: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "");
				}
			}		
			if (game.lastKickerTeam == 2) { //if goal type is owngoal
				goalType = "GOL CONTRA!";
				scorer = game.lastKickerName;
				avatarCelebration(game.lastKickerId, "O");
				if (game.secondLastKickerTeam == 1) { // if owngoal was assisted
					assister = " (Assistência: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "");
				}
			}
			game.redScore++;
		}
		if (team == 2) {
			if (game.lastKickerTeam == 2) { //if goal type is goal
				goalType = "GOL!";
				scorer = game.lastKickerName;
				avatarCelebration(game.lastKickerId, "O");
				if (game.secondLastKickerTeam == 2 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
					assister = " (Assistência: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "");
				}
			}		
			if (game.lastKickerTeam == 1) { //if goal type is owngoal
				goalType = "GOL CONTRA!";
				scorer = game.lastKickerName;
				avatarCelebration(game.lastKickerId, "O");
				if (game.secondLastKickerTeam == 2) { // if owngoal was assisted
					assister = " (Assistência: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "");
				}
			}
			game.blueScore++;
		}
		announce(goalType + " " + game.redScore + " - " + game.blueScore + " | " + goalTime + " | " + scorer + assister);
		game.lastKicker = undefined;
		game.secondLastKicker = undefined;
		game.lastKickerTeam = undefined;
		game.secondLastKickerTeam = undefined;
	}
}

room.onPositionsReset = function() {
	if (map == "RSR") {
		if (game.lastPlayAnnounced == true) {
			room.pauseGame(true);
			game.lastPlayAnnounced = false;
			announce("FIM");
		};
	};
}

room.onGameTick = function() {
	if (gameStopped) return;
	if (map == "RSR") {
		updateGameStatus();
		handleBallTouch();
		realSoccerRef();
		endGame();
	}
}

function realSoccerRef() {
	blockThrowIn();
	blockGoalKick();
	removeBlock(); 		
	if (game.time == gameTime * 60 && game.extraTimeAnnounced == false) {
		extraTime();
		game.extraTimeAnnounced = true;
	}
	
	if (game.time == game.extraTimeEnd && game.lastPlayAnnounced == false) {
		game.lastPlayAnnounced = true;
	}
	if (game.rsCorner == true || game.rsGoalKick == true) { //add extra time
		game.extraTimeCount++;
	}
	
	if (game.rsTimer < 99999 && game.paused == false && game.rsActive == false && game.rsReady == true) {
		game.rsTimer++;
	}
	
	if (game.rsSwingTimer < 150 && game.rsCorner == false && game.rsGoalKick == false) {
		game.rsSwingTimer++;
		if (game.rsSwingTimer > 5) {
			room.setDiscProperties(0, {xgravity: room.getDiscProperties(0).xgravity * 0.97, ygravity: room.getDiscProperties(0).ygravity * 0.97});
		}		
		if (game.rsSwingTimer == 150) {
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
		}
	}
	
	
	if (game.boosterState == true) {
		game.boosterCount++;
	}
	
	if (game.boosterCount > 30) {
		game.boosterState = false;
		game.boosterCount = 0;
		room.setDiscProperties(0, {cMask: 63});
	}
	
	
	if (room.getBallPosition().x == 0 && room.getBallPosition().y == 0) {	
		game.rsActive = true;
		game.outStatus = "";
	}
	
	if (game.rsActive == false && game.rsReady == true) { //expire barrier time
		if (game.outStatus == "redThrow") {
			if (game.rsTimer == throwTimeOut - 120) { // warning indicator
				ballWarning("0xff3f34", ++game.warningCount);
			}
			if (game.rsTimer == throwTimeOut && game.bringThrowBack == false) { // switch to blue throw
				game.outStatus = "blueThrow";
				game.rsTimer = 0;				
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				sleep(100).then(() => {
					room.setDiscProperties(0, {color: "0x0fbcf9", xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY});
				});
			}
		}
		else if (game.outStatus == "blueThrow") {
			if (game.rsTimer == throwTimeOut - 120) { // warning indicator
				ballWarning("0x0fbcf9", ++game.warningCount);
			}
			if (game.rsTimer == throwTimeOut && game.bringThrowBack == false) { // switch to red throw
				game.outStatus = "redThrow";
				game.rsTimer = 0;						
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				sleep(100).then(() => {
					room.setDiscProperties(0, {color: "0xff3f34", xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY});
				});
			}
		}
		else if (game.outStatus == "blueGK" || game.outStatus == "redGK") {
			if (game.rsTimer == gkTimeOut - 120) { // warning indicator
				if (game.outStatus == "blueGK") {
					ballWarning("0x0fbcf9", ++game.warningCount);
				}
				if (game.outStatus == "redGK") {
					ballWarning("0xff3f34", ++game.warningCount);
				}
			}
			if (game.rsTimer == gkTimeOut) {
				game.outStatus = "";
				room.setDiscProperties(0, {color: "0xffffff"});
				game.rsTimer = 1000000;							
			}
		}
		else if (game.outStatus == "blueCK" || game.outStatus == "redCK") {
			if (game.rsTimer == ckTimeOut - 120) {
				if (game.outStatus == "blueCK") {
					ballWarning("0x0fbcf9", ++game.warningCount);
				}
				if (game.outStatus == "redCK") {
					ballWarning("0xff3f34", ++game.warningCount);
				}
			}
			if (game.rsTimer == ckTimeOut) {
				game.outStatus = "";
				room.setDiscProperties(1, {x: 0, y: 2000, radius: 0});
				room.setDiscProperties(2, {x: 0, y: 2000, radius: 0});
				room.setDiscProperties(0, {color: "0xffffff"});
				game.rsTimer = 1000000;							
			}
		}
	}
	
	if (game.rsActive == true) {
		if ((room.getBallPosition().y > 611.45 || room.getBallPosition().y < -611.45)) {
			game.rsActive = false;
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			
			game.ballOutPositionX = Math.round(room.getBallPosition().x * 10) / 10;
			if (room.getBallPosition().y > 611.45) {
				game.ballOutPositionY = 400485;
				game.throwInPosY = 610;
			}
			if (room.getBallPosition().y < -611.45) {
				game.ballOutPositionY = -400485;
				game.throwInPosY = -610;
			}
			if (room.getBallPosition().x > 1130) {
				game.ballOutPositionX = 1130;
			}
			if (room.getBallPosition().x < -1130) {
				game.ballOutPositionX = -1130;
			}
			
			
			if (game.rsTouchTeam == 1) {				
				room.setDiscProperties(3, {x: game.ballOutPositionX, y: game.throwInPosY, radius: 18 });
				sleep(100).then(() => {
					game.outStatus = "blueThrow";
					game.throwinKicked = false;
					game.rsTimer = 0;
					game.rsReady = true;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY, xgravity: 0, ygravity: 0});
					//announce("ðŸ–ï¸ Throw In: ðŸ”µ Blue");
					room.setDiscProperties(0, {color: "0x0fbcf9"});				
				});	
				sleep(100).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
			else {				
				room.setDiscProperties(3, {x: game.ballOutPositionX, y: game.throwInPosY, radius: 18 });
				sleep(100).then(() => {
					game.outStatus = "redThrow";
					game.throwinKicked = false;
					game.rsTimer = 0;
					game.rsReady = true;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY, xgravity: 0, ygravity: 0});
					//announce("ðŸ–ï¸ Throw In: ðŸ”´ Red");
					room.setDiscProperties(0, {color: "0xff3f34"});				
				});	
				sleep(100).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
		}
	
		if (room.getBallPosition().x > 1161.45 && (room.getBallPosition().y > 124 || room.getBallPosition().y < -124)) {
			game.rsActive = false;	
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			room.getPlayerList().forEach(function(player) {
				room.setPlayerDiscProperties(player.id, {invMass: 100000});
			});
			
			if (game.rsTouchTeam == 1) {				
				room.setDiscProperties(3, {x: 1060, y: 0, radius: 18 });
				sleep(100).then(() => {					
					game.outStatus = "blueGK";
					game.rsTimer = 0;
					game.rsReady = true;
					//announce("ðŸ¥… Goal Kick: ðŸ”µ Blue");
					game.rsGoalKick = true;
					game.rsSwingTimer = 0;
					game.boosterCount = 0;
					game.boosterState = false;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: 1060, y: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
				});
				sleep(3000).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
			else {	
				//announce("ðŸš© Corner Kick: ðŸ”´ Red");							
				game.rsSwingTimer = 0;
				if (room.getBallPosition().y < -124) {					
					room.setDiscProperties(3, {x: 1140, y: -590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "redCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: 1140, y: -590, xspeed: 0, yspeed: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(2, {x: 1150, y: -670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
				}
				if (room.getBallPosition().y > 124) {
					room.setDiscProperties(3, {x: 1140, y: 590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "redCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: 1140, y: 590, xspeed: 0, yspeed: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(2, {x: 1150, y: 670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
				}
			}
		}
		if (room.getBallPosition().x < -1161.45 && (room.getBallPosition().y > 124 || room.getBallPosition().y < -124)) {
			game.rsActive = false;
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			room.getPlayerList().forEach(function(player) {
				room.setPlayerDiscProperties(player.id, {invMass: 100000});
			});
			
			if (game.rsTouchTeam == 1) {				
				//announce("ðŸš© Corner Kick: ðŸ”µ Blue");				
				game.rsSwingTimer = 0;
				if (room.getBallPosition().y < -124) {
					room.setDiscProperties(3, {x: -1140, y: -590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "blueCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: -1140, y: -590, xspeed: 0, yspeed: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(1, {x: -1150, y: -670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});	
				}
				if (room.getBallPosition().y > 124) {
					room.setDiscProperties(3, {x: -1140, y: 590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "blueCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: -1140, y: 590, xspeed: 0, yspeed: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(1, {x: -1150, y: 670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});		
				}				
			}
			else {				
				room.setDiscProperties(3, {x: -1060, y: 0, radius: 18 });
				sleep(100).then(() => {
					game.outStatus = "redGK";
					game.rsTimer = 0;
					game.rsReady = true;
					//announce("ðŸ¥… Goal Kick: ðŸ”´ Red");
					game.rsGoalKick = true;
					game.rsSwingTimer = 0;
					game.boosterCount = 0;
					game.boosterState = false;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: -1060, y: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
				});
				sleep(3000).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
		}
	}
}


function handleBallTouch() {
	var players = room.getPlayerList();
	var ballPosition = room.getBallPosition();
	var ballRadius = game.ballRadius;
	var playerRadius = 15;
	var triggerDistance = ballRadius + playerRadius + 0.01;
	
	for (var i = 0; i < players.length; i++) { // Iterate over all the players
		var player = players[i];
		if ( player.position == null ) continue;
		var distanceToBall = pointDistance(player.position, ballPosition);
		if ( distanceToBall < triggerDistance ) {		
			game.rsTouchTeam = player.team;
			game.throwinKicked = false;
			
			//=========== POWERSHOT CODE ===========
			if (game.rsCorner == false && game.rsGoalKick == false && game.outStatus != "blueThrow" && game.outStatus != "redThrow" && powerShotMode == true) {
				if (game.powershotID != player.id) {
					game.powershotID = player.id;
					game.powershotTrigger = false;
					game.powershotCounter = 0;
				} else {
					game.powershotCounter++;
					//room.sendAnnouncement("Powershot counter: " + game.powershotCounter, null, 0x333333, "small-bold", 0);
					if (game.powershotCounter > 50 && game.powershotTrigger == false && Math.round(room.getDiscProperties(0).invMass) != 2) {
						room.setDiscProperties(0, {invMass: 2, color: 0xffff00});
						room.sendAnnouncement("POWERSHOT ACTIVATED!", game.powershotID, 0x33dd33, "bold", 1);
						game.powershotTrigger = true;
					}
				}
			}
			//=========== POWERSHOT CODE ===========
			
			if (game.rsCorner == false && room.getDiscProperties(0).xgravity != 0) {
				room.setDiscProperties(0, {xgravity: 0, ygravity:0});
				game.rsSwingTimer = 10000;
			}
		} 
		//=========== POWERSHOT CODE ===========
		if ( distanceToBall > triggerDistance +2 && player.id == game.powershotID && game.powershotTrigger == true && powerShotMode == true) {
			game.powershotTrigger = false;
			game.powershotCounter = 0;
			game.powershotid = 0;
			if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) != 1.05) {
				room.setDiscProperties(0, {invMass: 1.05, color: 0xffffff});
				room.sendAnnouncement("POWERSHOT CANCELLED!", game.powershotID, 0xdd3333, "bold", 2);
			}
		}
		//=========== POWERSHOT CODE ===========
	}
}

function updateGameStatus() {
	game.time = Math.floor(room.getScores().time);
	game.ballRadius = room.getDiscProperties(0).radius;
}


function announce(msg, targetId, color, style, sound) {
	if (color == null) {
		color = 0xFFFD82;
	}
	if (style == null) {
		style = "bold";
	}
	if (sound == null) {
		sound = 0;
	}
	room.sendAnnouncement(msg, targetId, color, style, sound);
	console.log("Announce: " + msg);
}

function whisper(msg, targetId, color, style, sound) {
	if (color == null) {
		color = 0x66C7FF;
	}
	if (style == null) {
		style = "normal";
	}
	if (sound == null) {
		sound = 0;
	}
	room.sendAnnouncement(msg, targetId, color, style, sound);
	if (room.getPlayer(targetId) != null) {
		console.log("Whisper -> " + room.getPlayer(targetId).name + ": " + msg);
	}
}

function isAdminPresent() {
	var players = room.getPlayerList();
	if (players.find((player) => player.admin) != null) {
		return true;
	}
	else {
		return false;
	}
}

function displayAdminMessage() {
	if (isAdminPresent() == false && allowPublicAdmin == true) {
		announce("No admin present: Type !admin to take control");
	}
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function ballWarning(origColour, warningCount) {
	sleep(200).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xffffff"});
		}
	});
	sleep(400).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(600).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xffffff"});
		}
	});
	sleep(800).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1000).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xffffff"});
		}
	});
	sleep(1200).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1400).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xffffff"});
		}
	});
	sleep(1600).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1675).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xffffff"});
		}
	});
	sleep(1750).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
}

function endGame() {
    if (game.redScore == game.blueScore && game.lastPlayAnnounced == true) {
	game.lastPlayAnnounced = false;
	gameStopped = true;
        room.stopGame();
        announce("Utilize !swap para mudar os times de lado.");
        announce("O ADM deve digitar !penalti para que joguemos os penaltis.")
    };
    if (game.redScore > game.blueScore && game.lastPlayAnnounced == true) {
	game.lastPlayAnnounced = false;
	gameStopped = true;
        room.stopGame();
        announce("Red " + game.redScore + " vs " + game.blueScore + " Blue" + " | Fim de jogo | ");
        var players = room.getPlayerList().filter((player) => player.id != 0 );
        if ( players.length == 0 ) return false;
        players.forEach(function(player) {
                      if (player.team == 2) {
                                room.setPlayerTeam(player.id, 0);
                      };
            });
    };
    if (game.redScore < game.blueScore && game.lastPlayAnnounced == true) {
	game.lastPlayAnnounced = false;
	gameStopped = true;
        room.stopGame();
        announce("Red " + game.redScore + " vs " + game.blueScore + " Blue" + " | Fim de jogo | ");
        var players = room.getPlayerList().filter((player) => player.id != 0 );
        if ( players.length == 0 ) return false;
        players.forEach(function(player) {
                      if (player.team == 1) {
                                room.setPlayerTeam(player.id, 0);
                      };
                 });
            };
};

function extraTime() {
	var extraSeconds = Math.ceil(game.extraTimeCount / 60);
	game.extraTimeEnd = (gameTime * 60) + extraSeconds;
}

function avatarCelebration(playerId, avatar) {
	room.setPlayerAvatar(playerId, avatar);
	sleep(250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(1000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(1250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(1500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(1750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(2000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(2250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(2500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(2750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(3000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(3250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
}

function secondsToMinutes(time) {
	// Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function blockThrowIn() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	if (room.getBallPosition().y < 0) { // top throw line
		if (game.outStatus == "redThrow") {
			players.forEach(function(player) {
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).y < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y < -460) {
						room.setPlayerDiscProperties(player.id, {y: -445});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(17).x != 1149) { // show top red line
					room.setDiscProperties(17, {x: 1149});
				}
				if (room.getDiscProperties(19).x != -1149) { // hide top blue line
					room.setDiscProperties(19, {x: -1149});
				}
			});
		}
setInterval ( () => {
	room.sendAnnouncement("💡 Entre na Comunidade!", null, announcementColor, "bold", null);
	room.sendAnnouncement('📲 https://discord.gg/treBQ2QQ', null, announcementColor, "bold", null);
},  300000)
		if (game.outStatus == "blueThrow") {
			players.forEach(function(player) {
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).y < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y < -460) {
						room.setPlayerDiscProperties(player.id, {y: -445});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(19).x != 1149) { // show top blue line
					room.setDiscProperties(19, {x: 1149});
				}
				if (room.getDiscProperties(17).x != -1149) { // hide top red line
					room.setDiscProperties(17, {x: -1149});
				}
			});
		}
	}
	if (room.getBallPosition().y > 0) { // bottom throw line
		if (game.outStatus == "redThrow") {
			players.forEach(function(player) {
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).y > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y > 460) {
						room.setPlayerDiscProperties(player.id, {y: 445});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(21).x != 1149) { // show bottom red line
					room.setDiscProperties(21, {x: 1149});
				}
				if (room.getDiscProperties(23).x != -1149) { // hide bottom blue line
					room.setDiscProperties(23, {x: -1149});
				}
			});
		}
		if (game.outStatus == "blueThrow") {
			players.forEach(function(player) {
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).y > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y > 460) {
						room.setPlayerDiscProperties(player.id, {y: 445});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(23).x != 1149) { // show bottom blue line
					room.setDiscProperties(23, {x: 1149});
				}
				if (room.getDiscProperties(21).x != -1149) { // hide bottom red line
					room.setDiscProperties(21, {x: -1149});
				}
			});
		}		
	}	
}


function blockGoalKick() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	if (room.getBallPosition().x < 0) { // left side red goal kick
		if (game.outStatus == "redGK") {
			players.forEach(function(player) {
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).x < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
						room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
					}
					if (player.position.x < -840 && player.position.y > -320 && player.position.y < 320) {
						room.setPlayerDiscProperties(player.id, {x: -825});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
			});
		}
	}
	if (room.getBallPosition().x > 0) { // right side blue goal kick
		if (game.outStatus == "blueGK") {
			players.forEach(function(player) {
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).x > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
						room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
					}
					if (player.position.x > 840 && player.position.y > -320 && player.position.y < 320) {
						room.setPlayerDiscProperties(player.id, {x: 825});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
			});
		}		
	}	
}



function removeBlock() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	if (game.outStatus == "") {
		players.forEach(function(player) {
			if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
				room.setPlayerDiscProperties(player.id, {cGroup: 2});
			}
			if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 4) {
				room.setPlayerDiscProperties(player.id, {cGroup: 4});
			}
		});
		if (room.getDiscProperties(17).x != -1149) { // hide top red line
			room.setDiscProperties(17, {x: -1149});
		}
		if (room.getDiscProperties(19).x != -1149) { // hide top blue line
			room.setDiscProperties(19, {x: -1149});
		}
		if (room.getDiscProperties(21).x != -1149) { // hide bottom red line
			room.setDiscProperties(21, {x: -1149});
		}
		if (room.getDiscProperties(23).x != -1149) { // hide bottom blue line
			room.setDiscProperties(23, {x: -1149});
		}		
	}
}



