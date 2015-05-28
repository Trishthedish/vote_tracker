var CatPic = function(catImgName, winner, looser) {
    this.catImgName = catImgName;
    this.winner = winner;
    this.looser = looser;
    this.vote = 0;
};

// when you put this in ajax you will not need 9-12
var cat = [];
for(i = 1; i < 15; i++) {
  cat.push(new CatPic("cat" + i + ".jpg",0,0));
}

function Tracker(objArray) {
this.objArray = objArray;
}
Tracker.prototype.pickCat = function() {
var indx = function(ary){return Math.floor(Math.random() * ary.length + 1);
};
var leftOpp = this.objArray[indx(this.objArray)];
  do {
    rightOpp = this.objArray[indx(this.objArray)];
  } while(leftOpp === rightOpp);
    var render = function(leftOpp, rightOpp) {
      console.log(leftOpp.catImgName);
      console.log(rightOpp.catImgName);
document.getElementById('leftOpp').innerHTML = "<img src=./images/catPics/" +
rightOpp.catImgName + ">";
document.getElementById('rightOpp').innerHTML = "<img src=./images/catPics/" +
leftOpp.catImgName + ">";
  };
  render(leftOpp,rightOpp);
};


var tracker = new Tracker(cat);
tracker.pickCat();



