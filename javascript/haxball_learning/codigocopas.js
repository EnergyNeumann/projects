/* VARIABLES */

/* ROOM */

const roomName = 'copa do mundo (Nome de país)';
const maxPlayers = 9;
const roomPublic = true;
const token = ""; // Insert token here

var roomWebhook = ''; // this webhook is used to send the details of the room (chat, join, leave) ; it should be in a private discord channel
var gameWebhook = ''; // this webhook is used to send the summary of the games ; it should be in a public discord channel
var fetchRecordingVariable = true;
var timeLimit = 3;
var scoreLimit = 3;

var gameConfig = {
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: roomPublic,
    noPlayer: true,
}

if (typeof token == 'string' && token.length == 39) {
    gameConfig.token = token;
}

var room = HBInit(gameConfig);

const trainingMap = '{"name":"Futsal x1 x2 Sem lag","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":0,"height":0,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-368,"y":65,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"EFB810"},{"x":-368,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"EFB810"},{"x":-368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":368,"y":65,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"EFB810"},{"x":368,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"EFB810"},{"x":368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":65,"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":-65,"trait":"line","color":"B6B6B8"},{"x":368,"y":171,"bCoef":1,"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1,"trait":"ballArea"},{"x":0,"y":171,"bCoef":0,"trait":"line","color":"B6B6B8"},{"x":0,"y":-171,"bCoef":0,"trait":"line","color":"B6B6B8"},{"x":0,"y":65,"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":-65,"trait":"kickOffBarrier","color":"B6B6B8"},{"x":377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":199,"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":65,"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":-65,"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":-199,"trait":"kickOffBarrier","color":"B6B6B8"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180,"color":"B6B6B8"},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":-65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":-171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":371,"y":171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":-65,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-371,"y":-171,"bCoef":0,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"curve":180,"color":"B6B6B8","cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":8,"v1":9,"curve":-180,"color":"B6B6B8","cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":0,"v1":10,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":171},{"v0":3,"v1":11,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-171},{"v0":12,"v1":13,"curve":0,"vis":true,"color":"B6B6B8","bCoef":0,"trait":"line"},{"v0":9,"v1":8,"curve":-180,"vis":true,"color":"B6B6B8","bCoef":0,"trait":"line"},{"v0":15,"v1":14,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"EFB810","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"EFB810","bCoef":0,"trait":"line"},{"v0":16,"v1":17,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":18,"v1":19,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":20,"v1":21,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":22,"v1":23,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":24,"v1":25,"color":"B6B6B8","trait":"kickOffBarrier"},{"v0":26,"v1":27,"color":"B6B6B8","trait":"kickOffBarrier"},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":29,"v1":30,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":33,"v1":34,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":34,"v1":35,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":36,"v1":37,"curve":94.0263701017,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":39,"v1":38,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":40,"v1":41,"curve":-94.026370101699,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":41,"curve":0,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":47,"v1":46,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":-94.026370101699,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":94.026370101699,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":390},{"v0":55,"v1":54,"curve":-180.00692920292,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.00218240614,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-179.64823645332,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.35758668147,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.02357323962,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.00924102399,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-180.06885755885,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":60,"v1":61,"curve":-180.02948353257,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-375},{"v0":63,"v1":62,"curve":-179.99869069543,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.99939258776,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-180.08826047163,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.91186753664,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.99528711105,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99743836358,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-179.98626041101,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":68,"v1":69,"curve":-179.99175181595,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":375},{"v0":71,"v1":70,"curve":-180.04715562398,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.95294709391,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.95715750564,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.89943871875,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-179.94773754738,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.98221351296,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.4151727218,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":76,"v1":77,"curve":-179.58764458796,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":79,"v1":78,"curve":-180.00086646359,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-180.01965986376,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.03532601389,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-179.99380079,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.0044468452,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01386779847,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":85,"v1":84,"curve":-180.05158287563,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":-180.01212223878,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":277.5},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":110,"v1":111,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":112,"v1":113,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":114,"v1":115,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":116,"v1":117,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":118,"v1":119,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":371},{"v0":120,"v1":121,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":371},{"v0":122,"v1":123,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-371},{"v0":124,"v1":125,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-371}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"EFB810","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FFCC00","bCoef":0.4,"invMass":1.5,"damping":0.99}}';
const classicMap = '{"name":"Futsal x3 Sem lag","width":648,"height":270,"spawnDistance":350,"bg":{"type":"","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0,"color":"434F56"},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FF6666","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["ball"],"trait":"goalNet","curve":-28.940588200131774,"color":"FF6666","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["ball"],"trait":"goalNet","curve":-28.940588200131774,"color":"FF6666","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FF6666","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"479BD8","pos":[700,-80]},{"x":590,"y":-80,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"479BD8","pos":[700,-80]},{"x":590,"y":80,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"479BD8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"479BD8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":-80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},{"x":550,"y":240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":550,"y":-80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},{"x":0,"y":80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":550,"y":80,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"FF6666","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"curve":-28.940588200131774,"color":"FF6666","cMask":["ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"FF6666","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"479BD8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"curve":28.940588200131774,"color":"479BD8","cMask":["ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"479BD8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":550},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":54,"v1":55,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":57,"v1":56,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":58,"v1":59,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":55,"v1":59,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":61,"v1":60,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":62,"v1":63,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":66,"v1":67,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":68,"v1":69,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":70,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":73,"v1":74,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":76,"v1":75,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":78,"v1":77,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":79,"v1":80,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":81,"v1":82,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":83,"v1":84,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":86,"v1":85,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":85,"v1":86,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":88,"v1":87,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":87,"v1":88,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":90,"v1":89,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":89,"v1":90,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":92,"v1":91,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":91,"v1":92,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":94,"v1":93,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":93,"v1":94,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":96,"v1":95,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":95,"v1":96,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":98,"v1":97,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":97,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":100,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":99,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":102,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":101,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":104,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":103,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":106,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":105,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":108,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":107,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":110,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":109,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":112,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":111,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":114,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":113,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":116,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":115,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5}],"goals":[{"p0":[-556.3,-80],"p1":[-556.3,80],"team":"red"},{"p0":[556.3,80],"p1":[556.3,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FF6666","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"FF6666","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"479BD8","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"479BD8","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-642,"bCoef":0.1},{"normal":[-1,0],"dist":-644,"bCoef":0.1},{"normal":[1,0],"dist":-642,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-643,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.5},"ballPhysics":{"radius":6.2,"bCoef":0.4,"invMass":1.6,"damping":0.99,"color":"FF9214"}}';
const bigMap = '{"name":"Futsal x3 Sem lag","width":648,"height":270,"spawnDistance":350,"bg":{"type":"","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0,"color":"434F56"},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FF6666","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["ball"],"trait":"goalNet","curve":-28.940588200131774,"color":"FF6666","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["ball"],"trait":"goalNet","curve":-28.940588200131774,"color":"FF6666","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FF6666","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"479BD8","pos":[700,-80]},{"x":590,"y":-80,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"479BD8","pos":[700,-80]},{"x":590,"y":80,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"479BD8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"479BD8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":-80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},{"x":550,"y":240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":550,"y":-80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},{"x":0,"y":80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":550,"y":80,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"FF6666","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"curve":-28.940588200131774,"color":"FF6666","cMask":["ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"FF6666","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"479BD8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"curve":28.940588200131774,"color":"479BD8","cMask":["ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"479BD8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":550},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":54,"v1":55,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":57,"v1":56,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":58,"v1":59,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":55,"v1":59,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":61,"v1":60,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":62,"v1":63,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":66,"v1":67,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":68,"v1":69,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":70,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":73,"v1":74,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":76,"v1":75,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":78,"v1":77,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":79,"v1":80,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":81,"v1":82,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":83,"v1":84,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":86,"v1":85,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":85,"v1":86,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":88,"v1":87,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":87,"v1":88,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":90,"v1":89,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":89,"v1":90,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":92,"v1":91,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":91,"v1":92,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":94,"v1":93,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":93,"v1":94,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":96,"v1":95,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":95,"v1":96,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":98,"v1":97,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":97,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":100,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":99,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":102,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":101,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":104,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":103,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":106,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":105,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":108,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":107,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":110,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":109,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":112,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":111,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":114,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":113,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":116,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":115,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5}],"goals":[{"p0":[-556.3,-80],"p1":[-556.3,80],"team":"red"},{"p0":[556.3,80],"p1":[556.3,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FF6666","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"FF6666","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"479BD8","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"479BD8","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-642,"bCoef":0.1},{"normal":[-1,0],"dist":-644,"bCoef":0.1},{"normal":[1,0],"dist":-642,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-643,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.5},"ballPhysics":{"radius":6.2,"bCoef":0.4,"invMass":1.6,"damping":0.99,"color":"FF9214"}}';
var bigMapObj = JSON.parse(bigMap);

room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
room.setKickRateLimit(6, 0, 0);

var masterPassword = 349;
var roomPassword = '';

/* OPTIONS */

var drawTimeLimit = Infinity;
var maxAdmins = 1;
var disableBans = true;
var maxInactivity = 5;
var debugMode = false;

var hideClaimMessage = true;
var mentionPlayersUnpause = true;

/* OBJECTS */

class Goal {
    constructor(time, team, striker, assist) {
        this.time = time;
        this.team = team;
        this.striker = striker;
        this.assist = assist;
    }
}

class Game {
    constructor() {
        this.date = Date.now();
        this.scores = room.getScores();
        this.playerComp = getStartingLineups();
        this.goals = [];
        this.rec = room.startRecording();
        this.touchArray = [];
    }
}

class PlayerComposition {
    constructor(player, auth, timeEntry, timeExit) {
        this.player = player;
        this.auth = auth;
        this.timeEntry = timeEntry;
        this.timeExit = timeExit;
        this.inactivityTicks = 0;
        this.GKTicks = 0;
    }
}

class BallTouch {
    constructor(player, time, goal, position) {
        this.player = player;
        this.time = time;
        this.goal = goal;
        this.position = position;
    }
}

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const State = { PLAY: 0, PAUSE: 1, STOP: 2 };
const Role = { PLAYER: 0, ADMIN_TEMP: 1, ADMIN_PERM: 2, MASTER: 3 };
const HaxNotification = { NONE: 0, CHAT: 1, MENTION: 2 };
const Situation = { STOP: 0, KICKOFF: 1, PLAY: 2, GOAL: 3 };

var gameState = State.STOP;
var playSituation = Situation.STOP;
var goldenGoal = false;

var players = [];
var teamRed = [];
var teamBlue = [];
var teamSpec = [];

var banList = [];

/* STATS */

var possession = [0, 0];
var actionZoneHalf = [0, 0];

/* AUTH */

var authArray = [];
var adminList = [
    // ['INSERT_AUTH_HERE_1', 'NICK_OF_ADMIN_1'],
    // ['INSERT_AUTH_HERE_2', 'NICK_OF_ADMIN_2'],
];
var masterList = [
    // 'INSERT_MASTER_AUTH_HERE',
    // 'INSERT_MASTER_AUTH_HERE_2'
];

/* COMMANDS */

var commands = {
    help: {
        aliases: ['commands'],
        roles: Role.PLAYER,
        desc: `
    Este comando mostra todos os comandos disponíveis. Ele também pode mostrar a descrição de um comando em particular.
Exemplo: \'!help bb\' mostrará a descrição do comando \'bb\'.`,
        function: helpCommand,
    },
    claim: {
        aliases: [],
        roles: Role.PLAYER,
        desc: false,
        function: masterCommand,
    },
    bb: {
        aliases: ['bye', 'gn', 'cya'],
        roles: Role.PLAYER,
        desc: `
    Este comando faz você sair instantaneamente (use recomendado).`,
        function: leaveCommand,
    },
    rr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command restarts the game.`,
        function: restartCommand,
    },
    franr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da frança red`,
        function: franrCommand,
    },
    franb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da frança blue`,
        function: franbCommand,
    },
    brar: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do brasil red`,
        function: brarCommand,
    },
    brab: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do brasil blue`,
        function: brabCommand,
    },
    itar: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da itália red`,
        function: itarCommand,
    },
    itab: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da itália blue`,
        function: itabCommand,
    },
    mexr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do méxico red`,
        function: mexrCommand,
    },
    mexb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do méxico blue`,
        function: mexbCommand,
    },
    holr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da holanda red`,
        function: holrCommand,
    },
    holb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da holanda blue`,
        function: holbCommand,
    },
    urur: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do uruguai red`,
        function: ururCommand,
    },
    urub: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do uruguai blue`,
        function: urubCommand,
    },
    aler: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da alemanha red`,
        function: alerCommand,
    },
    aleb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da alemanha blue`,
        function: alebCommand,
    },
    espr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da espanha red`,
        function: esprCommand,
    },
    espb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da espanha blue`,
        function: espbCommand,
    },
    cror: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da croácia red`,
        function: crorCommand,
    },
    crob: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da croácia blue`,
        function: crobCommand,
    },
    dinr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da dinamarca red`,
        function: dinrCommand,
    },
    dinb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da dinamarca blue`,
        function: dinbCommand,
    },
    suir: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da suiça red`,
        function: suirCommand,
    },
    suib: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da suiça blue`,
        function: suibCommand,
    },
    bulr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da bulgária red`,
        function: bulrCommand,
    },
    bulb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da bulgária blue`,
        function: bulbCommand,
    },
    qatr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do qatar red`,
        function: qatrCommand,
    },
    qatb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do qatar blue`,
        function: qatbCommand,
    },
    japr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do japão red`,
        function: japrCommand,
    },
    japb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do japão blue`,
        function: japbCommand,
    },
    equr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do equador red`,
        function:equrCommand,
    },
    equb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do equador blue`,
        function: equbCommand,
    },
    senr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do senegal red`,
        function: senrCommand,
    },
    senb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do senegal blue`,
        function: senbCommand,
    },
    marr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do marrocos red`,
        function: marrCommand,
    },
    marb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do marrocos blue`,
        function: marbCommand,
    },
    nigr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da nigéria red`,
        function: nigrCommand,
    },
    nigb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da nigéria blue`,
        function: nigbCommand,
    },
    rusr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da russia red`,
        function: rusrCommand,
    },
    rusb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da russia blue`,
        function: rusbCommand,
    },
    sanr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme de san marino red`,
        function: sanrCommand,
    },
    sanb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme de san marino blue`,
        function: sanbCommand,
    },
    angr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da anguilla red`,
        function: angrCommand,
    },
    angb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da anguilla blue`,
        function: angbCommand,
    },
    butr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do butão red`,
        function: butrCommand,
    },
    butb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do butão blue`,
        function: butbCommand,
    },
    hunr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da hungria red`,
        function: hunrCommand,
    },
    hunb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da hungria blue`,
        function: hunbCommand,
    },
    cubr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da cuba red`,
        function: cubrCommand,
    },
    cubb: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da cuba blue`,
        function: cubbCommand,
    },
    ingr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme da inglaterra red`,
        function: ingrCommand,
    },
    ingb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da inglaterra blue`,
        function: ingbCommand,
    },
    barr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do barbádos red`,
        function: barrCommand,
    },
    barb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do barbádos blue`,
        function: barbCommand,
    },
    camr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do camarões red`,
        function: camrCommand,
    },
    camb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do camarões blue`,
        function: cambCommand,
    },
    canr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do canadá red`,
        function: canrCommand,
    },
    canb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do canadá blue`,
        function: canbCommand,
    },
    chir: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da china red`,
        function: chirCommand,
    },
    chib: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da china blue`,
        function: chibCommand,
    },
    euar: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do Estados Unidos da América red`,
        function: euarCommand,
    },
    euab: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc:`
        Este comando faz você escolher o uniforme do Estados Unidos da América blue`,
        function: euabCommand,
    },
    reir: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do reino unido red`,
        function: reirCommand,
    },
    reib: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do reino unido blue`,
        function: reibCommand,
    },
    belr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da bélgica red`,
        function: belrCommand,
    },
    belb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da bélgica blue`,
        function: belbCommand,
    },
    argr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da argentina red`,
        function: argrCommand,
    },
    argb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da argentina blue`,
        function: argbCommand,
    },
    insr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da indonésia red`,
        function: insrCommand,
    },
    insb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da indonésia blue`,
        function: insbCommand,
    },
    indr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da india red`,
        function: indrCommand,
    },
    indb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da india blue`,
        function: indbCommand,
    },
    polr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da polônia red`,
        function: polrCommand,
    },
    polb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da polônia blue`,
        function: polbCommand,
    },
    porr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme de portugal red`,
        function: porrCommand,
    },
    porb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme de portugal blue`,
        function: porbCommand,
    },
    colr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da colômbia red`,
        function: colrCommand,
    },
    colb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da colômbia blue`,
        function: colbCommand,
    },
    arar: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da arábia saudita red`,
        function: ararCommand,
    },
    arab: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da arábia saudita blue`,
        function: arabCommand,
    },
    afer: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do afeganistão red`,
        function: aferCommand,
    },
    afeb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do afeganistão blue`,
        function: afebCommand,
    },
    escr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da escócia red`,
        function: escrCommand,
    },
    escb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da escócia blue`,
        function: escbCommand,
    },
    aglr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da angola red`,
        function: aglrCommand,
    },
    aglb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da angola blue`,
        function: aglbCommand,
    },
    pdgr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do país de gales red`,
        function: pdgrCommand,
    },
    pdgb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do país de gales blue`,
        function: pdgbCommand,
    },
    monr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do mônaco red`,
        function: monrCommand,
    },
    monb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do mônaco blue`,
        function: monbCommand,
    },
    norr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da noruega red`,
        function: norrCommand,
    },
    norb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da noruega blue`,
        function: norbCommand,
    },
    laor: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme de laos red`,
        function: laorCommand,
    },
    laob: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme de laos blue`,
        function: laobCommand,
    },
    repr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da rep. tcheca red`,
        function: reprCommand,
    },
    repb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da rep. tcheca blue`,
        function: repbCommand,
    },
    unir: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da união soviética red`,
        function: unirCommand,
    },
    unib: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da união soviética blue`,
        function: unibCommand,
    },
    gabr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do gabão red`,
        function: gabrCommand,
    },
    gabb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme do gabão blue`,
        function: gabbCommand,
    },
    ganr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da gana red`,
        function: ganrCommand,
    },
    ganb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da gana blue`,
        function: ganbCommand,
    },
    malr: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da malta red`,
        function: malrCommand,
    },
    malb: {
        aliases: [],
        roles: Role.PLAYER,
        desc:`
        Este comando faz você escolher o uniforme da malta blue`,
        function: malbCommand,
    },
    rrs: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
    Este comando troca os times e reinicia o jogo.`,
        function: restartSwapCommand,
    },
    swap: {
        aliases: ['s'],
        roles: Role.ADMIN_TEMP,
        desc: `
    Este comando troca as equipes quando o jogo é interrompido.`,
        function: swapCommand,
    },
    training: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Este comando carrega o classic training stadium.`,
        function: stadiumCommand,
    },
    classic: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Este comando carrega o classic stadium.`,
        function: stadiumCommand,
    },
    big: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Este comando carrega o big stadium.`,
        function: stadiumCommand,
    },
    kickred: {
        aliases: ['kickr'],
        roles: Role.ADMIN_TEMP,
        desc: `
    Este comando chuta todos os jogadores do time vermelho, incluindo o jogador que digitou o comando. Você pode dar como argumento o motivo do chute.`,
        function: kickTeamCommand,
    },
    kickblue: {
        aliases: ['kickb'],
        roles: Role.ADMIN_TEMP,
        desc: `
    Este comando chuta todos os jogadores do time azul, incluindo o jogador que digitou o comando. Você pode dar como argumento o motivo do chute.`,
        function: kickTeamCommand,
    },
    kickspec: {
        aliases: ['kicks'],
        roles: Role.ADMIN_TEMP,
        desc: `
    Este comando chuta todos os jogadores da equipe de espectadores, incluindo o jogador que digitou o comando. Você pode dar como argumento o motivo do chute.`,
        function: kickTeamCommand,
    },
    clearbans: {
        aliases: [],
        roles: Role.MASTER,
        desc: `
    Este comando desbloqueia todos. Ele também pode desbanir um jogador em particular, adicionando seu ID como argumento.`,
        function: clearbansCommand,
    },
    bans: {
        aliases: ['banlist'],
        roles: Role.MASTER,
        desc: `
    This command shows all the players that were banned and their IDs.`,
        function: banListCommand,
    },
    admins: {
        aliases: ['adminlist'],
        roles: Role.MASTER,
        desc: `
    This command shows all the players that are permanent admins.`,
        function: adminListCommand,
    },
    setadmin: {
        aliases: ['admin'],
        roles: Role.MASTER,
        desc: `
    Este comando permite definir alguém como administrador. Ele poderá se conectar como administrador, podendo ser removido a qualquer momento pelos mestres.
Leva 1 argumento:
Argument 1: #<id> Onde <id> é o id do jogador alvo.
Example: !setadmin #3 dará admin ao jogador com o id 3.`,
        function: setAdminCommand,
    },
    removeadmin: {
        aliases: ['unadmin'],
        roles: Role.MASTER,
        desc: `
    This command allows to remove someone as admin.
It takes 1 argument:
Argument 1: #<id> Onde <id> é o id do jogador alvo.
OR
Argument 1: <number> Onde <number> é o número associado ao admin dado pelo comando 'adminList'.
Example: !removeadmin #300 will remova o administrador do player com id 300,
         !removeadmin 2 removerá o admin n°2 de acordo com o comando 'adminList'.`,
        function: removeAdminCommand,
    },
    password: {
        aliases: ['pw'],
        roles: Role.MASTER,
        desc: `
        Este comando permite adicionar uma senha à sala.
    It takes 1 argument:
    Argument 1: <password> onde <password> é a senha que você deseja para a sala.
    
    To remove the room password, simply enter '!password'.`,
        function: passwordCommand,
    },
};

/* GAME */

var lastTouches = Array(2).fill(null);
var lastTeamTouched;

var speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
var ballSpeed = 0;
var playerRadius = 15;
var ballRadius = 10;
var triggerDistance = playerRadius + ballRadius + 0.01;

/* COLORS */

var welcomeColor = 0xc4ff65;
var announcementColor = 0xffefd6;
var infoColor = 0xbebebe;
var privateMessageColor = 0xffc933;
var redColor = 0xff4c4c;
var blueColor = 0x62cbff;
var warningColor = 0xffa135;
var errorColor = 0xa40000;
var successColor = 0x75ff75;
var defaultColor = null;

/* AUXILIARY */

var checkTimeVariable = false;
var checkStadiumVariable = true;
var endGameVariable = false;
var cancelGameVariable = false;
var kickFetchVariable = false;

var stopTimeout;
var startTimeout;
var unpauseTimeout;

var emptyPlayer = {
    id: 0,
};
stadiumCommand(emptyPlayer, "!big");

var game = new Game();

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

if (typeof String.prototype.replaceAll != 'function') {
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };
}

function getDate() {
    let d = new Date();
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

/* MATH FUNCTIONS */

function getRandomInt(max) {
    // returns a random number between 0 and max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function pointDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

/* TIME FUNCTIONS */

function getMinutesGame(time) {
    var t = Math.floor(time / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getMinutesReport(time) {
    return Math.floor(Math.round(time) / 60);
}

function getMinutesEmbed(time) {
    var t = Math.floor(Math.round(time) / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getSecondsGame(time) {
    var t = Math.floor(time - Math.floor(time / 60) * 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getSecondsReport(time) {
    var t = Math.round(time);
    return Math.floor(t - Math.floor(t / 60) * 60);
}

function getSecondsEmbed(time) {
    var t = Math.round(time);
    var t2 = Math.floor(t - Math.floor(t / 60) * 60);
    return `${Math.floor(t2 / 10)}${Math.floor(t2 % 10)}`;
}

function getTimeGame(time) {
    return `[${getMinutesGame(time)}:${getSecondsGame(time)}]`;
}

function getTimeEmbed(time) {
    return `[${getMinutesEmbed(time)}:${getSecondsEmbed(time)}]`;
}

function getGoalGame() {
    return game.scores.red + game.scores.blue;
}

/* REPORT FUNCTIONS */

function findFirstNumberCharString(str) {
    let str_number = str[str.search(/[0-9]/g)];
    return str_number === undefined ? "0" : str_number;
}

function getIdReport() {
    var d = new Date();
    return `${d.getFullYear() % 100}${d.getMonth() < 9 ? '0' : ''}${d.getMonth() + 1}${d.getDate() < 10 ? '0' : ''}${d.getDate()}${d.getHours() < 10 ? '0' : ''}${d.getHours()}${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}${d.getSeconds() < 10 ? '0' : ''}${d.getSeconds()}${findFirstNumberCharString(roomName)}`;
}

function getRecordingName(game) {
    let d = new Date();
    let redCap = game.playerComp[0][0] != undefined ? game.playerComp[0][0].player.name : 'Red';
    let blueCap = game.playerComp[1][0] != undefined ? game.playerComp[1][0].player.name : 'Blue';
    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let month = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    let year = d.getFullYear() % 100 < 10 ? '0' + (d.getFullYear() % 100) : (d.getFullYear() % 100);
    let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    return `${day}-${month}-${year}-${hour}h${minute}-${redCap}vs${blueCap}.hbr2`;
}

function fetchRecording(game) {
    if (gameWebhook != "") {
        let form = new FormData();
        form.append(null, new File([game.rec], getRecordingName(game), { "type": "text/plain" }));
        form.append("payload_json", JSON.stringify({
            "username": roomName
        }));

        fetch(gameWebhook, {
            method: 'POST',
            body: form,
        }).then((res) => res);
    }
}

/* FEATURE FUNCTIONS */

function getCommand(commandStr) {
    if (commands.hasOwnProperty(commandStr)) return commandStr;
    for (const [key, value] of Object.entries(commands)) {
        for (let alias of value.aliases) {
            if (alias == commandStr) return key;
        }
    }
    return false;
}

function getPlayerComp(player) {
    if (player == null || player.id == 0) return null;
    var comp = game.playerComp;
    var index = comp[0].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[0][index];
    index = comp[1].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[1][index];
    return null;
}

function getTeamArray(team) {
    return team == Team.RED ? teamRed : team == Team.BLUE ? teamBlue : teamSpec;
}

function sendAnnouncementTeam(message, team, color, style, mention) {
    for (let player of team) {
        room.sendAnnouncement(message, player.id, color, style, mention);
    }
}

function teamChat(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    var emoji = player.team == Team.RED ? '🔴' : player.team == Team.BLUE ? '🔵' : '⚪';
    var message = `${emoji} [TEAM] ${player.name}: ${msgArray.join(' ')}`;
    var team = getTeamArray(player.team);
    var color = player.team == Team.RED ? redColor : player.team == Team.BLUE ? blueColor : null;
    var style = 'bold';
    var mention = HaxNotification.CHAT;
    sendAnnouncementTeam(message, team, color, style, mention);
}

function playerChat(player, message) {
    var msgArray = message.split(/ +/);
    var playerTargetIndex = players.findIndex(
        (p) => p.name.replaceAll(' ', '_') == msgArray[0].substring(2)
    );
    if (playerTargetIndex == -1) {
        room.sendAnnouncement(
            `Invalid player, make sure the name you entered is correct.`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }
    var playerTarget = players[playerTargetIndex];
    if (player.id == playerTarget.id) {
        room.sendAnnouncement(
            `Você não pode enviar uma MP para si mesmo!`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }
    var messageFrom = `📝 [Sussurou com ${playerTarget.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    var messageTo = `📝 [Sussurou com ${player.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    room.sendAnnouncement(
        messageFrom,
        player.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
    room.sendAnnouncement(
        messageTo,
        playerTarget.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
}

/* PHYSICS FUNCTIONS */

function calculateStadiumVariables() {
    if (checkStadiumVariable && teamRed.length + teamBlue.length > 0) {
        checkStadiumVariable = false;
        setTimeout(() => {
            let ballDisc = room.getDiscProperties(0);
            let playerDisc = room.getPlayerDiscProperties(teamRed.concat(teamBlue)[0].id);
            ballRadius = ballDisc.radius;
            playerRadius = playerDisc.radius;
            triggerDistance = ballRadius + playerRadius + 0.01;
            speedCoefficient = 100 / (5 * ballDisc.invMass * (ballDisc.damping ** 60 + 1));
        }, 1);
    }
}

function checkGoalKickTouch(array, index, goal) {
    if (array != null && array.length >= index + 1) {
        var obj = array[index];
        if (obj != null && obj.goal != null && obj.goal == goal) return obj;
    }
    return null;
}

/* BUTTONS */

function swapButton() {
    for (let player of teamBlue) {
        room.setPlayerTeam(player.id, Team.RED);
    }
    for (let player of teamRed) {
        room.setPlayerTeam(player.id, Team.BLUE);
    }
}

/* COMMAND FUNCTIONS */

/* PLAYER COMMANDS */

function leaveCommand(player, message) {
    room.kickPlayer(player.id, 'Bye !', false);
}

function helpCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length == 0) {
        var commandString = 'Player Commands :';
        for (const [key, value] of Object.entries(commands)) {
            if (value.desc && value.roles == Role.PLAYER) commandString += ` !${key},`;
        }
        commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        if (getRole(player) >= Role.ADMIN_TEMP) {
            commandString += `Uniformes/Admin Commands :`;
            for (const [key, value] of Object.entries(commands)) {
                if (value.desc && value.roles == Role.ADMIN_TEMP) commandString += ` !${key},`;
            }
            if (commandString.slice(commandString.length - 1) == ':')
                commandString += ` None,`;
            commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        }
        if (getRole(player) >= Role.MASTER) {
            commandString += `Master commands :`;
            for (const [key, value] of Object.entries(commands)) {
                if (value.desc && value.roles == Role.MASTER) commandString += ` !${key},`;
            }
            if (commandString.slice(commandString.length - 1) == ':') commandString += ` None,`;
            commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        }
        commandString += "\nPara obter informações sobre um comando específico, digite '!help' <command name>'.";
        room.sendAnnouncement(
            commandString,
            player.id,
            infoColor,
            'bold',
            HaxNotification.CHAT
        );
    } else if (msgArray.length >= 1) {
        var commandName = getCommand(msgArray[0].toLowerCase());
        if (commandName != false && commands[commandName].desc != false)
            room.sendAnnouncement(
                `\'${commandName}\' command :\n${commands[commandName].desc}`,
                player.id,
                infoColor,
                'bold',
                HaxNotification.CHAT
            );
        else
            room.sendAnnouncement(
                `The command you tried to get information on does not exist. To check all available commands, type \'!help\'`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
    }
}

function masterCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (parseInt(msgArray[0]) == masterPassword) {
        if (!masterList.includes(authArray[player.id][0])) {
            room.setPlayerAdmin(player.id, true);
            adminList = adminList.filter((a) => a[0] != authArray[player.id][0]);
            masterList.push(authArray[player.id][0]);
            room.sendAnnouncement(
                `${player.name} Logou como o dono da sala !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Você já é um dono !`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

/* ADMIN COMMANDS */

function restartCommand(player, message) {
    instantRestart();
}

/* COMANDOS DE UNIFORME POR BEAGER */

function franrCommand(player, message) {
    room.setTeamColors(1, 180, 0x000000, [0xFF0A0A, 0xFFFFFF, 0x0717A6]);
}

function franbCommand(player, message) {
    room.setTeamColors(2, 180, 0x000000, [0xFF0A0A, 0xFFFFFF, 0x0717A6]);
}

function brabCommand(player, message) {
    room.setTeamColors(2, 60, 0x33FF00, [0xF7FF00, 0xF7FF00, 0xF7FF00]);
}

function brarCommand(player, message) {
    room.setTeamColors(1, 60, 0x33FF00, [0xF7FF00, 0xF7FF00, 0xF7FF00]);
}

function itarCommand(player, message) {
    room.setTeamColors(1, 180, 0x000000, [0xFF0000, 0xFFFFFF, 0x1AFF00]);
}

function itabCommand(player, message) {
    room.setTeamColors(2, 180, 0x000000, [0xFF0000, 0xFFFFFF, 0x1AFF00]);
}

function mexrCommand(player, message) {
    room.setTeamColors(1, 180, 0x8F510A, [0xAB1505 , 0xFFFFFF , 0x1C8C06]);
}

function mexbCommand(player, message) {
    room.setTeamColors(2, 180, 0x8F510A, [0xAB1505 , 0xFFFFFF, 0x1C8C06]);
}

function holrCommand(player, message) {
    room.setTeamColors(1, 90, 0x006FFF, [0xFF0303  , 0xFBFFF7 , 0x024BDB]);
}

function holbCommand(player, message) {
    room.setTeamColors(2, 90, 0x006FFF, [0xFF0303  , 0xFBFFF7 , 0x024BDB]);
}

function ururCommand(player, message) {
    room.setTeamColors(1, 180, 0xFFF700 , [0x1F71FF   , 0x1F71FF  , 0xFFFFFF]);
}

function urubCommand(player, message) {
    room.setTeamColors(2, 180, 0xFFF700 , [0x1F71FF   , 0x1F71FF  , 0xFFFFFF]);
}

function alerCommand(player, message) {
    room.setTeamColors(1, 89, 0x000000  , [0x000000    , 0xFF0505   , 0xF7FF00]);
}

function alebCommand(player, message) {
    room.setTeamColors(2, 89, 0x000000  , [0x000000    , 0xFF0505   , 0xF7FF00]);
}

function esprCommand(player, message) {
    room.setTeamColors(1, 89, 0xFFF4F2   , [0xFF2E2E     , 0xEEFF00    , 0xFF0011]);
}

function espbCommand(player, message) {
    room.setTeamColors(2, 89, 0xFFF4F2   , [0xFF2E2E     , 0xEEFF00    , 0xFF0011]);
}

function crorCommand(player, message) {
    room.setTeamColors(1, 269, 0xFF0A0A    , [0xFF0008      , 0xFFFFFF     , 0x030BFF]);
}

function crobCommand(player, message) {
    room.setTeamColors(2, 269, 0xFF0A0A    , [0xFF0008      , 0xFFFFFF     , 0x030BFF]);
}

function dinrCommand(player, message) {
    room.setTeamColors(1, 180, 0xFFFFFF     , [0xFF0505       , 0xFF002B      , 0xFC0800]);
}

function dinbCommand(player, message) {
    room.setTeamColors(2, 180, 0xFFFFFF     , [0xFF0505       , 0xFF002B      , 0xFC0800]);
}

function suirCommand(player, message) {
    room.setTeamColors(1, 60, 0xFFFFFF      , [0xFF0D0D]);
}

function suibCommand(player, message) {
    room.setTeamColors(2, 60, 0xFFFFFF      , [0xFF0D0D]);
}

function bulrCommand(player, message) {
    room.setTeamColors(1, 89, 0x000000     , [0xFFFFFF       , 0x00FF08      , 0xFF0011]);
}

function bulbCommand(player, message) {
    room.setTeamColors(2, 89, 0x000000     , [0xFFFFFF       , 0x00FF08      , 0xFF0011]);
}

function qatrCommand(player, message) {
    room.setTeamColors(1, 0, 0xFFFFFF     , [0xFFFFFF      , 0x770A27      , 0x770A27]);
}

function qatbCommand(player, message) {
    room.setTeamColors(2, 0, 0xFFFFFF     , [0xFFFFFF      , 0x770A27      , 0x770A27]);
}

function japrCommand(player, message) {
    room.setTeamColors(1, 60, 0xFF2121      , [0xFFFFFF]);
}

function japbCommand(player, message) {
    room.setTeamColors(2, 60, 0xFF2121      , [0xFFFFFF]);
}

function equrCommand(player, message) {
    room.setTeamColors(1, 90, 0x595C49     , [0xF7FF03      , 0x0357FF     , 0xFF0800]);
}

function equbCommand(player, message) {
    room.setTeamColors(2, 90, 0x595C49     , [0xF7FF03      , 0x0357FF     , 0xFF0800]);
}

function marrCommand(player, message) {
    room.setTeamColors(1, 60, 0x00FF00     , [0xFF242B]);
}

function marbCommand(player, message) {
    room.setTeamColors(2, 60, 0x00FF00     , [0xFF242B]);
}

function senrCommand(player, message) {
    room.setTeamColors(1, 180, 0x175C0C     , [0xFF0019     , 0xCFC800     , 0x228000]);
}

function senbCommand(player, message) {
    room.setTeamColors(2, 180, 0x175C0C     , [0xFF0019     , 0xCFC800     , 0x228000]);
}

function nigrCommand(player, message) {
    room.setTeamColors(1, 0, 0xF0FF00     , [0x07A600     , 0xFFFFFF     , 0x07A600]);
}

function nigbCommand(player, message) {
    room.setTeamColors(2, 0, 0xF0FF00     , [0x07A600     , 0xFFFFFF     , 0x07A600]);
}

function rusrCommand(player, message) {
    room.setTeamColors(1, 90, 0xFF0000     , [0xFFFFFF     , 0x0011FF     , 0xFF0000]);
}

function rusbCommand(player, message) {
    room.setTeamColors(2, 90, 0xFF0000     , [0xFFFFFF     , 0x0011FF     , 0xFF0000]);
}

function sanrCommand(player, message) {
    room.setTeamColors(1, 90, 0xFFF700     , [0xFFFFFF     , 0x146AFF]);
}

function sanbCommand(player, message) {
    room.setTeamColors(2, 90, 0xFFF700     , [0xFFFFFF     , 0x146AFF]);
}

function angrCommand(player, message) {
    room.setTeamColors(1, 88, 0xFF0A0A     , [0x003D7A     , 0x004077]);
}

function angbCommand(player, message) {
    room.setTeamColors(2, 88, 0xFF0A0A     , [0x003D7A     , 0x004077]);
}

function butrCommand(player, message) {
    room.setTeamColors(1, 229, 0xFFF4F2     , [0xFF2E2E     , 0xEEFF00]);
}

function butbCommand(player, message) {
    room.setTeamColors(2, 229, 0xFFF4F2     , [0xFF2E2E     , 0xEEFF00]);
}

function hunrCommand(player, message) {
    room.setTeamColors(1, 90, 0xFFFFFF, [0xFF0000 , 0xFFFFFF , 0x26872C]);
}

function hunbCommand(player, message) {
    room.setTeamColors(2, 90, 0xFFFFFF, [0xFF0000 , 0xFFFFFF , 0x26872C]);
}

function cubrCommand(player, message) {
    room.setTeamColors(1, 90, 0xFF0000, [0xFFFFFF , 0x2448FF , 0xFFFFFF]);
}

function cubbCommand(player, message) {
    room.setTeamColors(2, 90, 0xFF0000, [0xFFFFFF , 0x2448FF , 0xFFFFFF]);
}

function ingrCommand(player, message) {
    room.setTeamColors(1, 60, 0xFF145B, [0xFFFFFF]);
}

function ingbCommand(player, message) {
    room.setTeamColors(2, 60, 0xFF145B, [0xFFFFFF]);
}

function barrCommand(player, message) {
    room.setTeamColors(1, 180, 0x000000, [0x1400C9 , 0xF0FF26 , 0x1400C9]);
}

function barbCommand(player, message) {
    room.setTeamColors(2, 180, 0x000000, [0x1400C9 , 0xF0FF26 , 0x1400C9]);
}

function camrCommand(player, message) {
    room.setTeamColors(1, 180, 0x999900, [0xB8B800 , 0xFF0000 , 0x1F9900]);
}

function cambCommand(player, message) {
    room.setTeamColors(2, 180, 0x999900, [0xB8B800 , 0xFF0000 , 0x1F9900]);
}

function canrCommand(player, message) {
    room.setTeamColors(1, 180, 0x96230C, [0xFF0000 , 0xFFFFFF , 0xFF0000]);
}

function canbCommand(player, message) {
    room.setTeamColors(2, 180, 0x96230C, [0xFF0000 , 0xFFFFFF , 0xFF0000]);
}

function chirCommand(player, message) {
    room.setTeamColors(1, 0, 0xF0FF00, [0xFF0000]);
}

function chibCommand(player, message) {
    room.setTeamColors(2, 0, 0xF0FF00, [0xFF0000]);
}

function euarCommand(player, message) {
    room.setTeamColors(1, 0, 0xFFFFFF, [0x052487 , 0xFF1900 , 0xFFFFFF]);
}

function euabCommand(player, message) {
    room.setTeamColors(2, 0, 0xFFFFFF, [0x052487 , 0xFF1900 , 0xFFFFFF]);
}

function reirCommand(player, message) {
    room.setTeamColors(1, 0, 0xFF0000, [0x0011A6 , 0xFF0000 , 0x1100A6]);
}

function reibCommand(player, message) {
    room.setTeamColors(2, 0, 0xFF0000, [0x0011A6 , 0xFF0000 , 0x1100A6]);
}

function belrCommand(player, message) {
    room.setTeamColors(1, 0, 0xFFFFFF, [0x000000 , 0xF2FA00 , 0xFF0044]);
}

function belbCommand(player, message) {
    room.setTeamColors(2, 0, 0xFFFFFF, [0x000000 , 0xF2FA00 , 0xFF0044]);
}

function argrCommand(player, message) {
    room.setTeamColors(1, 90, 0xFCBF49, [0x75AADB , 0xFFFFFF , 0x75AADB]);
}

function argbCommand(player, message) {
    room.setTeamColors(2, 90, 0xFCBF49, [0x75AADB , 0xFFFFFF , 0x75AADB]);
}

function insrCommand(player, message) {
    room.setTeamColors(1, 270, 0xFFFFFF, [0xFFFFFF , 0xFF0D0D]);
}

function insbCommand(player, message) {
    room.setTeamColors(2, 270, 0xFFFFFF, [0xFFFFFF , 0xFF0D0D]);
}

function indrCommand(player, message) {
    room.setTeamColors(1, 270, 0x0862FF, [0x0AFF00 , 0xFFFBF2 , 0xFFA812]);
}

function indbCommand(player, message) {
    room.setTeamColors(2, 270, 0x0862FF, [0x0AFF00 , 0xFFFBF2 , 0xFFA812]);
}

function polrCommand(player, message) {
    room.setTeamColors(1, 270, 0xFFFFFF, [0xFF0810 , 0xFFFBF2]);
}

function polbCommand(player, message) {
    room.setTeamColors(2, 270, 0xFFFFFF, [0xFF0810 , 0xFFFBF2]);
}

function porrCommand(player, message) {
    room.setTeamColors(1, 180, 0xFFCC00, [0xFF0000 , 0xFF0810 , 0x00FF33]);
}

function porbCommand(player, message) {
    room.setTeamColors(2, 180, 0xFFCC00, [0xFF0000 , 0xFF0810 , 0x00FF33]);
}

function colrCommand(player, message) {
    room.setTeamColors(1, 270, 0xFF0008, [0xFF0000 , 0x0008FF , 0xFFF80F]);
}

function colbCommand(player, message) {
    room.setTeamColors(2, 270, 0xFF0008, [0xFF0000 , 0x0008FF , 0xFFF80F]);
}

function ararCommand(player, message) {
    room.setTeamColors(1, 60, 0xFFFFFF, [0x00A305]);
}

function arabCommand(player, message) {
    room.setTeamColors(2, 60, 0xFFFFFF, [0x00A305]);
}

function aferCommand(player, message) {
    room.setTeamColors(1, 180, 0xFFFFFF     , [0x00FF2A     , 0xFF0A0A     , 0x000000]);
}

function afebCommand(player, message) {
    room.setTeamColors(2, 180, 0xFFFFFF     , [0x00FF2A     , 0xFF0A0A     , 0x000000]);
}

function escrCommand(player, message) {
    room.setTeamColors(1, 60, 0xFFFFFF     , [0x0068CF]);
}

function escbCommand(player, message) {
    room.setTeamColors(2, 60, 0xFFFFFF     , [0x0068CF]);
}

function aglrCommand(player, message) {
    room.setTeamColors(1, 90, 0xFFF700     , [0xAD0000     , 0x000000]);
}

function aglbCommand(player, message) {
    room.setTeamColors(2, 90, 0xFFF700     , [0xAD0000     , 0x000000]);
}

function pdgrCommand(player, message) {
    room.setTeamColors(1, 90, 0xFF0000     , [0xFFFFFF     , 0x1AFF00]);
}

function pdgbCommand(player, message) {
    room.setTeamColors(2, 90, 0xFF0000     , [0xFFFFFF     , 0x1AFF00]);
}

function monrCommand(player, message) {
    room.setTeamColors(1, 90, 0x000000     , [0xFF1900     , 0xFFFFFF]);
}

function monbCommand(player, message) {
    room.setTeamColors(2, 90, 0x000000     , [0xFF1900     , 0xFFFFFF]);
}

function norrCommand(player, message) {
    room.setTeamColors(1, 90, 0x032DFF     , [0xC70000]);
}

function norbCommand(player, message) {
    room.setTeamColors(2, 90, 0x032DFF     , [0xC70000]);
}

function laorCommand(player, message) {
    room.setTeamColors(1, 90, 0xFFFFFF     , [0xB80404    , 0x0B2EB8     , 0xB80404]);
}

function laobCommand(player, message) {
    room.setTeamColors(2, 90, 0xFFFFFF     , [0xB80404    , 0x0B2EB8     , 0xB80404]);
}

function reprCommand(player, message) {
    room.setTeamColors(1, 90, 0x053FFF     , [0xFFFFFF    , 0xFF0000]);
}

function repbCommand(player, message) {
    room.setTeamColors(2, 90, 0x053FFF     , [0xFFFFFF    , 0xFF0000]);
}

function unirCommand(player, message) {
    room.setTeamColors(1, 60, 0xFFFF00     , [0xFF0000]);
}

function unibCommand(player, message) {
    room.setTeamColors(2, 60, 0xFFFF00     , [0xFF0000]);
}

function gabrCommand(player, message) {
    room.setTeamColors(1, 90, 0xFFFFFF     , [0x24B500    , 0xFFFF00     , 0x003BB0]);
}

function gabbCommand(player, message) {
    room.setTeamColors(2, 90, 0xFFFFFF     , [0x24B500    , 0xFFFF00     , 0x003BB0]);
}

function ganrCommand(player, message) {
    room.setTeamColors(1, 90, 0x000000     , [0xFF0000    , 0xFFF600     , 0x09FF00]);
}

function ganbCommand(player, message) {
    room.setTeamColors(2, 90, 0x000000     , [0xFF0000    , 0xFFF600     , 0x09FF00]);
}

function malrCommand(player, message) {
    room.setTeamColors(1, 180, 0xFFFFFF     , [0xFF0F0F    , 0xFFFFFF]);
}

function malbCommand(player, message) {
    room.setTeamColors(2, 180, 0xFFFFFF     , [0xFF0F0F    , 0xFFFFFF]);
}









function restartSwapCommand(player, message) {
    room.stopGame();
    swapButton();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 10);
}

function swapCommand(player, message) {
    if (playSituation == Situation.STOP) {
        swapButton();
        room.sendAnnouncement(
            '✔️ Equipes trocadas !',
            null,
            announcementColor,
            'bold',
            null
        );
    } else {
        room.sendAnnouncement(
            `Por favor pare de spammar!.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function kickTeamCommand(player, message) {
    var msgArray = message.split(/ +/);
    var reasonString = `Time kickado por ${player.name}`;
    if (msgArray.length > 1) {
        reasonString = msgArray.slice(1).join(' ');
    }
    if (['!kickred', '!kickr'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamRed.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamRed[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickblue', '!kickb'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamBlue.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamBlue[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickspec', '!kicks'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamSpec.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamSpec[0].id, reasonString, false);
            }, i * 20)
        }
    }
}

function stadiumCommand(player, message) {
    var msgArray = message.split(/ +/);
    if (gameState == State.STOP) {
        if (['!classic'].includes(msgArray[0].toLowerCase())) {
            if (JSON.parse(classicMap).name == 'Classic') {
                room.setDefaultStadium('Classic');
            } else {
                room.setCustomStadium(classicMap);
            }
        } else if (['!big'].includes(msgArray[0].toLowerCase())) {
            if (JSON.parse(bigMap).name == 'Big') {
                room.setDefaultStadium('Big');
            } else {
                room.setCustomStadium(bigMap);
            }
        } else if (['!training'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(trainingMap);
        } else {
            room.sendAnnouncement(
                `Estádio não reconhecido.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Por favor pare, não da pra usar esse comando no meio da partida.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

/* MASTER COMMANDS */

function clearbansCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length == 0) {
        room.clearBans();
        room.sendAnnouncement(
            '✔️ Bans limpos !',
            null,
            announcementColor,
            'bold',
            null
        );
        banList = [];
    } else if (msgArray.length == 1) {
        if (parseInt(msgArray[0]) > 0) {
            var ID = parseInt(msgArray[0]);
            room.clearBan(ID);
            if (banList.length != banList.filter((p) => p[1] != ID).length) {
                room.sendAnnouncement(
                    `✔️ ${banList.filter((p) => p[1] == ID)[0][0]} Foi desbanido da sala !`,
                    null,
                    announcementColor,
                    'bold',
                    null
                );
            } else {
                room.sendAnnouncement(
                    `The ID you entered doesn't have a ban associated to. Enter "!help clearbans" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
            banList = banList.filter((p) => p[1] != ID);
        } else {
            room.sendAnnouncement(
                `Invalid ID entered. Enter "!help clearbans" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help clearbans" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function banListCommand(player, message) {
    if (banList.length == 0) {
        room.sendAnnouncement(
            "📢 Não há ninguém na lista de banimentos.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '📢 Ban list : ';
    for (let ban of banList) {
        cstm += ban[0] + `[${ban[1]}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

function adminListCommand(player, message) {
    if (adminList.length == 0) {
        room.sendAnnouncement(
            "📢 Não há ninguem na lista de admin.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '📢 Lista de admin : ';
    for (let i = 0; i < adminList.length; i++) {
        cstm += adminList[i][1] + `[${i}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

function setAdminCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerAdmin = room.getPlayer(parseInt(msgArray[0]));

                if (!adminList.map((a) => a[0]).includes(authArray[playerAdmin.id][0])) {
                    if (!masterList.includes(authArray[playerAdmin.id][0])) {
                        room.setPlayerAdmin(playerAdmin.id, true);
                        adminList.push([authArray[playerAdmin.id][0], playerAdmin.name]);
                        room.sendAnnouncement(
                            `${playerAdmin.name} Logou como o Sub Dono da sala !`,
                            null,
                            announcementColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    } else {
                        room.sendAnnouncement(
                            `Este jogador já é um mestre !`,
                            player.id,
                            errorColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    }
                } else {
                    room.sendAnnouncement(
                        `Este jogador já é um Sub Dono permanente !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `Não há jogador com tal identificação na sala. Digite "!help setadmin" para obter mais informações.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else {
            room.sendAnnouncement(
                `Formato incorreto para seu argumento. Digite "!help setadmin" para obter mais informações.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Número incorreto de argumentos. Digite "!help setadmin" para obter mais informações.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function removeAdminCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerAdmin = room.getPlayer(parseInt(msgArray[0]));

                if (adminList.map((a) => a[0]).includes(authArray[playerAdmin.id][0])) {
                    room.setPlayerAdmin(playerAdmin.id, false);
                    adminList = adminList.filter((a) => a[0] != authArray[playerAdmin.id][0]);
                    room.sendAnnouncement(
                        `${playerAdmin.name} não é mais um administrador de sala !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.sendAnnouncement(
                        `Este jogador não é um administrador permanente !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `Não há jogador com tal identificação na sala. Digite "!help removeadmin" para obter mais informações.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else if (msgArray[0].length > 0 && parseInt(msgArray[0]) < adminList.length) {
            var index = parseInt(msgArray[0]);
            var playerAdmin = adminList[index];
            if (players.findIndex((p) => authArray[p.id][0] == playerAdmin[0]) != -1) {
                // check if there is the removed admin in the room
                var indexRem = players.findIndex((p) => authArray[p.id][0] == playerAdmin[0]);
                room.setPlayerAdmin(players[indexRem].id, false);
            }
            adminList.splice(index);
            room.sendAnnouncement(
                `${playerAdmin[1]} não é mais um administrador de sala !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Formato incorreto para seu argumento. Digite "!help removeadmin" para obter mais informações.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Número incorreto de argumentos. Digite "!help removeadmin" para obter mais informações.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function passwordCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray.length == 1 && msgArray[0] == '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `A senha da sala foi removida.`,
                player.id,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        }
        roomPassword = msgArray.join(' ');
        room.setPassword(roomPassword);
        room.sendAnnouncement(
            `A senha da sala foi definida como ${roomPassword}`,
            player.id,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        if (roomPassword != '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `A senha da sala foi removida.`,
                player.id,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `A sala atualmente não tem uma senha. Digite "!senha de ajuda" para obter mais informações.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    if (game != undefined) game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0 && playSituation == Situation.PLAY) {
        if (scores.red != scores.blue) {
            if (!checkTimeVariable) {
                checkTimeVariable = true;
                setTimeout(() => {
                    checkTimeVariable = false;
                }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                stopTimeout = setTimeout(() => {
                    room.stopGame();
                }, 2000);
            }
            return;
        }
        if (drawTimeLimit != 0) {
            goldenGoal = true;
            room.sendAnnouncement(
                '⚽ EMPATE ! QUE EMOCIONANTE !',
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
    if (Math.abs(scores.time - drawTimeLimit * 60 - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (!checkTimeVariable) {
            checkTimeVariable = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
}

function instantRestart() {
    room.stopGame();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 10);
}

function resumeGame() {
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 1000);
    setTimeout(() => {
        room.pauseGame(false);
    }, 500);
}

function endGame(winner) {
    const scores = room.getScores();
    game.scores = scores;
    endGameVariable = true;
    if (winner == Team.RED) {
        room.sendAnnouncement(
            `✨ Time vermelho ganhou ${scores.red} - ${scores.blue} !`,
            null,
            redColor,
            'bold',
            HaxNotification.CHAT
        );
    } else if (winner == Team.BLUE) {
        room.sendAnnouncement(
            `✨ Time azul ganhou ${scores.blue} - ${scores.red} !`,
            null,
            blueColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        room.sendAnnouncement(
            '💤 Draw limit reached !',
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    }
    let possessionRedPct = (possession[0] / (possession[0] + possession[1])) * 100;
    let possessionBluePct = 100 - possessionRedPct;
    let possessionString = `🔴 ${possessionRedPct.toFixed(0)}% - ${possessionBluePct.toFixed(0)}% 🔵`;
    let actionRedPct = (actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1])) * 100;
    let actionBluePct = 100 - actionRedPct;
    let actionString = `🔴 ${actionRedPct.toFixed(0)}% - ${actionBluePct.toFixed(0)}% 🔵`;
    let CSString = getCSString(scores);
    room.sendAnnouncement(
        `📊 Posse de bola: 🔴 ${possessionString}\n` +
        `📊 Zona de ação: 🔴 ${actionString}\n` +
        `${CSString}`,
        null,
        announcementColor,
        'bold',
        HaxNotification.NONE
    );
}

/* PLAYER FUNCTIONS */

function updateTeams() {
    players = room.getPlayerList();
    teamRed = players.filter((p) => p.team == Team.RED);
    teamBlue = players.filter((p) => p.team == Team.BLUE);
    teamSpec = players.filter((p) => p.team == Team.SPECTATORS);
}

function updateAdmins(excludedPlayerID = 0) {
    if (players.length != 0 && players.filter((p) => p.admin).length < maxAdmins) {
        let playerArray = players.filter((p) => p.id != excludedPlayerID && !p.admin);
        let arrayID = playerArray.map((player) => player.id);
        room.setPlayerAdmin(Math.min(...arrayID), true);
    }
}

function getRole(player) {
    return (
        !!masterList.find((a) => a == authArray[player.id][0]) * 2 +
        !!adminList.find((a) => a[0] == authArray[player.id][0]) * 1 +
        player.admin * 1
    );
}

function ghostKickHandle(oldP, newP) {
    var teamArrayId = getTeamArray(oldP.team).map((p) => p.id);
    teamArrayId.splice(teamArrayId.findIndex((id) => id == oldP.id), 1, newP.id);

    room.kickPlayer(oldP.id, 'Ghost kick', false);
    room.setPlayerTeam(newP.id, oldP.team);
    room.setPlayerAdmin(newP.id, oldP.admin);
    room.reorderPlayers(teamArrayId, true);

    if (oldP.team != Team.SPECTATORS && playSituation != Situation.STOP) {
        var discProp = room.getPlayerDiscProperties(oldP.id);
        room.setPlayerDiscProperties(newP.id, discProp);
    }
}

/* ACTIVITY FUNCTIONS */

function handleActivityPlayer(player) {
    let pComp = getPlayerComp(player);
    if (pComp != null) {
        pComp.inactivityTicks++;
        return pComp.inactivityTicks;
    }
    return 0;
}

function handleActivityPlayerTeamChange(changedPlayer) {
    if (changedPlayer.team == Team.SPECTATORS) {
        let pComp = getPlayerComp(changedPlayer);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivityStop() {
    for (let player of players) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivity() {
    if (gameState == State.PLAY && players.length > 1) {
        var playerMaxInactivity = 0;
        for (let player of teamRed) {
            var playerInactivity = handleActivityPlayer(player);
            playerMaxInactivity = Math.max(playerInactivity, playerMaxInactivity);
        }
        for (let player of teamBlue) {
            var playerInactivity = handleActivityPlayer(player);
            playerMaxInactivity = Math.max(playerInactivity, playerMaxInactivity);
        }
        if (playerMaxInactivity >= maxInactivity * 60 * 60) {
            cancelGameVariable = true;
            room.stopGame();
            room.sendAnnouncement(
                '⚠️ O jogo saiu por inatividade !',
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
            handleActivityStop();
        }
    }
}

/* LINEUP FUNCTIONS */

function getStartingLineups() {
    var compositions = [[], []];
    for (let player of teamRed) {
        compositions[0].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    for (let player of teamBlue) {
        compositions[1].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    return compositions;
}

function handleLineupChangeTeamChange(changedPlayer) {
    if (gameState != State.STOP) {
        var playerLineup;
        if (changedPlayer.team == Team.RED) {
            // player gets in red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[0][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[0].push(playerLineup);
            }
        } else if (changedPlayer.team == Team.BLUE) {
            // player gets in blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[1][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[1].push(playerLineup);
            }
        }
        if (teamRed.some((r) => r.id == changedPlayer.id)) {
            // player leaves red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        } else if (teamBlue.some((r) => r.id == changedPlayer.id)) {
            // player leaves blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        }
    }
}

function handleLineupChangeLeave(player) {
    if (playSituation != Situation.STOP) {
        if (player.team == Team.RED) {
            // player gets in red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[player.id][0]);
            var playerLineup = game.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        } else if (player.team == Team.BLUE) {
            // player gets in blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[player.id][0]);
            var playerLineup = game.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        }
    }
}

/* STATS FUNCTIONS */

/* GK FUNCTIONS */

function handleGKTeam(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? teamRed : teamBlue;
    let playerGK = teamArray.reduce((prev, current) => {
        if (team == Team.RED) {
            return (prev?.position.x < current.position.x) ? prev : current
        } else {
            return (prev?.position.x > current.position.x) ? prev : current
        }
    }, null);
    let playerCompGK = getPlayerComp(playerGK);
    return playerCompGK;
}

function handleGK() {
    let redGK = handleGKTeam(Team.RED);
    if (redGK != null) {
        redGK.GKTicks++;
    }
    let blueGK = handleGKTeam(Team.BLUE);
    if (blueGK != null) {
        blueGK.GKTicks++;
    }
}

function getGK(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? game.playerComp[0] : game.playerComp[1];
    let playerGK = teamArray.reduce((prev, current) => {
        return (prev?.GKTicks > current.GKTicks) ? prev : current
    }, null);
    return playerGK;
}

function getCS(scores) {
    let playersNameCS = [];
    let redGK = getGK(Team.RED);
    let blueGK = getGK(Team.BLUE);
    if (redGK != null && scores.blue == 0) {
        playersNameCS.push(redGK.player.name);
    }
    if (blueGK != null && scores.red == 0) {
        playersNameCS.push(blueGK.player.name);
    }
    return playersNameCS;
}

function getCSString(scores) {
    let playersCS = getCS(scores);
    if (playersCS.length == 0) {
        return "🥅 Sem CS";
    } else if (playersCS.length == 1) {
        return `🥅 ${playersCS[0]} Pegou um CS.`;
    } else {
        return `🥅 ${playersCS[0]} e ${playersCS[1]} Pegou um CS.`;
    }
}

/* GLOBAL STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    let playerArray = [];
    for (let player of players) {
        if (player.position != null) {
            var distanceToBall = pointDistance(player.position, ballPosition);
            if (distanceToBall < triggerDistance) {
                if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
                playerArray.push([player, distanceToBall]);
            }
        }
    }
    if (playerArray.length != 0) {
        let playerTouch = playerArray.sort((a, b) => a[1] - b[1])[0][0];
        if (lastTeamTouched == playerTouch.team || lastTeamTouched == Team.SPECTATORS) {
            if (lastTouches[0] == null || (lastTouches[0] != null && lastTouches[0].player.id != playerTouch.id)) {
                game.touchArray.push(
                    new BallTouch(
                        playerTouch,
                        game.scores.time,
                        getGoalGame(),
                        ballPosition
                    )
                );
                lastTouches[0] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 1,
                    getGoalGame()
                );
                lastTouches[1] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 2,
                    getGoalGame()
                );
            }
        }
        lastTeamTouched = playerTouch.team;
    }
}

function getBallSpeed() {
    var ballProp = room.getDiscProperties(0);
    return Math.sqrt(ballProp.xspeed ** 2 + ballProp.yspeed ** 2) * speedCoefficient;
}

function getGameStats() {
    if (playSituation == Situation.PLAY && gameState == State.PLAY) {
        lastTeamTouched == Team.RED ? possession[0]++ : possession[1]++;
        var ballPosition = room.getBallPosition();
        ballPosition.x < 0 ? actionZoneHalf[0]++ : actionZoneHalf[1]++;
    }
}

/* GOAL ATTRIBUTION FUNCTIONS */

function getGoalAttribution(team) {
    var goalAttribution = Array(2).fill(null);
    if (lastTouches[0] != null) {
        if (lastTouches[0].player.team == team) {
            // Direct goal scored by player
            if (lastTouches[1] != null && lastTouches[1].player.team == team) {
                goalAttribution = [lastTouches[0].player, lastTouches[1].player];
            } else {
                goalAttribution = [lastTouches[0].player, null];
            }
        } else {
            // Own goal
            goalAttribution = [lastTouches[0].player, null];
        }
    }
    return goalAttribution;
}

function getGoalString(team) {
    var goalString;
    var scores = game.scores;
    var goalAttribution = getGoalAttribution(team);
    if (goalAttribution[0] != null) {
        if (goalAttribution[0].team == team) {
            if (goalAttribution[1] != null && goalAttribution[1].team == team) {
                goalString = `⚽ ${getTimeGame(scores.time)} GOOOL, SERÁ QUE VAI SER CAMPEÃO?!! GOLAÇO DE -> ${goalAttribution[0].name} ! Assistência de ${goalAttribution[1].name}. Velocidade da bola : ${ballSpeed.toFixed(2)}km/h.`;
                game.goals.push(
                    new Goal(
                        scores.time,
                        team,
                        goalAttribution[0],
                        goalAttribution[1]
                    )
                );
            } else {
                goalString = `⚽ ${getTimeGame(scores.time)} GOOOOL, ESSE AI VAI SER CAMPEÃO!! GOLAÇO DE -> ${goalAttribution[0].name} ! Velocidade da bola: ${ballSpeed.toFixed(2)}km/h.`;
                game.goals.push(
                    new Goal(scores.time, team, goalAttribution[0], null)
                );
            }
        } else {
            goalString = `😂 ${getTimeGame(scores.time)} Esse ai não passa nem da fase de grupos, gol contra de -> ${goalAttribution[0].name} ! Velocidade da bola : ${ballSpeed.toFixed(2)}km/h.`;
            game.goals.push(
                new Goal(scores.time, team, goalAttribution[0], null)
            );
        }
    } else {
        goalString = `⚽ ${getTimeGame(scores.time)} Golaço! Pelo visto não foi dessa vez em time inimigo, ${team == Team.RED ? 'red' : 'blue'} team ! Velocidade da bola : ${ballSpeed.toFixed(2)}km/h.`;
        game.goals.push(
            new Goal(scores.time, team, null, null)
        );
    }

    return goalString;
}

/* GET STATS FUNCTIONS */

function actionReportCountTeam(goals, team) {
    let playerActionSummaryTeam = [];
    let indexTeam = team == Team.RED ? 0 : 1;
    let indexOtherTeam = team == Team.RED ? 1 : 0;
    for (let goal of goals[indexTeam]) {
        if (goal[0] != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == goal[0].id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[0].id);
                playerActionSummaryTeam[index][1]++;
            } else {
                playerActionSummaryTeam.push([goal[0], 1, 0, 0]);
            }
            if (goal[1] != null) {
                if (playerActionSummaryTeam.find(a => a[0].id == goal[1].id)) {
                    let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[1].id);
                    playerActionSummaryTeam[index][2]++;
                } else {
                    playerActionSummaryTeam.push([goal[1], 0, 1, 0]);
                }
            }
        }
    }
    if (goals[indexOtherTeam].length == 0) {
        let playerCS = getGK(team)?.player;
        if (playerCS != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == playerCS.id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == playerCS.id);
                playerActionSummaryTeam[index][3]++;
            } else {
                playerActionSummaryTeam.push([playerCS, 0, 0, 1]);
            }
        }
    }

    playerActionSummaryTeam.sort((a, b) => (a[1] + a[2] + a[3]) - (b[1] + b[2] + b[3]));
    return playerActionSummaryTeam;
}

/* FETCH FUNCTIONS */

function fetchGametimeReport(game) {
    var fieldGametimeRed = {
        name: '🔴        **RED TEAM STATS**',
        value: '⌛ __**Game Time:**__\n\n',
        inline: true,
    };
    var fieldGametimeBlue = {
        name: '🔵       **BLUE TEAM STATS**',
        value: '⌛ __**Game Time:**__\n\n',
        inline: true,
    };
    var redTeamTimes = game.playerComp[0].map((p) => [p.player, 0]);
    for (let i = 0; i < game.playerComp[0].length; i++) {
        var player = game.playerComp[0][i];
        for (let j = 0; j < player.timeEntry.length; j++) {
            if (player.timeExit.length < j + 1) {
                redTeamTimes[i][1] += game.scores.time - player.timeEntry[j];
            } else {
                redTeamTimes[i][1] += player.timeExit[j] - player.timeEntry[j];
            }
        }
    }
    var blueTeamTimes = game.playerComp[1].map((p) => [p.player, 0]);
    for (let i = 0; i < game.playerComp[1].length; i++) {
        var player = game.playerComp[1][i];
        for (let j = 0; j < player.timeEntry.length; j++) {
            if (player.timeExit.length < j + 1) {
                blueTeamTimes[i][1] += game.scores.time - player.timeEntry[j];
            } else {
                blueTeamTimes[i][1] += player.timeExit[j] - player.timeEntry[j];
            }
        }
    }

    for (let time of redTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeRed.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeRed.value += `\n${blueTeamTimes.length - redTeamTimes.length > 0 ? '\n'.repeat(blueTeamTimes.length - redTeamTimes.length) : ''
        }`;
    fieldGametimeRed.value += '=====================';

    for (let time of blueTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeBlue.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeBlue.value += `\n${redTeamTimes.length - blueTeamTimes.length > 0 ? '\n'.repeat(redTeamTimes.length - blueTeamTimes.length) : ''
        }`;
    fieldGametimeBlue.value += '=====================';

    return [fieldGametimeRed, fieldGametimeBlue];
}

function fetchActionsSummaryReport(game) {
    var fieldReportRed = {
        name: '🔴        **RED TEAM STATS**',
        value: '📊 __**Player Stats:**__\n\n',
        inline: true,
    };
    var fieldReportBlue = {
        name: '🔵       **BLUE TEAM STATS**',
        value: '📊 __**Player Stats:**__\n\n',
        inline: true,
    };
    var goals = [[], []];
    for (let goal of game.goals) {
        goals[goal.team - 1].push([goal.striker, goal.assist]);
    }
    var redActions = actionReportCountTeam(goals, Team.RED);
    if (redActions.length > 0) {
        for (let act of redActions) {
            fieldReportRed.value += `> **${act[0].team != Team.RED ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}\n`;
        }
    }
    var blueActions = actionReportCountTeam(goals, Team.BLUE);
    if (blueActions.length > 0) {
        for (let act of blueActions) {
            fieldReportBlue.value += `> **${act[0].team != Team.BLUE ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}\n`;
        }
    }

    fieldReportRed.value += `\n${blueActions.length - redActions.length > 0 ? '\n'.repeat(blueActions.length - redActions.length) : ''
        }`;
    fieldReportRed.value += '=====================';

    fieldReportBlue.value += `\n${redActions.length - blueActions.length > 0 ? '\n'.repeat(redActions.length - blueActions.length) : ''
        }`;
    fieldReportBlue.value += '=====================';

    return [fieldReportRed, fieldReportBlue];
}

function fetchSummaryEmbed(game) {
    var fetchEndgame = [fetchGametimeReport, fetchActionsSummaryReport];
    var logChannel = gameWebhook;
    var fields = [
        {
            name: '🔴        **RED TEAM STATS**',
            value: '=====================\n\n',
            inline: true,
        },
        {
            name: '🔵       **BLUE TEAM STATS**',
            value: '=====================\n\n',
            inline: true,
        },
    ];
    for (let i = 0; i < fetchEndgame.length; i++) {
        var fieldsReport = fetchEndgame[i](game);
        fields[0].value += fieldsReport[0].value + '\n\n';
        fields[1].value += fieldsReport[1].value + '\n\n';
    }
    fields[0].value = fields[0].value.substring(0, fields[0].value.length - 2);
    fields[1].value = fields[1].value.substring(0, fields[1].value.length - 2);

    var possR = possession[0] / (possession[0] + possession[1]);
    var possB = 1 - possR;
    var possRString = (possR * 100).toFixed(0).toString();
    var possBString = (possB * 100).toFixed(0).toString();
    var zoneR = actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1]);
    var zoneB = 1 - zoneR;
    var zoneRString = (zoneR * 100).toFixed(0).toString();
    var zoneBString = (zoneB * 100).toFixed(0).toString();
    var win = (game.scores.red > game.scores.blue) * 1 + (game.scores.blue > game.scores.red) * 2;
    var objectBodyWebhook = {
        embeds: [
            {
                title: `📝 MATCH REPORT #${getIdReport()}`,
                description:
                    `**${getTimeEmbed(game.scores.time)}** ` +
                    (win == 1 ? '**Red Team** ' : 'Red Team ') + game.scores.red +
                    ' - ' +
                    game.scores.blue + (win == 2 ? ' **Blue Team**' : ' Blue Team') +
                    '\n```c\nPossession: ' + possRString + '% - ' + possBString + '%' +
                    '\nAction Zone: ' + zoneRString + '% - ' + zoneBString + '%\n```\n\n',
                color: 9567999,
                fields: fields,
                footer: {
                    text: `Recording: ${getRecordingName(game)}`,
                },
                timestamp: new Date().toISOString(),
            },
        ],
        username: roomName
    };
    if (logChannel != '') {
        fetch(logChannel, {
            method: 'POST',
            body: JSON.stringify(objectBodyWebhook),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
}

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    authArray[player.id] = [player.auth, player.conn];
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] ➡️ JOIN (${players.length + 1}/${maxPlayers})\n**` +
                    `${player.name}** [${authArray[player.id][0]}] {${authArray[player.id][1]}}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    room.sendAnnouncement(
        `👋 Bem vindo ${player.name} !\nDigite "t" antes de sua mensagem para usar o bate-papo da equipe, "@@" seguido de um nome de jogador para enviar mensagem privada para ele e '!help' para ver os comandos !`,
        player.id,
        welcomeColor,
        'bold',
        HaxNotification.CHAT
    );
    updateTeams();
    updateAdmins();
    if (masterList.findIndex((auth) => auth == player.auth) != -1) {
        room.sendAnnouncement(
            `O dono da sala ${player.name} se conectou a sala !`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(player.id, true);
    } else if (adminList.map((a) => a[0]).findIndex((auth) => auth == player.auth) != -1) {
        room.sendAnnouncement(
            `O sub dono da sala ${player.name} se conectou a sala !`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(player.id, true);
    }
    var sameAuthCheck = players.filter((p) => p.id != player.id && authArray[p.id][0] == player.auth);
    if (sameAuthCheck.length > 0 && !debugMode) {
        var oldPlayerArray = players.filter((p) => p.id != player.id && authArray[p.id][0] == player.auth);
        for (let oldPlayer of oldPlayerArray) {
            ghostKickHandle(oldPlayer, player);
        }
    }
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    handleLineupChangeTeamChange(changedPlayer);
    updateTeams();
    handleActivityPlayerTeamChange(changedPlayer);
};

room.onPlayerLeave = function (player) {
    setTimeout(() => {
        if (!kickFetchVariable) {
            if (roomWebhook != '') {
                var stringContent = `[${getDate()}] ⬅️ LEAVE (${players.length}/${maxPlayers})\n**${player.name}**` +
                    `[${authArray[player.id][0]}] {${authArray[player.id][1]}}`;
                fetch(roomWebhook, {
                    method: 'POST',
                    body: JSON.stringify({
                        content: stringContent,
                        username: roomName,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => res);
            }
        } else kickFetchVariable = false;
    }, 10);
    handleLineupChangeLeave(player);
    updateTeams();
    updateAdmins();
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    kickFetchVariable = true;
    if (roomWebhook != '') {
        var stringContent = `[${getDate()}] ⛔ ${ban ? 'BAN' : 'KICK'} (${players.length}/${maxPlayers})\n` +
            `**${kickedPlayer.name}** [${authArray[kickedPlayer.id][0]}] {${authArray[kickedPlayer.id][1]}} was ${ban ? 'banned' : 'kicked'}` +
            `${byPlayer != null ? ' by **' + byPlayer.name + '** [' + authArray[byPlayer.id][0] + '] {' + authArray[byPlayer.id][1] + '}' : ''}`
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: stringContent,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    if ((ban && ((byPlayer != null &&
        (byPlayer.id == kickedPlayer.id || getRole(byPlayer) < Role.MASTER)) || getRole(kickedPlayer) == Role.MASTER)) || disableBans
    ) {
        room.clearBan(kickedPlayer.id);
        return;
    }
    if (byPlayer != null && getRole(byPlayer) < Role.ADMIN_PERM) {
        room.sendAnnouncement(
            'You are not allowed to kick/ban players !',
            byPlayer.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(byPlayer.id, false);
        return;
    }
    if (ban) banList.push([kickedPlayer.name, kickedPlayer.id]);
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    let msgArray = message.split(/ +/);
    if (!hideClaimMessage || msgArray[0] != '!login') {
        if (roomWebhook != '')
            fetch(roomWebhook, {
                method: 'POST',
                body: JSON.stringify({
                    content: `[${getDate()}] 💬 CHAT\n**${player.name}** : ${message.replace('@', '@ ')}`,
                    username: roomName,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res);
    }
    if (msgArray[0][0] == '!') {
        let command = getCommand(msgArray[0].slice(1).toLowerCase());
        if (command != false && commands[command].roles <= getRole(player)) commands[command].function(player, message);
        else
            room.sendAnnouncement(
                `O comando que você tentou usar, não existe para você, por favor digite '!help' para exibir os comandos para você`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        return false;
    }
    if (msgArray[0].toLowerCase() == 't') {
        teamChat(player, message);
        return false;
    }
    if (msgArray[0].substring(0, 2) === '@@') {
        playerChat(player, message);
        return false;
    }
};

room.onPlayerActivity = function (player) {
    if (gameState !== State.STOP) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
};

room.onPlayerBallKick = function (player) {
    if (playSituation != Situation.GOAL) {
        var ballPosition = room.getBallPosition();
        if (game.touchArray.length == 0 || player.id != game.touchArray[game.touchArray.length - 1].player.id) {
            if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
            lastTeamTouched = player.team;
            game.touchArray.push(
                new BallTouch(
                    player,
                    game.scores.time,
                    getGoalGame(),
                    ballPosition
                )
            );
            lastTouches[0] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 1,
                getGoalGame()
            );
            lastTouches[1] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 2,
                getGoalGame()
            );
        }
    }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    clearTimeout(startTimeout);
    if (byPlayer != null) clearTimeout(stopTimeout);
    game = new Game();
    possession = [0, 0];
    actionZoneHalf = [0, 0];
    gameState = State.PLAY;
    endGameVariable = false;
    goldenGoal = false;
    playSituation = Situation.KICKOFF;
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    calculateStadiumVariables();
};

room.onGameStop = function (byPlayer) {
    clearTimeout(stopTimeout);
    clearTimeout(unpauseTimeout);
    if (byPlayer != null) clearTimeout(startTimeout);
    game.rec = room.stopRecording();
    if (
        !cancelGameVariable && game.playerComp[0].length + game.playerComp[1].length > 0 &&
        (
            (game.scores.timeLimit != 0 &&
                ((game.scores.time >= 0.5 * game.scores.timeLimit &&
                    game.scores.time < 0.75 * game.scores.timeLimit &&
                    game.scores.red != game.scores.blue) ||
                    game.scores.time >= 0.75 * game.scores.timeLimit)
            ) ||
            endGameVariable
        )
    ) {
        fetchSummaryEmbed(game);
        if (fetchRecordingVariable) {
            setTimeout((gameEnd) => { fetchRecording(gameEnd); }, 500, game);
        }
    }
    cancelGameVariable = false;
    gameState = State.STOP;
    playSituation = Situation.STOP;
    updateTeams();
    handleActivityStop();
};

room.onGamePause = function (byPlayer) {
    if (mentionPlayersUnpause && gameState == State.PAUSE) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Jogo pausado por ${byPlayer.name} !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Jogo pausado !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
    clearTimeout(unpauseTimeout);
    gameState = State.PAUSE;
};

room.onGameUnpause = function (byPlayer) {
    unpauseTimeout = setTimeout(() => {
        gameState = State.PLAY;
    }, 2000);
    if (mentionPlayersUnpause) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Jogo despausado by ${byPlayer.name} !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Jogo despausado !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    game.scores = scores;
    playSituation = Situation.GOAL;
    ballSpeed = getBallSpeed();
    var goalString = getGoalString(team);
    room.sendAnnouncement(
        goalString,
        null,
        team == Team.RED ? redColor : blueColor,
        null,
        HaxNotification.CHAT
    );
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] ${goalString}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    if ((scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit)) || goldenGoal) {
        endGame(team);
        goldenGoal = false;
        stopTimeout = setTimeout(() => {
            room.stopGame();
        }, 1000);
    }
};

room.onPositionsReset = function () {
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    playSituation = Situation.KICKOFF;
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
    console.log(`${url}\nmasterPassword : ${masterPassword}`);
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] 🔗 LINK ${url}\nmasterPassword : ${masterPassword}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    updateTeams();
    if (!changedPlayer.admin && getRole(changedPlayer) >= Role.ADMIN_TEMP) {
        room.setPlayerAdmin(changedPlayer.id, true);
        return;
    }
    updateAdmins(byPlayer != null && !changedPlayer.admin && changedPlayer.id == byPlayer.id ? changedPlayer.id : 0);
};

room.onKickRateLimitSet = function (min, rate, burst, byPlayer) {
    if (byPlayer != null) {
        room.sendAnnouncement(
            `It is not allowed to change the kickrate limit. It must stay at "6-0-0".`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setKickRateLimit(6, 0, 0);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    checkStadiumVariable = true;
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getGameStats();
    handleActivity();
};