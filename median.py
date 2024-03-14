def findMedianSortedArrays(nums1, nums2) -> float:
        nums1.extend(nums2)
        nums1 = sorted(nums1)
        print(nums1)
        length = len(nums1)

        if(length%2==0):
                right = length//2
                left = right - 1        
                return (nums1[right]+nums1[left])/2
        
        else:
                return (nums1[length//2])
            



#testing
print(findMedianSortedArrays([3],[-2,-1]))