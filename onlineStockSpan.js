var StockSpanner = function() {
    this.stack=[]
};

StockSpanner.prototype.next = function(price) {
   if(this.stack.length===0)
       {
        this.stack.push([price,1]);
           return 1;
       }
    else
        {
            let span=1;
            while(this.stack.length && this.stack[this.stack.length-1][0]<=price)
                {
                    let item=this.stack.pop();
                    span=span+item[1];
                }
                this.stack.push([price,span]);
                 return span;
        }
};