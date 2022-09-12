var trap = function(height) {
    var n=height.length;
    var leftMax=[];
    var rightMax=[];
    var trapWater=0;
    
    for(var i=0;i<n;i++)
        {
            if(i==0)
                {
                    leftMax[0]=height[0];
                    rightMax[n-1]=height[n-1];
                }
            else
                {
                    leftMax[i]=Math.max(height[i],leftMax[i-1]);
                    rightMax[n-1-i]=Math.max(height[n-i-1],rightMax[n-i]);
                }
        }
    for(var i=0;i<n;i++)
        {
            water+=Math.min(leftMax[i],rightMax[i])-height[i];
        }
    return trapWater;
};