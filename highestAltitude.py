class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        altPoints = [0]
        for i in range(len(gain)):
            if i==0:
                altPoints.append(gain[i])
            else:
                altPoints.append(altPoints[i]+gain[i])

        return max(altPoints)
