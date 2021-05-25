const { RESTDataSource } = require("apollo-datasource-rest");
const { performance } = require("perf_hooks");

class RandomUserDataSource extends RESTDataSource {
  async load() {
    var t0 = performance.now();
    // clearing the memoised results only seems the working option.
    // Uncomment the below line clear the cached results. You will see major time difference.
    // this.memoizedResults.clear();

    // The api has cache control no cache header. However, the rest data source still caches it
    // const res = await this.get(`https://randomuser.me/api/`);

    // Even explicity setting cache as 'no-cache' or 'no-store' has no effect
    const res = await this.get(`https://randomuser.me/api/`, undefined, {
      cache: "no-cache",
    });

    var t1 = performance.now();
    console.log("user", "Call to the api took " + (t1 - t0) + " milliseconds.");

    return res;
  }
}

module.exports = {
  RandomUserDataSource,
};
