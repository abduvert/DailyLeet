# the approach is to use the reachable var and it will be updated
# once you get any max number in the array means the higher jump and it will
# be added to the index which tells us which index it can jump to max
# if the index is greater than reachable means the it has not found any new
# max and so it will remain there and return false


def canJump(nums) -> bool:
        reachable = 0
        for index, n in enumerate(nums):
            if index>reachable:
                  return False
            reachable = max(reachable,index+n)
        return True
            
                  
            
print(canJump([3,1,2,0,4,1]))