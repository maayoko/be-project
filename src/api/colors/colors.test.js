import * as colorsApi from "./colors";

describe("colors API", () => {

    test("it should fetch random color", () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
          json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        
        colorsApi.getColor();
                                
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith("http://www.colr.org/json/color/random");
    
        process.nextTick(() => {
          global.fetch.mockClear();
          done();
        });
    })
})