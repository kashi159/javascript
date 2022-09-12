var trap = function(height) {
    var i=0;
    var j=height.length-1;
    var maxLeft=0;
    var maxRight=0;
    var water=0;
    
    while(i<j)
        {
            if(height[i]<=height[j])
                {
                    maxLeft=Math.max(maxLeft,height[i]);
                    water+=maxLeft-height[i];
                    i++
                }
            else
                {
                    maxRight=Math.max(maxRight,height[j]);
                    water+=maxRight-height[j];
                    j--;
                }
        }
    return water;
};