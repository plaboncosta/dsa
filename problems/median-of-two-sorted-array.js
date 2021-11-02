var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const mn = m + n;
    
    const constraintOne = m >= 0 && m <= 1000;
    const constraintTwo = n >= 0 && n <= 1000;
    const constraintThree = mn >= 1 && mn <= 2000;
    
    if(constraintOne && constraintTwo && constraintThree){
        let i = 0;
        let isConstraintFourPass = true;
        
        for(i; i < m; i++){
            const constraintFour = nums1[i] >= -Math.pow(-10, 6);
            if(!constraintFour) isConstraintFourPass = false;
        }
        
        if (!isConstraintFourPass) return false;
        
        let j = 0;
        let isConstraintFivePass = true;
        
        for(j; j < n; j++){
            const constraintFive = nums2[j] <= Math.pow(10, 6);
            if(!constraintFive) isConstraintFivePass = false;
        }
        
        if (!isConstraintFivePass) return false;
        
        if(isConstraintFourPass && isConstraintFivePass){
            let finalArray = [...nums1, ...nums2];
            finalArray.sort((a, b) => a - b);
            const r = finalArray.length;
            
            if (r % 2 === 0){
                const a = (r / 2) - 1;
                const b = a + 1;
                const c = (finalArray[a] + finalArray[b]) / 2;
                return c;
            } else{
                const d = Math.floor(r / 2);
                return finalArray[d];
            }
        }
    }
};

console.log(findMedianSortedArrays([2], []));   