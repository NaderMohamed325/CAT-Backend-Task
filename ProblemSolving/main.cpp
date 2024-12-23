#include <bits/stdc++.h>
using namespace std;


class Solution {
public:
    static int Challenge(const vector<int> &nums, int k) {
        int n = nums.size();
        int l = 0, r = n - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == k) return mid;
            if (nums[l] < nums[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return -1;
    }
};

int main() {
    Solution sol;
    vector nums = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int k = -2;
    cout << sol.Challenge(nums, k) << endl;
    return 0;
}
