
    // charactersを定義する
const characters =[
{name:"炒飯", image: "img/cha-han1.png", position: 1},
{name:"オムライス", image: "img/omurice.png", position: 1},
];
// positionでは最初のマス目を定義する

// イベントを定義する
const events = [
  { name: "仕事が早く終わって準備満タン！２マス進む", move: 2, cell: 3 },
  { name: "買い忘れに気づく。１マス戻る", move: -1, cell: 6 },
  { name: "おいしい食材を見つけた。２マス進む", move: 2, cell: 9 },
  { name: "少し体調が悪いみたいだ。５マス戻る", move: -5, cell: 12 },
  { name: "家族が協力してくれるようだ。２マス進む", move: 2, cell: 18 },
];
// cellどのマスでイベントを発生させるか
new Vue({
  el: "#app",
  data: {
// <!-- htmlの<div id="app">に向けて -->
    playerPosition: 1,
    cpuPosition: 1,
    isPlayerTurn: true,
    isGameOver: false,
    characters: characters,
    // characterというプロパティをもたせる。
    
    cells: Array(25).fill().map((_, index) => index + 1),
    // 長さが25の配列
    dice: "",
    events: events.map(event => event.cell)
    // eventsのマスを目立つように変えた
  },
methods: {
  rollDice(){
    const dice = Math.floor(Math.random() * 6) + 1;
    this.dice = dice;
    this.movePlayer(dice);
    // 目の数だけ動くようにする
    this.isPlayerTurn = !this.isPlayerTurn;
    // trueとfalseを切り替える
  },
  cpuRollDice(){
    const dice = Math.floor(Math.random() * 6) + 1;
    this.dice = dice;
    this.moveCPU(dice);
    this.isPlayerTurn = !this.isPlayerTurn;
  },
  movePlayer(dice){
    const newPosition = Math.min(this.playerPosition + dice, 25);
    // newPositionつまり到着する値が25を超えないように
     const move = setInterval(() => {
      dice > 0 ? this.playerPosition += 1 : this.playerPosition -= 1;
      this.characters[0].position = this.playerPosition;
    // コマが一気にではなく、少しずつ動くようにsetIntervalを使う
      
      // 戻るイベントをするため、ダイスのマイナスも考えておく

      if(this.playerPosition == newPosition){
        setTimeout(() => {
          this.event(this.playerPosition);
        }, 500);
        clearInterval(move);
        // newPositionまで行ったら動きを止まらせる
      }
      if (this.characters[0].position === 25) {
        this.isGameOver = true;
        setTimeout(() => {
          alert("炒飯の勝ち！！");
        }, 500);
      }
  }, 500);
},
moveCPU(dice) {
  const newPosition = Math.min(this.cpuPosition + dice, 25);
  const move = setInterval(() => {
    dice > 0 ? this.cpuPosition += 1 : this.cpuPosition -= 1;
    this.characters[1].position = this.cpuPosition;
    if (this.cpuPosition == newPosition) {
      setTimeout(() => {
        this.event(this.cpuPosition);
      }, 500);
      clearInterval(move);
    }
    if (this.characters[1].position === 25) {
      this.isGameOver = true;
      setTimeout(() => {
        alert("オムライスの勝ち！！");
      }, 500);
    }
}, 500);
},
event(position) {
  for (const event of events) {
    if (position == event.cell) {
      alert(event.name);
      this.isPlayerTurn ? this.moveCPU(event.move) : this.movePlayer(event.move);
    }
  }
}
}
});



    // イベントを定義する
   
//   cell→イベントが発生するマス


        // ダイスの目を表示させる
      
        // イベントマスの色を変える
   
        // 1から6のランダムな整数が入る
       
        // ロールダイスメソッドが呼ばれるたびにダイスプロパティの値も変わる
         // 目の数だけコマを動かす
        // 引数はダイス
        
        // 1から6のランダムな整数が入る
        
        // newPositionつまり到着する値が25を超えないように
  
              // 戻るイベントをするため、ダイスのマイナスも考えておく
         
                // 移動し終わったら
            
        // 少しずつ移動するように
    
    
        // newPositionつまり到着する値が25を超えないように
        
              
            
            // ここを1にするとconst  charactersのところの2つ目が動く！
            // cpuかPlayerかめちゃくちゃ確認する
        
                // キャラクターのポジションとセルで判断する
         