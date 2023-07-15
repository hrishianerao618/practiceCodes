class Solution {
    public int rob(int[] nums) {  
        int first = 0;
        int second = nums[0];
        //List<Integer> arr = Arrays.asList(nums);
        int size = nums.length;
        
        int max = 0;
        List<Integer> sumList = new ArrayList<>();
        sumList.add(first);
        sumList.add(second);

        for(int i=1;i<size;i++){
            int val = nums[i];
            sumList.add(Math.max(sumList.get(i), sumList.get(i-1)+val));
        }

       for(Integer s: sumList){
           System.out.print(s+",");
       }

        return Collections.max(sumList);
        
    }
}
