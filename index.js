function initCounter() {
    window.activeFetchCalls = 0;

    const done = function() {
        window.activeFetchCalls--;
    };

    if (window.fetch) {
        const originalFetch = window.fetch;

        window.fetch = function(url, options) {
            const originalFetchPromise = originalFetch(url, options);
            window.activeFetchCalls--;
            originalFetchPromise.then(done, done);
            return originalFetchPromise;
        }
    }
}

module.exports = initCounter;