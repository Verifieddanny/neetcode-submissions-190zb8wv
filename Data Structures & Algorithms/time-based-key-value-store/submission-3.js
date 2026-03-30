class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const list = this.keyStore.get(key);
        if (!list) {
            return "";
        }

        
        let l = 0;
        let r = list.length - 1;



        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (list[m][1] < timestamp) {
                l = m + 1;
            } else if (list[m][1] > timestamp) {
                r = m - 1;
            } else {
                return list[m][0]
            }
        }

        return r >= 0 ? list[r][0] : ""
    }
}
