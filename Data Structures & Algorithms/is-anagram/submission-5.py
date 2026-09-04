class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if(len(s) != len(t)):
            return False
        
        length = len(s)
        s_hash_map = {}
        t_hash_map = {}

        for i in range(length):
            s_hash_map[s[i]] = s_hash_map.get(s[i], 0) + 1
            t_hash_map[t[i]] = t_hash_map.get(t[i], 0) + 1
        
        return s_hash_map == t_hash_map
        