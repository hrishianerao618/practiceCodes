class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s[::-1].split()[0])
