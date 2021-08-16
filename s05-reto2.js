
function Group () {
  
  let group = [];

  this.from = function(arr){
    this.group = arr;
  }
  
  this.has = function(member){
    result = false;
    for (let i = 0; i<this.group.length; i++) {
      if (member === this.group[i])
        result = true;
    }
    return result;
  }
  
  this.add = function(member){
    if (!this.has(member)) {
      this.group.push(member)
    }
  }

}

var group = new Group();
group.from([1,2,3,4,5]);
group.add(9);
console.log(group);