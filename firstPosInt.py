class Solution:
    def countNegativeList(self, nums: List[int]):
        count =0
        for l in nums:
            if l<=0:
                count=count+1
        return count

    def firstMissingPositive(self, nums: List[int]) -> int:
        one_flag= False
        for l in nums:
            if l ==1:
                one_flag = True
            
        if(not one_flag):
            return 1

        maxi = max(nums)
        countNeg = self.countNegativeList(nums)

        if(countNeg!=0):
            if(len(nums)-countNeg==maxi):
                return maxi+1

        notNums= []
        for  i in range(maxi):
            if((i+1) not in nums):
                return i+1

        
        return maxi+1

        

