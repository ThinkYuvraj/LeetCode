// Approach used to solve using brute force 
//   first window then watching element
// second window then watching element 
// then third,  checking the count of the num occured during the windows 
// count ==1 search and find for max.  

class Solution {

    public int largestInteger(int[] nums, int k) {
        int n  =nums.length ; 

        int[] count =  new int[51]; 

        for (int i =0 ; i <=  n-k ;  i++){ 
            boolean[] seen =new boolean[51]; 

            for(int j =i;  j< i+ k  ;j++){ 
                int num =nums[j]; 

                if(!seen[num]){ 
                    count[num]++; 
                    seen[num] = true;  
                }
            }
        }
        int answer = -1; 
        for(int num = 0;  num <=  50;  num++){ 
            if(count[num]==1  ){ 
                answer =  num;; 
            }
        }
return answer;  
    }
}