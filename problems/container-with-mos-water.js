const maxArea = function (height) {
    // const n = height.length;
    // let res = 0;

    // if (n >= 2 && n <= Math.pow(10, 5)) {
    //     for (let i = 0; i < n; i++) {
    //         if (height[i] >= 0 && height[i] <= Math.pow(10, 4)) {
    //             for (let j = i + 1; j < n; j++) {
    //                 const area = (j - i) * Math.min(height[i], height[j]);
    //                 res = Math.max(res, area);
    //             }
    //         }
    //     }
    // }

    // return res;

    const n = height.length;
    let l = 0;
    let res = 0;
    let r = n - 1;

    if (n >= 2 && n <= Math.pow(10, 5)) {
        while (l < r) {
            const constraintOne = height[l] >= 0 && height[l] <= Math.pow(10, 4);
            const constraintTwo = height[r] >= 0 && height[r] <= Math.pow(10, 4);

            if (constraintOne && constraintTwo) {
                const area = (r - l) * Math.min(height[l], height[r]);
                console.log(area, 'area');
                res = Math.max(res, area);

                if (height[l] < height[r]) l += 1;
                else r -= 1;
            }
        }

        return res;
    }
};

console.log(maxArea([2,3,4,5,18,17,6]));


